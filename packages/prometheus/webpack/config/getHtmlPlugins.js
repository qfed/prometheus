const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const glob = require('glob')
/**
 *
 * var myFilePath = '/someDir/someFile.json';
 * path.parse(myFilePath).base
 * // "someFile.json"
 * path.parse(myFilePath).name
 * // "someFile"
 * path.parse(myFilePath).ext
 * // ".json"
 *'/someDir/someFile.json'
 */
// mhmj
module.exports = (match, template) => {
  const fileList = glob.sync(match)
  // 首页模板  template 参数 基于 webpack 配置的context
  const htmlPlugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'webpack/template/_layout.ejs',
      favicon: 'webpack/template/favicon.ico',
      inject: false,
      title: 'Q-React',
      data: fileList.map(filePath => {
        const name = path.parse(filePath).name
        return { name, path: `${name}/${name}` }
      })
    })
  ]
  // 组件模板
  fileList.forEach(filePath => {
    const name = path.parse(filePath).name
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        filename: `${name}/${name}.html`,
        template: 'webpack/template/demo.ejs',
        favicon: 'webpack/template/favicon.ico',
        inject: false,
        title: name,
        data: { name, path: `${name}/${name}` }
      })
    )
  })
  return htmlPlugins
}
