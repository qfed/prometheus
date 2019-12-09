# Confirm <q-qrcode name='confirm' />

确认框，在模态框中进行显示，用于确认消息。可设置标题、内容、确认操作文字及其回调事件，设置是否显示遮罩层，遮罩层是否可关闭。

## 代码演示

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Confirm, { IConfirmProps } from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'

class Example extends React.Component {
  state = {
    visible: false,
    visibleDemo1: false,
    mask: true,
    maskClosable: false
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }
  render() {
    const {
      visible,
      visibleDemo1,
      maskClosable,
      mask
    } = this.state
    return (
      <div>
        <Button onClick={this.toggleProxy.bind(this, 'visible')}>show</Button>
        <br/>
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo1')}>无标题对话框</Button>
        <Confirm
          title="提示"
          visible={visible}
          mask={mask}
          maskClosable={maskClosable}
          onOk={this.toggleProxy.bind(this, 'visible')}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Confirm>
        <Confirm
          visible={visibleDemo1}
          mask={mask}
          maskClosable={maskClosable}
          onOk={this.toggleProxy.bind(this, 'visibleDemo1')}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Confirm>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visible')}
                checked={visible}
              />
            }
          >
            visible
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'mask')}
                checked={mask}
              />
            }
          >
            mask
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'maskClosable')}
                checked={maskClosable}
              />
            }
          >
            maskClosable
          </List.Item>
        </List>
      </div>
    )
  }
}

```
</q-code>

## API

| Option       | Description        |  Type                    | Default Value |
| :----------- | :----------------- | :------------------------- | :------------ |
| visible      | 对话框是否可见     | Boolean                    | -             |
| title        | 标题               | String                     | -             |
| mask         | 是否显示遮罩层     | Boolean                    | true          |
| maskClosable | 遮罩层是否可关闭   | Boolean                    | false         |
| okText       | 主操作按钮文字     | String                     | '确认'        |
| animation    | 动画效果           | String                     | -             |
| onOk         | 确认点击事件的回调 | (val?: any) => void `|` {} | -             |

<q-iframe name="confirm" />