'use strict';

const eslintConfigReact = require('..');
const assert = require('assert').strict;

assert.strictEqual(eslintConfigReact(), 'Hello from eslintConfigReact');
console.info("eslintConfigReact tests passed");
