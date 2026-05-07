# Asset Reference Guide

All replaceable assets are organized below. Drop files into the correct folder, update the import in `content.js` or the component listed, and the site will use the real asset automatically.

---

## Logo

| File | Used In | Notes |
|---|---|---|
| `logo/logo.svg` | Navbar, Footer | Dark version — for white backgrounds |
| `logo/logo-white.svg` | Navbar (over hero) | White version — for orange/dark backgrounds |
| `logo/favicon.svg` | `public/favicon.svg` | Browser tab icon |

**To use:** Replace `public/favicon.svg`. For the site logo, import the SVG in `Navbar.jsx` and `Footer.jsx` and swap the JSX text block with `<img src={logo} />`.

---

## Hero Background (optional)

| File | Used In |
|---|---|
| `images/hero/hero-bg.jpg` | `Hero.jsx` |

Recommended: **1920×1080px** or wider, JPG. If used, add an `<img>` or CSS `background-image` in `Hero.jsx` above the grid overlay.

---

## Gallery Photos

Folder: `images/gallery/`

| Subfolder | Category | Slot in `content.js` |
|---|---|---|
| `residential/` | Residential | `gate-subdivision.jpg`, `gate-condo.jpg`, `gate-village.jpg` |
| `commercial/` | Commercial | `barrier-building.jpg`, `hvac-bms.jpg`, `campus-security.jpg` |
| `industrial/` | Industrial | `plant-automation.jpg`, `panel-fabrication.jpg`, `plc-retrofit.jpg` |

Recommended size: **800×600px** (4:3), JPG or WebP.

**To replace:** In `src/data/content.js`, find the `GALLERY` array and replace `image: null` with the import:

```js
// At the top of content.js:
import gateSubdivision from "../assets/images/gallery/residential/gate-subdivision.jpg";

// In GALLERY array:
{ label: "Residential Subdivision Gate", category: "Residential", image: gateSubdivision },
```

---

## About / Company Photo

| File | Used In |
|---|---|
| `images/about/company-photo.jpg` | `About.jsx` |

Recommended: **800×600px** (4:3), JPG.

**To replace:** In `content.js`, import and set `companyPhoto`:

```js
import companyPhoto from "../assets/images/about/company-photo.jpg";

export const ABOUT = {
  companyPhoto,   // ← replace null with this
  ...
};
```

---

## Custom Icons (optional)

Folder: `icons/`

Place any custom `.svg` icon files here. Import and use them in components as needed. The site currently uses `lucide-react` for all icons — add custom icons only if a lucide icon isn't available.

---

## Partner Brand Logos (optional)

Folder: `images/brands/`

If you want to show actual brand logos instead of text names in the brands bar, place logo SVGs here (e.g. `siemens.svg`, `faac.svg`) and update `WhyUs.jsx`.

---

## File Naming Convention

- All lowercase, words separated by hyphens: `gate-subdivision.jpg`
- No spaces or special characters
- Use `.jpg` for photos, `.svg` for logos and icons, `.webp` for optimized photos
