'use strict'
const gulp = require('gulp')
const chalk = require('chalk')
// const requireDir = require('require-dir')
// requireDir('./gulp/tasks', { recurse: true })
const { start } = require('./gulp/tasks/start')
const { styles } = require('./gulp/tasks/styles')

module.exports.start = start

module.exports.default = styles
