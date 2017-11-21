'use strict'

class FakeEnv {
  constructor(env) {
    this.original = Object.keys(env).reduce((original, key) => {
      original[key] = process.env[key];
      if (!env[key]) delete process.env[key];
      else process.env[key] = env[key];
      return original;
    }, {});
  }

  restore() {
    Object.keys(this.original).forEach((key) => {
      process.env[key] = this.original[key];
    });
  }
}

module.exports = FakeEnv;
