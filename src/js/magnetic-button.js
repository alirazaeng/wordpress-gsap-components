import { gsap } from 'gsap';
import { prefersReducedMotion } from './utils/motion.js';

export function initMagneticButtons(root = document) {
  const buttons = root.querySelectorAll('[data-gsap-magnetic]');

  if (!buttons.length || prefersReducedMotion()) {
    return () => {};
  }

  const cleanups = [];

  buttons.forEach((button) => {
    const strength = Number(button.dataset.gsapStrength || 0.2);

    const move = (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        duration: 0.25,
        ease: 'power2.out'
      });
    };

    const reset = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.45)'
      });
    };

    button.addEventListener('pointermove', move, { passive: true });
    button.addEventListener('pointerleave', reset, { passive: true });

    cleanups.push(() => {
      button.removeEventListener('pointermove', move);
      button.removeEventListener('pointerleave', reset);
      gsap.killTweensOf(button);
      gsap.set(button, { clearProps: 'transform' });
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}
