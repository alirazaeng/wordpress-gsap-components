# WordPress GSAP Components v1.0.0

First stable release of the reusable GSAP component library for modern WordPress frontends.

## Components

- Reveal on scroll
- Staggered grids
- Magnetic buttons
- Accessible text reveal
- Scroll progress
- Pinned sections
- Horizontal scrolling

## Engineering goals

- progressive enhancement
- `prefers-reduced-motion` support
- reusable setup/cleanup behavior
- conditional WordPress asset loading
- transform/opacity-first animation practices
- production bundling with esbuild
- automated JavaScript and PHP validation

## Build

```bash
npm install
npm run ci
```

The browser bundle is generated at:

```text
dist/gsap-components.min.js
```

## Dependency note

GSAP is maintained and licensed separately by GreenSock/Webflow. Review its current license before redistributing GSAP as part of another product.

## License

Original repository code is MIT licensed.
