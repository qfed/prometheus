const shell = require('shelljs')
const chokidar = require('chokidar')
const copyFile = require('../lib/copy-file')

// # 监听文件变化
const watcher = chokidar.watch('src/components/**/*.md', {
  ignored: /(^|[/\\])\../,
  persistent: true
})
const refreshSite = path => {
  shell.exec('clear')
  if (path === 'src/components/README.md') {
    copyFile('src/components/README.md', 'docs/components/README.md', false)
  } else {
    copyFile(path)
  }
}
watcher.on('change', refreshSite)
// watcher.on('add', refreshSite)

// shell.exec('npm run doc:dev')
