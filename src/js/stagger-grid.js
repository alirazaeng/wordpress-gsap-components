import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils/motion.js';

gsap.registerPlugin(ScrollTrigger);

export function initStaggerGrids(root = document) {
  const grids = root.querySelectorAll('[data-gsap-stagger]');

  if (!grids.length) {
    return () => {};
  }

  const contexts = [];

  grids.forEach((grid) => {
    const items = grid.querySelectorAll('[data-gsap-stagger-item]');

    if (!items.length || prefersReducedMotion()) {
      gsap.set(items, { clearProps: 'all' });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, grid);

    contexts.push(context);
  });

  return () => contexts.forEach((context) => context.revert());
}
