import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils/motion.js';

gsap.registerPlugin(ScrollTrigger);

export function initHorizontalScroll(root = document) {
  const sections = root.querySelectorAll('[data-gsap-horizontal]');

  if (!sections.length || prefersReducedMotion()) {
    return () => {};
  }

  const contexts = [];

  sections.forEach((section) => {
    const track = section.querySelector('[data-gsap-horizontal-track]');

    if (!track) {
      return;
    }

    const context = gsap.context(() => {
      const getDistance = () => Math.max(0, track.scrollWidth - section.clientWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + getDistance(),
          scrub: true,
          pin: true,
          invalidateOnRefresh: true
        }
      });
    }, section);

    contexts.push(context);
  });

  return () => contexts.forEach((context) => context.revert());
}
