# JWI Automation — Promotional Website

Promotional website for **JWI Automation**, a Philippine-based company specializing in residential gate automation, access control, and industrial/commercial automation solutions.

---

## Tech Stack

- **React 18** + **Vite 6**
- **lucide-react** for icons
- **Plain CSS** with CSS custom properties (no Tailwind, no CSS-in-JS)
- **Google Fonts** — Bebas Neue (headings) + DM Sans (body)

---

## Prerequisites

- Node.js **18+**
- npm **9+** (comes with Node)

Check your versions:
```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/villetejohn/jwi-automation.git
cd jwi-automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
jwi-automation/
├── public/
│   ├── favicon.svg           ← browser tab icon (replace with real one)
│   └── og-image.png          ← social share image (add this file)
├── src/
│   ├── assets/
│   │   ├── ASSETS.md         ← guide for replacing images and logos
│   │   ├── images/
│   │   │   ├── gallery/
│   │   │   │   ├── residential/
│   │   │   │   ├── commercial/
│   │   │   │   └── industrial/
│   │   │   ├── about/
│   │   │   └── hero/
│   │   ├── logo/             ← place logo SVG files here
│   │   └── icons/            ← custom SVG icons (beyond lucide-react)
│   ├── components/           ← one folder per section
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Products/
│   │   ├── Services/
│   │   ├── Gallery/
│   │   ├── WhyUs/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/
│   │   └── content.js        ← all site copy, stats, products, services
│   ├── hooks/
│   │   ├── useFadeIn.js      ← IntersectionObserver scroll animation
│   │   └── useCounter.js     ← animated number counter
│   ├── styles/
│   │   ├── variables.css     ← design tokens (colors, fonts, spacing)
│   │   ├── globals.css       ← reset and base styles
│   │   ├── animations.css    ← fade-up / scroll animation classes
│   │   └── components/       ← per-section CSS files
│   ├── App.jsx               ← root component, imports all CSS
│   └── main.jsx              ← React entry point
├── index.html
├── vite.config.js
├── package.json
└── spec.md                   ← design & content specification
```

---

## Customization

### Changing colors or fonts

Edit [`src/styles/variables.css`](src/styles/variables.css). All design tokens are CSS custom properties — one change applies sitewide.

```css
:root {
  --color-orange:      #E8520A;  /* brand color */
  --color-bg:          #FFFFFF;
  --color-text-primary: #111111;
  /* ... */
}
```

### Updating content

Edit [`src/data/content.js`](src/data/content.js). All text, stats, products, services, and contact details are in one place. No need to touch any component.

### Adding real photos

1. Drop your image into the correct folder under `src/assets/images/`
2. Uncomment the relevant import at the top of `content.js`
3. Set the `image:` field from `null` to the import variable

See [`src/assets/ASSETS.md`](src/assets/ASSETS.md) for exact file names, recommended dimensions, and step-by-step instructions for each asset.

### Modifying a section

Each section has its own component and CSS file:

| Section | Component | Styles |
|---|---|---|
| Navbar | `src/components/Navbar/Navbar.jsx` | `src/styles/components/Navbar.css` |
| Hero | `src/components/Hero/Hero.jsx` | `src/styles/components/Hero.css` |
| Products | `src/components/Products/Products.jsx` | `src/styles/components/Products.css` |
| Services | `src/components/Services/Services.jsx` | `src/styles/components/Services.css` |
| Gallery | `src/components/Gallery/Gallery.jsx` | `src/styles/components/Gallery.css` |
| Why Us | `src/components/WhyUs/WhyUs.jsx` | `src/styles/components/WhyUs.css` |
| About | `src/components/About/About.jsx` | `src/styles/components/About.css` |
| Contact | `src/components/Contact/Contact.jsx` | `src/styles/components/Contact.css` |
| Footer | `src/components/Footer/Footer.jsx` | `src/styles/components/Footer.css` |

---

## Before Going Live

Replace all placeholder content in `src/data/content.js`:

- [ ] Company address, phone, mobile
- [ ] Email addresses (`info@` and `sales@`)
- [ ] Social media links (Facebook, LinkedIn, Instagram, YouTube)
- [ ] Gallery photos (see `src/assets/ASSETS.md`)
- [ ] Company photo in About section
- [ ] Favicon (`public/favicon.svg`)
- [ ] OG image (`public/og-image.png`) — 1200×630px for social sharing
- [ ] Verify partner brand names are accurate authorized distributor relationships
- [ ] Update `index.html` OG meta with final site URL

---

## Deployment

### Build

```bash
npm run build
```

This outputs a `dist/` folder of static files ready to serve.

### Hosting options

| Platform | Notes |
|---|---|
| **Netlify** | Drag and drop `dist/` or connect the GitHub repo — auto-builds on push |
| **Vercel** | Connect GitHub repo, set framework to Vite — zero config |
| **GitHub Pages** | Add `base` to `vite.config.js` if serving from a subdirectory |
| **cPanel / shared hosting** | Upload contents of `dist/` to `public_html/` via FTP |

### Netlify / Vercel (recommended)

Both platforms detect Vite automatically. Connect the GitHub repository and they will build and deploy on every push to `main`.

Build settings (if needed):
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). IE not supported.
