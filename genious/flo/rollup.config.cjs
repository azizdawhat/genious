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
    'Flo.from': './src/Flo.from.js',
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

const {output: [, output,],} = config;

function configFn({watch: key = false,}, {[key]: value = {},} = this) {
  return value;
}

module.exports = configFn.bind({
  [false]: {
    ...config,
    watch: false,
  },
  [true]: {
    ...config,
    output: {
      ...output,
      dir: './.tmp',
    },
    watch: {},
  },
});
