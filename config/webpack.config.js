const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const project = require("./project.config");

const __DEV__ = project.globals.__DEV__;
const __PROD__ = project.globals.__PROD__;
const __TEST__ = project.globals.__TEST__;

const APP_ENTRIES = [project.paths.client("index.tsx")];

if (__DEV__) {
  APP_ENTRIES.unshift(
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://${project.server_host}:${project.server_port}`,
    "webpack/hot/only-dev-server"
  );
}

const config = {
  devtool: project.compiler_devtool,

  entry: {
    app: APP_ENTRIES,
    vendor: project.compiler_vendors
  },

  output: {
    path: project.paths.dist(),
    filename: `[name].[${project.compiler_hash_type}].js`,
    publicPath: project.compiler_public_path
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css', 'scss'],
    modules: [project.paths.client(), "node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "react-hot-loader/webpack"
          },
          {
            loader: "awesome-typescript-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")]
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [].concat(project.paths.client("styles"))
            }
          }
        ]
      }
    ]
  },

  plugins: [new webpack.DefinePlugin(project.globals), new webpack.optimize.OccurrenceOrderPlugin()],

  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};

if (__DEV__) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: project.paths.public("index.html"),
      hash: false,
      filename: "index.html",
      inject: "body"
    })
  );
} else if (__PROD__) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: project.paths.public("index.html"),
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
        minifyURLs: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

if (!__TEST__) {
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"]
    })
  );
}

if (!__DEV__) {
  config.module.rules.filter(rule => String(rule.test).includes("css")).forEach(rule => {
    const first = rule.use[0];
    const rest = rule.use.slice(1);
    rule.use = ExtractTextPlugin.extract({
      fallback: first,
      use: rest
    });
  });

  config.plugins.push(
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      allChunks: true
    })
  );
}

module.exports = config;
