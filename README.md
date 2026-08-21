# सूर्यपुरा ग्राम विकास पोर्टल

**Suryapura Rural Development Portal** — a fictional, Hindi-first demo website for a village development campaign.

This project showcases how a clean, premium, mobile-friendly public portal might present rural progress around **education**, **farmers**, **roads**, **panchayat**, and **digital identity**.

> **Note:** This is a demo only. Village name, leader, schemes, and contact details are fictional.

---

## What this demo includes

- **Homepage** matching a showcase-style layout:
  - Top contact bar + sticky navigation
  - Full-bleed **hero banner** with village background and development ambassador
  - Four development pillars (शिक्षा, किसान, सड़क, पंचायत)
  - Development works grid
  - Two on-page **social media post** mockups
- **Multi-page mini portal** with shared header/footer:
  - Theme pages: `/education`, `/farmers`, `/roads`, `/panchayat`
  - Stub pages: About, Works, Schemes, Gallery, News, Contact
- **Contact / जन-सुविधा आवेदन** demo form (front-end only, no backend)
- **Mobile-responsive** UI (hamburger menu, stacked hero, 2×2 pillars)

### Hero character

**विकास चौहान (ग्राम विकास दूत)** — a visionary rural development ambassador used as the emotional face of the campaign.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Routing | React Router |
| Styling | Plain CSS (design tokens) |
| Package manager | Bun (npm/yarn also fine) |

No backend, CMS, or authentication — content lives in TypeScript modules under `src/content/`.

---

## Getting started

```bash
# install
bun install

# local demo
bun run dev

# production build
bun run build

# preview production build
bun run preview
```

Open the URL Vite prints (usually `http://localhost:5173`).

---

## Project structure

```text
src/
  assets/           # Stock photos used on hero, works, social posts
  components/       # Presentational UI (Header, Hero, Pillars, etc.)
  content/          # Hindi copy + page data
  layouts/          # Site shell (top bar, nav, footer)
  pages/            # Route pages (Home, theme pages, stubs)
  App.tsx           # Router
  App.css           # Layout / section styles
  index.css         # Design tokens + base styles
```

### Main routes

| Path | Page |
| --- | --- |
| `/` | Home (hero, pillars, works, social posts) |
| `/education` | शिक्षा |
| `/farmers` | किसान |
| `/roads` | सड़क |
| `/panchayat` | पंचायत |
| `/about`, `/works`, `/schemes`, `/gallery`, `/news`, `/contact` | Lightweight content stubs |

---

## Design direction

- **Primary color:** forest green (`#1B4D3E`)
- **Typography:** Hind (Hindi UI) + Poppins (Latin / numbers)
- **Tone:** clean, premium, emotional, easy for all age groups
- **Images:** local stock placeholders in `src/assets/` — swap anytime without changing layout code
- **Motion:** GSAP — hero entrance timeline + scroll-triggered card reveals (pillars, works, social). Respects `prefers-reduced-motion`.

---

## Customizing content

- Homepage headlines, pillars, works, and social posts → [`src/content/home.ts`](src/content/home.ts)
- Site name, nav, phone/email → [`src/content/site.ts`](src/content/site.ts)
- Theme + stub page copy → [`src/content/pages.ts`](src/content/pages.ts)
- Photos → replace files in `src/assets/` (keep the same filenames, or update imports)

---

## Scripts

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start development server |
| `bun run build` | Typecheck + production build |
| `bun run preview` | Serve the `dist/` build |
| `bun run lint` | Run Oxlint |

---

## License / usage

Built as a **fictional rural development showcase**. Feel free to adapt the layout and copy for learning or portfolio demos. Do not present it as an official government portal.
