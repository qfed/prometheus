---
home: true
heroImage: /theme.jpeg
actionText: Get Started →
actionLink: /components/
sidebar: auto
footer: MIT Licensed | Copyright © 2018-present
---
# prometheus

`prometheus`工程是基于`prometheus-ui`样式的 `react`组件封装化静为动

## 安装依赖

本项目采用`typescript`编写所以要安装下面的依赖

```bash
$ yarn global add tslint typescript
```

用 vscode 为了获得更好的体验要安装 TSlint extensions

## 起步

```bash
$ npm run dev // webpack devserver 开发调试组件
$ npm start // 同上
$ npm run build // 编译产出 q-react.js
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