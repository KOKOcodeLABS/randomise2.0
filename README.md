<div align="center">

<img src="public/nav_logo.avif" alt="Randomize Logo" width="160" />

# Randomize 2.0
The official website for the Randomize student tech community – showcasing events, hackathons, projects, the team, and more.

Built with performance, accessibility, and a modern visual identity in mind using the Next.js App Router.

</div>

## ✨ Overview
Randomize 2.0 is a complete rework of the club website focused on:

* Presenting upcoming & past events (workshops, hackathons, ideathons, screenings, socials)
* Highlighting flagship initiatives (Hackathon, Odysseus, Quill, Pathaan series, etc.)
* Curated project & gallery sections with optimized media
* Dynamic team roster (faculty, executive, core teams with yearly filtering)
* Smooth animations (Framer Motion) with GPU-friendly gradients
* Mobile‑first responsive layout

## 🧱 Tech Stack
| Layer | Tools |
|-------|-------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS + custom gradients + utility animations |
| Animation | Framer Motion, react-awesome-reveal |
| Media | Next/Image (where applicable) + Cloudinary hosted assets |
| Fonts | next/font (Geist + custom) |
| State/UI | React hooks only (lightweight) |

## 📁 Key Structure
```
src/
	app/            # Route segments (events, projects, gallery, teams, etc.)
	components/     # Reusable UI (Navbar, carousels, cards, etc.)
	data/           # Static / semi-static data (team rosters)
	constants/      # Shared constant values (if any)
	hooks/          # Custom React hooks
	lib/            # Helpers / utilities
public/           # Static assets (images, fonts, 3D model, gallery photos)
```

## 🚀 Getting Started
Install dependencies and start the dev server:
```bash
npm install
npm run dev
```
Then open http://localhost:3000

### Environment Variables (if/when needed)
Create a `.env.local` file for any runtime configuration:
```
NEXT_PUBLIC_ANALYTICS_ID=
CLOUDINARY_CLOUD_NAME=
```
Currently the site mostly consumes public Cloudinary URLs directly. Consider moving repeated base URLs to config later.

## 🖼 Media & Performance Notes
* Large images should be stored on Cloudinary (already in use) with on-the-fly transformations (w_, h_, q_auto, f_auto)
* Prefer `<Image />` for local/public assets where layout shifts matter
* Use lazy loading for non-critical imagery (already applied in Team cards fallback)

## 👥 Team Data Workflow
Team rosters live under `src/data/team/` (e.g. `Core2024.js`, `Exec2024.js`). To add a new year:
1. Duplicate existing file (e.g. `Exec2025.js`)
2. Update IDs & fields (`id`, `name`, `role`, `imageUrl`, links)
3. Wire into `teams/page.js` with conditional rendering on the year selector
4. Remove empty `imageUrl` strings – or rely on the fallback avatar logic now in `TeamCard`

## 🧩 Components of Interest
* `Navbar.jsx` – animated scroll-aware gradient nav
* `TeamCard.jsx` – now includes fallback avatar & link normalization
* (Carousels / Events) – Embla or custom autoplay (pause logic cleaned up if removed later)

## 🛠 Development Scripts
```bash
npm run dev      # Start local dev
npm run build    # Production build
npm start        # Run production build locally
```

## ✅ Accessibility & UX
* Fallback initials for missing team images
* High-contrast gradient backgrounds with blur layering
* Focus-friendly interactive elements (improve further with visible focus rings)
* Motion: keep subtle; consider `prefers-reduced-motion` media query for future enhancement

## 🔄 Roadmap Ideas
* Add CMS (e.g. Contentlayer / Sanity) for events & posts
* Dedicated Projects showcase with filters & tags
* Dark/light theme toggle (currently dark-focused)
* Add Open Graph metadata & social preview images
* Implement structured data (JSON-LD) for events

## 🤝 Contributing
1. Fork / branch: `feat/your-feature`
2. Run & test locally
3. Keep components small & reusable
4. Open a PR with a concise description + screenshots / Lighthouse diff

## 🐛 Bug Reporting
Open an issue with:
* What happened vs expected
* Steps to reproduce
* Environment (OS, browser)
* Screenshot / console log (if relevant)

## 📦 Deployment
Optimized for Vercel. Typical flow:
* Push to `master` (or PR into it) → Automatic preview build
* Promote to production from Vercel dashboard or via `vercel --prod`

## 🔐 Best Practices (Checklist)
* No sensitive keys committed
* Use `env` for any future API endpoints
* Cloudinary transformations to keep payloads light
* Defer heavy JS; keep bundle modular

## 📝 License
Internal / Club Use (add a formal license file if needed).

## 🙏 Acknowledgements
* Randomize community & contributors
* Cloudinary for media delivery
* Next.js & Vercel ecosystem

---
Maintained with care by the Randomize web team. Feel free to adapt this README as the platform evolves.
