# PickerView <q-qrcode name='picker-view' />

`pickerview` 对原始的`picker`组件进行简单封装提供了基础的弹窗和隐藏功能里面的内容完全自定义。
所有`pickerview`相当于之后所有定制化的`picker`的基类，之后根据业务定制化的`picker`都将由其演化而来。

## 代码演示

<q-code>
```jsx

import { autobind } from 'core-decorators'
import PickerView from '../index'
import Button from '../../button'
const { Picker } = PickerView
@autobind
class DatePickerDemo extends React.Component<any, any> {
  state = {
    value: ['1', '11'],
    visible: false
  }

  onChange = value => {
    console.log('onChange', value)
    this.setState({
      value
    })
  }

  onScrollChange = value => {
    console.log('onScrollChange', value)
  }
  toggle = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }
  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggle}>toggle</Button>
        <PickerView
          visible={visible}
          header={<Button onClick={this.toggle}>close</Button>}
          onChange={this.onChange}
          onScrollChange={this.onScrollChange}
          value={this.state.value}
        >
          <Picker indicatorClassName="my-picker-indicator">
            <Picker.Item className="my-picker-view-item" value="1">
              one
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="2">
              two
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="3">
              three
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="4">
              four
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="5">
              five
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="6">
              six
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="7">
              seven
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="8">
              eight
            </Picker.Item>
          </Picker>
          <Picker indicatorClassName="my-picker-indicator">
            <Picker.Item className="my-picker-view-item" value="11">
              eleven
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="12">
              twelve
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="13">
              thirteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="14">
              fourteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="15">
              fifteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="16">
              sixteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="17">
              seventeen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="18">
              eighteen
            </Picker.Item>
          </Picker>
        </PickerView>
      </div>
    )
  }
}
```
</q-code>

## API

### PickerView

| Option             | Description              |  Type                      | Default Value |
| :----------------- | :----------------------- | :--------------------------- | :------------ |
| className          | pickerView类名           | String                       | -             |
| style              | pickerView样式           | Object                       | {}            |
| dataList           | pickerView数据源         | Array<Array<{value, label}>> | -             |
| value              | pickerView值的列表       | Any[]                        | -             |
| visible            | pickerView是否可见       | Boolean                      | false         |
| disabled           | pickerView是否禁用       | Boolean                      | false         |
| is3D               | pickerView是否为3D效果   | Boolean                      | false         |
| isAnimate          | pickerView是否有动画效果 | Boolean                      | -             |
| prefixCls          | picker列的类名           | String                       | -             |
| indicatorStyle     | picker列indicator的样式  | Object                       | -             |
| indicatorClassName | picker列indicator的类名  | String                       | -             |
| itemStyle          | picker项的样式           | Object                       | -             |
| header             | 自定义的头部内容         | String `|`JSX.Element        | -             |
| pickerClassName    | picker列的类名           | String                       | -             |
| pickerStyle        | picker列的样式           | Object                       | -             |
| onChange           | 改变picker值回调事件     | (v:[]) => void{}             | -             |
| onScrollChange     | scroll回调事件           | (value: any) => void         | -             |

### Picker

| Option               | Description             |  Type              | Default Value |
| :------------------- | :---------------------- | :------------------- | :------------ |
| disabled             | picker列是否禁用        | Boolean              | -             |
| selectedValue        | picker列当前选择的value | Any                  | -             |
| itemStyle            | picker列的样式          | Object               | -             |
| is3D                 | picker列是否为3D效果    | Boolean              | -             |
| noAnimate            | 是否有动画效果          | Boolean              | -             |
| prefixCls            | pickerView的类名        | String               | -             |
| pickerPrefixCls      | picker列的类名          | String               | -             |
| defaultSelectedValue | 默认选择项的value       | Any                  | -             |
| indicatorStyle       | picker列indicator的样式 | Object               | -             |
| indicatorClassName   | picker列indicator的类名 | String               | -             |
| className            | picker列的类名          | String               | -             |
| style                | picker样式              | Object               | {}            |
| onValueChange        | change回调事件          | (value: any) => void | -             |
| onScrollChange       | scroll回调事件          | (value: any) => void | -             |

<q-iframe name="picker-view"  />
