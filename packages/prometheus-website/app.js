const Koa = require("koa")
const fs = require("fs-extra")
const shell = require("shelljs")
const path = require("path")
const marked = require("marked")
const Router = require("koa-router")
const app = new Koa()
const UIPath = 'q-ui'
const ReactPath = 'q-react'
// 子路由
let home = new Router()
home.get("/", async ctx => {
  const md = fs.readFileSync(path.join(__dirname, "README.md"), {
    encoding: "utf8"
  })
  console.log("test pm2 --wacth")
  ctx.body = marked.parse(md)
})

// 子路由2
let deploy = new Router()
deploy
  .post("/ui", async ctx => {
   
    deployWebsite()
    ctx.body = "deploy ui succeed"
  })
  .post("/react", async ctx => {
    deployReactWebsite()
    ctx.body = "react"
  })

// 装载所有子路由
let router = new Router()
router.use("/", home.routes(), home.allowedMethods())
router.use("/deploy", deploy.routes(), deploy.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3003, () => {
  console.log("[demo] route-use-middleware is starting at port 3003")
})

function exec(cmd) {
  const { code, stdout, stderr } = shell.exec(cmd)
  if (code !== 0) {
    throw stderr
  }
}
function deployReactWebsite(cb = () => {}) {
  // exec(`cd ../${ReactPath} && git reset --hard origin/master && git pull origin master && yarn`)
  exec(`cd ../${ReactPath} && yarn run deploy`)
  exec(`cd ../${ReactPath} && yarn run deploy:demo`)
  exec('rm -rf ./www/react')
  exec(`cp -r ../${ReactPath}/webpack/dist ./www/react-demo`)
  exec(`cp -r ../${ReactPath}/docs/.vuepress/dist ./www/react`)
  // exec(`yarn run deploy:demo`)
}
function deployWebsite( cb = () => {}) {
  // exec(`cd ../${UIPath} && git reset --hard origin/master && git pull origin master && yarn && yarn run deploy`)
    exec(`cd ../${UIPath} && yarn run deploy`)

  exec('rm -rf ./www')
  exec(`cp -r ../${UIPath}/docs/.vuepress/dist ./www`)
  exec(`cp -r ../${ReactPath}/webpack/dist ./www/react-demo`)
  exec(`cp -r ../${ReactPath}/docs/.vuepress/dist ./www/react`)
  // exec(`cp -r ../${ReactPath}/docs/.vuepress/dist ./www/react`)
}
