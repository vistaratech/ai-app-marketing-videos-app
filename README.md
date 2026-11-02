# KadaiBook — 30-second marketing ad

A polished Remotion ad for **KadaiBook**, the digital ledger, order manager and GST billing app for Indian small businesses.

- **Product page:** https://play.google.com/store/apps/details?id=in.kadaibook.app
- **Formats:** vertical `1080×1920` (9:16) and widescreen `1920×1080` (16:9)
- **Duration:** 30 seconds — 30 fps, 900 frames
- **Audio:** Indian English voiceover mixed with a ducked instrumental bed

## Preview

```console
npm install
npm run dev
```

Choose **KadaiBookAd** for the vertical cut or **KadaiBookAdWide** for the widescreen cut in the Remotion Studio sidebar.

## Render

```console
# Vertical 9:16
npm run render:vertical

# Widescreen 16:9
npm run render:wide

# Both cuts
npm run render:all
```

Outputs:

| Cut | File |
| --- | --- |
| Vertical 1080×1920 | `out/kadaibook-ad-vertical.mp4` |
| Widescreen 1920×1080 | `out/kadaibook-ad-wide.mp4` |

Single frames:

```console
npm run still
npm run still:wide
```

## Scene breakdown

| Time | Scene | Message |
| --- | --- | --- |
| 0:00–0:04 | Hook | Paper order books hide dues and send no reminders |
| 0:04–0:07.3 | Brand | Meet KadaiBook — orders, bills and payments, sorted |
| 0:07.3–0:10 | Dashboard | Live sales, collections and dues at a glance |
| 0:10–0:12.7 | GST billing | CGST and SGST totals calculated automatically |
| 0:12.7–0:15.4 | WhatsApp | Share the PDF bill and get paid faster |
| 0:15.4–0:18.2 | Dues | Pending payments and automatic reminders |
| 0:18.2–0:21.3 | Features | Catalog, expenses, estimates, templates, reports, sync |
| 0:21.3–0:30 | End card | “Your shop, sorted.” with QR code, Play badge and CTA |

## Voiceover script

1. “Still running your shop from a paper notebook?”
2. “Meet KadaiBook — order management and GST billing for small businesses.”
3. “Create orders, generate GST bills, and share them on WhatsApp in seconds.”
4. “Track payments, dues, expenses, and reports — all in one place.”
5. “KadaiBook. Your shop, sorted.”
6. “Download free on Google Play.”

The voice is `en-IN-NeerjaExpressiveNeural` via `edge-tts` at `+10%` rate.

## Project structure

```
src/
  Root.tsx                 Registers both compositions
  ad/
    KadaiBookAd.tsx        Scene sequencing, soundtrack, fades
    timeline.ts            Frame boundaries for all eight scenes
    layout.ts              Vertical / widescreen responsive layout
    theme.ts               Brand palette, fonts and shadows
    components/            Background, text, cards, chips, overlays, brand
    scenes/                Hook, Brand, Dashboard, Order, WhatsApp,
                           Dues, Features, EndCard
public/
  screenshots/             Ten app screenshots supplied by the client
  brand/                   App icon, Play badge, Play Store QR code
  fonts/                   Plus Jakarta Sans
  audio/                   Voiceover segments, source music, final mix
```

## Asset and licensing notes

- App screenshots, icon and Google Play badge belong to KadaiBook / their respective owners.
- Font: **Plus Jakarta Sans**, SIL Open Font License.
- Music: **“Wallpaper” by Kevin MacLeod** (incompetech.com), licensed under Creative Commons Attribution 4.0. The track is trimmed, ducked under the voiceover, mixed and loudness-normalised for this ad. Attribution is required when publishing — see [CREDITS.md](CREDITS.md).
- Voiceover was generated with `edge-tts`; review Microsoft’s terms for your intended commercial use.
- The end-card QR code resolves to the KadaiBook Google Play listing.

## Editing

- Change scene timing in `src/ad/timeline.ts`. Keep `TOTAL_FRAMES` at 900 for a 30-second cut.
- Change copy and chips inside `src/ad/scenes/`.
- Layout values for both aspect ratios live in `src/ad/layout.ts`.
- If you retime scenes, rebuild `public/audio/soundtrack.mp3` so the voiceover still lands on the right beats.
- Run `npm run lint` before rendering.
