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
    maskClosable: false,
  }

  toggle = (key: string) => {
    console.log(this.state)
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }
  render() {
    const { visible, visibleDemo1, maskClosable, mask } = this.state
    return (
      <div>
        <Button onClick={this.toggleProxy.bind(this, 'visible')}>show</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo1')}>
          无标题对话框
        </Button>
        <Confirm
          title='提示'
          visible={visible}
          mask={mask}
          maskClosable={maskClosable}
          onOk={this.toggleProxy.bind(this, 'visible')}
          onClose={() => this.setState({ visible: false })}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Confirm>
        <Confirm
          visible={visibleDemo1}
          mask={mask}
          maskClosable={maskClosable}
          onOk={this.toggleProxy.bind(this, 'visibleDemo1')}
          onClose={() => this.setState({ visibleDemo1: false })}
        >
          沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
        </Confirm>

        <List header='参数控制'>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visible')}
                defaultChecked={visible}
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
        </List>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
