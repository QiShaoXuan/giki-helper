const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const program = require('commander')

module.exports = async () => {
  program
    .command('publish')
    .description('发布 giki')
    .action(async (fileDir, cmd) => {
      const configPath = path.resolve(process.cwd(), './private-config.json')
      const articlesDir = path.resolve(process.cwd(), './articles')

      if (!fsExtra.existsSync(configPath)) {
        return console.log(chalk.red(`需要在 ./private-config.json 中存放 gikiToken 用于发布。`))
      }
      if (!fsExtra.existsSync(articlesDir)) {
        return console.log(chalk.red(`需要在 ./articles 中存放文章用于发布。`))
      }

      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

      require('./publish')(articlesDir, config)
    })
}
