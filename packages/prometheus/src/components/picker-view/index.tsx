import React, { ReactNode, ReactElement } from 'react'
import Button from '../button'
import Picker from './Picker'
import MultiPicker from './MultiPicker'
import Popup from '../popup'
import IBaseProps from '../../base/baseProps'
import './styles/index.scss'
import BaseComponent from '../../base/baseComponent'
export interface IPickerViewProps extends IBaseProps {
  value: any[]
  visible: boolean
  header?: JSX.Element
  prefixCls?: string
  onChange?: (v: any) => void
  onScrollChange?: (v: any) => void
  // 封装新增
  dataList?: Array<Array<{value, label}>>
  disabled?: boolean
  is3D?: boolean
  isAnimate?: boolean
  pickerPrefixCls?: string
  indicatorStyle?: object
  indicatorClassName?: string
  itemStyle?: object
  pickerClassName?: string
  pickerStyle?: object
}
class PickerView extends BaseComponent<IPickerViewProps, any> {
  static Picker = Picker
  static MultiPicker = MultiPicker
  static defaultProps = {
    onChange() { },
    onScrollChange() { },
  }

  onChange = value => {
    this.props.onChange(value)
  }
  onScrollChange = value => {
    this.props.onScrollChange(value)
  }
  render() {
    const { value, children, header, visible, className, style, dataList, disabled, is3D, isAnimate,
      prefixCls, indicatorStyle, indicatorClassName, itemStyle, pickerClassName, pickerStyle,
      pickerPrefixCls } = this.props
    return (
      <Popup visible={visible} position='bottom' animation='slide-up'>
        <div style={{ background: '#fff', width: '100vw' }}>
          {header}
          <MultiPicker
            className={className}
            style={style}
            dataList={dataList}
            selectedValue={value}
            disabled={disabled}
            is3D={is3D}
            isAnimate={isAnimate}
            prefixCls={prefixCls}
            indicatorStyle={indicatorStyle}
            indicatorClassName={indicatorClassName}
            itemStyle={itemStyle}
            pickerClassName={pickerClassName}
            pickerStyle={pickerStyle}
            pickerPrefixCls={pickerPrefixCls}
            onValueChange={this.onChange}
            onScrollChange={this.onScrollChange}
          >
            {children}
          </MultiPicker>
        </div>
      </Popup>
    )
  }
}
export default PickerView
