const {babel,} = require('@rollup/plugin-babel');

const eslint = require('@rollup/plugin-eslint');

const {parse, toRegex,} = require('picomatch');

const {output: g9,} = parse('@genious/*(/**/*)');

const {output: node,} = parse('node:*(/*)');

const config = {
  external: [
    toRegex(g9),
    toRegex(node),
  ],
  input: {
    'Data.fromFile': './src/Data.fromFile.js',
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
    eslint({}),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};

module.exports = config;
