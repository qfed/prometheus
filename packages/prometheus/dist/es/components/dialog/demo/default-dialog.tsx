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

  onChange = () => {}

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
          title="提示"
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
          title="提示"
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
          className="dialog-contentlist"
          title="提示"
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
          <div style={{ padding: '10px 16px 0', overflow: 'hidden' }}>
            沟通后，你将成为当前用户的跟进店员 未成单前不影响你的业绩考核
          </div>
        </Dialog>
        <Dialog
          title="标题单行"
          visible={visibleDemo7}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={false}
          onOk={this.toggleProxy.bind(this, 'visibleDemo7')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo7')}
        />
        <Dialog
          className="quote-dialog"
          visible={visibleDemo9}
          mask={mask}
          maskClosable={maskClosable}
          hasShowCancel={hasShowCancel}
          onOk={this.toggleProxy.bind(this, 'visibleDemo9')}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo9')}
        >
          <div>
            <div className="content__title">标题单行</div>
            <div className="content__wrap">
              <div className="content__wrap__icon">
                <img src="http://img003.qufenqi.com/products/49/2e/492e5a70b89a60e3bce4217b98ba753b.png" />
              </div>
              <div className="content__wrap__word">
                说明当前状态，提示用户解决方案，不超过两行
              </div>
            </div>
          </div>
        </Dialog>

        <List header="参数控制">
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
