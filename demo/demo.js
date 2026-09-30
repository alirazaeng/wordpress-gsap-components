(() => {
  'use strict';

  const library = window.ARGSAPComponents;
  const motionState = document.querySelector('#motion-state');

  if (motionState) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    motionState.textContent = reduced
      ? 'Reduced motion is active — animation enhancements are minimized.'
      : 'Full motion is active — change your OS/browser preference to test reduced motion.';
  }

  if (!library || typeof library.initGsapComponents !== 'function') {
    document.documentElement.classList.add('demo-library-error');
    return;
  }

  const cleanup = library.initGsapComponents(document);
  document.documentElement.classList.add('demo-library-ready');

  window.addEventListener(
    'pagehide',
    () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    },
    { once: true }
  );
})();
