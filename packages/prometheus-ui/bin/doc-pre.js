const shell = require('shelljs')
const chokidar = require('chokidar')
const fs = require('fs-extra')
const { green, blue } = require('chalk')
const glob = require('glob')
const spawnSync = require('child_process').spawnSync
const copyFile = require('../lib/copy-file')

spawnSync('npm', ['run', 'build'], { stdio: 'inherit' })

// 将q-ui 产出的css copy 到静态站点的 public 目录
shell.cp('-r', 'build/css', 'docs/.vuepress/public')
console.log(green('Success! '), 'copy static files to', blue('public'), '...')
// #1清空目标目录
console.info(green('emptyDirSync docs/components/ done!'))
fs.emptyDirSync('docs/components/')
// #2copy file
const files = glob.sync('src/components/!(_)*/*.md')
files.map(filePath => {
  copyFile(filePath)
})
copyFile('src/components/README.md', 'docs/components/README.md', false)
