# Mirror Cell Designer

A browser app that designs 3D-printable push-pull mirror cells for Newtonian telescopes. It exports **STEP** and **3MF**.

- **App:** [`mirror-cell-designer.html`](mirror-cell-designer.html). It is a single self-contained file. Open it straight from disk (`file://`). There is no build step. The first load needs an internet connection, because the CAD kernel (~23 MB), three.js and fflate come from jsDelivr. After that the browser caches them.
- **Examples:** [`examples/`](examples). A 6" mirror in an 8" ID tube, and an 8" mirror in a 10" ID tube.
- **Tools (optional):** [`tools/build-examples.mjs`](tools/build-examples.mjs) regenerates the examples and runs a regression sweep. It extracts its geometry code from the HTML file, so the examples always match the app.

## Using the app

1. Pick the **mirror diameter**: 4.25", 6", 8" or 10". Each preset fills in a typical mirror thickness, tube ID and fan. All of these can be edited.
2. Enter the **mirror thickness** and the **tube inside diameter**. The in/mm toggle only changes how these inputs display. Internally everything is in mm.
3. Choose **retention**: RTV glue or clips.
4. Choose a **cooling fan**, or none. Fans too large for the mirror are greyed out.
5. Set your **printer bed** size. The default is 235 mm (e.g. an Anycubic Kobra S1); enter 220 for the brief's standard bed.
   Choose the **rear plate** style: *Ring* (default) or *3 spokes*, which prints smaller.
6. Check the tabs:
   - **3D preview:** the assembly with the mirror ghosted. There are toggles for hardware, the tube and a half-section, an explode slider, and a *Print layout* view. That view shows each part in its print orientation on a bed square, and the square turns red if the part doesn't fit.
   - **2D layout:** a dimensioned sheet with a rear view of the rear plate, a front view of the mirror plate, a section through a push-pull pair, and the clip. Hole letters (A–K) refer to the hole schedule.
   - **Checks:** every wall-thickness, thread-engagement, bolt-travel and clearance check, the CAD interference matrix, and the bed fit.
   - **Dimensions & BOM:** key dimensions, the hole schedule (sizes, depths, radii, angles, install direction) and the complete bill of materials (see below).
   - **Design decisions:** the choices listed below.
7. **Export:** a 3MF with all parts ready to print, a STEP of the assembly (parts in place, named and coloured), per-part 3MF/STEP in print orientation, the **bill of materials as CSV**, the drawing as SVG, and a Markdown report.

The design regenerates about 0.25 s after each change. Settings are kept in the URL hash, so a link reproduces a design. They are also kept in `localStorage`.

## How the cell works

```
 tube end (z=0)                                      toward the sky (+z)
   │ skirt │ rear plate │  gap  │ mirror plate │ pads │  mirror  │ clip
   ┃       ┃████████████┃       ┃██████████████┃  ▐▌  ┃▒▒▒▒▒▒▒▒▒▒┃
   ┃       ┃   push ▶───────────┫ (bears)      ┃  ▐▌  ┃          ┃
   ┃       ┃ pull ◀═════════════════(insert in pad column)       ┃
```

- The **rear tube plate** is a slip fit inside the tube: its diameter is the tube ID minus a 0.6 mm diametral clearance. A skirt runs rearward and sits flush with the tube end. #8-32 screws go through the tube wall into radial heat-set inserts in the skirt: 3 screws for tubes under 200 mm ID, 6 above. Three vent windows keep the plate open for airflow.
- The **mirror plate** is a round core with three tapered arms. The arms carry the lateral posts. The mirror sits on three **pad columns** on a circle of **0.65 × mirror diameter**, which is close to the optimum for 3-point support.
- There are **three push-pull pairs** at 120°. Each **pull bolt** passes through a clearance hole in the rear plate and threads into a heat-set insert at the bottom of a pad column. Each **push bolt** threads through a heat-set insert in a boss on the rear plate and bears on the back of the mirror plate. A jam nut locks it. Both heads are reachable from behind the tube.
- **Bolts:** #10-24 for 4.25" and 6" mirrors, 1/4-20 for 8" and 10". Default travel at each pair is ±1 mm for 4.25", ±1.5 mm for 6", ±2 mm for 8" and ±2.5 mm for 10". This is sized so the worst case (one pair fully out, two fully in) tilts the mirror about 2.5°, several times what collimation needs. You can change it under *Advanced*. If you choose more travel, the pull-bolt clearance holes are enlarged automatically so the bolts don't bind as they tilt. The **plate gap is chosen to fit the bolts**: the pull bolt is the shortest standard length that fully engages its insert at maximum gap, and the gap is then set so it never bottoms out at minimum gap. The BOM lists every bolt length.
- **RTV:** each pad has a 2 mm-deep cup that sets the silicone thickness, and three lateral stops sit 0.75 mm from the mirror edge. **Clips:** the pads are flat. Three posts carry 3 mm clips that overlap the mirror face by 3 mm and sit 0.8 mm above it, so they never pinch the glass.
- **Fan (optional):** mounted on the back of the rear plate with heat-set inserts and blowing into the tube. Air goes through the plate's central opening and a matching hole in the mirror plate. Screws are #4-40 for 40 mm fans and #6-32 for larger ones. The app assumes 4010, 6015, 8025, 9225 and 12025 frames.

## Strength

Plate thicknesses, lateral-post depth, arm ribs and RTV pad size are **sized from hand calculations**, not fixed. Each calculation appears as a row in the *Strength* table on the Checks tab and in `REPORT.md`, with its value, allowable, percentage used and formula.

| Load case | Checks |
|---|---|
| **Tube horizontal:** the whole mirror weight × 2 bears sideways on one post, at the mirror's mid-thickness | Post-root bending **across the layers** (posts print upright); arm bending at the post (T-section with an optional rib); RTV shear; pull-bolt bending across the plate gap |
| **Tube vertical:** locked preload plus each pair's share of the mirror-side weight × 2 | Pull- and push-insert pull-out; push-bolt tip and washer bearing; local plate bending where the pull and push bolts of a pair load the plate in opposite directions (mirror plate and rear plate); rear-plate spokes carrying the load out to the skirt; tube-screw bearing in the skirt |
| **Tube pointing down:** mirror weight × 2 on the clips or RTV | Clip bending and clip-screw insert pull-out, or RTV tension |

**What gets sized:**

| Part | Rule |
|---|---|
| Rear plate | max(rule of thumb, preload bending, spoke bending) |
| Mirror plate | max(rule of thumb, preload bending); thickened further only if an arm rib, capped 2 mm below the mirror, can't carry the lateral load |
| Lateral posts | deep enough for bending across the layers |
| RTV pads | large enough in area for the RTV to carry the load in shear |

The 8" example is typical: rear plate 8 mm (rule), mirror plate 7 mm (preload), a 6 × 4 mm arm rib, and 11 mm posts. At a 100 N lock preload, insert pull-out is about 24% of its allowable.

**Assumptions** are in the `STRENGTH` table at the top of the core in the HTML; edit them if you have better data.

| Assumption | Value |
|---|---|
| Glass density | 2.5 g/cm³ (plate glass; borosilicate is lighter, so this is conservative) |
| Handling factor on gravity loads | × 2 |
| Allowable along the layers | 10 MPa |
| Allowable across the layers | 5 MPa |
| Allowable bearing | 15 MPa |
| Allowable RTV shear/tension | 0.2 MPa |
| Section efficiency (walls, skins, 40% infill) | 0.8 |
| Heat-set insert pull-out, sustained | #4-40 150 N, #6-32 250 N, #8-32 300 N, #10-24 400 N, 1/4-20 500 N |
| Push-pull lock preload (Advanced setting) | 100 N per bolt ≈ 0.1–0.13 N·m, i.e. finger-snug; the BOM gives the torque for each bolt |

The plastic allowables are set at roughly 1/4–1/5 of typical short-term strengths for printed PETG and ASA, to cover creep, layer adhesion and print variability. The insert values are deliberately low; short-term tests of similar inserts usually fail well above them.

**Limits:** these are simple beam and plate formulas, not FEA. The pair-bending model (moment ≈ F·s/2 over a width ≈ s) is the crudest of them. They catch parts that are badly undersized, but they don't prove a safety margin. Stiffness is not checked, and neither is how far collimation drifts from creep; the low sustained allowables are the only guard against creep.

## Bill of materials

The BOM covers everything needed to build one cell. It appears on the *Dimensions & BOM* tab and in the report. It downloads as CSV from the **BOM .csv** button in the sidebar or the **Download CSV** button above the table. The rows are:

| Ref | Category | Contents |
|---|---|---|
| P1… | Printed part | Rear tube plate, mirror plate, clips. Each gives material, envelope, print settings and, once the solids are built, the bed footprint (flagged if oversize) and solid volume. |
| S1… | Screw | Pull and push bolts, tube screws, clip screws and fan screws, each with thread size and standard inch length. |
| N1… | Nut / washer | Push-bolt jam nuts (with across-flats size) and SAE washers under the pull-bolt heads. |
| I1… | Heat-set insert | Every insert, with length and the hole it expects. Identical inserts are merged; for example, #6-32 inserts used by both the clips and the fan become one line of 7. |
| F1 | Fan | Size, frame and hole spacing, when a fan is selected. |
| C1… | Consumable | Neutral-cure RTV (RTV mode only) and filament. |
| T1… | Tool | Hex keys and wrench sized for the specified hardware, the drill for the tube holes, and a soldering iron with insert tips. |

The CSV columns are `Ref, Category, Qty, Description, Size / spec, Length, Used in, Notes, Configuration`. The file is UTF-8 with a byte-order mark, so Excel and LibreOffice display Ø and inch marks correctly. The *Configuration* column repeats the design summary (mirror, tube, retention, fan, bolt size) on every row, so rows stay identifiable after you paste them into a larger parts list.

## Design decisions

These are the "decide and state" items from the brief. The app shows the same list on its *Design decisions* tab.

| Topic | Decision |
|---|---|
| **CAD kernel** | **replicad 1.1.0**: OpenCascade compiled to WebAssembly, loaded from jsDelivr. A true B-rep kernel is needed to write real STEP. JSCAD is mesh-only CSG and cannot export STEP. 3MF is written by a small built-in writer from the kernel's triangulation. Vertices are welded, so the meshes are watertight. The zip uses `fflate`. |
| **3MF print defaults** | **5 walls/perimeters, 40 % gyroid infill, 5 top and 5 bottom layers, 0.2 mm layers, supports off.** Five 0.4 mm walls make the ≥ 2 mm of material around every heat-set insert solid perimeter rather than infill. 40 % gyroid keeps the plates stiff. The values are written as per-object overrides that PrusaSlicer reads (`Metadata/Slic3r_PE_model.config`). OrcaSlicer/Bambu equivalents are also written (`Metadata/model_settings.config`), on a best-effort basis. The values are repeated in the model description so you can set them by hand in any slicer. Recommended material: **PETG or ASA**. PLA creeps under constant bolt load and softens in a hot car. |
| **Oversize parts** | Every part's footprint is measured at its best rotation about Z. If it exceeds the bed (default **235 × 235 mm**), a warning names the part, gives its size and states the bed size needed. **The part is still exported whole and full size. The app never splits or scales parts**, because a seam through a collimation plate costs stiffness and flatness. Your options are the 3-spoke rear plate, a larger bed, or cutting the part yourself with your slicer's *Cut* tool and dowel connectors. In practice, on a 235 mm bed: every part for 4.25", 6" and 8" mirrors fits, as long as an 8" mirror uses the 3-spoke rear plate in tubes over about 9.25" ID. For example, a 10" tube's ring plate is 253 mm but its 3-spoke plate is about 223 mm. An 8" mirror needs at least about 9.4" tube ID for post and tilt clearance, and the check reports the minimum. A 10" mirror's mirror plate is about 250 mm whatever the rear plate style, because its lateral posts must sit outside a 254 mm mirror. |
| **Rear plate style** | *Ring* (default): a full plate with a skirt around the tube wall, 3 or 6 tube screws and vent windows. *3 spokes* (option): a hub carrying the push-pull pairs and fan, with one 24 mm spoke per pair centred between its pull and push bolts, ending in a pad at the tube wall with one radial #8-32 screw (3 in total). The spoke style is about 13% smaller across (the three tips at 120° fit a smaller square than a circle does) and uses about 40% less plastic. Three pads centre the plate in the tube and tolerate an out-of-round tube better than a ring. The spokes are covered by the same strength, wall and interference checks, with fillets where each spoke meets the hub (6 mm, in plane) and where it meets its tip pad (3 mm). |
| **Print orientation, no supports** | Rear plate: front face down, so the skirt and bosses grow upward. The radial tube-screw holes are **teardrops** pointing up. Mirror plate: rear face down, with pads and posts growing upward. Blind insert holes open onto the bed, and their small (< 8 mm) roofs bridge. Clips print flat. |
| **Fasteners** | Imperial only. Push-pull #10-24 or 1/4-20, tube screws #8-32, clips #6-32, fans #4-40 or #6-32. Inserts are tapered brass heat-set inserts for plastics. The dimensions are in the `FASTENERS` table at the top of the core in the HTML. Edit them there if your inserts differ. |
| **Fillets** | Inside corners are filleted to reduce stress concentration. **Rear plate:** 3 mm where the plate web meets the skirt, 1.5 mm at each push-boss root, 4 mm vent-window corners. **Mirror plate:** 2 mm where each pad column meets the plate, 3 mm along the inner face of each lateral post (the face in tension when the tube is horizontal; capped so it stays ≥ 2 mm below the mirror), and 2 mm along both sides of each arm rib. All face up when printed, so none need supports. The strength formulas assume these fillets remove the sharp-corner stress raisers; they add no factor for them. The fan is rotated automatically to the angle that best clears the push-pull hardware. |
| **Strength** | Thicknesses, lateral-post depth, arm ribs and RTV pad size are sized by hand calculations against sustained allowables for printed PETG/ASA (see *Strength*). Lock the push-pull pairs finger-snug: about 100 N per bolt, the torque listed in the BOM. |
| **Wall rules** | The generator aims for 3 mm around inserts, measured from the insert's **outside** diameter, not the hole. Every insert and through-hole must have **≥ 2 mm** to the nearest hole, cut-out or edge. Blind holes keep ≥ 2 mm of cap. Cut-outs keep ≥ 4 mm of web to bolt features. |

### Assumed hardware (edit `FASTENERS` in the HTML if yours differ)

| Size | Clearance hole | Insert hole | Insert OD | Insert length |
|---|---|---|---|---|
| #4-40 | 3.4 | 3.2 | 3.8 | 3.8 |
| #6-32 | 4.0 | 4.0 | 4.6 | 4.8 |
| #8-32 | 4.7 | 4.7 | 5.3 | 5.6 |
| #10-24 | 5.4 | 5.6 | 6.3 | 6.4 |
| 1/4-20 | 7.0 | 7.6 | 8.4 | 8.0 |

Clearance holes are a "normal fit" plus about 0.2 mm for printing. Insert sizes vary by brand, so check the hole diameter your inserts call for.

## Verification (definition of done)

- **All dimensions specified:** the 2D sheet, the hole schedule (diameter, depth, radius, angle, install face), the key-dimension table and the BOM (CSV) with bolt lengths are all generated from the same numbers as the solids. Each example has a `REPORT.md` with the full set.
- **Wall thickness:** analytic 2D checks cover every insert and through-hole against every other hole, cut-out, boss edge and plate edge. They also cover blind-hole caps, insert-fits-in-boss, skirt thickness, clip-hole walls and radial-insert edge distance. The 6" example has 41 checks and the 8" clip example has 49, and all pass.
- **No interference:** the app builds every body at its installed position: rear plate, mirror plate, clips, mirror, tube (with screw holes), fan, and every bolt, washer and jam nut. It then runs an OpenCascade boolean intersection on **every pair**. The mirror side (mirror plate, clips, mirror) is also moved into all **8 extreme collimation poses** (each pair at +travel or −travel) and intersected with the tube and the rear plate. The pose model pivots about the pull-bolt holes in the rear plate. The same 8 poses drive analytic checks: radial clearance to the tube (≥ 1 mm), axial gap to the rear plate and the fan-screw tips, pull-bolt tilt room in its clearance hole, and slide of the push-bolt contact point. Touching faces count as zero overlap. Heat-set inserts are left out on purpose, since they are meant to melt into their holes. Pull-bolt engagement and bottoming, push-bolt length and radial clearance to the tube at full tilt are checked analytically. A negative control (the mirror lowered 0.5 mm into the pads, a push bolt 1 mm too long) was confirmed to be caught.
- **Downloads:** the STEP and 3MF buttons produce files in the browser. This was tested in headless Chrome loading the page from `file://`. The exported STEP re-imports into OpenCascade with the exact expected volumes. OrcaSlicer's `--info` reports every 3MF object as manifold, with volumes matching the CAD.
- **Strength:** 13–14 hand-calculation checks per configuration, covering three load cases. All pass for every preset, because the sized dimensions are chosen to satisfy them.
- **Regression sweep:** `node tools/build-examples.mjs --sweep` builds every preset × retention × fan combination and runs all checks plus the CAD interference test. Every buildable combination passes. Fans too big for a given mirror are rejected with a clear message: for example, anything over 40 mm on a 4.25" mirror, or over 60 mm on a 6".

## Regenerating the examples

```sh
cd tools
npm install
node build-examples.mjs                   # rewrites ../examples/*
node build-examples.mjs --sweep           # regression over all presets
node build-examples.mjs --mirror 8 --tube 9.25 --retention rtv --fan 60 --out ../my-cell
```

Each example folder contains:

| File | What it is |
|---|---|
| `*.3mf` | All printed parts, oriented and placed for printing, with the print settings embedded |
| `*-assembly.step` | Printed parts in their assembled positions (z = 0 at the tube end, +Z toward the sky) |
| `*-<part>-print.step` | Each part alone, in print orientation |
| `*-drawing.svg` | The dimensioned 2D layout |
| `*-bom.csv` | Complete bill of materials: printed parts, hardware, inserts, fan, consumables, tools |
| `REPORT.md` | Key dimensions, hole schedule, BOM, every check, interference matrix and bed fit |

| Example | Configuration | Bed fit (235 mm) |
|---|---|---|
| `6in-mirror-8in-tube` | 6" × 25.4 mm mirror, 8.000" ID, RTV, 60 mm fan, ring rear plate | all parts fit |
| `8in-mirror-10in-tube` | 8" × 32 mm mirror, 10.000" ID, clips, 80 mm fan, ring rear plate | **rear plate 253.4 mm — oversize** (needs ≥ 254 mm bed; see policy) |
| `8in-mirror-10in-tube-spokes` | same, with the 3-spoke rear plate | all parts fit (rear plate about 223 mm) |

## Assembly notes

1. Press the heat-set inserts in with the part cold and fully cured:
   - **Rear plate:** push-bolt inserts from the rear face, fan inserts from the rear face, and tube-screw inserts radially from outside the skirt.
   - **Mirror plate:** pull-bolt inserts from the rear face, and clip inserts from the tops of the posts.
2. Fit the three push bolts with their jam nuts into the rear plate, backed out so they protrude only a little.
3. Put the pull bolts, with washers, through the rear plate and thread them into the mirror plate until the plates sit at roughly the nominal gap shown in the report.
4. **RTV:** put a blob of neutral-cure silicone in each pad cup. Lower the mirror onto the pad rims, which set the 2 mm layer. Leave it face-up for 24 h. **Clips:** place the mirror on the pads and screw the clips on. They should not touch the glass.
5. Slide the cell into the tube so the skirt is flush with the tube end. Drill through the tube at the skirt inserts (the angles and distance from the tube end are in the hole schedule) and fit the #8-32 screws.
6. **Collimate:** loosen the push bolts, adjust with the pull bolts, then run the push bolts down and lock the jam nuts.

## Limitations

- Insert dimensions are generic. Confirm them against the inserts you buy.
- The OrcaSlicer/Bambu per-object settings in the 3MF are best effort. OrcaSlicer loads the files and reports them manifold, but I did not confirm that it applies the embedded wall and infill values. PrusaSlicer's per-object format is the primary one. Cura ignores both, so set the values by hand there.
- The app runs the CAD kernel on the main thread, so the page pauses for about 1–3 s while solids rebuild.
