# Live Demo

The live demo is a static GitHub Pages site that exercises the repository's real production bundle.

## What the demo proves

The page uses the same public attributes documented by the library:

- `data-gsap-reveal`
- `data-gsap-stagger`
- `data-gsap-stagger-item`
- `data-gsap-magnetic`
- `data-gsap-text-reveal`
- `data-gsap-progress`
- `data-gsap-pin`
- `data-gsap-horizontal`
- `data-gsap-horizontal-track`

It initializes the published component system with:

```js
const cleanup = window.ARGSAPComponents.initGsapComponents(document);
```

and invokes cleanup on `pagehide`.

## Deployment flow

The GitHub Pages workflow:

1. installs dependencies
2. runs the repository's full `npm run ci`
3. rebuilds `dist/gsap-components.min.js`
4. assembles the static demo
5. uploads the Pages artifact
6. deploys through GitHub Pages

This keeps the demo coupled to the source code rather than committing a stale, separately maintained browser bundle.

## Accessibility

The demo intentionally preserves readable HTML before JavaScript and surfaces the current reduced-motion preference. The underlying library continues to make animation optional when `prefers-reduced-motion: reduce` is active.
