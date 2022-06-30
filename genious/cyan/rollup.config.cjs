const {babel,} = require('@rollup/plugin-babel');

const commonjs = require('@rollup/plugin-commonjs');

const eslint = require('@rollup/plugin-eslint');

const {nodeResolve,} = require('@rollup/plugin-node-resolve');

const {parse, toRegex,} = require('picomatch');

const {terser,} = require('rollup-plugin-terser');

const {output: g9,} = parse('@genious/*(/**/*)');

const config = {
  external: [
    toRegex(g9),
  ],
  input: './src/index.js',
  output: [
    {
      exports: 'auto',
      file: './dist/index.cjs',
      format: 'commonjs',
    },
    {
      file: './dist/index.js',
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
