# Demo Secondary Results

These results are intentionally kept out of the main comparison tables in `demo.html` so the presentation page stays focused on audited unique-success comparisons. Some larger raw traces are still used inside the interactive tree iframe when they better show normalized-score scaling over tree steps.

## CD45

- Audited best shown in demo: `selfhost_qwen36_05_CD45_20260420_122615_7179326`, node `db45199f978b`.
- Demo metric: `22/32 = 68.8%` raw online success. The audited unique result is `5` FoldSeek/self clusters among `21` audited successful self samples.
- Larger raw search trace used for the interactive tree iframe but not as the main comparison number: `selfhost_qwen36_05_CD45_20260424_113757_7323363`, node `75a81e6da237`, `86/192 = 44.8%`, best iPAE `0.1458`, best pLDDT `0.9641`.
- Fixed rerun not used as the main comparison number: `fixed_05_CD45_best_child_n96_20260426_103256_7374150`, `41/96 = 42.7%`, best iPAE `0.1418`, best pLDDT `0.9611`.

## BetV1

- Audited best shown in demo: `selfhost_qwen36_23_BetV1_20260421_195532_7228133`, node `6ad4f4291115`.
- Demo metric: `10/32 = 31.3%`, `4` unique FoldSeek clusters.
- Larger raw search trace used for the interactive tree iframe but not as the main comparison number: `selfhost_qwen36_23_BetV1_20260424_113757_7323365`, node `c20523dd958f`, `18/128 = 14.1%`, best iPAE `0.1599`, best pLDDT `0.9489`.
- Fixed rerun not used as the main comparison number: `fixed_23_BetV1_best_child_n96_20260426_103256_7374151`, `7/72 = 9.7%`, best iPAE `0.1602`, best pLDDT `0.9430`.

## HER2_AAV

- Audited best shown in demo: `selfhost_qwen36_27_HER2_AAV_20260421_195532_7228134`, node `f7e0548068e2`.
- Demo metric: `9/32 = 28.1%`, `3` unique FoldSeek clusters.
- Larger raw search trace used for the interactive tree iframe but not as the main comparison number: `selfhost_qwen36_27_HER2_AAV_20260421_000315_7199569`, node `761a4474f61f`, `35/96 = 36.5%`, best iPAE `0.1875`, best pLDDT `0.9402`.
- Fixed rerun not used as the main comparison number: `fixed_27_HER2_AAV_best_child_n96_20260425_153119_7352523`, `5/96 = 5.2%`, best iPAE `0.2190`, best pLDDT `0.9169`.
