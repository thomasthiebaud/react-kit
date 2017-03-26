const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('../config/webpack.config')
const project = require('../config/project.config')

function runDevServer () {
  const devServer = new WebpackDevServer(webpack(config), {
    compress: true,
    hot: true,
    publicPath: project.compiler_public_path,
    stats: project.compiler_stats,
    watchOptions: {
      ignored: /node_modules/,
    },
  })

  return new Promise((resolve, reject) => {
    devServer.listen(project.server_port, project.server_host, (err) => {
      if (err) {
        console.log('Webpack dev server encountered an error', err)
        return reject(err)
      }
      console.log(`Listening at ${project.server_host}:${project.server_port}`)
      return resolve()
    })
  })
}

module.exports = runDevServer
