# Mirror cell: 8" mirror in 254 mm (10") ID tube

Retention: **clips** · Fan: **80 mm** · Push-pull: **3 × 1/4-20 pairs** · Bed: 235 mm

## Key dimensions (mm)
| Group | Dimension | Value |
|---|---|---|
| Rear plate | Style | full ring (plate + skirt) |
| Rear plate | Outside diameter (tube ID − fit) | 253.4 mm (9.976") |
| Rear plate | Skirt inside diameter | 234.6 mm (9.236") |
| Rear plate | Overall height (skirt + plate) | 21.5 mm (0.846") |
| Rear plate | Plate thickness (sized) | 8 mm = max(rule 8, preload 7, spokes 4) |
| Rear plate | Push boss Ø × height | 14.4 × 12 mm |
| Push-pull | Bolt size | 1/4-20 |
| Push-pull | Pair circle diameter | 132.1 mm (5.2") |
| Push-pull | Pull-to-push spacing (chord) | 17.5 mm (15.23°) |
| Push-pull | Nominal plate gap | 12.05 mm (±2 mm travel) |
| Push-pull | Max tilt at full travel (one pair out, two in) | 2.31° |
| Mirror plate | Inside fillets: pad roots / post inner faces / rib sides | 2 / 3 / 2 mm |
| Rear plate | Inside fillets: skirt joint / boss roots / window corners | 3 / 1.5 / 4 mm |
| Mirror plate | Core diameter | 156.5 mm (6.161") |
| Mirror plate | Span across posts | 226.7 mm (8.925") |
| Mirror plate | Base thickness (sized) | 7 mm — governed by push-pull preload (rule 6, preload 7) |
| Mirror plate | Arm rib (width × height) | 6 × 4 mm |
| Mirror plate | Lateral post depth (sized) | 11 mm (minimum 11) |
| Loads | Mirror mass (glass at 2.5 g/cm³) | 2.59 kg |
| Loads | Push-pull lock preload / torque | 100 N per bolt ≈ 0.13 N·m (finger-snug) |
| Mirror plate | Pad Ø × height above base | 14.4 × 9 mm |
| Mirror plate | Post top above mirror-plate rear face | 48.8 mm |
| Mirror | Diameter / thickness | 203.2 / 32 mm |
| Mirror | Mirror face above tube end | 81.6 mm (3.211") |
| Assembly | Overall cell height | 85.4 mm (3.36") |

## Hole schedule
| Part | Label | Qty | Feature | Size | Location | Install |
|---|---|---|---|---|---|---|
| Rear plate | A | 3 | 1/4-20 heat-set insert (push bolt) | Ø7.6 thru boss (12 tall) | R66.04 @ 105.2°, 225.2°, 345.2° | from rear face |
| Rear plate | B | 3 | 1/4-20 clearance (pull bolt) | Ø7 thru | R66.04 @ 90°, 210°, 330° |  |
| Rear plate | C | 6 | 1/4-20 heat-set insert (tube screw), radial teardrop | Ø7.6 thru skirt (9.4) | 30°, 90°, 150°, 210°, 270°, 330°; 6.75 from tube end | from outside of skirt |
| Rear plate | D | 4 | #6 thread-forming screw pilot (fan) | Ø2.8 thru | 71.5 × 71.5 square, rotated 22° | screw in from rear face |
| Rear plate | E | 1 | Fan opening | Ø76 thru | centre |  |
| Rear plate | F | 3 | Vent window (annular sector) | R59.6–R113.3, 83.3° wide | 116.3°–199.6°, 236.3°–319.6°, 356.3°–79.6° |  |
| Mirror plate | G | 3 | 1/4-20 heat-set insert (pull bolt), blind | Ø7.6 × 13.5 deep | R66.04 @ 90°, 210°, 330° | from rear face (bed side) |
| Mirror plate | H | 3 | #6-32 heat-set insert (clip), blind | Ø4 × 7.3 deep | R107.85 @ 90°, 210°, 330° | from top of post |
| Mirror plate | I | 1 | Central vent | Ø76 thru | centre |  |
| Mirror plate | J | 3 | Vent hole | Ø32 thru | R58.12 @ 157.6°, 277.6°, 37.6° |  |
| Clip | K | 3 | #6-32 clearance | Ø4 thru | 9.25 from inner end |  |

## Bill of materials (per cell)
| Ref | Category | Qty | Description | Size / spec | Length | Used in | Notes |
|---|---|---|---|---|---|---|---|
| P1 | Printed part | 1 | Rear tube plate | PETG or ASA; Ø253.4 × 21.5 mm |  | tube end | 5 walls, 40% gyroid, 0.2 mm layers, no supports; footprint 253.4 × 253.4 mm (exceeds 235 mm bed); solid volume 300.9 cm³ |
| P2 | Printed part | 1 | Mirror plate | PETG or ASA; 226.7 mm across posts × 48.8 mm tall |  | carries the mirror | 5 walls, 40% gyroid, 0.2 mm layers, no supports; footprint 197.4 × 197.4 mm; solid volume 127.4 cm³ |
| P3 | Printed part | 3 | Mirror clip | PETG or ASA; 14.8 × 16 × 3 mm |  | clip posts | 5 walls, 40% gyroid, 0.2 mm layers, no supports; footprint 14.8 × 16 mm; solid volume 0.7 cm³ |
| S1 | Screw | 3 | Socket head cap screw (pull / adjust) | 1/4-20 | 1-1/4" | rear plate → mirror plate pad inserts | a thumbscrew or knob of the same length also works; lock at ≈ 0.13 N·m |
| S2 | Screw | 3 | Socket head cap screw (push / lock) | 1/4-20 | 1-1/4" | rear-plate push bosses | fully threaded; lock at ≈ 0.13 N·m |
| S3 | Screw | 6 | Button head socket cap screw (tube attachment) | 1/4-20 | 1/2" | through tube wall into skirt | sized for a 3.18 mm tube wall |
| S4 | Screw | 3 | Socket head cap screw (clips) | #6-32 | 3/8" | clips → clip posts |  |
| S5 | Screw | 4 | Thread-forming screw for plastics, pan head (fan mount) | #6 | 1-1/2" | fan → rear plate pilot holes | e.g. Hi-Lo or 48° plastic-forming thread; Ø2.8 mm pilot holes; don't overtighten |
| N1 | Nut / washer | 3 | Hex jam nut | 1/4-20 |  | push bolts | 7/16" across flats |
| N2 | Nut / washer | 3 | Flat washer, SAE | 1/4-20 |  | under pull-bolt heads | Ø15.9 mm OD |
| I1 | Heat-set insert | 12 | Brass heat-set insert (tapered, for plastics) | 1/4-20, 8 mm long, for Ø7.6 mm hole |  | rear plate, push bosses; mirror plate, pad columns; rear-plate skirt (radial) | install from rear face; install from outside |
| I2 | Heat-set insert | 3 | Brass heat-set insert (tapered, for plastics) | #6-32, 4.8 mm long, for Ø4 mm hole |  | clip posts | install from top of post |
| F1 | Fan | 1 | 80 mm 12 V DC fan | 8025 (80 × 80 × 25 mm), 71.5 mm hole spacing |  | rear face of rear plate | blows into the tube; 12 V supply and lead not included |
| C1 | Consumable | 1 | Filament | PETG or ASA |  | all printed parts | PLA not recommended (creeps under bolt load) |
| T1 | Tool | 1 | Hex key | 3/16" |  | 1/4-20 socket heads |  |
| T2 | Tool | 1 | Hex key | 5/32" |  | 1/4-20 button heads |  |
| T3 | Tool | 1 | Hex key | 7/64" |  | #6-32 clip screws |  |
| T4 | Tool | 1 | Wrench | 7/16" |  | push-bolt jam nuts |  |
| T5 | Tool | 1 | Screwdriver | Phillips #2 |  | #6 fan screws |  |
| T6 | Tool | 1 | Drill bit | 17/64" (6.7 mm) |  | 6 tube-wall holes for 1/4-20 | positions are in the hole schedule (C) |
| T7 | Tool | 1 | Soldering iron with heat-set insert tips | 1/4-20, #6-32 |  | installing inserts | or a dedicated insert press |

## Checks
| Part | Check | Value (mm) | Required | Result |
|---|---|---|---|---|
| Rear plate | wall around pull clearance hole P1 | 8.43 | ≥ 2 | PASS |
| Rear plate | wall around push insert P1 | 3 | ≥ 2 | PASS |
| Rear plate | wall around pull clearance hole P2 | 8.43 | ≥ 2 | PASS |
| Rear plate | wall around push insert P2 | 3 | ≥ 2 | PASS |
| Rear plate | wall around pull clearance hole P3 | 8.43 | ≥ 2 | PASS |
| Rear plate | wall around push insert P3 | 3 | ≥ 2 | PASS |
| Rear plate | wall around fan screw pilot F1 | 7.26 | ≥ 2 | PASS |
| Rear plate | wall around fan screw pilot F2 | 7.26 | ≥ 2 | PASS |
| Rear plate | wall around fan screw pilot F3 | 7.26 | ≥ 2 | PASS |
| Rear plate | wall around fan screw pilot F4 | 10.8 | ≥ 2 | PASS |
| Rear plate | solid bearing under pull washer P1 | 3.98 | ≥ 0.5 | PASS |
| Rear plate | push boss P1 (incl. root fillet) clear of cut-outs | 3.98 | ≥ 0.5 | PASS |
| Rear plate | solid bearing under pull washer P2 | 3.98 | ≥ 0.5 | PASS |
| Rear plate | push boss P2 (incl. root fillet) clear of cut-outs | 3.98 | ≥ 0.5 | PASS |
| Rear plate | solid bearing under pull washer P3 | 3.98 | ≥ 0.5 | PASS |
| Rear plate | push boss P3 (incl. root fillet) clear of cut-outs | 3.98 | ≥ 0.5 | PASS |
| Rear plate | wall: tube-screw insert to skirt edge | 2.55 | ≥ 2 | PASS |
| Rear plate | skirt thickness ≥ tube insert length | 1.4 | ≥ 0 | PASS |
| Rear plate | push insert fits boss height | 4 | ≥ 0 | PASS |
| Rear plate | wall between tube-screw inserts | 118.3 | ≥ 2 | PASS |
| Mirror plate | wall around pull insert P1 | 3 | ≥ 2 | PASS |
| Mirror plate | wall around pull insert P2 | 3 | ≥ 2 | PASS |
| Mirror plate | wall around pull insert P3 | 3 | ≥ 2 | PASS |
| Mirror plate | solid push-bolt contact P1 (incl. 0.6 mm slide at full tilt) | 6.38 | ≥ 0 | PASS |
| Mirror plate | pad column P1 (incl. root fillet) clear of vents | 18.84 | ≥ 1 | PASS |
| Mirror plate | solid push-bolt contact P2 (incl. 0.6 mm slide at full tilt) | 6.38 | ≥ 0 | PASS |
| Mirror plate | pad column P2 (incl. root fillet) clear of vents | 18.84 | ≥ 1 | PASS |
| Mirror plate | solid push-bolt contact P3 (incl. 0.6 mm slide at full tilt) | 6.38 | ≥ 0 | PASS |
| Mirror plate | pad column P3 (incl. root fillet) clear of vents | 18.84 | ≥ 1 | PASS |
| Mirror plate | cap above pull insert hole | 2.5 | ≥ 2 | PASS |
| Mirror plate | wall around clip insert C1 | 3.2 | ≥ 2 | PASS |
| Mirror plate | wall around clip insert C2 | 3.2 | ≥ 2 | PASS |
| Mirror plate | wall around clip insert C3 | 3.2 | ≥ 2 | PASS |
| Mirror plate | clip insert hole depth within post | 34.5 | ≥ 2 | PASS |
| Clip | wall around screw hole | 3.5 | ≥ 2 | PASS |
| Clip | gap between clip and mirror face | 0.8 | ≥ 0.5 | PASS |
| Clip | clip-screw thread engagement | 6.52 | ≥ 4.8 | PASS |
| Clip | clip-screw tip vs hole depth | 6.52 | ≤ 7 | PASS |
| Push-pull | pull-bolt engagement at max gap (14.1 mm) | 8 | ≥ 8 | PASS |
| Push-pull | pull-bolt tip depth at min gap (10.1 mm) | 12 | ≤ 13 | PASS |
| Push-pull | push-bolt length left for jam nut at max gap | 5.7 | ≥ 5 | PASS |
| Push-pull | min plate gap at full travel | 10.05 | ≥ 5 | PASS |
| Push-pull | pair spacing (pull washer to push-boss root fillet) | 0.85 | ≥ 0.5 | PASS |
| Fan | fan-screw tip protrusion past plate front (must clear mirror plate) | 5.1 | ≤ 9.05 | PASS |
| Fan | fan-screw thread engagement in the plate (#6 thread-forming) | 8 | ≥ 5.27 | PASS |
| Assembly | radial clearance to tube, worst of 8 poses at ±2 mm per pair (2.3° max tilt, pose +−+); needs tube ID ≥ 234.6 mm (9.24") | 10.73 | ≥ 1 | PASS |
| Assembly | axial gap mirror plate ↔ rear plate, worst pose (++−) | 8.14 | ≥ 1 | PASS |
| Assembly | gap mirror plate ↔ fan-screw tips, worst pose | 4.26 | ≥ 0.5 | PASS |
| Push-pull | pull-bolt tilt room in rear-plate hole at 2.3° | 0.33 | ≥ 0.1 | PASS |
| Assembly | mirror edge to lateral post gap | 0.75 | ≥ 0.25 | PASS |
| Assembly | rear plate radial fit clearance | 0.3 | ≥ 0.1 | PASS |

## Strength (hand calculations, sustained allowables for printed PETG/ASA)
| Load case | Item | Value | Allowable | Utilisation | Result |
|---|---|---|---|---|---|
| Tube horizontal: 50.9 N lateral (mirror 2.59 kg × 2) | lateral post root bending, across layers (11 × 16 mm post, load 25 mm up) | 4.93 MPa | 5 MPa | 99% | PASS |
| Tube horizontal: 50.9 N lateral (mirror 2.59 kg × 2) | arm bending at the post (18.3 × 7 mm arm + 6 × 4 mm rib) | 10 MPa | 10 MPa | 100% | PASS |
| Tube horizontal: 50.9 N lateral (mirror 2.59 kg × 2) | pull-bolt bending across the gap (steel, 1/4-20 root Ø4.79) | 25.24 MPa | 250 MPa | 10% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | pull-bolt insert pull-out (mirror plate, 1/4-20) | 118.45 N | 500 N | 24% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | push-bolt insert pull-out (rear plate, 1/4-20) | 118.45 N | 500 N | 24% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | push-bolt tip bearing on mirror plate | 6.23 MPa | 15 MPa | 42% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | pull-bolt washer bearing on rear plate | 0.74 MPa | 15 MPa | 5% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | mirror plate local bending at each pair (t = 7 mm) | 9.07 MPa | 10 MPa | 91% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | rear plate local bending at each pair (t = 8 mm) | 6.94 MPa | 10 MPa | 69% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | rear plate spokes carrying the mirror side to the skirt (73 mm wide) | 1.53 MPa | 10 MPa | 15% | PASS |
| Tube vertical: preload 100 N + 18.5 N weight share per pair | tube-screw bearing in the skirt (6 × 1/4-20, cell 3.66 kg) | 0.2 MPa | 15 MPa | 1% | PASS |
| Tube pointing down: 17 N on each clip | clip bending over the post edge (16 × 3 mm) | 1.99 MPa | 10 MPa | 20% | PASS |
| Tube pointing down: 17 N on each clip | clip-screw insert pull-out (#6-32, incl. prying) | 23.91 N | 250 N | 10% | PASS |

## Interference (CAD boolean intersection of every pair of bodies)
| Body A | Body B | Overlap volume (mm³) | Result |
|---|---|---|---|
| Rear tube plate | Mirror plate | 0 | PASS |
| Rear tube plate | Mirror clip | 0 | PASS |
| Rear tube plate | Mirror | 0 | PASS |
| Rear tube plate | Tube | 0 | PASS |
| Rear tube plate | Fan | 0 | PASS |
| Rear tube plate | Bolts, nuts & washers | 0 | PASS |
| Mirror plate | Mirror clip | 0 | PASS |
| Mirror plate | Mirror | 0 | PASS |
| Mirror plate | Tube | 0 | PASS |
| Mirror plate | Fan | 0 | PASS |
| Mirror plate | Bolts, nuts & washers | 0 | PASS |
| Mirror clip | Mirror | 0 | PASS |
| Mirror clip | Tube | 0 | PASS |
| Mirror clip | Fan | 0 | PASS |
| Mirror clip | Bolts, nuts & washers | 0 | PASS |
| Mirror | Tube | 0 | PASS |
| Mirror | Fan | 0 | PASS |
| Mirror | Bolts, nuts & washers | 0 | PASS |
| Tube | Fan | 0 | PASS |
| Tube | Bolts, nuts & washers | 0 | PASS |
| Fan | Bolts, nuts & washers | 0 | PASS |
| Mirror side tilted (worst of 8 poses, 2.3° max) | Tube | 0 | PASS |
| Mirror side tilted (worst of 8 poses, 2.3° max) | Rear tube plate | 0 | PASS |

## Print bed fit (235 × 235 mm)
| Part | Footprint (mm) | Height (mm) | Fits |
|---|---|---|---|
| Rear tube plate | 253.4 × 253.4 | 21.5 | **NO – see oversize policy** |
| Mirror plate | 197.4 × 197.4 | 48.8 | yes |
| Mirror clip | 14.8 × 16 | 3 | yes |

## Print settings (embedded in the 3MF)
5 walls/perimeters, 40% gyroid infill, 5 top and 5 bottom layers, 0.2 mm layers, no supports. Material: PETG or ASA (avoid PLA: it creeps under the constant bolt load and softens in a hot car).
