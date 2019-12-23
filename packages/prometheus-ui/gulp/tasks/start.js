const gulp = require('gulp')
const browserSync = require('browser-sync')
const reload = browserSync.reload
const path = require('path')
const sass = require('gulp-sass')
const styleChannel = require('./styleChannel')
// const fileinclude = require('gulp-file-include')
const template = require('../plugin/gulp-art-template')
const fs = require('fs-extra')
const { parallel, series } = gulp
// 添加一个默认值防止没有引用 qs 直接挂了
let qsrc = {}
try {
  qsrc = fs.readJsonSync('.qsrc.json') // 遇到一个错误 .qsrc.json存在但是只有一个值{ module:'_demo' },root undefined 然后下面 path.join(root, currentModule) 就报错了
} catch (error) {
  qsrc = { module: '_demo', root: 'src/components' }
}
const { module: currentModule, root } = qsrc
const CurrentModulePath = path.join(root, currentModule)
// https://libraries.io/npm/postcss-pxtorem
// defaults: Browserslist’s default browsers (> 0.5%, last 2 versions, Firefox ESR, not dead).

function html() {
  // console.log(getCurrentModule(), CurrentModulePath)

  return gulp
    .src([path.join(CurrentModulePath, '*.html')])
    .pipe(template({ name: currentModule }, { root: 'template' }))
    .pipe(gulp.dest('app'))
    .pipe(reload({ stream: true }))
}
/**
 * 如果有必要可以可以扩展js 预编译
 */
function js() {
  return gulp
    .src(path.join(CurrentModulePath, '*.js'))
    .pipe(gulp.dest('app'))
    .pipe(reload({ stream: true }))
}

function scss() {
  return gulp
    .src([path.join(CurrentModulePath, '*.scss'), 'asserts/*.scss'])
    .pipe(styleChannel())
    .pipe(gulp.dest('app'))
    .pipe(reload({ stream: true }))
}

function start(done) {
  browserSync({
    server: {
      baseDir: ['app', 'asserts']
    },
    ui: false,
    open: false
  })

  // gulp.watch(path.join('src', '**', '*.less'), less)
  gulp.watch(path.join('src', '**', '*.scss'), scss)
  gulp.watch(path.join(CurrentModulePath, '*.js'), js)
  gulp.watch(path.join(CurrentModulePath, '*.html'), html)
  /**
   * 当使用qs命令切换当前模块的时候 browser-sync 不会稳定的刷新当前页面，所以加了下面的延迟强制刷新 hack,
   * 这个hack 的作用为在browser-sync 重新启动后强制刷新页面,如果没起效那就是电脑慢，延迟时间加点
   * reloadOnRestart: true  未达到预期效果
   */
  setTimeout(() => {
    reload()
  }, 1000)

  done && done()
}

// module.exports.build = less
module.exports.start = series(parallel(html, js, scss), start)
