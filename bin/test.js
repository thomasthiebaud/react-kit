const jest = require('jest')
const path = require('path')

function test () {
  return new Promise((resolve, reject) => {
    jest.runCLI({}, path.resolve('.'), results => {
      if (!results || !results.success) {
        return reject(results)
      }
      return resolve(results)
    })
  })
}

module.exports = test
