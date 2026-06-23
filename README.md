# Divya Hanuman Mandir — Final Synced Build

Static HTML/CSS/JS devotional app.

## What changed in this build
- Hanuman Chalisa audio sync recalibrated so the uploaded audio no longer stays two verses behind.
- Chaupai 1 `जय हनुमान ज्ञान गुण सागर` now begins from the corrected audio timestamp.
- Spotify/YouTube-Music style active verse and active Hindi line highlight retained.
- Added a `Sync Here` button on Chalisa verses for one-tap correction if a browser/audio decoder drifts.
- Left Chalisa player remains scrollable and simple.
- Video tab cleaned: removed unwanted explanation cards.
- Animated video still uses muted video + external bhakti audio.
- Gita tab expanded with key shlokas across all 18 chapters.
- Hanuman Ji knowledge section expanded with more stories, symbols, timeline, temples and user guide.

## Run
Open `index.html` directly in Chrome/Edge, or run:

```bash
npx serve .
```

## Files
- `assets/audio/hanuman-chalisa-hariharan-gulshan-kumar.mp3`
- `assets/video/ram-setu-vanar-sena.mp4`
- `assets/audio/shree-raghuvar-ki-vanar-sena.mp3`
