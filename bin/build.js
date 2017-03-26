const webpack = require('webpack')

const config = require('../config/webpack.config')
const project = require('../config/project.config')

function build () {
  return new Promise((resolve, reject) => {
    const compiler = webpack(config)
    compiler.run((err, stats) => {
      if (err) {
        console.log('Webpack compiler encountered an error', err)
        return reject(err)
      }

      const jsonStats = stats.toJson()
      console.log('Webpack compilation completed')
      console.log(stats.toString(project.compiler_stats))

      if (jsonStats.errors.length > 0) {
        console.log('Webpack compiler encountered errors.')
        console.log(jsonStats.errors.join('\n'))
        return reject()
      } else if (jsonStats.warnings.length > 0) {
        console.log('Webpack compiler encountered warnings.')
        console.log(jsonStats.warnings.join('\n'))
      }

      if (stats.warnings && stats.warnings.length && project.compiler_fail_on_warning) {
        throw new Error('Config set to fail on warning, exiting with status code "1"')
      }

      // console.log('Copying static assets to dist folder');
      // fs.copySync(project.paths.public(), project.paths.dist());

      return resolve()
    })
  })
}

module.exports = build
