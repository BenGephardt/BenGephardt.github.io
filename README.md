# Benjamin Gephardt ◆ Front-End Developer Portfolio

🚀 [**View the Live Portfolio**](https://bengephardt.github.io/)  
A high-performance, accessible, and responsive personal portfolio built from the ground up without frameworks.

## 📜 Project Description

This repository houses my professional front-end developer portfolio. It serves as a living case study of my core philosophy: crafting accessible, responsive interfaces that feel effortless to use. Drawing on a unique background in Behavioral Therapy and a BFA in Illustration, this site bridges the gap between deep user empathy and exact visual precision.

Built with strict adherence to modern web standards, the portfolio eschews heavy JavaScript frameworks in favor of robust semantic HTML, highly structured CSS architecture, and progressively enhanced Vanilla JavaScript. The result is an incredibly fast, WCAG-compliant experience that holds up in the real world—not just on design mockups.

## ⚙️ Key Features & Architecture

### ⚡ Performance & Asset Delivery
* **Zero Dependencies:** Engineered completely from scratch using vanilla web technologies to guarantee maximum performance and a microscopic bundle size.
* **Optimized Asset Pipeline:** Utilizes next-generation WebP image formatting combined with native `loading="lazy"` attributes to ensure rapid initial page loads.
* **Zero Cumulative Layout Shift (CLS):** Implements modern `aspect-ratio` mathematics to reserve DOM space for media before it loads, preventing layout "jumping" and ensuring a perfectly stable reading experience.

### 🎨 Immersive Design System
* **Bespoke Theme Engine:** Features a custom-built Light/Dark mode toggle (shifting seamlessly between "Sand/Rust" and "Dark Slate/Pale Sage") powered by a centralized CSS variable token system.
* **Fluid Typography & Spacing:** Utilizes `clamp()` functions and fractional viewport units to ensure typography perfectly scales across 4K monitors, tablets, and mobile devices without arbitrary media query breakpoints.
* **Defensive CSS Layouts:** Employs advanced CSS Grid and Flexbox techniques, including a custom "Grid Stacking" method for project cards that creates a beautifully layered UI while maintaining strict aspect ratios.

### ♿ Uncompromising Accessibility (WCAG 2.1 AA)
* **Screen Reader Optimized:** Deep integration of semantic HTML5 landmarks (`<main>`, `<header>`, `<nav>`, `<article>`), logical heading hierarchies, and descriptive `aria-labels`.
* **Keyboard Navigation:** Features a visually hidden, focusable "Skip to main content" link, alongside custom, high-contrast `:focus-visible` outlines for all interactive elements to support motor-impaired users.
* **Secure External Routing:** All outbound links utilize `target="_blank"` strictly paired with `rel="noopener noreferrer"` to protect user security and prevent cognitive disorientation for assistive tech users.

---

## 👁️ The Developer's Perspective

### 🔮 Deep Dive: Solving Architectural Challenges

#### 1. Preventing Layout Shift via Grid Stacking
A common issue in image-heavy project grids is the "pop-in" effect, where text content is shoved downwards once high-resolution images finish downloading. To solve this without relying on complex JavaScript loaders, I implemented a **CSS Grid Stacking Strategy**. By assigning both a text-based "fallback skeleton" and the actual `<img />` to the exact same Grid cell (`grid-area: 1 / 1`), the layout remains perfectly rigid. When the image loads, it simply sits on top of the fallback via `z-index`, resulting in a flawless, 0-CLS user experience.

#### 2. Scalable Theme Architecture
Rather than writing hundreds of duplicate CSS rules for Dark Mode, I engineered a highly scalable **Design Token System**. By defining color semantics at the `:root` level (e.g., `--color-bg`, `--color-accent`), the dark theme is achieved simply by overriding those core variables within a `[data-theme="dark"]` attribute selector. This keeps the CSS incredibly DRY (Don't Repeat Yourself) and makes adding future themes completely frictionless.

#### 3. Security and Accessibility in Link Handling
When linking out to external case studies, GitHub repositories, and live client sites, opening new tabs is a standard UX practice, but it introduces security vulnerabilities (`window.opener` hijacking) and accessibility hurdles. I combated this by standardizing an exact link anatomy across the site: combining `target="_blank"` with `rel="noopener noreferrer"` to sever malicious background threads, while injecting explicit `aria-label="(opens in a new tab)"` text to warn screen-reader users of the context switch.

---

## 📦 Tech Stack

* **HTML5:** Highly semantic, accessible markup architecture.
* **CSS3:** Custom Properties (CSS Variables), CSS Grid, Flexbox, BEM-inspired naming conventions, and fluid typography.
* **Vanilla JavaScript (ES6+):** Clean, dependency-free DOM manipulation and event handling.
* **Typography:** [Google Fonts](https://fonts.google.com/) (`Lora` for elegant serif headings, `Inter` for highly legible sans-serif body copy).

---

## 🗝️ Installation & Setup

Because this project relies entirely on native web technologies without a build step or bundler, getting it running locally takes seconds.

**1. Clone the Repository:**
```bash
git clone [https://github.com/BenGephardt/benjamin-portfolio.git](https://github.com/BenGephardt/benjamin-portfolio.git)
cd benjamin-portfolio
```

**2. Run Locally:**
Since there are no dependencies to install, simply open the `index.html` file directly in your browser. For the best development experience, open the project folder in VS Code and start the **Live Server** extension to enable hot-reloading.

---

📬 **Contact:** BenGephardt - [https://github.com/BenGephardt](https://github.com/BenGephardt)