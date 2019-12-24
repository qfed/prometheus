# prometheus

prometheus是基于趣店设计体系的 React UI 组件库，服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。该组件库分为`prometheus`与`prometheus-ui`，相互结合使得`react`组件封装化静为动。

## 安装

```bash
$ yarn @qfed/prometheus
```

用 vscode 为了获得更好的体验要安装 TSlint extensions

## 在线链接[https://qfed.github.io/prometheus/]

## 引用 prometheus 例子

```jsx
import React from "react"
import ReactDOM from "react-dom"
import { Button, IButtonProps } from "@qfed/prometheus"

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
