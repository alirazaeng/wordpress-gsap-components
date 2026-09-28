# WordPress Integration

## Recommended approach

Use the components from a child theme or small custom plugin. Avoid editing a third-party parent theme directly.

### 1. Install dependencies

```bash
npm install
```

### 2. Build the browser bundle

```bash
npm run build
```

The generated file is:

```text
dist/gsap-components.min.js
```

### 3. Copy assets into WordPress

Example child-theme structure:

```text
wp-content/themes/your-child-theme/
└── assets/
    └── gsap-components/
        ├── gsap-components.min.js
        └── components.css
```

Copy:

- `dist/gsap-components.min.js`
- `src/css/components.css`

### 4. Adapt the enqueue example

See [wordpress/enqueue-gsap.php](../wordpress/enqueue-gsap.php).

The example loads assets only on the front page. Replace that condition with the narrowest condition that matches the pages where animation is actually used.

## Markup API

### Reveal

```html
<div data-gsap-reveal>...</div>
```

Optional:

- `data-gsap-distance="40"`
- `data-gsap-duration="0.8"`
- `data-gsap-delay="0.1"`

### Stagger

```html
<div data-gsap-stagger>
  <article data-gsap-stagger-item>...</article>
  <article data-gsap-stagger-item>...</article>
</div>
```

### Magnetic button

```html
<a data-gsap-magnetic data-gsap-strength="0.18">Contact</a>
```

### Text reveal

```html
<h2 data-gsap-text-reveal>Motion with a purpose</h2>
```

### Scroll progress

```html
<div data-gsap-progress aria-hidden="true"></div>
```

### Pinned section

```html
<section data-gsap-pin data-gsap-pin-distance="650">...</section>
```

### Horizontal section

```html
<section data-gsap-horizontal>
  <div data-gsap-horizontal-track>...</div>
</section>
```

## Important

The source modules import GSAP from the npm package. The bundled output includes the code required by these components. Review the current GSAP licensing terms before redistributing or shipping the library in a commercial product.
