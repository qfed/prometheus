import * as React from "react";
import * as ReactDOM from "react-dom";
import PickerAddress from "../index";
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

  addressPicker = { echoPlace: (root, placeList, value) => {} }
  popupAddressPicker = { echoPlace: (root, placeList, value) => {} }

  componentDidMount() {
    this.setState({
      placeList: allList.filter(item => item.parent_id == 0)
    })
  }

  /***************************/
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
        <Button onClick={this.onValueSet}>设置默认值</Button>
        <PickerAddress
          ref={(ref) => this.addressPicker = ref}
          placeList={placeList}
          value={value}
          onClick={this.onClick}
        />
        <hr/>
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
