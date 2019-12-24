# prometheus

prometheus 是趣店前端移动端组件库，该组件库分为：

- `prometheus-ui` 组件样式库规划DOM结构；
- `prometheus` 基于 `prometheus-ui` 的 react 组件库，化静为动；


## Install prometheus

```bash
$ yarn add @qfed/prometheus
```

## 在线链接[https://qfed.github.io/prometheus/]

## Getting started 

```jsx
iimport React from "react"
import ReactDOM from "react-dom"
import { Button } from "@qfed/prometheus"

class ButtonDemo extends React.Component {
  state = {}

  render() {
   
    return (
      <div>
        <Button  type="primary" >button primary</Button>
      </div>
    )
  }
}
ReactDOM.render(<ButtonDemo />, document.getElementById("root"))
```
