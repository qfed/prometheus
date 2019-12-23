# JumpPrompt

配合 History + react-router 使用的回退拦截
使用时建议将它注入到组件公有的基类中，作为 render 方法使用，需要的页面直接调用 render 即可

## 代码演示

```jsx
import React, { Component } from 'react'
import JumpPrompt from '../index'
import history from './history'

export default class Target extends Component {
  render() {
    return (
      <div>
        <JumpPrompt history={history} />
        回退会出现弹窗
      </div>
    )
  }
}
```

## API

| Option         | Description                |  Type               | Default Value                                                                                                   |
| :------------- | :------------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| onConfirm      |  确认的回调                | function            | null                                                                                                            |
| onCancel       | 取消的回调                 | function            | null                                                                                                            |
| when           | 何时启用拦截               | boolean             | true                                                                                                            |
| dialogChildren | 弹窗的内容                 | string, JSX.Element | [<div key='dialogChildren1'>确认退出申请吗？</div>,<div key='dialogChildren2'>极速审核，最快一分钟放款！</div>] |
| okText         | 确认的文字                 | string              | 继续申请                                                                                                        |
| cancelText     | 取消的文字                 | string              | 残忍拒绝                                                                                                        |
| dialogTitle    | 弹窗的标题                 | string              | ''                                                                                                              |
| history        | **_ history 对象，必须 _** | history 对象        | null                                                                                                            |

<q-iframe name="jump-prompt"  />
