import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils/motion.js';

gsap.registerPlugin(ScrollTrigger);

export function initTextReveal(root = document) {
  const elements = root.querySelectorAll('[data-gsap-text-reveal]');

  if (!elements.length || prefersReducedMotion()) {
    return () => {};
  }

  const cleanups = [];

  elements.forEach((element) => {
    const originalText = element.textContent.trim();

    if (!originalText) {
      return;
    }

    const words = originalText.split(/\s+/);
    const fragment = document.createDocumentFragment();

    element.setAttribute('aria-label', originalText);
    element.textContent = '';

    words.forEach((word, index) => {
      const wrapper = document.createElement('span');
      wrapper.className = 'gsap-word';
      wrapper.setAttribute('aria-hidden', 'true');
      wrapper.textContent = word;

      fragment.appendChild(wrapper);

      if (index < words.length - 1) {
        fragment.appendChild(document.createTextNode(' '));
      }
    });

    element.appendChild(fragment);

    const wordElements = element.querySelectorAll('.gsap-word');

    const context = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        { yPercent: 105, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true
          }
        }
      );
    }, element);

    cleanups.push(() => {
      context.revert();
      element.removeAttribute('aria-label');
      element.textContent = originalText;
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}
