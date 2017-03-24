const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const project = require('./project.config')

const __DEV__ = project.globals.__DEV__;
const __PROD__ = project.globals.__PROD__;
const __TEST__ = project.globals.__TEST__;

const APP_ENTRIES = [project.paths.client('index.js')];

if (__DEV__) {
  APP_ENTRIES.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${project.server_host}:${project.server_port}`,
    'webpack/hot/only-dev-server'
  )
}

const config = {
  devtool: project.compiler_devtool,

  entry: APP_ENTRIES,

  output: {
    path: project.paths.dist(),
    filename: `[name].[${project.compiler_hash_type}].js`,
    publicPath: project.compiler_public_path,
  },

  resolve: {
    modules: [
      project.paths.client(),
      'node_modules',
    ],
  },

  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: project.paths.client('index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

if (__DEV__) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin());
}

module.exports = config
