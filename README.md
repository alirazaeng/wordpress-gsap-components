# WordPress GSAP Components

Reusable, performance-conscious GSAP animation and interaction components for modern WordPress frontends.

[![Code Quality](https://github.com/alirazaeng/wordpress-gsap-components/actions/workflows/quality.yml/badge.svg)](https://github.com/alirazaeng/wordpress-gsap-components/actions/workflows/quality.yml) [![Release](https://img.shields.io/github/v/release/alirazaeng/wordpress-gsap-components?label=release)](https://github.com/alirazaeng/wordpress-gsap-components/releases/latest) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![Demo](https://img.shields.io/badge/Interactive%20Demo-Deployment%20Ready-7c5cff)](demo/)

**Interactive demo:** the complete demo source is available in [`demo/`](demo/) and the GitHub Pages workflow is deployment-ready.

This project demonstrates how to add polished motion to WordPress without turning animation into a performance, accessibility, or maintenance problem.

## What this repository demonstrates

- interactive GitHub Pages demo powered by the production bundle
- reusable GSAP component architecture
- ScrollTrigger integration
- progressive enhancement
- `prefers-reduced-motion` support
- setup and teardown/cleanup patterns
- WordPress conditional asset loading
- browser bundling with esbuild
- automated JavaScript and PHP checks
- performance and accessibility guidance

## Components

| Component | Attribute | Purpose |
| --- | --- | --- |
| Reveal on scroll | `data-gsap-reveal` | Fade/translate content into view |
| Stagger grid | `data-gsap-stagger` | Reveal groups of cards/items |
| Magnetic button | `data-gsap-magnetic` | Pointer-based button movement |
| Text reveal | `data-gsap-text-reveal` | Accessible word-by-word reveal |
| Scroll progress | `data-gsap-progress` | Page scroll progress indicator |
| Pinned section | `data-gsap-pin` | Pin a storytelling section |
| Horizontal scroll | `data-gsap-horizontal` | Scroll a wide showcase horizontally |

## Quick start

```bash
npm install
npm run check
npm run build
```

The production browser bundle is generated at:

```text
dist/gsap-components.min.js
```

## Basic markup

### Reveal on scroll

```html
<section
  data-gsap-reveal
  data-gsap-distance="32"
  data-gsap-duration="0.7"
>
  <h2>Fast WordPress experiences with purposeful motion.</h2>
</section>
```

### Staggered service cards

```html
<div data-gsap-stagger>
  <article data-gsap-stagger-item>WordPress</article>
  <article data-gsap-stagger-item>WooCommerce</article>
  <article data-gsap-stagger-item>Performance</article>
</div>
```

### Magnetic CTA

```html
<a href="/contact/" data-gsap-magnetic data-gsap-strength="0.18">
  Start a project
</a>
```

## Repository structure

```text
wordpress-gsap-components/
├── .github/workflows/quality.yml
├── docs/
│   ├── accessibility.md
│   ├── performance.md
│   └── wordpress-integration.md
├── examples/
│   ├── hero-reveal.html
│   ├── horizontal-showcase.html
│   └── service-grid.html
├── scripts/
│   ├── build.mjs
│   └── check-syntax.mjs
├── src/
│   ├── css/components.css
│   └── js/
│       ├── horizontal-scroll.js
│       ├── index.js
│       ├── magnetic-button.js
│       ├── pinned-section.js
│       ├── reveal-on-scroll.js
│       ├── scroll-progress.js
│       ├── stagger-grid.js
│       ├── text-reveal.js
│       └── utils/motion.js
└── wordpress/
    ├── bootstrap-example.js
    └── enqueue-gsap.php
```

## WordPress usage

The recommended workflow is:

1. install the npm dependencies
2. build the production bundle
3. copy the generated bundle and component CSS into a child theme or custom plugin
4. adapt [wordpress/enqueue-gsap.php](wordpress/enqueue-gsap.php)
5. load animation assets only on pages that use them
6. add the documented `data-` attributes to your templates/blocks

See [WordPress integration](docs/wordpress-integration.md).

## Live demo architecture

The GitHub Pages site is built from the same production bundle used by the project. Its deployment workflow runs the repository's full CI, rebuilds the browser bundle, assembles the static demo, and then deploys it.

See [Live demo architecture](docs/live-demo.md).

## Accessibility

Motion is enhancement, not content.

The components:

- respect reduced-motion preferences
- avoid requiring animation for navigation or interaction
- preserve usable server-rendered HTML
- provide cleanup behavior
- keep the text reveal accessible to assistive technology

See [Accessibility](docs/accessibility.md).

## Performance

This library deliberately avoids the idea that more animation is better.

Recommended practices:

- animate transforms and opacity where practical
- conditionally load the bundle
- keep ScrollTrigger instances focused
- avoid heavy pinned experiences on routine commerce/navigation flows
- test mobile and lower-power devices
- clean up animations when content is replaced

See [Performance guidance](docs/performance.md).

## Quality checks

GitHub Actions validates:

- JavaScript syntax
- Node unit tests for motion and cleanup utilities
- production bundling
- package contents
- PHP syntax for the WordPress integration example

Run the same checks locally:

```bash
npm run ci
```

## Dependency note

This repository uses GSAP as a dependency. GSAP is maintained and licensed separately by GreenSock/Webflow. Review its current license before redistributing it as part of another product.

## Author

**Engineer Ali Raza**  
WordPress & WooCommerce Developer · Web Performance Specialist · Frontend Developer

- Portfolio: https://engineeraliraza.site
- Upwork: https://www.upwork.com/freelancers/engineeraliraza
- GitHub: https://github.com/alirazaeng

## License

The original code in this repository is MIT licensed. See [LICENSE](LICENSE).
