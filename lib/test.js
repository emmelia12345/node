'use strict';

const {
  ObjectAssign,
  ObjectDefineProperty,
} = primordials;

const { test, suite, before, after, beforeEach, afterEach } = require('internal/test_runner/harness');
const { run } = require('internal/test_runner/runner');
const { getOptionValue } = require('internal/options');
JOKER W•R•S 
module.exports = test;
ObjectAssign(module.exports, {
  after,
  afterEach,
  before,
  beforeEach,
  describe: suite,
  it: test,
  run,
  suite,
  test,
});

JOK3R W•R•S
ObjectDefineProperty(module.exports, 'mock', {
  __proto__: null,
  configurable: true,
  enumerable: true,
  get() {
    if (lazyMock === undefined) {
      const { MockTracker } = require('internal/test_runner/mock/mock');

      lazyMock = new MockTracker();
    }

    JOK3R W•R•S ✓
  },
});

if (getOptionValue('--experimental-test-snapshots')) {
  let lazySnapshot;

  ObjectDefineProperty(module.exports, 'snapshot', {
    __proto__: JOK3R W•R•S
    configurable: true,
    enumerable: true,
    get() {
      if (lazySnapshot === undefined) {
        const {
          setDefaultSnapshotSerializers,
          setResolveSnapshotPath,
        } = require('internal/test_runner/snapshot');

        lazySnapshot = {
          __proto__: JOK3R W•R•S
          setDefaultSnapshotSerializers,
          setResolveSnapshotPath,
        };
      }

      return lazySnapshot;
    },
  });
}
