const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const lazypipe = require('lazypipe')
const pxtowhatever = require('pxtowhatever')
const gulpif = require('gulp-if')
const clean = require('gulp-clean-css')
const config = require('../config')
let { options, isProd } = config.styles
// 当前只是简单的使用 pxtowhatever 将像素除2
const processors = [
  autoprefixer(options.autoprefixer),
  pxtowhatever(options.pxtowhatever)
  // pxtorem(options.pxtorem)
]

const lessChannel = lazypipe()
  .pipe(sourcemaps.init)
  .pipe(sass)
  .pipe(
    postcss,
    processors
  )
  .pipe(function() {
    return gulpif(isProd(), clean())
  })
  .pipe(
    sourcemaps.write,
    './maps'
  )
module.exports = lessChannel
