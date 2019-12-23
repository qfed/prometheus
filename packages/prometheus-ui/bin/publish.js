#!/usr/bin/env node
const shell = require('shelljs')
const pkg = require('../package.json')
const yargs = require('yargs')
const { blue, red } = require('chalk')
const OperateEnum = ['major', 'minor', 'patch']
const {
  argv: { type, message }
} = yargs
  .option('type', {
    alias: 't',
    default: 2,
    describe: 'major:0,minor:1,patch:2 default patch:2',
    type: 'number'
  })
  .option('message', {
    alias: 'm',
    default: 'publish',
    describe: 'publist message',
    type: 'string'
  })
  .alias('h', 'help')
if (!checkMaster()) {
  console.log(red('必须在master分支执行publish命令'))
  process.exit(0)
}
if (!checkClean()) {
  console.log(red('当前代码并不clean'))
  process.exit(0)
}
// major 0 minor 1 patch 2
let [major, minor, patch] = pkg.version.match(/\d+/g)
type ? (type === 1 ? minor++ : patch++) : major++ //eslint-disable-line

exec('git pull')
exec('npm run build:prod')
exec('git add .')
exec(`git commit -m "add:v${major}.${minor}.${patch}"`)
exec(`npm version ${OperateEnum[type]} -m "${message} %s"`)
exec(`git push origin v${major}.${minor}.${patch}`)
exec('npm publish')
exec('git push')

function exec(cmd) {
  const { code, stdout, stderr } = shell.exec(cmd)
  if (code !== 0) {
    console.log(red(code))
    console.error(blue(cmd))
    console.error(red(stderr))
    process.exit(1)
  }
}
/**
 * 检验当前分支是否为master 分支
 */
function checkMaster() {
  return (
    shell.exec('git rev-parse --abbrev-ref HEAD').stdout.replace(/\s/, '') ===
    'master'
  )
}

function checkClean() {
  return shell.exec('git status --porcelain').stdout === ''
}
