const {babel,} = require('@rollup/plugin-babel');

const eslint = require('@rollup/plugin-eslint');

const {readdirSync,} = require('node:fs');

const {format,} = require('node:path');

const dir = './src';

const config = {
  input: readdirSync(dir)
    .filter(function callbackFn(base) {
      return !base.startsWith('_');
    })
    .map(function callbackFn(base) {
      return format({base, dir,});
    }),
  output: [
    {
      chunkFileNames: '[name]-[hash].cjs',
      dir: './dist',
      entryFileNames: '[name].cjs',
      exports: 'auto',
      format: 'commonjs',
    },
    {
      dir: './dist',
      format: 'module',
    },
  ],
  plugins: [
    eslint({}),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};

module.exports = config;
