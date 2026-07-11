# Core7 Site

Core7 Site is a small React/Vite website for Core7, a company building AI that adapts to people. The site presents the company philosophy, the signal Core7 wants to learn from real product use, KeigoButton as the first product built from that idea, and basic company/legal information.

The experience is intentionally minimal: monochrome typography, ASCII-rendered motion, sparse sections, and concise manifesto-style copy. The Japanese version is written as native site copy rather than a direct translation of the English.

## Tech Stack

- React 19
- Vite 6
- CSS modules are not used; styling lives in `src/styles.css`
- Custom ASCII animation engine in `src/ascii/engine.js`

## Project Structure

```text
.
├── index.html
├── public/
│   └── keigobutton.png
├── src/
│   ├── App.jsx
│   ├── content.js
│   ├── main.jsx
│   ├── styles.css
│   ├── ascii/
│   │   └── engine.js
│   └── components/
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── LegalPage.jsx
│       ├── Nav.jsx
│       └── Sections.jsx
└── package.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content And Localization

Site copy lives in `src/content.js`. The app currently supports:

- `en` - English
- `ja` - Japanese

`App.jsx` sets the active language, updates the document language, title, and meta description, then passes localized copy into the page components. Company profile, privacy policy, terms, and legal notice content are also maintained in `src/content.js` and are shown as separate hash pages from the footer, such as `#/company` and `#/privacy`.

When editing copy, keep the existing tone:

- concise and intentional
- restrained rather than promotional
- product-aware, but not App Store marketing copy
- Japanese should read naturally as Japanese, not as translated English

## Visual System

The site uses a fixed text nav, a full-viewport ASCII hero, wide whitespace, and simple text sections. The language toggle follows the existing nav style and appears as `[EN/JP]`.

Primary styling is in `src/styles.css`. The public product image is served from `public/keigobutton.png`.

## Deployment

The production output is generated into `dist/` by Vite:

```bash
npm run build
```

Deploy the contents of `dist/` to any static hosting provider.
# Core7landing
