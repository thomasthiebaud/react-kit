const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
})

const config = {
  bail: true,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer(),
              cssnano(),
            ],
          },
        }, {
          loader: 'sass-loader',
        }],
        fallback: 'style-loader',
      }),
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
    }, {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
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
    new UglifyJsPlugin({
      parallel: true,
      cache: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    extractSass,
  ],
}

module.exports = config
