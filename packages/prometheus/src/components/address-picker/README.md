# AddressPicker <q-qrcode name='address-picker' />

地址选择器，通常与popup搭配使用实现弹出。

## 代码演示

### 默认地址选择器

<q-code>
```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import PickerAddress from "../index";
import Button from '../../button'
import { allList } from './mock'

class Example extends React.Component<any, any> {

  state = {
    placeList: [],
    value: []
  }

  addressPicker = { echoPlace: (root, placeList, value) => {} }

  componentDidMount() {
    this.setState({
      placeList: allList.filter(item => item.parent_id == 0)
    })
  }

  onValueSet = () => {
    this.addressPicker.echoPlace(0, allList, [1, 2, 3])
  }

  onClick = (value, column) => {
    const { value: selected } = this.state
    selected[column] = value.area_id
    setTimeout(() => {
      this.setState({
        placeList: allList.filter(item => item.parent_id == value.area_id),
        value: selected,
      })
    }, 1000)
  }

  render() {
    const { placeList, value } = this.state
    return (
      <div>
        <Button onClick={this.onValueSet}>设置默认值</Button>
        <PickerAddress
          ref={(ref) => this.addressPicker = ref}
          placeList={placeList}
          value={value}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
```
</q-code>

### 弹出地址选择器

<q-code>
```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from '../../button'
import PopupPickerAddress from '../popup-address-picker'
import { allList } from './mock'

class Example extends React.Component<any, any> {

  state = {
    placeList: [],
    value: [],
    visible: false,

    selected: [1, 2, 3],   // 默认值
    popupData: [],
  }

  popupAddressPicker = { echoPlace: (root, placeList, value) => {} }

  componentDidMount() {
    this.setState({
      placeList: allList.filter(item => item.parent_id == 0)
    })
  }

  /***************************/
  onChange = (selected) => {
    console.log('selected', selected)
    this.setState({
      visible: false,
      selected,
    })
  }

  onShow = () => {
    this.setState({
      visible: true,
      popupData: allList
    }, () => {
      this.echoPlace()   // 回显逻辑
    })
  }

  onHide = () => {
    this.setState({
      visible: false,
    })
  }

  echoPlace = () => {
    this.popupAddressPicker.echoPlace(0, allList, this.state.selected)
  }

  render() {
    const {
      visible, placeList, value,
      popupData, selected
    } = this.state
    return (
      <div>
        <Button onClick={this.onShow}>弹出地址选择</Button>
        <PopupPickerAddress
          title='标题'
          placeList={popupData}
          visible={visible}
          onChange={this.onChange}
          onClose={this.onHide}
          ref={(ref) => this.popupAddressPicker = ref as any }
        />
        <p>{selected.join('-')}</p>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"))
```
</q-code>

## API

### AddressPicker

| Option    | Description                                                                    |  Type                                                                         | Default Value |
| --------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ------------- |
| placeList | 地址数据数组                                                                   | Array<{ area_id: Number\|String, parent_id: Number\|String, area_name: String}> | []            |
| value     | 地址选择值列表可用来设置回显值                                                 | Array< Number >                                                                 | []            |
| onClick   | 列表地址项点击事件，item参数为选中项数据，column为选择的当前列的索引           | (item, column) => {}                                                            |               |
| echoPlace | 回显操作，需要传入查询省列表的根id，省市区所有数据的一维数组，回显省市区id数组 | (root, placeList, value) => {}                                                  |               |

### PopupAddressPicker

| Option    | Description                            |  Type                                                                         | Default Value |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------- | ------------- |
| placeList | 地址数据数组                           | Array<{ area_id: Number\|String, parent_id: Number\|String, area_name: String}> | []            |
| visible   | 是否显示                               | Boolean                                                                         | -             |
| title     | picker标题                             | String                                                                          | -             |
| onChange  | 选择区后的回调函数，参数为省市区id数组 | (value: Number[]) => {}                                                         | -             |
| onClose   | 弹出关闭icon点击回调事件               | () => {}                                                                        | -             |

<q-iframe name="address-picker" />

## 说明
图中demo由hr分割线分为上下两部分
1. 上部分demo为地址选择器基本交互
2. 下部分demo对基础部分进行了封装，主要有三点  
  - 内部封装了popup
  - 地址数据需要传入省市区一维数组全部数据
  - 只在选择区时触发onChange获取省市区id

