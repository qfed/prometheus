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
          <Input textAlign='left' placeholder='请输入内容' value={value} onChange={this.onChange} />
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
          <Input textAlign='left' placeholder='请输入内容' value={value} onChange={this.onChange} />
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
          <Input textAlign='left'  placeholder='请输入内容' value={value} onChange={this.onChange} />
          <Input textAlign='left'  placeholder='请输入内容' value={value} onChange={this.onChange} />
        </Dialog>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visibleDemo10')}
                defaultChecked={visibleDemo10}
              />
            }
          >
            visible
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'mask')}
                defaultChecked={mask}
              />
            }
          >
            mask
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'maskClosable')}
                defaultChecked={maskClosable}
              />
            }
          >
            maskClosable
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'hasShowCancel')}
                defaultChecked={hasShowCancel}
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
