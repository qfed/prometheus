const through = require('through2')
const PluginError = require('plugin-error')
const template = require('art-template')

const replaceExt = require('replace-ext')

module.exports = function(data, options, settings) {
  data = data || {}
  options = {
    ...{
      minimize: false,
      cache: false
    },
    ...options
  }

  settings = settings || {}
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      this.push(file)
      return cb()
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError('gulp-art-template', 'Streaming not supported')
      )
    }

    data = { ...data, ...file.data }
    options.filename = file.path
    try {
      file.contents = Buffer.from(
        template.render(String(file.contents), data, options)
      )

      if (typeof settings.ext !== 'undefined') {
        file.path = replaceExt(file.path, settings.ext)
      }
    } catch (err) {
      console.log(err)
      this.emit('error', new PluginError('gulp-art-template', err.toString()))
    }

    this.push(file)
    cb()
  })
}

// remove gulp-util https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
