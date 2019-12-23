# Modal <q-qrcode name='modal' />

基础模态框 Modal 组件，基于父窗体弹出子窗体显示信息，子窗体支持自定义。

## 代码演示

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Modal from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'

class ModalDemo extends React.Component {
  state = {
    visibleDemo1: true,
    visibleDemo2: false,
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
    const { visibleDemo1, visibleDemo2, maskClosable, mask } = this.state
    return (
      <div>
        <Button onClick={() => this.setState({ visibleDemo1: true })}>showDemo1</Button>
        <br/>
        <Button onClick={() => this.setState({ visibleDemo2: true })}>showDemo2</Button>

        <Modal
          mask={mask}
          maskClosable={maskClosable}
          visible={visibleDemo1}
          title='标题单行'
          onClose={() => this.setState({ visibleDemo1: false })}>
          <div style={{ width: 250, height: 200, background: '#fff' }}>
            文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。
            文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。
            文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。
            文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。文案内容显示区域，显示所有，超过显示区域，滑动显示。
          </div>
        </Modal>
        <Modal
          mask={mask}
          maskClosable={maskClosable}
          visible={visibleDemo2}
          type='primary'
          onClose={() => this.setState({ visibleDemo2: false })}>
          <div
            style={{
              width: 270, height: 350,
              backgroundSize: 270,
              borderRadius: '7px 6px 6px 7px',
              backgroundImage: `url('http://img002.qufenqi.com/products/99/7e/997e00e11138cab2d7b0321fe0326b09.png')`
            }}
          >
          </div>
        </Modal>
        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visibleDemo1')}
                checked={visibleDemo1}
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

| Option       | Description        |  Type                | Default Value |
| :----------- | :----------------- | :--------------------- | :------------ |
| title        | 标题              | String `|` JSX.Element | ''            |
| type         | 类型(default-默认,primary-内容充满整个modal框) | string       | default         |
| visible      | 显示/隐藏设置      | Boolean                | false         |
| mask         | 是否显示蒙层       | Boolean                | true          |
| maskClosable | 点击蒙层是否关闭   | Boolean                | false         |
| animation    | 动画效果           | String                 | 'zoom'        |
| onClose      | 弹框点击事件       | () => void             | -             |

<q-iframe name="modal" />