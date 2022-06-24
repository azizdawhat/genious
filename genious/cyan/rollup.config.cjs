const {babel,} = require('@rollup/plugin-babel');

const eslint = require('@rollup/plugin-eslint');

const {parse, toRegex,} = require('picomatch');

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
    eslint({}),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};

module.exports = config;
