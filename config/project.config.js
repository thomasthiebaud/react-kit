const path = require('path');
const pck = require('../package.json');

const environments = require('./env.config');

const config = {
  env: process.env.NODE_ENV || 'development',

  path_base: path.resolve(__dirname, '..'),
  dir_client: 'src',
  dir_dist: 'dist',

  server_host: 'localhost',
  server_port: process.env.PORT || 3000,

  compiler_devtool: 'eval',
  compiler_public_path: '/',
  compiler_hash_type: 'hash',
  compiler_fail_on_warning: false,
  compiler_stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  },
  compiler_vendors: Object.keys(pck.dependencies || {}),
};

function base(...args) {
  return path.resolve(...[config.path_base].concat(args));
}

config.paths = {
  base,
  client: base.bind(null, config.dir_client),
  dist: base.bind(null, config.dir_dist),
};

config.globals = {
  'process.env': {
    NODE_ENV: JSON.stringify(config.env),
  },
  NODE_ENV: config.env,
  __DEV__: config.env === 'development',
  __PROD__: config.env === 'production',
  __TEST__: config.env === 'test',
};

const overrides = environments[config.env];
if (overrides) {
  Object.assign(config, overrides(config));
}

module.exports = config;
