# Dialog <q-qrcode name='dialog' />

模态对话框，在浮层中进行显示，引导用户进行相关操作。支持三种类型，普通对话框、带图片对话框和输入型对话框。对话框内容和操作事件支持自定义，可设置是否带遮罩层、遮罩层是否可关闭、是否显示取消按钮。

## 对话框

<q-code>
```jsx
import * as React from 'react'
import Dialog from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import './index.scss'
const { Item } = List

export default class DefaultDialog extends React.Component {
  state = {
    visible: false,
    visibleDemo1: false,
    visibleDemo5: false,
    visibleDemo6: false,
    visibleDemo7: false,
    visibleDemo9: false,
    mask: true,
    maskClosable: false,
    hasShowCancel: true,
    value: ''
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onChange = () => {
  }

  render() {
    const {
      visible,
      visibleDemo1,
      visibleDemo5,
      visibleDemo6,
      visibleDemo7,
      visibleDemo9,
      maskClosable,
      mask,
      hasShowCancel,
      value
    } = this.state
    return (
      <div>
        <Button onClick={this.toggleProxy.bind(this, 'visible')}>对话框</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo1')}>
          无标题对话框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo5')}>
          单标题对话框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo7')}>
          单标题无内容对话框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo6')}>
          列表操作对话框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo9')}>
          引用弹窗
        </Button>
        <Dialog
          title='提示'
          visible={visible}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={hasShowCancel}
          onOk={this.toggleProxy.bind(this, 'visible')}
          onCancel={this.toggleProxy.bind(this, 'visible')}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Dialog>
        <Dialog
          title='提示'
          visible={visibleDemo5}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          onOk={this.toggleProxy.bind(this, 'visibleDemo5')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo5')}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Dialog>
        <Dialog
          visible={visibleDemo1}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={hasShowCancel}
          onOk={this.toggleProxy.bind(this, 'visibleDemo1')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo1')}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Dialog>
        <Dialog
          className='dialog-contentlist'
          title='提示'
          visible={visibleDemo6}
          footer={
            <List style={{ width: '100%' }}>
              <a onClick={this.toggleProxy.bind(this, 'visibleDemo6')}>
                操作一
              </a>
              <a onClick={this.toggleProxy.bind(this, 'visibleDemo6')}>
                操作二
              </a>
            </List>
          }
          hasCloseButton={true}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={hasShowCancel}
          onOk={this.toggleProxy.bind(this, 'visibleDemo6')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo6')}
        >
          <div style={{ padding: '10px 16px 0' }}>沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核</div>
        </Dialog>
        <Dialog
          title='标题单行'
          visible={visibleDemo7}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          onOk={this.toggleProxy.bind(this, 'visibleDemo7')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo7')}
        >
        </Dialog>
        <Dialog
          className='quote-dialog'
          visible={visibleDemo9}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={hasShowCancel}
          onOk={this.toggleProxy.bind(this, 'visibleDemo9')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo9')}
        >
          <div>
            <div className='content__title'>标题单行</div>
            <div className='content__wrap'>
              <div className='content__wrap__icon'>
                <img src='http://img003.qufenqi.com/products/49/2e/492e5a70b89a60e3bce4217b98ba753b.png' />
              </div>
              <div className='content__wrap__word'>说明当前状态，提示用户解决方案，不超过两行</div>
            </div>
          </div>
        </Dialog>

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
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'hasShowCancel')}
                checked={hasShowCancel}
              />
            }
          >
            hasShowCancel
          </List.Item>
        </List>
      </div>
    )
  }
}

```
</q-code>

## 带图片对话框

<q-code>

```jsx
import * as React from 'react'
import Dialog from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import './index.scss'
const { Item } = List

export default class ImageDialog extends React.Component {
  state = {
    visibleDemo2: false,
    visibleDemo3: false,
    visibleDemo4: false,
    visibleDemo8: false,
    mask: true,
    maskClosable: false,
    hasShowCancel: true,
    value: ''
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onChange = () => {
  }

  render() {
    const {
      visibleDemo2,
      visibleDemo3,
      visibleDemo4,
      visibleDemo8,
      maskClosable,
      mask,
      hasShowCancel,
      value
    } = this.state
    return (
      <div>
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo2')}>
          带图标对话框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo3')}>
          带图片对话框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo4')}>
          大图片对话框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo8')}>
          大图片无文字对话框
        </Button>
        <Dialog
          title='标题单行'
          visible={visibleDemo2}
          image={{
            url:
              'http://img003.qufenqi.com/products/36/85/3685f2b3b9844937b789939840f51c02.png',
            theme: 'icon'
          }}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          hasCloseButton={true}
          onOk={this.toggleProxy.bind(this, 'visibleDemo2')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo2')}
        >
          告知当前状态，信息和解决方案，不要超过两行
        </Dialog>
        <Dialog
          title='提示单行'
          visible={visibleDemo3}
          image={{
            url:
              'http://img003.qufenqi.com/products/36/85/3685f2b3b9844937b789939840f51c02.png',
            theme: 'image'
          }}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          hasCloseButton={true}
          onOk={this.toggleProxy.bind(this, 'visibleDemo3')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo3')}
        >
          告知当前状态，信息和解决方案，不要超过两行
        </Dialog>
        <Dialog
          title='提示'
          visible={visibleDemo4}
          image={{
            url:
              'http://img003.qufenqi.com/products/a1/1c/a11ccda06f1057df669c307d109f167b.png',
            theme: 'bigImage'
          }}
          hasCloseButton={true}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          onOk={this.toggleProxy.bind(this, 'visibleDemo4')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo4')}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Dialog>
        <Dialog
          className='image-dialog'
          visible={visibleDemo8}
          image={{
            url:
              'http://img003.qufenqi.com/products/e4/c7/e4c7b01509e137627b9c539f431dca78.png',
            theme: 'bigImage'
          }}
          hasCloseButton={true}
          footer="nofooter"
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          onOk={this.toggleProxy.bind(this, 'visibleDemo8')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo8')}
        >
          <Button onClick={this.toggleProxy.bind(this, 'visibleDemo8')}>我知道啦</Button>
        </Dialog>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visibleDemo2')}
                checked={visibleDemo2}
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
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'hasShowCancel')}
                checked={hasShowCancel}
              />
            }
          >
            hasShowCancel
          </List.Item>
        </List>
      </div>
    )
  }
}

```
</q-code>

## 输入型弹窗

<q-code>
```jsx
import * as React from 'react'
import Dialog from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import Input from '../../input'
import './index.scss'
const { Item } = List

export default class InputDialog extends React.Component {
  state = {
    visibleDemo10: false,
    visibleDemo11: false,
    visibleDemo12: false,
    mask: true,
    maskClosable: false,
    hasShowCancel: true,
    value: ''
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onChange = () => {
  }

  render() {
    const {
      visibleDemo10,
      visibleDemo11,
      visibleDemo12,
      maskClosable,
      mask,
      hasShowCancel,
      value
    } = this.state
    return (
      <div>
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo10')}>
          输入型弹窗
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo11')}>
          带主辅操作输入型弹窗
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo12')}>
          带两行输入框输入型弹窗
        </Button>
        <Dialog
          className='input-dialog'
          title='标题单行'
          visible={visibleDemo10}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          onOk={this.toggleProxy.bind(this, 'visibleDemo10')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo10')}
        >
          <div className='input-dialog__word'>说明当前状态，提示用户解决的方案，最好不超过两行</div>
          <Input textAlign='center'  placeholder='请输入内容' value={value} onChange={this.onChange} />
        </Dialog>
        <Dialog
          className='input-dialog'
          title='标题单行'
          visible={visibleDemo11}
          mask={mask}
          maskClosable={maskClosable}
          onOk={this.toggleProxy.bind(this, 'visibleDemo11')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo11')}
        >
          <div className='input-dialog__word'>说明当前状态，提示用户解决的方案，最好不超过两行</div>
          <Input textAlign='center'  placeholder='请输入内容' value={value} onChange={this.onChange} />
        </Dialog>
        <Dialog
          className='input-dialog'
          title='标题单行'
          visible={visibleDemo12}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          onOk={this.toggleProxy.bind(this, 'visibleDemo12')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo12')}
        >
          <div className='input-dialog__word'>说明当前状态，提示用户解决的方案，最好不超过两行</div>
          <Input textAlign='center'  placeholder='请输入内容' value={value} onChange={this.onChange} />
          <Input textAlign='center'  placeholder='请输入内容' value={value} onChange={this.onChange} />
        </Dialog>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visibleDemo10')}
                checked={visibleDemo10}
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
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'hasShowCancel')}
                checked={hasShowCancel}
              />
            }
          >
            hasShowCancel
          </List.Item>
        </List>
      </div>
    )
  }
}

```
</q-code>

## API

| Option         | Description          |  Type                    | Default Value |
| :------------- | :------------------- | :------------------------- | :------------ |
| visible        | 对话框是否可见       | Boolean                    | -             |
| title          | 标题                 | String                     | -             |
| hasCloseButton | 右上角是否有关闭按钮 | Boolean                    | false         |
| footer         | 底部 默认-底部是'取消''确认'操作按钮;传'nofooter'-没有底部;传JSX.Element-自定义底部|JSX.Element`|`'nofooter'`|`'false' | false   |
| hasShowCancel  | 是否有辅助操作       | Boolean                    | true          |
| mask           | 是否显示遮罩层       | Boolean                    | true          |
| maskClosable   | 遮罩层是否可关闭     | Boolean                    | false         |
| okText         | 主操作按钮文字       | String                     | '确认'        |
| cancelText     | 辅操作按钮文字       | String                     | '取消'        |
| image          | 图片对象，包括图片URL和展示方式 | Image: {url: string, theme: string}  theme值'icon'`|`'image'`|`'bigImage'| {url: '', theme: 'image'} |
| animation      | 动画效果             | String                     | -             |
| onCancel       | 取消点击事件的回调   | (val?: any) => void `|` {} | -             |
| onOk           | 确认点击事件的回调   | (val?: any) => void `|` {} | -             |

<q-iframe name="dialog" />