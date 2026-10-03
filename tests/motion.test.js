import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createCleanupStack,
  prefersReducedMotion
} from '../src/js/utils/motion.js';

test('prefersReducedMotion reflects the media query result', () => {
  const originalWindow = globalThis.window;

  globalThis.window = {
    matchMedia(query) {
      assert.equal(query, '(prefers-reduced-motion: reduce)');
      return { matches: true };
    }
  };

  try {
    assert.equal(prefersReducedMotion(), true);
  } finally {
    globalThis.window = originalWindow;
  }
});

test('createCleanupStack runs callbacks in reverse registration order', () => {
  const calls = [];
  const cleanup = createCleanupStack();

  cleanup.add(() => calls.push('first'));
  cleanup.add(() => calls.push('second'));
  cleanup.add(() => calls.push('third'));

  cleanup.run();

  assert.deepEqual(calls, ['third', 'second', 'first']);
});

test('createCleanupStack ignores non-functions and continues after cleanup errors', () => {
  const calls = [];
  const cleanup = createCleanupStack();

  cleanup.add(null);
  cleanup.add(() => calls.push('before-error'));
  cleanup.add(() => {
    throw new Error('expected cleanup failure');
  });
  cleanup.add(() => calls.push('after-error'));

  cleanup.run();

  assert.deepEqual(calls, ['after-error', 'before-error']);
});

test('createCleanupStack is empty after it runs', () => {
  let count = 0;
  const cleanup = createCleanupStack();

  cleanup.add(() => {
    count += 1;
  });

  cleanup.run();
  cleanup.run();

  assert.equal(count, 1);
});
