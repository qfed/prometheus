# SpecialPage <q-qrcode name='special-page' />

特殊页面，例如异常反馈页和结果页。支持两种类型默认和结果页，通过isResult设置。可自定义文案、图标、按钮等。

## 代码演示

### 异常页面

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import SpecialPage from '../index'

export default class ErrorPage extends React.Component {
  state = {}

  render() {
    const icon = (
      <img
        className="q-page__wrap__img"
        src='http://img002.qufenqi.com/products/d2/cf/d2cf5bb206a138affc4ad9faca22180d.png'
      />
    )
    return (
      <div>
        <SpecialPage
          icon={icon}
          title='找不到网络'
        />
      </div>
    )
  }
}
```
</q-code>

### 结果页

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import SpecialPage from '../index'
import Icon from '../../icon'

export default class ResultPage extends React.Component {
  state = {}

  render() {
    const icon = (
      <Icon className='q-page__wrap__img' type='success' />
    )
    return (
      <div>
        <SpecialPage
          icon={icon}
          isResult
          title='操作成功'
          subTitle='内容详情可折行，建议不超过两行'
          cancelText='重置'
          confirmText='确定'
        />
      </div>
    )
  }
}
```
</q-code>

## API

| Option      | Description                 |  Type              | Default Value |
| :---------- | :-------------------------- | :------------------- | :------------ |
| className   | specialPage的类名           | String               | -             |
| style       | specialPage的样式          | Object               | {}            |
| isResult    | 是否为结果页                | Boolean              | false         |
| icon        | specialPage图标             | JSX.Element          | -             |
| title       | specialPage标题             | String               | -             |
| subTitle    | specialPage副标题           | String               | -             |
| cancelText  | specialPage底部取消按钮文案 | String               | '重置'        |
| confirmText | specialPage底部确认按钮文案 | String               | '确定'        |
| bottom      | specialPage底部自定义       | JSX.Element          | -             |
| onCancel    | 底部取消回调事件            | (event: any) => void | {}            |
| onConfirm   | 底部确认回调事件            | (event: any) => void | {}            |

<q-iframe name="special-page"  />