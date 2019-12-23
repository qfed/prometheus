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

  onChange = () => {}

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
          title="标题单行"
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
          title="提示单行"
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
          title="提示"
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
          className="image-dialog"
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
          <Button onClick={this.toggleProxy.bind(this, 'visibleDemo8')}>
            我知道啦
          </Button>
        </Dialog>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visibleDemo2')}
                defaultChecked={visibleDemo2}
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
