# WebTechLo — Digital Agency Website

> A fully responsive, bilingual (English & Arabic/RTL) digital agency marketing website built with modern front-end techniques, smooth animations, and SEO-optimized structure.

<p align="center">
  <img src="assets/demo.gif" alt="WebTechLo website demo" width="100%" />
</p>

---

## About This Project

WebTechLo was a full-service digital agency offering web development, custom software, SEO, UI/UX design, e-commerce, app development, and digital marketing — primarily targeting clients in **Saudi Arabia and the broader GCC/MENA region**.

This repository showcases the complete agency website I built from scratch, featuring:

- **Bilingual support** — full English and Arabic (RTL) versions of every page, with a one-click language toggle and Saudi flag indicator
- **Modern scroll animations** — Locomotive Scroll, WOW.js, and Animate.css for cinematic page transitions
- **Particle effects & animated typography** — dynamic hero sections with particles.js and word-rotation text effects
- **Production-grade SEO page** — a dedicated `/seo` section with structured feature breakdowns and campaign visuals
- **Live contact form** — powered by Formspree (no backend required)
- **Clean URL routing** — `.htaccess` Apache rewrites for extension-free URLs (`/about` instead of `/about.html`)

---

## Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | Custom CSS3, Bootstrap 5 |
| Icons | Bootstrap Icons, Remix Icons, Font Awesome |
| Animations | Locomotive Scroll, WOW.js, Animate.css, particles.js |
| Carousels | Owl Carousel 2 |
| Counters | jQuery CounterUp + Waypoints |
| Typography FX | Animated Text / Word Rotator |
| Scroll UX | jQuery ScrollUp, Isotope layout |
| Form Handling | Formspree (serverless form-to-email) |
| Server Config | Apache `.htaccess` (clean URL rewrites) |
| Languages | JavaScript (ES6), jQuery |
| Multilingual | Manual EN + AR (RTL) page mirroring |

---

## Pages

| English | Arabic (RTL) | Description |
|---|---|---|
| `index.html` | `index-ar.html` | Homepage — hero, services overview, stats |
| `about.html` | `about-ar.html` | Team, values, agency story |
| `services.html` | `services-ar.html` | Full service catalogue |
| `seo.html` | `seo-ar.html` | Dedicated SEO service landing page |
| `contact.html` | `contact-ar.html` | Contact form + WhatsApp + email |

---

## Key Features

### Multilingual & RTL (Arabic / KSA)
Every page has a full Arabic mirror with correct RTL layout, Arabic typography, and culturally appropriate copy targeting Saudi Arabian and GCC audiences. Language toggle is available in the navbar on every page.

### Modern Animations
- **Locomotive Scroll** — smooth momentum-based scrolling with parallax
- **WOW.js + Animate.css** — scroll-triggered entrance animations with configurable delays
- **particles.js** — interactive particle canvas in hero sections
- **Animated word rotator** — cycling hero headlines for engagement
- **CounterUp** — animated stat counters that trigger on viewport entry

### SEO Architecture
- Semantic HTML5 structure throughout
- Unique `<title>` and `<meta description>` per page (EN + AR)
- `robots` meta tags
- Dedicated SEO landing page with feature breakdowns, campaign visuals, and service icons
- Clean URLs via `.htaccess` rewrites (no `.html` extensions in browser)

### Contact & Lead Generation
- Formspree-powered contact form (POST, no server needed)
- WhatsApp direct link
- `mailto:` email link
- Social links in footer

---

## Project Structure

```
webtechlo/
├── index.html / index-ar.html        # Homepage (EN + AR)
├── about.html / about-ar.html        # About page (EN + AR)
├── services.html / services-ar.html  # Services (EN + AR)
├── seo.html / seo-ar.html            # SEO landing page (EN + AR)
├── contact.html / contact-ar.html    # Contact (EN + AR)
├── .htaccess                         # Apache clean URL rewrites
└── assets/
    ├── stylesheets/                  # Custom CSS + responsive breakpoints
    ├── css/                          # Vendor CSS (Bootstrap, animations, etc.)
    ├── js/                           # Vendor JS + custom script.js
    └── images/                       # All site imagery and icons
```

---

## What I Built / My Role

- Designed and developed the **entire front-end from scratch** — layout, components, animations, responsive breakpoints
- Implemented **full Arabic RTL mirroring** of every page for the KSA/MENA market
- Integrated and configured all animation libraries (Locomotive Scroll, WOW.js, particles.js, CounterUp)
- Set up **Formspree** for serverless form handling and **Apache rewrites** for clean URLs
- Optimized each page with **unique SEO metadata** in both English and Arabic
- Delivered a production-ready site that was live on **webtechlo.com**

---

## Status

> The agency is no longer active and the domain (webtechlo.com) has been taken down. This repository is preserved as a **portfolio project** demonstrating bilingual agency website development, front-end animation expertise, and RTL/Arabic web localization for the Saudi Arabian market.

---

## Developer

**Hussain** — Front-End Developer  
Built: ~2024 | Stack: HTML · CSS · JS · Bootstrap · Locomotive Scroll · Arabic RTL
