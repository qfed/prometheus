# Icon <q-qrcode name='icon' />

基础图标库。选择图标类型，支持通过font-size设置icon大小，color设置icon颜色。

## 代码演示

<q-code>
```jsx

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon, { IconType } from '../index'

const iconList: IconType[] = [
  'arrowRight',
  'arrowUnder',
  'arrowOn',
  'closePop',
  'navBack',
  'selectDownRadio',
  'navSearch',
  'selectUp',
  'warning',
  'success',
  'failure',
  'wait',
  'delete',
  'add',
  'less',
  'notice',
  'refresh',
  'close',
  'slide',
  'hot',
  'friendColor',
  'friendWhite',
  'qq',
  'wechatGreen',
  'wechatWhite'
]
class IconDemo extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <h3>icon</h3>

        <ul>
          {iconList.map((type, index) => (
            <li key={`icon-${index}`}>
              <Icon type={type} />
              <br />
              {type}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
```
</q-code>

## API

| Option   | Description    |  Type              | Default Value |
| :------- | :------------- | :------------------- | :------------ |
| type     | 图标类型       | IconType             | 'arrowRight'  |
| disabled | 是否禁用       | Boolean              | false         |
| style    | 自定义行内样式 | Object               | {}            |
| onClick  | 点击事件的回调 | (event: any) => void | -             |

<q-iframe name="icon" />