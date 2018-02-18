const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          plugins: [
            'syntax-dynamic-import',
            'react-hot-loader/babel',
          ],
        },
      }, {
        loader: 'ts-loader',
      }],
    }, {
      test: /\.s?css$/,
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
