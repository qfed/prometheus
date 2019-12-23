/**
 * 产出组件库
 */
const webpack = require('webpack')
const webpackConfig = require('../webpack/webpack.prod')
const chalk = require('chalk')
const indexCreater = require('index-creater')
const fs = require('fs-extra')
const config = require('../config')
const env = process.env.NODE_ENV
const outputPath = env === 'production' ? 'dist' : 'build'
fs.emptyDirSync(outputPath)

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

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(
    stats.toString({
      chunks: false, // 使构建过程更静默无输出
      colors: true // 在控制台展示颜色
    })
  )
  // 处理完成
  console.log(chalk.green('succeed build q-react.js'))
})
