const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const project = require('./project.config')

const __DEV__ = project.globals.__DEV__
const __PROD__ = project.globals.__PROD__
const __TEST__ = project.globals.__TEST__

const APP_ENTRIES = [project.paths.client('index.js')]

if (__DEV__) {
  APP_ENTRIES.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${project.server_host}:${project.server_port}`,
    'webpack/hot/only-dev-server'
  )
}

const config = {
  devtool: project.compiler_devtool,

  entry: {
    app: APP_ENTRIES,
    vendor: project.compiler_vendors,
  },

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
    new webpack.DefinePlugin(project.globals),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}

if (__DEV__) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: project.paths.client('index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
    })
  )
} else if (__PROD__) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: project.paths.client('index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin())
}

if (!__TEST__) {
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }))
}

module.exports = config
