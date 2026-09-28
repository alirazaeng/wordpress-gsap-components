# Accessibility

## Reduced motion

Every motion component checks `prefers-reduced-motion: reduce`. The CSS layer also provides a non-animated fallback.

Reduced-motion users should receive the same content and controls without essential information being hidden behind animation.

## Progressive enhancement

The HTML should be meaningful before JavaScript runs.

Avoid patterns where:

- content starts permanently hidden in CSS
- navigation depends on animation
- a button only works after GSAP initializes
- scroll position is the only way to reveal essential information

## Text reveal

The text-reveal component sets an accessible label on the original element while visual word spans are marked `aria-hidden`.

The cleanup routine restores the original text.

## Keyboard and focus

Animation must not:

- move keyboard focus
- remove focus indicators
- reorder the DOM visually in a confusing way
- trap users inside pinned sections

## Testing

At minimum:

1. enable reduced motion at OS/browser level
2. navigate with keyboard only
3. inspect the accessibility tree
4. test zoom at 200%
5. verify content remains available with JavaScript disabled
