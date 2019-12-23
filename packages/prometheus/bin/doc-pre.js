const shell = require('shelljs')
const chokidar = require('chokidar')
const fs = require('fs-extra')
const glob = require('glob')
const { green, blue } = require('chalk')
const copyFile = require('../lib/copy-file')

// #1清空目标目录
console.info(green('emptyDirSync docs/components/ done!'))
fs.emptyDirSync('docs/components/')
// #2copy file
const files = glob.sync('src/components/!(_)*/*.md')
files.map(filePath => {
  copyFile(filePath)
})
copyFile('src/components/README.md', 'docs/components/README.md', false)
