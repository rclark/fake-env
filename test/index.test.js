'use strict';

const test = require('tape');
const FakeEnv = require('..');

process.env.THE_TEST = 'original';

test('fakeout', (assert) => {
  assert.equal(process.env.THE_TEST, 'original', 'at original value');
  const env = new FakeEnv({ THE_TEST: 'mocked' });
  assert.equal(process.env.THE_TEST, 'mocked', 'has been mocked');
  env.restore();
  assert.equal(process.env.THE_TEST, 'original', 'has been restored');
  assert.end();
});
