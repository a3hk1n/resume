# Ashkan Kiani — AI & Automation Developer Portfolio (Phase 2 Complete)

This repository contains the complete React + Vite portfolio application, including:
- **Phase 1 Preserved Homepage**: Complete RTL Persian design system, dark/light theme with `localStorage` persistence, interactive 3D-tilted Hero SVG AI automation pipeline, skill category tabs, 3D project cards, quick-preview case study `<dialog>` modal, custom HTML5 video player, animated workflow showcase, career timeline, copy-to-clipboard contact buttons, custom dual cursor, magnetic buttons, and 5-click logo Easter egg.
- **Phase 2 Individual Project Case Study Pages (`/projects/:slug`)**: Dedicated, visually rich case study pages for all 4 projects:
  1. `/projects/ai-laboratory-assistant` — **AI Laboratory Assistant**
  2. `/projects/ai-medication-analysis-system` — **AI Medication Analysis System**
  3. `/projects/coffee-shop-e-commerce` — **Coffee Shop E-Commerce**
  4. `/projects/digital-commerce-interface` — **Digital Commerce Interface**

## 1. Restore Binary Assets (If Not Already Placed)

Copy your original binary media files into `public/assets/` so they match the exact paths referenced in `src/data/projects.js` and `src/sections/About.jsx`:

- `public/assets/profile.jpg`
- `public/assets/images/IMG_3129.jpg`
- `public/assets/images/IMG_3128.jpg`
- `public/assets/images/IMG_3130.jpg`
- `public/assets/images/IMG_3131.jpg`
- `public/assets/videos/Telegram Web — Mozilla Firefox 2026-10-05 21-53-59.mp4`
- `public/assets/videos/Golden Coffee — Mozilla Firefox 2026-10-05 17-06-46.mp4`

*(Note: If any image or video file is not yet placed in `public/assets/`, the UI automatically displays a clean, styled architectural fallback card with the asset path rather than a broken browser image icon.)*

## 2. Installation & Local Development

```bash
npm install
npm run dev
```

## 3. Production Build & Preview

```bash
npm run build
npm run preview
```

## 4. SPA Routing & Refresh Support

The application uses `BrowserRouter` from `react-router-dom`. Vite's dev and preview servers handle direct navigation and browser refreshes on `/projects/:slug` automatically. For static production hosting (Vercel, Netlify, Nginx, Apache), configure a standard SPA fallback to `/index.html` (`public/_redirects` is included).
