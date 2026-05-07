# JWI Automation — Promotional Website Spec
*Version 3.0 — May 2026*

---

## 1. Project Overview

A **Corporate & Professional** promotional website for **JWI Automation**, a Philippine-based full-service automation company specializing in **residential gate automation, access control, and industrial/commercial automation**. The site communicates authority, reliability, and technical excellence to both residential homeowners and industrial clients.

---

## 2. Tech Stack

| Item | Choice |
|---|---|
| Framework | React 18 + Vite 6 |
| Delivery | Multi-file component structure |
| Icons | lucide-react |
| Fonts | Google Fonts: `Bebas Neue` (headings) + `DM Sans` (body) |
| Animations | CSS transitions + IntersectionObserver |
| Styling | Plain CSS files with CSS custom properties (no Tailwind) |

---

## 3. File Structure

```
jwi-automation-v1/
├── index.html
├── package.json
├── vite.config.js
├── spec.md
└── src/
    ├── main.jsx
    ├── App.jsx                    ← root; imports all CSS files
    ├── data/
    │   └── content.js             ← all copy, stats, products, services
    ├── hooks/
    │   ├── useFadeIn.js
    │   └── useCounter.js
    ├── styles/
    │   ├── variables.css          ← ALL design tokens (colors, fonts, spacing)
    │   ├── globals.css            ← reset, body, scrollbar, shared classes
    │   ├── animations.css         ← .fade-up / .is-visible / .hero-fade
    │   └── components/
    │       ├── Navbar.css
    │       ├── Hero.css
    │       ├── Products.css
    │       ├── Services.css
    │       ├── Gallery.css
    │       ├── WhyUs.css
    │       ├── About.css
    │       ├── Contact.css
    │       └── Footer.css
    └── components/
        ├── Navbar/Navbar.jsx
        ├── Hero/Hero.jsx
        ├── Products/Products.jsx
        ├── Services/Services.jsx
        ├── Gallery/Gallery.jsx
        ├── WhyUs/WhyUs.jsx
        ├── About/About.jsx
        ├── Contact/Contact.jsx
        └── Footer/Footer.jsx
```

**To change the design:** Edit `src/styles/variables.css` for design tokens, or the relevant component CSS file.  
**To change content:** Edit `src/data/content.js`.

---

## 4. Color Palette (CSS Custom Properties)

| CSS Variable | Value | Role |
|---|---|---|
| `--color-orange` | `#E8520A` | Brand orange |
| `--color-orange-hover` | `#D44A08` | Orange on hover |
| `--color-orange-light` | `#FFF0EB` | Light orange tint |
| `--color-bg` | `#FFFFFF` | Primary background |
| `--color-bg-alt` | `#F8F7F4` | Alternate section background |
| `--color-bg-orange` | `#E8520A` | Orange section background |
| `--color-bg-dark` | `#111111` | Footer background |
| `--color-text-primary` | `#111111` | Headings, strong text |
| `--color-text-secondary` | `#6B6460` | Body, descriptions |
| `--color-border` | `#E8E5E0` | Borders, dividers |

---

## 5. Sections

1. **Navbar** — Transparent over hero (white links) → white + shadow on scroll; hamburger on mobile; "Get a Quote" CTA
2. **Hero** — Full-viewport orange background, white grid overlay, white headline, stat bar
3. **Products** — 8 products in auto-fill grid; first 3 marked "Specialty" (gate/barrier/access); hover orange top-border
4. **Services** — 4 rows including gate installation as #1; numbered, 2-column with feature lists
5. **Gallery** — Filter tabs (All / Residential / Commercial / Industrial); hover orange overlay; photo placeholders
6. **Why Choose Us** — Orange stat counters + 3 value prop cards + partner brands bar
7. **About** — 2-column: copy + industries + mission/vision; certifications list
8. **Contact** — Orange details panel + inquiry form
9. **Footer** — Orange top bar (phone/email) + dark body with 4-column links

---

## 6. Theme: Orange + White

- **Hero**: Full orange background, white text
- **Navbar**: Transparent (white text) over hero → white background on scroll
- **Alternating sections**: White (#FFFFFF) / Warm gray (#F8F7F4)
- **WhyUs stats**: Orange background (echoes hero)
- **Contact details panel**: Orange background
- **Footer**: Dark (#111111) with orange top bar

---

## 7. Animations

- Hero: staggered `.hero-fade.is-loaded` on mount
- Sections: IntersectionObserver toggles `.fade-up.is-visible`
- Stagger: CSS `--delay` custom property per card
- Stat counters: `useCounter` hook, count-up on scroll-into-view
- Navbar: transparent → white on scroll past 80px

---

## 8. Content Focus — Gate Automation

JWI Automation's primary specialty is **residential and commercial gate automation**:
- Electric swing gate operators (FAAC, BFT, CAME)
- Sliding gate motors
- Boom barriers for parking and car parks
- Video intercoms and access control integration
- Residential subdivisions, villages, condominiums

Industrial/commercial automation is also offered as a full-service line.

---

## 9. Contact

- Details-only panel (orange background) + inquiry form side by side
- Address, phone, mobile, email (info + sales), business hours
- Social icons (Facebook, LinkedIn, Instagram, YouTube)
- No map embed (placeholder omitted intentionally)

---

## 10. Responsive

| Breakpoint | Layout |
|---|---|
| `< 768px` | Single column, hamburger nav, stacked sections |
| `768–1024px` | 2-column grids |
| `> 1024px` | Full layout as designed |

---

## 11. Placeholder Content

> All company-specific data (address, phone, email, exact product names, certifications) uses realistic placeholder content. **Replace before launch.**  
> Partner brands listed (FAAC, BFT, CAME, Siemens, etc.) should be verified as actual authorized distributor relationships.
