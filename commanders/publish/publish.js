const api = require('../../api')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const ora = require('ora')

const spinner = ora({ text: `正在发布` })

const httpPublish = (data) => {
  const { content } = data
  if (!content) {
    throw new Error(`avoid to publish empty text`)
  }
  return api.save('talks', {
    actions: [],
    image: [],
    tags: [],
    text: content,
  })
}

const getArtilces = (articlesDir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(articlesDir, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}

const getArticleContent = (articlePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(articlePath, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

const publish = (articlesDir) => {
  getArtilces(articlesDir)
    .then(async (articleList) => {
      return await inquirer.prompt([
        {
          name: 'name',
          type: 'list',
          message: `选择需要发布的文章:`,
          choices: articleList.map((v) => ({ name: v, value: v })),
        },
      ])
    })
    .then(({ name }) => {
      spinner.start()
      return getArticleContent(path.resolve(articlesDir, name))
    })
    .then((content) => httpPublish({ content }))
    .then((res) => {
      if (res.ok) {
        console.log(logSymbols.success, chalk.green('发布成功 :)'))
      } else {
        console.log(chalk.red('发布失败 :('))
        console.log(`${res.status}`)
      }
      spinner.stop()
    })
    .catch((err) => {
      spinner.stop()
      console.log(chalk.red('发布失败 :('))
      console.log('err', err)
    })
}

module.exports = publish
