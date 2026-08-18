# Benjamin Gephardt ◆ Portfolio

🚀 [**View the Live Portfolio**](https://bengephardt.github.io/)

_An accessible, responsive personal portfolio built without frameworks._

## 📜 Project Description

This repository houses my portfolio site. I'm an accessibility-focused front-end developer and a Registered Behavior Technician. Three years collecting clinical data on a tablet during ABA sessions taught me what happens when software fails the person using it, and that's what I build against now.

The site is built with semantic HTML, structured CSS, and vanilla JavaScript. No frameworks, no build step, no dependencies: partly for performance, partly because a portfolio should be legible to anyone who opens the source.

## ⚙️ Key Features & Architecture

### ⚡ Performance & Asset Delivery

- **Zero Dependencies:** Built with vanilla web technologies. No framework, no bundler, no build step.
- **Optimized Assets:** WebP images with native `loading="lazy"` and explicit `width`/`height` attributes.
- **Layout Stability:** Grid stacking reserves space for media before it loads, preventing content from jumping as images arrive.

### 🎨 Design System

- **Theme Engine:** A Light/Dark toggle (Sand/Rust and Dark Slate/Pale Sage) driven by a centralized CSS custom property token system, with `prefers-color-scheme` as the default and `localStorage` for persistence.
- **Fluid Typography:** `clamp()` and viewport units scale type across screen sizes without arbitrary breakpoints.
- **Responsive Layouts:** CSS Grid and Flexbox, including a grid-stacking method for project cards that layers a text fallback beneath the image in the same cell.

### ♿ Accessibility

- **Semantic Structure:** HTML5 landmarks (`<main>`, `<header>`, `<nav>`, `<article>`), logical heading hierarchy, and descriptive `aria-label`s where needed.
- **Keyboard Navigation:** A visually hidden, focusable "Skip to main content" link, plus high-contrast `:focus-visible` outlines on every interactive element.
- **Theme Toggle:** Uses a native `<button>` with `aria-pressed` reflecting current state.
- **External Links:** `target="_blank"` paired with `rel="noopener noreferrer"`, and an explicit "(opens in a new tab)" in the accessible name so screen-reader users aren't surprised by the context switch.

Targeting WCAG 2.1 AA.

---

## 👁️ The Developer's Perspective

### 🔮 Deep Dive: Architectural Decisions

#### 1. Preventing Layout Shift with Grid Stacking

Image-heavy project grids tend to shove text downward once high-resolution images finish loading. Rather than reach for a JavaScript loader, I placed both a text fallback and the `<img>` in the same grid cell (`grid-area: 1 / 1`). The layout stays rigid from first paint; when the image loads it simply sits on top via `z-index`.

#### 2. Theme Architecture Without Duplication

Rather than writing a parallel set of CSS rules for dark mode, colors are defined semantically at `:root` (`--color-bg`, `--color-accent`, `--color-text`). The dark theme overrides those variables inside a `[data-theme="dark"]` selector. Adding a third theme would mean one more variable block, not a second stylesheet.

The toggle respects `prefers-color-scheme` on first visit and only overrides it once the user makes an explicit choice. It also keeps listening for system changes if they never do.

#### 3. External Links: Security and Context

Opening external links in a new tab is standard practice, but it introduces a `window.opener` vulnerability and a disorienting context switch for assistive tech users. Every outbound link on the site pairs `target="_blank"` with `rel="noopener noreferrer"`, and includes "(opens in a new tab)" in its `aria-label` so screen-reader users know what's about to happen.

---

## 📦 Tech Stack

- **HTML5:** Semantic, accessible markup.
- **CSS3:** Custom properties, Grid, Flexbox, `clamp()` fluid typography, and `color-mix()`.
- **Vanilla JavaScript (ES6+):** Dependency-free DOM manipulation, theme persistence via `localStorage`.
- **Typography:** [Google Fonts](https://fonts.google.com/). _Lora_ for headings, _Inter_ for body copy.

---

## 🗝️ Installation & Setup

No build step or bundler, so running it locally takes seconds.

**1. Clone the Repository:**

```bash
git clone https://github.com/BenGephardt/bengephardt.github.io.git
cd bengephardt.github.io
```

**2. Run Locally:**

Open `index.html` directly in your browser, or use the Live Server extension in VS Code for auto-reload.

**3. Code Quality:**

This project uses Prettier for formatting:

```bash
npx prettier . --write
```

---

📬 **Contact:** BenGephardt, [https://github.com/BenGephardt](https://github.com/BenGephardt)
