const program = require('commander')
const publish = require('./publish/index')
const pkg = require('../package.json')

const commanders = {
  publish,
}

module.exports = () => {
  program.version(`${pkg.name} ${pkg.version}`).usage('giki <command>')

  Object.values(commanders).forEach((commander) => commander())

  if (process.argv.length <= 2) {
    program.outputHelp()
  }

  program.parse(process.argv)
}
