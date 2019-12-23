const chalk = require('chalk')
const shell = require('shelljs')
const autoImport = require('../lib/auto-import')

let env = process.env.NODE_ENV
const assertPath = env === 'development' ? 'build' : 'dist'
shell.rm('-rf', assertPath)
console.log(
  chalk.green('Success! '),
  'remove',
  chalk.blue(`${assertPath}/**/*`),
  '...'
)

autoImport('src/components', {
  match: '!(_*)/index.scss',
  separator: /(-|_)/g,
  exportPattern: '@import "[path]";',
  suffix: 'scss',
})
