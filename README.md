# Md. Mehedi Hasan Chowdhury Mahi — Portfolio

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

A modern, responsive personal portfolio for **Md. Mehedi Hasan Chowdhury Mahi**, a Computer Science & Engineering undergraduate and full-stack developer. The site brings together projects, research, work experience, achievements, leadership activities, and contact information in a single-page React application.

**Live sites**

- GitHub Pages: [its-mahiop.github.io/Portfolio](https://its-mahiop.github.io/Portfolio)
- Netlify: [mehedi-hasan-mahi.netlify.app](https://mehedi-hasan-mahi.netlify.app)

---

## Highlights

- Responsive single-page layout with nine content sections
- Dark and light themes with the preference saved in `localStorage`
- Typewriter animation in the hero section
- Scroll-reveal animations using `IntersectionObserver`
- Scroll-spy navigation that highlights the active section
- Project cards with live links and an inquiry action
- Research publication card with authors, venue, and keywords
- Achievement galleries with a keyboard-accessible lightbox
- CV download from the hero section
- Contact form powered by FormSubmit without a custom backend

---

## Portfolio Sections

| Section | Content |
| --- | --- |
| Home | Introduction, profile photo, social links, CV download, and quick stats |
| About | Academic background, career objective, university, CGPA, and location |
| Skills | Languages, web technologies, databases/auth, tools, and core CS concepts |
| Experience | Work history at Fixensy and Bdapps |
| Projects | HomeSchool, Space Weather Explorer, and Bazar Dor |
| Research | UCICS 2026 paper on machine-learning classifiers for credit-card fraud detection |
| Achievements | Infinity AI BuildFest 2026, Hult Prize, MillionX Bangladesh, NASA Space Apps, and Robo-Soccer |
| Activities | Campus ambassador, leadership, and committee roles |
| Contact | Email, LinkedIn, GitHub, location, and contact form |

### Featured projects

- **HomeSchool** — AI-assisted learning platform aligned with the NCTB curriculum for Classes 6–12. [Live site](https://home-school-demo.vercel.app)
- **Space Weather Explorer** — Interactive space-weather visualization built for NASA Space Apps Challenge 2025. [Project link](https://lovable.dev/projects/ad46ede7-e980-406f-ab3e-b0c2f7f3e90f)
- **Bazar Dor** — Market price tracking and comparison app for essential commodities in Bangladesh. [Live site](https://bazar-dor-psi.vercel.app)

---

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18 |
| Build tool | Vite 5 |
| Styling | Vanilla CSS3, CSS variables, Grid, Flexbox |
| Animation | `IntersectionObserver`, CSS transitions |
| Icons | FontAwesome 6 |
| Fonts | Google Fonts (Inter and Outfit) |
| Contact form | FormSubmit AJAX endpoint |
| Deployment | Netlify (`netlify.toml`) and GitHub Pages |

---

## Project Structure

```text
Portfolio/
├── public/                                      # Static assets copied into dist/
│   ├── Project Images/                          # Project screenshots
│   ├── The Infinity AI BuildFest 2026/          # Achievement gallery
│   ├── Hult Prize at Varendra University 2025-26/
│   ├── MillionX Bangladesh – 2026/
│   ├── NASA Space Apps Challenge – 2025/
│   ├── Robo-Soccer – 2024/
│   ├── profile.png                              # Profile photo
│   └── Md Mehedi Hasan Chowdhury Mahi.pdf       # Downloadable CV
├── src/
│   ├── components/                              # One component per section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Research.jsx
│   │   ├── Achievements.jsx
│   │   ├── Extracurriculars.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Lightbox.jsx
│   ├── hooks/useReveal.js                       # Scroll-reveal helper
│   ├── App.jsx                                  # Page composition and theme state
│   ├── main.jsx                                 # React entry point
│   └── index.css                                # Global styles and design tokens
├── index.html                                   # Vite HTML entry
├── package.json
├── package-lock.json
├── vite.config.js
├── netlify.toml                                 # Build settings and cache/security headers
├── AGENTS.md                                    # Notes for coding agents
├── LICENSE
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

There is no separate lint, typecheck, or test script. Use `npm run build` as the main verification step.

The build output is generated and ignored by Git. Do not commit `dist/` or `node_modules/`.

### Windows note

If PowerShell blocks `npm.ps1`, use `npm.cmd` instead. Optional local helpers `run_dev.bat` and `run_dev.sh` are machine-specific and ignored by Git.

---

## Customization

### Content

Each section keeps its data in a local array at the top of its component:

- Projects: `src/components/Projects.jsx`
- Achievements: `src/components/Achievements.jsx`
- Research: `src/components/Research.jsx`
- Skills: `src/components/Skills.jsx`
- Experience: `src/components/Experience.jsx`
- Activities: `src/components/Extracurriculars.jsx`
- Navigation links: `src/components/Navbar.jsx`
- Social links: `src/components/Footer.jsx`

### Images and CV

Place new assets under `public/` and reference them from components with a root-relative URL:

```jsx
image: "/Project Images/My Project.png"
```

Do not prefix public asset paths with `/public/`; Vite serves the contents of `public/` from the site root and copies them into `dist/`.

- Profile photo: `public/profile.png`
- CV: `public/Md Mehedi Hasan Chowdhury Mahi.pdf`
- Project screenshots: `public/Project Images/`
- Achievement photos: the matching folder under `public/`

If you rename the CV, update the download link in `src/components/Hero.jsx`. Raw `.NEF` originals are ignored by Git and should stay outside `public/` so they are not copied into production builds.

### Styling and theme

Global styles and design tokens live in `src/index.css`. The color palette, gradients, typography, and light-theme overrides are defined with CSS variables in `:root` and `html.light-theme`.

Theme state is controlled in `src/App.jsx` and persisted under the `theme` key in `localStorage`. The inline script in `index.html` applies the saved theme before React loads to avoid a flash.

### Contact form

`src/components/Contact.jsx` posts to a FormSubmit AJAX endpoint. To use a different recipient, update the endpoint URL and the email shown in the contact details.

---

## Deployment

### Netlify

`netlify.toml` is configured to:

- Run `npm run build`
- Publish `dist/`
- Apply security headers and long-lived cache headers for CSS, JS, images, and PDFs

Connect the repository to Netlify and it will use these settings automatically.

### GitHub Pages

The GitHub Pages site is served from `/Portfolio/`, while Vite defaults to `/`. Before a GitHub Pages build, set `base: "/Portfolio/"` in `vite.config.js`. Netlify deployments should keep the default `/` base.

---

## License

The codebase is available under the MIT License. Personal content, photographs, certificates, and the CV are excluded from the MIT license and remain all rights reserved. See [LICENSE](LICENSE) for details.
