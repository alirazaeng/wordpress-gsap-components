import { initGsapComponents } from '../src/js/index.js';

let cleanup = () => {};

function boot() {
  cleanup();
  cleanup = initGsapComponents(document);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

window.addEventListener('pagehide', () => cleanup(), { once: true });
