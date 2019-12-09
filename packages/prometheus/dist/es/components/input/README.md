# Input <q-qrcode name='input' />

输入框，通常配合`List`使用，供用户输入信息。支持三种类型，默认文本输入、段落类型和校验输入。可设置内容是否可清除、头尾注释内容、文字布局等。

## 代码演示

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import Input, { IInputProps } from '../index'
import List from '../../list'
import log from '../../base/log'
import BaseDemo from '../../base/baseDemo'
import { autobind } from 'core-decorators'
import Switch from '../../switch'
@autobind
class InputDemo extends BaseDemo<{ name: string }, any> {
  state = {
    disabled: false,
    readOnly: false,
    clearable: true,
    isPwd: false
  }
  @log
  onChange() {
    // console.log(this)
  }
  toggleProxy = type => {
    this.toggle(type)
  }
  toggle = type => {
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    const { disabled, readOnly, clearable, isPwd } = this.state

    const props: IInputProps = {
      label: '单项输入',
      placeholder: '请输入内容',
      disabled,
      readOnly,
      textAlign: 'left',
      clearable,
      isPwd,
      value: '123456',
      maxLength: 11,
      onChange: this.onChange,
      extra: <span className="q-icon__occupy" />
    }

    return (
      <div style={{backgroundColor: '#F3F6FA'}}>
        <List header="1. 默认单项输入">
          <Input {...props} />
        </List>
        <List header="2. 输入文字居右">
          <Input {...{ ...props, ...{textAlign: 'right' } }} />
        </List>
        <List header="3. 暗提示">
          <Input {...{...props, ...{type: 'no-label', placeholder: '请输入银行卡号'}}} />
        </List>
        <List header="4. 多行折行显示">
          <Input {...{...props, ...{type: 'more-line', placeholder: '详细信息文案内容过多的情况下可折行显示'}, textAlign: 'right', value: '这里的文字较多，如果一行不够，可以进行多行展示~~'}} />
        </List>
        <List header="5. 验证码输入">
          <Input {...{...props, ...{type: 'code', placeholder: '请输入验证码', label: '验证码'}}} />
        </List>
        <List header="6. 带图标的label">
          <Input {...{ ...props, ...{thumbImg: '//img002.qufenqi.com/products/6b/63/6b63320f90b4d53f34adf66a4621f1ac.png' } }} />
        </List>
        <List header="7. 选择输入">
          <Input {...{ ...props, ...{type: 'picker' , textAlign: 'right' } }} />
        </List>
        <List header="8. 段落输入">
          <Input {...{ ...props, ...{type: 'paragraph', maxLength: 10, placeholder: '请输入段落内容' } }} />
        </List>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                checked={disabled}
                onChange={this.toggleProxy.bind(this, 'disabled')}
              />
            }
          >
            disabled
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={readOnly}
                onChange={this.toggleProxy.bind(this, 'readOnly')}
              />
            }
          >
            readOnly
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={clearable}
                onChange={this.toggleProxy.bind(this, 'clearable')}
              />
            }
          >
            clearable
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={isPwd}
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
```
</q-code>

## type类型

| 类型              | 说明                        |
| :---------------- | :-------------------------- |
| text              | 默认类型                    |
| paragraph         | 段落类型，带有字数统计/限制 |
| 其他input校验类型 | 其他input校验类型 number,password等  |

## 其他可配置项API

| Option      | Description                           | Type                 | Default Value |必传|
| :---------- | :------------------------------------ | :--------------------- | :------------ |:--:|
| className   | 自定义input组件样式的类名             | String                 | -            |否|
| style       | 自定义input组件样式的内联样式            | Object                 | -            |否|
| value       | input的当前值  （受控input）                       | String \| Number      | -            |否|
| defaultValue | input的当前值   （非受控input）                      | String \| Number      | -            |否|
| placeholder | placeholder文字内容                   | String                 | -            |否|
| readOnly    | 是否只读                              | Boolean                | false         |否|
| disabled    | 是否禁用                              | Boolean                | false         |否|
| autoFocus   | 是否自动聚焦                           | Boolean                | false         |否|
| clearable   | 文本框内容是否可清除                  | Boolean                | true          |否|
| label       | input描述                             | String  \| JSX.Element             | -            |否|
| type        | input的类型                           | 详见上文`type`类型     | 'text'        |否|
| multiLine   | 多行折行展示的textarea类型            | Boolean                | false         |否|
| arrow       | 是否带有右箭头                        | Boolean                | false         |否|
| textAlign   | 文字布局                              | 'left' \| 'right'     | 'left'        |否|
| maxLength   | 输入框的最大字符数                    | Number                 | -          |否|
| thumb       | 文本框头部注释内容                    | String \| JSX.Element | -             |否|
| extra       | 文本框尾部注释内容                    | String \| JSX.Element | -             |否|
| onChange    | change事件的回调                      | (val: any, event: any) => void     | -             |是|
| onFocus     | focus事件的回调                      | (val: any, event: any) => void     | -             |否|
| onBlur      | blur事件的回调                       | (val: any, event: any) => void     | -             |否|
| onClean     | 点击清除按钮事件的回调                 | (val: any, event: any) => void     | -             |否|

## 使用注意事项

1. `input`分为 1.`受控` 和 2. `非受控` 2部分，受控组件使用`value`值，非受控组件使用`defaultValue`值，理论上2者选其一进行赋值初始值。
2. `value`和`defalutValue`都不传，默认是非受控组件，值为`''`，使用`onChange`回调函数获取值进行处理。
3. `Input`实例上有`focus`方法，可以自动触发聚焦，可以在组件引用时绑定`ref`，调用其focus方法

<q-iframe name="input" />