const path = require('path')
const fs = require('fs-extra')
const { green, blue } = require('chalk')
/**
 * copyFile
 * @param {String} source 源文件路径如：`src/components/button/README.md`
 * @param {String}} target 目标文件所在目录如: `docs/componets/`
 * @param {Bool} isDir target 是否是目录,如果不是直接将源文件拷贝到目标路径(包括名字也为target中指定的名字)
 * @description
 * 该方法会将源文件拷贝到目标目录下，产出的文件的名字为源文件的目录名字
 */

module.exports = function copyFile(
  source,
  target = 'docs/components/',
  isDir = true
) {
  if (isDir) {
    // 获取文件父目录
    const name = path
      .parse(source)
      .dir.split('/')
      .slice(-1)

    const content = fs.readFileSync(source)
    fs.outputFileSync(`${target}${name}.md`, content)

    console.info(blue(`copy ${source} to ${target}${name}.md`), green('done!'))
  } else {
    fs.copySync(source, target)
    console.info(blue(`copy ${source} to ${target}`), green('done!'))
  }
}
