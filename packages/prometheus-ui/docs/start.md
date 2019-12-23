# q-react 发展计划

## 关于站点 1.7 ~ 1.9 3 天

q-ui 站点只应该展示基础的 组件样式 ，DOM 结构 ,全局样式规范，这样不管之后前端框架是什么技术只需要基于现有的结构封装一下就可以了，q-ui 要构建成一个长久流传和沉淀的项目，成为设计，开发，产品 等团队的参考与规范

- 添加 `q-react` 站点用来展示 react 组件的 API 和交互效果，目前只有一个 q-ui 站点的功能只是展示静态的样式与 DOM 结构,不够直观(q-react 是基于 typescript 构建的当使用 vscode F12 查看定义的时候就可以得到一个可以得到一个完整的 API 定义说明，多数时候开发者只要查看定义就可以对组件的用法有大体的掌控)
- 规划构建新的站点发布流程，在一个域名下展示 `q-ui` ,`q-react`,以及之后可能有的 `q-xxx`
- 锦上添花考虑在站点上添加个换肤开关直接在站点上切换展示不同主题色下的样式

## q-ui 1.10 ~ 1.15 4 天

- 关于图标：去掉之前基于大白添加的业务图标也组件图标，添加 iconfont 图标作为组件图标，作为组件图标的话在 iconfont 搜索已经绰绰有余，而业务需要的图标现在看来用图片也无伤大雅,使用 AI 绘制之后再继续尝试
- 换肤功能目前已经做了一部分，还需要一些时间稳定和优化
- 优化现有 q-ui 站点，在封装 q-react 的过程中，之前 q-ui 规划的样式或多或少都产生了变化，并且之前的站点的例子也有些单薄需要填补修正，移除 q-ui 中动态部分，完全化为静态展示
- 迁移部分 q-react 组件（dialog,picker-view)的样式到 q-ui 中 目前 q-react 除了封装我们自己写的样式结构外也对直接引入第三方组件库进行尝试，这样做目的其一就是为了快，其二就是积累一些经验，目前我们引入的第三方库皆为 rmc-component(antd 中引入的组件库) 下的组件

## q-react 1.16 ~ 1.21 4 天

- 完善 loading ，tab ，dialog ，pickerview 这几个是目前已经封装完毕，但是有明显欠缺的组件优先优化一下

- 完善文档和DEMO,这个没法一气呵成先做到基本能让人读懂

## q-react 使用

目前当引入 q-react 的时候，q-react 中默认引入的 q-ui 所以只安装 q-react 就 ok 了

- 安装 `yarn add git+ssh://git@git.qufenqi.com:fe/q-react.git#vx.x.x` && `npm install git+ssh://git@git.qufenqi.com:fe/q-react.git#vx.x.x`
  `#vx.x.x`为你当前使用版本的 tag [更多用法参考官方文档](https://docs.npmjs.com/cli/install)
- 引用例子[DEMO 链接](https://git.qufenqi.com/lizhuo/q-test)

```js
import React from "react"
import ReactDOM from "react-dom"
import { Button, List, Toast } from "@q/q-react"
let seed = 0
class Demo extends React.Component {
  state = {}
  show = () => {
    Toast.info(`infor${seed++}`)
  }
  render() {
    return (
      <div>
        <div className="q-icon-Choice" />
        <h1>h1</h1>
        <List>
          <List.Item>
            <Button style={{ width: 50 }} onClick={this.show}>
              ok
            </Button>
          </List.Item>
          <List.Item>jjjjjjj</List.Item>
        </List>

        <h2>h2</h2>
        <h3>h3</h3>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, document.getElementById("root"))
```

### q-react 自定义变量

在 less-loader 中配置 modifyVars 目前就`brand-primary`主题色变量效果明显，其他变量将陆续开放

```js
 {
        test: /\.(less|css)$/,
        include: [/node_modules/, path.resolve(__dirname, '..', 'src')],
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()]
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'brand-primary': '#4167b1' // 全局主色
              }
              // javascriptEnabled: true
            }
          }
        ]
},
```
