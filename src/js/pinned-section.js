import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { prefersReducedMotion } from './utils/motion.js';

gsap.registerPlugin(ScrollTrigger);

export function initPinnedSections(root = document) {
  const sections = root.querySelectorAll('[data-gsap-pin]');

  if (!sections.length || prefersReducedMotion()) {
    return () => {};
  }

  const triggers = [];

  sections.forEach((section) => {
    const distance = Number(section.dataset.gsapPinDistance || 500);

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=' + distance,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true
    });

    triggers.push(trigger);
  });

  return () => triggers.forEach((trigger) => trigger.kill());
}
