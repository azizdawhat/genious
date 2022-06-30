const {babel,} = require('@rollup/plugin-babel');

const commonjs = require('@rollup/plugin-commonjs');

const eslint = require('@rollup/plugin-eslint');

const {nodeResolve,} = require('@rollup/plugin-node-resolve');

const {parse, toRegex,} = require('picomatch');

const {terser,} = require('rollup-plugin-terser');

const {output: g9,} = parse('@genious/*(/**/*)');

const {output: node,} = parse('node:*(/*)');

const config = {
  external: [
    toRegex(g9),
    toRegex(node),
  ],
  input: {
    'Data.readFile': './src/Data.readFile.js',
    index: './src/index.js',
  },
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
