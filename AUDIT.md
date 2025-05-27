# Site Audit – 2025‑05‑26

## 0. Mandatory Checkpoints

| ID | Requirement | Status |
| --- | ----------- | ------ |
| 0.1 | `.git` directory present | ✓ (GitHub repository) |
| 0.2 | Detect existing static stack | ✓ – Plain HTML/CSS/JS (no SSG) |
| 0.3 | `netlify.toml` exists | ✗ – Not found |
| 0.4 | Generate AUDIT.md | ✓ – this document |

---

## Current Pages & Templates

| Path | Notes |
| ---- | ----- |
| `/index.html` | Home page |
| `/blog.html` | Blog listing (static) |
| `/store.html` | Store landing (static) |
| `/admin/index.html` | Netlify CMS admin panel |
| `/js/` | Custom scripts (`scroll-animations.js`, `topo.js`) |
| `/style.css` | Site‑wide stylesheet |

_No project, about, contact, privacy, or terms pages currently exist._

---

## Asset Pipeline

* **CSS:** Single `style.css` referenced directly.
* **JS (local):** `/js/scroll-animations.js`, `/js/topo.js`.
* **JS (CDN):** GSAP `3.12.2` via jsDelivr.
* **Fonts:** Google Fonts – *Space Mono*.
* **Build tooling:** None (no bundler, no task‑runner, no SSG).

---

## Current Netlify Settings

* No `netlify.toml` present.
* Deployment target shown as **GitHub Pages** (not Netlify).

---

## CSS / JS Libraries In Use

| Library | Purpose | Source |
| ------- | ------- | ------ |
| GSAP 3.12.2 | Animations | `https://cdn.jsdelivr.net/...` |
| Google Fonts – Space Mono | Typography | `https://fonts.googleapis.com` |

_No Tailwind, Bootstrap, or other frameworks detected._

---

## Gaps vs Specification

| Section | Spec Item | Present? |
| ------- | --------- | -------- |
| G‑1 | Pixel‑art / teenage‑engineering aesthetic | ✗ |
| G‑2 | Blog masonry grid with filters | ✗ |
| G‑2 | Projects section | ✗ |
| G‑2 | Store (JSON/YAML driven) | ✗ (static HTML only) |
| G‑2 | About page | ✗ |
| G‑2 | Contact page with Netlify Form | ✗ |
| G‑2 | Newsletter funnel | ✗ |
| G‑3 | Monetization via digital products & affiliates | ✗ |
| G‑4 | Netlify‑friendly static build | ✗ (no Netlify config) |
| G‑5 | Lighthouse ≥90 mobile | ✗ (not yet tested) |
| G‑6 | `_redirects` for URL compatibility | ✗ |
| 2.4 | Tailwind + typography plugin | ✗ |
| 2.3 | SVG asset kit | ✗ |
| 4.1 | Netlify Functions for newsletter | ✗ |
| 4.3 | GDPR‑compliant analytics | ✗ |
| 4.4 | PWA manifest & service worker | ✗ |
| 6.1 | npm scripts & package.json | ✗ |
| 6.2 | GitHub Actions deploy workflow | ✗ |
| 6.4 | Cypress smoke tests | ✗ |
| 7.1 | Updated README | ✗ |
| 7.2 | CHANGELOG.md with semver | ✗ |

---

### Summary
The repository is a **plain HTML/CSS/JS site** with minimal pages and no build tooling. Netlify configuration and most of the requested upgrade features are currently **absent**, providing a clean slate for the overlay upgrade.
