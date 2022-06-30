const {babel,} = require('@rollup/plugin-babel');

const commonjs = require('@rollup/plugin-commonjs');

const eslint = require('@rollup/plugin-eslint');

const {nodeResolve,} = require('@rollup/plugin-node-resolve');

const {readdirSync,} = require('node:fs');

const {format,} = require('node:path');

const {terser,} = require('rollup-plugin-terser');

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
    nodeResolve({}),
    commonjs({}),
    eslint({}),
    babel({
      babelHelpers: 'bundled',
    }),
    terser({}),
  ],
};

module.exports = config;
