const Koa = require('koa')
const path = require('path')
const koaStatic = require('koa-static')
const chalk = require('chalk')
const app = new Koa()
const getPort = require('../lib/get-port')
const staticPath = path.join('docs', '.vuepress', 'dist')

app.use(koaStatic(staticPath))

// app.use( async ( ctx ) => {
//   ctx.body = 'hello world'
// })
let port = getPort(3001)
app.listen(port, () => {
  console.info(
    chalk.green('[q-ui]') +
      ' is starting at ' +
      chalk.blue(`http://localhost:${port}/`)
  )
})
