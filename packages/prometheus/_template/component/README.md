# {{name|pascal}}

按钮，相应用户点击行为，支持两种主题。

- primary
- defalut

## 代码演示

```jsx
import * as React from "react"
import * as ReactDOM from "react-dom"
import Button, { IButtonProps } from "../index"

// props 为 IButtonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
const props: IButtonProps = {
  disabled: false,
  style: { color: 'red' },
  onClick(e) {
    console.log(e)
  }
}
class ButtonDemo extends React.Component {
  state = {}

  render() {
    return <Button {...props}>default</Button>
  }
}

ReactDOM.render(<ButtonDemo />, document.getElementById("q-button"))
```

## API

| Option     | Description    |  Type                     | Default Value |
| :--------- | :------------- | :-------------------------- | :------------ |
| style      | Button的样式  | object                      | {}            |
| disabled   | 是否禁用       | boolean                     | false         |
| type       | 按钮类型       | 'defalut'  `|` 'primary'    | 'primary'     |
| onClick    | 点击按钮的回调 | (event: any) => void `|` {} | -             |
| classNames | 获取样式类名   | get() => classaNames        | -             |

<q-iframe name="button"  />