/**
 * 启动webpack-dev-server
 */
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../webpack/webpack.dev.js')
const chalk = require('chalk')
const getPort = require('../lib/get-port')
const indexCreater = require('index-creater')
const shell = require('shelljs')
// const config = require('../config')

indexCreater([
  {
    root: 'src',
    match: 'components/!(*.*|demo)', // 此处参数为glob类型
    separator: /(-|_)/g,
    exportPattern: 'export { default as [name] } from \'[path]\'',
    suffix: '.ts',
    ignore: ['components/_*']
  }
])

const options = {
  contentBase: './build',
  hot: true,
  inline: true,
  host: 'localhost',
  overlay: true
}

WebpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)
const port = getPort()
server.listen(port, 'localhost', () => {
  console.log(chalk.blue(`dev server listening on port ${port}`))
  shell.exec('say 床前明月光,疑是地上霜')
  shell.exec(`say 端口号${port}`)
})
