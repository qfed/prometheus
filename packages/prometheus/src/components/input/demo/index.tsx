import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Input, { IInputProps } from '../index'
import List from '../../list'
import BaseDemo from '../../../base/baseComponent'
import { autobind } from 'core-decorators'
import Switch from '../../switch'
import CoutDown from '../../count-down'

import './index.scss'
@autobind
class InputDemo extends BaseDemo<{ name: string }, any> {
  state = {
    disabled: false,
    readOnly: false,
    clearable: true,
    isPwd: false,
    value1: 123456,
    value2: 123,
    value3: '',
    value4: '这里的文字较多，如果一行不够，可以进行多行展示~~',
    value5: 123,
    value6: 123,
    value8: 123,
  }

  // 测试受控的递增值
  testId = 1

  ref: React.RefObject<Input> = React.createRef()

  focus() {
    this.ref.current.focus();
  }

  onChange = (name: string) => (val: any, e: any) => {
    console.log(`第${name.substr(-1)}项input值改变为： ${val}`);

    this.setState({
      [name]: val
    })
  }
  toggleProxy = type => {
    this.toggle(type)
  }
  toggle = type => {
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    const { disabled, readOnly, clearable, isPwd, value1, value2, value3, value4, value5, value6, value8 } = this.state

    const props: IInputProps = {
      label: '单项输入',
      placeholder: '请输入内容',
      disabled,
      readOnly,
      textAlign: 'left',
      type: isPwd ? 'password' : 'text',
      clearable,
      extra: <span className='q-icon__occupy' />,
    }

    return (
      <div style={{ backgroundColor: '#F3F6FA' }}>
        <List header={
          <div>1. 默认单项输入(受控组件 <span className="add-btn" onClick={
            () => {
              console.log(this.testId, 'testID')
              this.setState({
                value1: this.testId++
              })
            }
          }>点我设置递增数字</span>) </div>
        }>
          <Input {...{
            ...props, ...{
              value: value1,
              onChange: this.onChange('value1')
            }
          }} />
          <Input {...{
            ...props, ...{
              value: value2,
              onChange: this.onChange('value2'),
              label: ' ',
              thumb: (
                <div onClick={this.focus}>点我聚焦</div>
              )
            }
          }} ref={this.ref} />
        </List>
        <List header='2. 输入文字居右(非受控组件)'>
          <Input {...{
            ...props, ...{
              textAlign: 'right',
              defaultValue: 123,
              onChange: (val) => {
                console.log(`第二项input的值改变为：${val}`)
              }
            }
          }} />
        </List>
        <List header='3. 暗提示(value为"")'>
          <Input
            {...{
              ...props,
              ...{
                placeholder: '请输入银行卡号',
                value: value3,
                onChange: this.onChange('value3')
              },
            }}
          />
        </List>
        <List header='4. 多行折行显示'>
          <Input
            {...{
              ...props,
              ...{
                multiLine: true,
                placeholder: '详细信息文案内容过多的情况下可折行显示',
                textAlign: 'right',
                value: value4,
                onChange: this.onChange('value4'),
            }}}
          />
        </List>
        <List header='5. 验证码输入(type="number")'>
          <Input
            {...{
              ...props,
              ...{
                placeholder: '请输入验证码',
                maxLength: 6,
                type: 'number',
                value: value5,
                onChange: this.onChange('value5'),
                label: '验证码',
                extra: <CoutDown />,
              },
            }}
          />
        </List>
        <List header='6. 带图标的label(maxLenth=10)'>
          <Input
            {...{
              ...props,
              ...{
                thumb: <span className='icon-label' />,
                maxLength: 10,
                textAlign: 'right',
                value: value6,
                onChange: this.onChange('value6'),
                placeholder: '描述文字',
                label: '标题文字',
              },
            }}
          />
        </List>
        <List header='7. 选择输入'>
          <Input
            {...{
              ...props,
              ...{
                placeholder: '详细信息',
                label: '多项输入',
                readOnly: true,
                clearable: false,
                arrow: true,
              },
            }}
          />
          <Input
            {...{
              ...props,
              ...{
                textAlign: 'right',
                label: '多项输入',
                placeholder: '详细信息',
                readOnly: true,
                clearable: false,
                arrow: true,
              },
            }}
          />
        </List>
        <List header='8. 段落输入'>
          <Input
            {...{
              ...props,
              ...{
                type: 'paragraph',
                maxLength: 10,
                placeholder: '请输入段落内容',
                value: value8,
                onChange: this.onChange('value8')
              },
            }}
          />
        </List>
        <List header='参数控制'>
          <List.Item
            extra={
              <Switch
                defaultChecked={disabled}
                onChange={this.toggleProxy.bind(this, 'disabled')}
              />
            }
          >
            disabled
          </List.Item>
          <List.Item
            extra={
              <Switch
                defaultChecked={readOnly}
                onChange={this.toggleProxy.bind(this, 'readOnly')}
              />
            }
          >
            readOnly
          </List.Item>
          <List.Item
            extra={
              <Switch
                defaultChecked={clearable}
                onChange={this.toggleProxy.bind(this, 'clearable')}
              />
            }
          >
            clearable
          </List.Item>
          <List.Item
            extra={
              <Switch
                defaultChecked={isPwd}
                onChange={this.toggleProxy.bind(this, 'isPwd')}
              />
            }
          >
            password
          </List.Item>
        </List>
      </div>
    )
  }
}

ReactDOM.render(<InputDemo name='inputDemo' />, document.getElementById('root'))
