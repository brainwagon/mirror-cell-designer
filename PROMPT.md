# Mirror Cell Design App — Design Brief

Build a browser-based application that helps me design 3D-printable model files
for a mirror cell for a Newtonian telescope.

Where a point below says **"Decide and state"**, make a reasonable choice, write
it down (in the README and/or the app UI), and implement to it — do not leave it
implicit.

## 1. Deliverables

- A complete HTML/JavaScript app (see §5 for packaging constraints).
- A `README.md` documenting the design decisions and how to use the app.
- Example exports: one mirror cell for a 6" mirror in an 8" ID tube, and one for
  an 8" mirror in a 10" ID tube.

## 2. Supported configurations

- Mirror diameters are chosen from presets: **4.25", 6", 8", 10"**.
- Tube inner diameter is entered as a value.
- Mirror thickness is entered as a value.

## 3. Mechanical design

- Two major parts:
  - a **rear tube plate** sized to match the inside diameter of the tube, and
  - a **mirror plate** that holds the mirror.
- The two parts are joined by a **push-pull** arrangement consisting of **three
  pairs** of push-pull bolts.
- Prefer **imperial** bolt sizes; assume **heat-set inserts** are used where
  appropriate.
- Ensure at least **2 mm of wall thickness** around every heat-set insert
  location, and adequate material around all through holes and insert holes.
- Mirror retention is selectable: either **RTV glue** or **clips**.
- Optional **cooling fan** for the mirror.

## 4. Outputs, previews and checks

- A **live 3D preview** of the assembly, with the mirror ghosted.
- A **dimensioned 2D layout view**.
- Export to both **STEP** and **3MF**.
  - 3MF exports use appropriate defaults for wall count and infill (**Decide and
    state** the values).
- Parts are oriented to print **without supports**.
- Warn the user when any part exceeds a standard **220 × 220 mm** bed.
  - **Decide and state** how oversize configurations are handled (e.g. 10" ID
    plates exceed this bed), and reflect that choice in the warning.

## 5. Implementation constraints

- Use a browser-based CAD kernel such as **replicad** or **jscad**. Choose by
  best judgement; other packages are fine if they suit the application better
  (**Decide and state** the kernel).
- Ship as a **single self-contained HTML file** that opens directly from
  `file://` with **no build process**. Any third-party dependencies are loaded
  from a **CDN**, so the first load requires an internet connection.

## 6. Definition of done

- All necessary dimensions are specified for the finished model.
- All parts assemble without interference.
- All through holes and insert holes have the required wall thickness.
- The STEP and 3MF files are downloadable from the app.
