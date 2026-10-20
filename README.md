<div align="center">

# Obaid Majeed Khan — Developer Portfolio

**Java Full Stack Developer · Spring Boot · SDE-1**

A responsive, single-page personal portfolio showcasing my projects, skills, internships, and education.

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Featured Projects](#featured-projects)
- [Browser Support](#browser-support)
- [Contact](#contact)
- [License](#license)

---

## Overview

This repository contains the source code of my personal portfolio website. It is built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no dependencies — so it loads fast and can be hosted anywhere for free.

The site highlights my work as a Java Full Stack Developer, including two full-stack projects (**Neo Ledger** and **Sales Savvy**), my technical skills, internship experience, and certifications.

## Live Demo

> 🔗 **https://obaid-majeed.github.io/REPO-NAME/** *(replace `REPO-NAME` with this repository's name once GitHub Pages is enabled)*

## Features

- **Modern glassmorphism UI** — dark theme with blurred glass cards, gradient accents, and animated background orbs/grid.
- **Fully responsive** — layouts adapt across desktop, tablet, and mobile breakpoints (980px / 680px).
- **Scroll-reveal animations** — sections fade in smoothly using the `IntersectionObserver` API.
- **Resilient image loading** — missing, slow, or broken images fall back to a clean labelled placeholder instead of a broken-image icon.
- **Sticky navigation** with smooth-scrolling anchor links.
- **Project showcase** — tech stack, feature tags, screenshot galleries, and GitHub links.
- **Experience timeline**, education, and certification sections.
- **Zero dependencies** — only the Poppins font is loaded from Google Fonts.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 — Grid, Flexbox, custom styles, `backdrop-filter`, media queries |
| Behaviour | Vanilla JavaScript (ES6), `IntersectionObserver` |
| Typography | [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts |
| Hosting | GitHub Pages (or any static host) |

## Project Structure

```
.
├── index.html          # Page structure and content
├── style.css           # All styling and responsive rules
├── script.js           # Scroll-reveal + image fallback logic
├── resume.pdf          # Downloadable resume (linked from the hero section)
├── profile.jpg         # Profile photo
├── neo-login.png       # Neo Ledger screenshots
├── neo-register.png
├── neo-dashboard.png
├── sales1.png          # Sales Savvy screenshots
├── sales2.png
├── sales3.png
├── sales4.png
├── sales5.png
└── README.md
```

> **Note:** Image and resume filenames must match exactly (they are case-sensitive on GitHub Pages / Linux servers).

## Getting Started

No installation or build tools are required.

**1. Clone the repository**

```bash
git clone https://github.com/obaid-majeed/REPO-NAME.git
cd REPO-NAME
```

**2. Open the site**

Simply open `index.html` in your browser, or run a local server:

```bash
# Python 3
python -m http.server 8000

# or Node.js
npx serve .
```

Then visit `http://localhost:8000`.

## Customization

| What to change | Where |
|----------------|-------|
| Name, headline, bio, contact links | `index.html` |
| Skills, projects, experience, certifications | `index.html` (matching `<section>`) |
| Colors, fonts, spacing | `style.css` (hex values such as `#08111f`, `#7c9cff`, `#8a5cff`) |
| Profile photo | Replace `profile.jpg` (recommended: ~600×750 px, under 300 KB) |
| Project screenshots | Replace the `.png` files, keeping the same names |
| Resume | Replace `resume.pdf` |

**Image tips:** compress screenshots (e.g., convert to WebP or use [Squoosh](https://squoosh.app)) to keep each file under ~200 KB for faster loading.

## Deployment

### GitHub Pages (recommended)

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
4. After a minute, your site will be live at `https://<username>.github.io/<repo-name>/`.

> Tip: name the repository `<username>.github.io` to host the portfolio at the root URL.

### Other options

Netlify, Vercel, and Cloudflare Pages all work out of the box — just drag-and-drop the folder or connect the repo.

## Featured Projects

### 🏦 Neo Ledger — Digital Banking System
Full-stack digital banking application with secure registration, OTP-based authentication, account management, deposits, withdrawals, fund transfers, and transaction history.
**Stack:** Java · Spring Boot · Spring Security · JWT · Hibernate · JPA · MySQL · Bootstrap · Maven
**Repository:** [neo-ledger-digital-banking-system](https://github.com/obaid-majeed/neo-ledger-digital-banking-system)

### 🛒 Sales Savvy — Sales & Customer Management Platform
Full-stack platform covering user registration and login, product management, cart and payment flow, order processing, and admin functionality.
**Stack:** Java · Spring Boot · Spring MVC · Hibernate · JPA · MySQL · Bootstrap · Maven
**Repository:** Coming soon

## Browser Support

Works on the latest versions of Chrome, Edge, Firefox, and Safari. Features such as `backdrop-filter` and CSS masks degrade gracefully on older browsers.

## Contact

**Obaid Majeed Khan** — Java Full Stack Developer, Bangalore, India

- 📧 Email: [khanaubaid121@gmail.com](mailto:khanaubaid121@gmail.com)
- 💼 LinkedIn: [obaid-majeed-khan](https://linkedin.com/in/obaid-majeed-khan-b00679243)
- 🐙 GitHub: [@obaid-majeed](https://github.com/obaid-majeed)

I'm open to **Java Full Stack Developer / SDE-1** opportunities — feel free to reach out.

## License

© 2026 Obaid Majeed Khan. All rights reserved.

The source code is shared for viewing and reference. Please do not reuse the personal content (text, photos, project descriptions, resume) as your own. If you'd like to use the layout as a template, add an open-source license of your choice (for example, MIT) and update this section.
