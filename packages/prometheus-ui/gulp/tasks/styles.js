const gulp = require('gulp')
const config = require('../config')
const styleChannel = require('./styleChannel')
const handleErrors = require('../util/handleErrors')
const chalk = require('chalk')
const { series } = gulp
let { src, dest, isProd } = config.styles

const preStyles = done => {
  if (isProd()) {
    return gulp
      .src(['./src/**/*.scss', '!src/components/_*/**']) // '!src/images/*'
      .pipe(gulp.dest('./dist/scss'))
      .on('end', () => {
        console.log(chalk.green('^_^ build succeed'))
      })
  }
  done()
}
const styles = () => {
  return gulp
    .src(src)
    .pipe(styleChannel())
    .on('error', handleErrors)
    .pipe(gulp.dest(dest()))
}
// series(preStyles, styles)()直接执行但是没有 gulp log
module.exports.styles = series(preStyles, styles)
