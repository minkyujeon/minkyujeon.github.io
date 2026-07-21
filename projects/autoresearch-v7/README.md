# T-ReX interactive results explorer

This is an isolated static website demo. It does not modify the T-ReX controller, experiment outputs, logs, or generated-sample directories.

Open `index.html` through GitHub Pages or a local HTTP server. The structure viewer loads the three copied PDB assets under `assets/structures/`:

- `trex_il7ra_representative.pdb`
- `puct_il7ra_representative.pdb`
- `egreedy_cbago_representative.pdb`

The endpoint cards are based on the archived six-target TM0.6 and MMseqs2 tables. The campaign curves and decision cards are sanitized snapshots from controller EvidenceSummary and decision records. Replace the embedded data only with completed, audited reports when updating the public page.
