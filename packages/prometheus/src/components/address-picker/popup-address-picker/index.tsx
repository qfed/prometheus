import * as React from 'react'
import IBaseProps from '../../../base/baseProps'
import BaseComponent from '../../../base/baseComponent'
import PickerAddress from '../index'
import Popup from '../../popup'
import CloseIcon from '../../icon'
// import '../../../../../q-ui/src/components/address-picker/popupAddressPicker.scss'

interface IAddressItem {
  area_id: string | number
  parent_id: string | number
  area_name: string
}

export interface IPopupAddressPickerProps extends IBaseProps {
  visible: boolean
  title?: string
  placeList: IAddressItem[]
  onChange: (value: number[]) => void
  onClose: () => void
}

/**
 * PopupAddressPicker
 * @prop {boolean} visible 控制显示隐藏
 * @prop {string} title picker标题
 * @prop {Array} placeList 地址数据列表
 * @prop {Function} onChange 选择区后的回调函数，参数为省市区id数组
 * @prop {Function} onClose 弹出关闭icon点击回调事件
 * @example
 */
export default class PopupAddressPicker extends BaseComponent<
  IPopupAddressPickerProps,
  any
> {
  state = {
    value: [],
    placeListTmp: [],
  }

  addressPicker = { echoPlace: (root, placeList, value) => {} }

  componentWillReceiveProps(nextProps) {
    const { placeList } = nextProps
    const { placeList: oldPlaceList } = this.props
    if (placeList.length > 0 && placeList.length === oldPlaceList.length) return
    this.setState({
      placeListTmp: placeList.filter(item => +item.parent_id === 0),
    })
  }

  onClick = (value, column) => {
    const { placeList, onChange } = this.props
    const { value: selected } = this.state
    selected[column] = value.area_id
    this.setState({
      placeListTmp: placeList.filter(
        item => +item.parent_id === +value.area_id
      ),
      value: selected,
    })
    if (column === 2) {
      onChange(selected)
    }
  }

  echoPlace = (root, placeList, value) => {
    this.addressPicker.echoPlace(root, placeList, value)
    this.state.value = value
  }

  render() {
    const { visible, onClose, title } = this.props
    const { value, placeListTmp } = this.state
    return (
      <div>
        <Popup visible={visible} position='bottom'>
          {title && (
            <div className={`${this.classPrefix}address-picker__header`}>
              <span>{title}</span>
              <CloseIcon onClick={onClose} type='close' />
            </div>
          )}
          <PickerAddress
            ref={ref => {
              this.addressPicker = ref as any
            }}
            placeList={placeListTmp}
            value={value}
            onClick={this.onClick}
          />
        </Popup>
      </div>
    )
  }
}
