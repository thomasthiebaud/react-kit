const argv = require('minimist')(process.argv.slice(2))

function run () {
  const task = argv._[0]

  if (!task) {
    console.log('Missing task name !!!')
    process.exit(-1)
  }

  if (argv.d) {
    process.env.DEBUG = 'app:*'
  }

  process.env.NODE_ENV = argv.e || 'development'

  const module = require(`./${task}.js`)
  module().catch(() => process.exit(1))
}

run()
