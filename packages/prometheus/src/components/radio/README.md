# Radio <q-qrcode name='radio' />

单选框组，建议配合`List`使用，设置一组单选项。支持自定义图标、选项文案、勾选图标等。

## 代码演示

<q-code>
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import RadioGroup, { IRadioGroupProps } from '../index'
import List from '../../list'
import Switch from '../../switch/index'
import Icon from "../../icon/index";
import "./index.scss";

class Example extends React.Component {
  state = {
    disabledTotal: false,
    data1: [
      {
        label1: '水果',
        value: 0,
      },
      {
        label1: '蔬菜',
        value: 1,
      },
      {
        label1: '冰激凌',
        value: 2,
      }
    ],
    data2: [
      {
        label: (<div>大王</div>),
        value2: 0,
      },
      {
        label: '小王',
        value2: 1,
      },
      {
        label: 'A',
        value2: 2,
      }
    ],
    icon2: (<Icon type="success" />),
    thumb: (<span className="demo-icon"></span>)
  }

  onChange = (dataSource) => {
    console.log(`选中的数据为: `, dataSource);
  }

  render() {
    const { data1, data2, icon2, disabledTotal, thumb } = this.state
    
    return (
      <div style={{backgroundColor: '#f9f9f9'}}>
        <List header="1. 单项选择">
          <RadioGroup 
            dataList={data1}
            labelKey={'label1'}
            name='like'
            value={1}
            disabled={disabledTotal}
            onChange={(pickedInfo) => {this.onChange(pickedInfo)}}
          />
        </List>
        <List header="2. 带左侧图标的单项选择">
          <RadioGroup 
            dataList={data2}
            name='poker'
            icon={icon2}
            thumb={thumb}
            disabled={disabledTotal}
            onChange={(pickedInfo) => {this.onChange(pickedInfo)}}
            value={2}
            valueKey={'value2'}
          />
        </List>
        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                checked={disabledTotal}
                onChange={() => { this.setState({disabledTotal: !this.state.disabledTotal})}}
              />
            }
          >
            disabled
          </List.Item>
        </List>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
```
</q-code>

## RadioGroup API

| Option   | Description      |  Type                                   | Default Value | 必传|
| :------- | :--------------- | :---------------------------------------- | :------------ |:---:|
| **name**     | 当前radio的共属name | string                                   | -         |是|
| **list**    | 数据列表       |     Array                  |       \[\]        |是|
| **onChange**    | 数据改变的回调函数       | (item in list) => void                        |       -       |是|
| defaultValue    | 列表里默认选中项的value值       | string \| number                        |       ''        |否|
| labelKey    | radioGroup数据源list里每一项中用作label的键值      | string                        |       'label'        |否|
| valueKey    | radioGroup数据源list里每一项中用作value的键值      | string                        |       'value'        |否|
| disabled   | 当前RadioGroup是否不可点击       | boolean                       |       false        |否|
| thumb    | 当前列表的统一前置dom,每个RadioItem里可覆盖此值       | string \| JSX.Element                        |       -        |否|
| icon  | 当前列表的统一的选中样式,每个RadioItem里可覆盖此值       | string \| JSX.Element                        |       主题色对勾        |否|

## RadioItem API

| Option       | Description         |  Type                 | Default Value |        必传        |
| :----------- | :------------------ | :---------------------- | :------------ | :----------------: |
| **name**     | 当前radio的共属name | string                  | ''            | 是 |
| **value**    | 当前项的值          | string \| number        | ''            |         是         |
| **label**    | 当前项的label元素   | string \| JSX.Element   | ''            |         是         |
| **onChange** | change回调函数      | (value) => void | -             | 是 |
| disabled     | 是否禁用            | boolean                 | false         |         否         |
| checked      | 指定当前是否选中    | boolean                 | false         |         否         |
| thumb        | label前置元素       | string \| JSX.Element   | -             |         否         |
| icon   | 当前项的值          | string \| JSX.Element   | 主题色对勾    |         否         |

## 使用注意事项
* 其中`thumb`, `icon`、 `disabled`、 `checked`属性值的优先级是 RadioItem > RadioGroup， 优先取RadioItem的配置

<q-iframe  name='radio' />