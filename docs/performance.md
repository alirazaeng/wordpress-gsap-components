# Performance Guidance

Animation quality is not measured by how many effects a page contains.

## Prefer transform and opacity

The components primarily animate:

- translate transforms
- scale transforms
- opacity

These properties usually avoid layout-heavy animation.

## Load only where needed

Do not enqueue the animation bundle on every WordPress page when only one landing page uses it.

Conditional loading is often a bigger win than micro-optimizing individual tweens.

## Avoid uncontrolled ScrollTrigger growth

Each component returns a cleanup function. Use it when content is replaced dynamically or when integrating with client-side navigation.

## Horizontal scroll

Pinned horizontal sections can be visually strong, but they create extra scroll distance and can become awkward on small screens.

Use them for curated storytelling, not normal navigation or product grids.

## Magnetic interactions

Magnetic buttons are pointer-oriented decoration. They must never be required to discover or activate the control.

## Test real devices

Check:

- mobile scrolling
- low-power devices
- resize/orientation changes
- keyboard navigation
- reduced-motion mode
- layout shift
- interaction responsiveness

Motion should support content hierarchy rather than compete with it.
