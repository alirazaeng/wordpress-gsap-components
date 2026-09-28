import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils/motion.js';

gsap.registerPlugin(ScrollTrigger);

export function initScrollProgress(root = document) {
  const bars = root.querySelectorAll('[data-gsap-progress]');

  if (!bars.length || prefersReducedMotion()) {
    return () => {};
  }

  const triggers = [];

  bars.forEach((bar) => {
    gsap.set(bar, { transformOrigin: 'left center', scaleX: 0 });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate(self) {
        gsap.set(bar, { scaleX: self.progress });
      }
    });

    triggers.push({ bar, trigger });
  });

  return () => {
    triggers.forEach(({ bar, trigger }) => {
      trigger.kill();
      gsap.set(bar, { clearProps: 'transform' });
    });
  };
}
