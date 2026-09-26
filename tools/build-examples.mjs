// Generates the example exports from the exact core code embedded in
// mirror-cell-designer.html, and doubles as a regression test.
//
//   cd tools && npm install
//   node build-examples.mjs                 # writes ../examples/*
//   node build-examples.mjs --sweep         # checks every preset/retention/fan combo
//   node build-examples.mjs --mirror 8 --tube 10 --retention clips --fan 80 --rear spokes --out ../my-cell
//
// Exit status is non-zero if any design check or interference check fails.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import opencascade from 'replicad-opencascadejs';
import * as R from 'replicad';
import { zipSync } from 'fflate';

const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const html = fs.readFileSync(path.join(here, '..', 'mirror-cell-designer.html'), 'utf8');
const code = html.slice(html.indexOf('// CORE-BEGIN'), html.indexOf('// CORE-END'));
const Core = new Function(code + '\nreturn MirrorCellCore;')();

const wasm = require.resolve('replicad-opencascadejs/wasm');
R.setOC(await opencascade({ locateFile: () => wasm }));

// OpenCascade's STEP writer prints progress to stdout; keep the console readable.
const quiet = (fn) => {
  const w = process.stdout.write.bind(process.stdout);
  process.stdout.write = (s, ...a) => (/Step File|WorkSession|\*{5}|^\s*$/.test(String(s)) ? true : w(s, ...a));
  try { return fn(); } finally { process.stdout.write = w; }
};

function evaluate(params) {
  const d = Core.computeDesign(params);
  const cad = Core.buildCAD(R, d);
  const fits = cad.parts.map(p => {
    const m = Core.meshShape(p.print);
    return { id: p.id, name: p.name, count: p.count, fit: Core.bedFit(m.vertices, d.p.bed), volume: R.measureVolume(p.print) };
  });
  const interference = Core.interference(R, d, cad);
  const failed = d.checks.filter(c => !c.pass).length + interference.filter(r => !r.pass).length;
  return { d, cad, fits, interference, failed };
}

async function writeCell(params, outDir) {
  const { d, cad, fits, interference, failed } = evaluate(params);
  fs.mkdirSync(outDir, { recursive: true });
  const base = path.basename(outDir);
  const fitById = Object.fromEntries(fits.map(f => [f.id, f.fit]));
  const items = cad.parts.map(p => ({ name: p.name, mesh: Core.weldMesh(Core.meshShape(p.print, true)), fit: fitById[p.id], count: p.count }));
  fs.writeFileSync(path.join(outDir, `${base}.3mf`), Core.make3MF(zipSync, items, { bed: d.p.bed, title: base }));
  const asm = [];
  for (const p of cad.parts) p.asm.forEach((s, i) => asm.push({ shape: s.clone(), name: p.asm.length > 1 ? `${p.name} ${i + 1}` : p.name, color: p.color }));
  const stepAsm = quiet(() => R.exportSTEP(asm));
  fs.writeFileSync(path.join(outDir, `${base}-assembly.step`), Buffer.from(await stepAsm.arrayBuffer()));
  for (const p of cad.parts) {
    const b = quiet(() => R.exportSTEP([{ shape: p.print.clone(), name: p.name, color: p.color }]));
    fs.writeFileSync(path.join(outDir, `${base}-${p.id}-print.step`), Buffer.from(await b.arrayBuffer()));
  }
  fs.writeFileSync(path.join(outDir, `${base}-drawing.svg`), '<?xml version="1.0" encoding="UTF-8"?>\n' + Core.drawSheet(d));
  fs.writeFileSync(path.join(outDir, 'REPORT.md'), Core.report(d, { interference, fits }));
  fs.writeFileSync(path.join(outDir, `${base}-bom.csv`), Core.bomCSV(d, { fits }));
  console.log(`${outDir}: ${d.checks.length} checks, ${interference.length} interference pairs, ${failed ? failed + ' FAILED' : 'all pass'}; ` +
    fits.map(f => `${f.name} ${Core.round(f.fit.w, 1)}×${Core.round(f.fit.h, 1)}${f.fit.fits ? '' : ' (OVERSIZE)'}`).join(', '));
  return failed;
}

const args = process.argv.slice(2);
const opt = (k, dflt) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : dflt; };
let failed = 0;

if (args.includes('--sweep')) {
  for (const rearStyle of ['ring', 'spokes']) for (const mirror of Object.keys(Core.MIRRORS)) for (const retention of ['rtv', 'clips']) for (const fan of [0, 40, 60, 80, 92, 120]) {
    const p = { ...Core.defaultParams(mirror), retention, fan, rearStyle };
    const d = Core.computeDesign(p);
    if (d.errors.length) { console.log(`${rearStyle} ${mirror}" ${retention} fan ${fan}: rejected — ${d.errors[0]}`); continue; }
    const r = evaluate(p);
    failed += r.failed;
    console.log(`${rearStyle} ${mirror}" ${retention} fan ${fan}: ${r.failed ? r.failed + ' FAILED' : 'pass'}`);
  }
} else if (opt('mirror')) {
  const mirror = opt('mirror');
  const p = { ...Core.defaultParams(mirror) };
  if (opt('tube')) p.tubeID = parseFloat(opt('tube')) * Core.IN;
  if (opt('thick')) p.mirrorThick = parseFloat(opt('thick')) * Core.IN;
  if (opt('retention')) p.retention = opt('retention');
  if (opt('fan')) p.fan = +opt('fan');
  if (opt('bed')) p.bed = +opt('bed');
  if (opt('rear')) p.rearStyle = opt('rear');
  failed += await writeCell(p, path.resolve(opt('out', `cell-${mirror}in`)));
} else {
  const ex = path.join(here, '..', 'examples');
  failed += await writeCell({ ...Core.defaultParams('6'), tubeID: 8 * Core.IN, retention: 'rtv', fan: 60 }, path.join(ex, '6in-mirror-8in-tube'));
  failed += await writeCell({ ...Core.defaultParams('8'), tubeID: 10 * Core.IN, retention: 'clips', fan: 80 }, path.join(ex, '8in-mirror-10in-tube'));
  failed += await writeCell({ ...Core.defaultParams('8'), tubeID: 10 * Core.IN, retention: 'clips', fan: 80, rearStyle: 'spokes' }, path.join(ex, '8in-mirror-10in-tube-spokes'));
}
process.exit(failed ? 1 : 0);
