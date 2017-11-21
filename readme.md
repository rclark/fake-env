# fake-env

Fakeout your environment variables, maybe for your tests.

## Example

```js
const test = require('tape');
const FakeEnv = require('fake-env');

test('fakeout $HOME', (assert) => {
  assert.equal(process.env.HOME, '/Users/rclark', 'yep, that is correct');

  const env = new FakeEnv({
    HOME: '/tricked/you'
  });

  assert.equal(process.env.HOME, '/tricked/you', 'ooooh its been mocked!');

  env.restore();

  assert.equal(process.env.HOME, '/Users/rclark', 'restored to normal');

  assert.end();
});
```
