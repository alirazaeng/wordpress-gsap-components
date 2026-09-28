import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils/motion.js';

gsap.registerPlugin(ScrollTrigger);

export function initRevealOnScroll(root = document) {
  const elements = root.querySelectorAll('[data-gsap-reveal]');

  if (!elements.length) {
    return () => {};
  }

  if (prefersReducedMotion()) {
    gsap.set(elements, { clearProps: 'all' });
    return () => {};
  }

  const contexts = [];

  elements.forEach((element) => {
    const distance = Number(element.dataset.gsapDistance || 28);
    const duration = Number(element.dataset.gsapDuration || 0.7);
    const delay = Number(element.dataset.gsapDelay || 0);

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: distance },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true
          }
        }
      );
    }, element);

    contexts.push(context);
  });

  return () => contexts.forEach((context) => context.revert());
}
