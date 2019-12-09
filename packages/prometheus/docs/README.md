# Prometheus

`Prometheus-react`工程是基于`Prometheus-ui`样式的`react`组件封装化静为动

## 安装与引用

```bash
$ yarn add git+ssh://git@git.qufenqi.com:fe/q-react.git#v0.1.20
```

引用例子可以参考[q-test](https://git.qufenqi.com/lizhuo/q-test)

## 开发起步

```bash
$ npm run dev // webpack devserver 开发调试组件
$ npm start // 同上
$ npm run build // 编译产出 q-react.js
```

## 组件例子

- `src/componets/button/index`
- 组件所在目录命名规则为`xxx-xxx`的形式小写单词多个单词之间以`-`链接
- 组件的`export default` 为`ComponentName`Pascal规则,另一个`export` 为react 组件 props 接口 `I[ComponentName]Props`

```jsx
import '../../base'
import React from 'react'

export interface IButtonProps {
  name: string
  height?: number
  width?: number
}
/**
 * Button
 * @prop {Number} width desc
 * @prop {Number} height desc
 * @example
 * import Button, { IButtonProps } from 'q-react'
 *    let props:IButtonProps ={ name:'ts-button' }
 *    <Button {...props} />
 */
export default class Button extends React.Component<IButtonProps, any> {
  static defaultProps = {
    height: 100,
    width: 100
  }
  state = { name: 'Button' }
  render() {
    const { width, height, name } = this.props

    return (
      <div className="q-btn q-btn--primary">
        {name} {height} {width} JSX hot reload!!!
      </div>
    )
  }
}
```

## 调试组件例子

- `src/componets/button/demo/index`

```jsx
import * as React from "react"
import * as ReactDOM from "react-dom"
import Button, { IButtonProps } from "../index"

// props 为 IButtonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
const props: IButtonProps = { name: "ts-button" }

// 如果有一些特殊需求也可以写一个class,对属性做一些个性化的处理,比如传入的数据为后台接口取回来的data
// class ButtonInit implements IButtonProps {
//   public name: string
//   // public width: number
//   // public height: number
//   constructor({ name }: { name: string }) {
//     this.name = name
//   }
// }
// let props: IButtonProps = new ButtonInit(data)
class ButtonDemo extends React.Component {
  state = {}

  render() {
    return <Button {...props} />
  }
}
// id 为 q-componentname ,之所以没有使用固定的id 比如（root) 是考虑如何以后将不同的DEMO 页面合并在一起如果id 相同那么渲染就会报错
ReactDOM.render(<ButtonDemo />, document.getElementById("q-button"))
```

## 引用 q-react 例子

- 具体可以参考`DEMO`[q-test](https://git.qufenqi.com/lizhuo/q-test)

```jsx
import React from "react"
import ReactDOM from "react-dom"
import { Button, IButtonProps } from "@q/q-react"

class ButtonDemo extends React.Component {
  state = {}

  render() {
    const props: IButtonProps = { name: "q-button", width: 111 }
    return (
      <div>
        <div className="q-icon-Choice" />
        <h1>h1</h1>
        <Button {...props} />
        <h2>h2</h2>
        <h3>h3</h3>
      </div>
    )
  }
}
ReactDOM.render(<ButtonDemo />, document.getElementById("root")) 
```

## 忽略下面

多个 html 入口 一个 js 入口

[eslint-react-rules](https://github.com/yannickcr/eslint-plugin-react/tree/f80e7448a751cc587ab03ffc18468d9abd4c0cff/docs/rules)

```bash
npm install git+ssh://git@github.com:npm/npm.git#v1.0.27
npm install git+ssh://git@github.com:npm/npm#semver:^5.0
npm install git+https://isaacs@github.com/npm/npm.git
npm install git://github.com/npm/npm.git#v1.0.27
GIT_SSH_COMMAND='ssh -i ~/.ssh/custom_ident' npm install git+ssh://git@github.com:npm/npm.git
```

看起来根据 生成的 组件 js 生成 markdown 感觉。。。。。。。。。

"eslint-config-docave": "git+ssh://git@github.com/sharpgui/es-config.git",
"q-react": "../q-react",
test webhook1