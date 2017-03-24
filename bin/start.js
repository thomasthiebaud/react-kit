const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../config/webpack.config');
const project = require('../config/project.config');

function runDevServer() {
  const devServer = new WebpackDevServer(webpack(config), {
    // Enable gzip compression of generated files.
    compress: true,
    // clientLogLevel: 'none',
    // contentBase: project.compiler_public_path,
    hot: true,
    publicPath: project.compiler_public_path,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
  });

  // Launch WebpackDevServer.
  devServer.listen(project.server_port, project.server_host, (err) => {
    if (err) {
      console.log('Webpack dev server encountered an error', err);
      return reject(err);
    }
    console.log(`Listening at ${project.server_host}:${project.server_port}`);
  });
}

runDevServer()