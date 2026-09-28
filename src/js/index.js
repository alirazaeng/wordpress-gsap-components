import { initRevealOnScroll } from './reveal-on-scroll.js';
import { initStaggerGrids } from './stagger-grid.js';
import { initMagneticButtons } from './magnetic-button.js';
import { initTextReveal } from './text-reveal.js';
import { initScrollProgress } from './scroll-progress.js';
import { initPinnedSections } from './pinned-section.js';
import { initHorizontalScroll } from './horizontal-scroll.js';

export function initGsapComponents(root = document) {
  const cleanups = [
    initRevealOnScroll(root),
    initStaggerGrids(root),
    initMagneticButtons(root),
    initTextReveal(root),
    initScrollProgress(root),
    initPinnedSections(root),
    initHorizontalScroll(root)
  ];

  return () => {
    cleanups
      .slice()
      .reverse()
      .forEach((cleanup) => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
  };
}

export {
  initRevealOnScroll,
  initStaggerGrids,
  initMagneticButtons,
  initTextReveal,
  initScrollProgress,
  initPinnedSections,
  initHorizontalScroll
};
