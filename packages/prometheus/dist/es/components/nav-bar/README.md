# NavBar <q-qrcode name='nav-bar' />

导航栏，分为左中右三部分，各部分支持自定义，有两种颜色类型（default和primary）。

## 代码演示

<q-code>
```jsx

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import NavBar, { INavBarProps } from '../index'
import Icon from '../../icon'
import SearchBar from '../../search-bar'

// props 为 IButtonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
const props1: INavBarProps = {
  style: {},
  className: 'btn',
  leftContent: <Icon type='navBack' />,
}
const props2: INavBarProps = {
  style: {},
  leftContent: <Icon type='navBack' />,
  rightContent: '操作',
  type: 'default'
}
const props3: INavBarProps = {
  style: {},
}
class NavBarDemo extends React.Component {
  state = {
    value: ''
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <NavBar {...props1}>首页</NavBar>
        <br />
        <NavBar {...props2}>首页</NavBar>
        <br />
        <NavBar {...props3}>
          <SearchBar value={value} />
        </NavBar>
      </div>
    )
  }
}
ReactDOM.render(<NavBarDemo />, document.getElementById('root'))

```
</q-code>

## API

| Option       | Description            |  Type                 | Default Value |
| :----------- | :--------------------- | :---------------------- | :------------ |
| className    | navBar类名             | String                  | 'btn'         |
| style        | navBar style           | Object                  | {}            |
| type         | navBar类型             | 'primary' `|` 'default' | 'primary'     |
| leftContent  | navBar左边内容         | String `|` JSX.Element  | '取消'        |
| rightContent | navBar右边内容         | String `|` JSX.Element  | '保存'        |
| onLeftClick  | navBar左边点击回调事件 | (e: any) => void        | {}            |
| onRightClick | navBar右边点击回调事件 | (e: any) => void        | {}            |

<q-iframe  name="nav-bar" />