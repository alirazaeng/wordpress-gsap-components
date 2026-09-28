export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function createCleanupStack() {
  const callbacks = [];

  return {
    add(callback) {
      if (typeof callback === 'function') {
        callbacks.push(callback);
      }

      return callback;
    },

    run() {
      while (callbacks.length) {
        const callback = callbacks.pop();

        try {
          callback();
        } catch {
          // Cleanup is best-effort and must not block page teardown.
        }
      }
    }
  };
}
