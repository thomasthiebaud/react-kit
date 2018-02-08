const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: ['env', 'react'],
        plugins: [
          'react-hot-loader/babel',
          'syntax-dynamic-import',
        ],
      },
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            autoprefixer(),
          ],
        },
      }, {
        loader: 'sass-loader',
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
}

module.exports = config
