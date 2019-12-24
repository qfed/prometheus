
import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/index'
import CheckboxItem, { ICheckboxProps, DIRECTION, IPickedItemInfo } from "./checkbox-item";
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'

export interface ICheckboxGroupProps extends IBaseProps {
  name: string
  list: ICheckboxProps[]
  labelKey?: string
  valueKey?: string
  defaultValue?: any[]
  direction?: DIRECTION
  disabled?: boolean
  onChange: (pickedInfo: any[]) => void
}

export default class CheckboxGroup extends BaseComponent<ICheckboxGroupProps, any> {
  static defaultProps = {
    disabled: false,
    defaultValue: [],
    labelKey: 'label',
    valueKey: 'value',
    list: [],
    direction: DIRECTION.RIGHT,
    onChange(p: any[]) { },
  }

  static directionType = DIRECTION

  static Item = CheckboxItem

  constructor(props: ICheckboxGroupProps) {
    super(props);

    const { list, defaultValue, valueKey } = props;

    // 初始化默认选中项
    const pickedData = list.filter((item: ICheckboxProps) => {
      return typeof item.checked === 'undefined'
        ? defaultValue.includes(item[valueKey])
        : item.checked;
    }) || [];

    this.state = {
      pickedData
    }
  }

  onChange = ({ name, value, checked }: IPickedItemInfo) => {
    const { onChange, valueKey, list } = this.props
    const { pickedData } = this.state;

    // 统一筛选选中的数据
    const checkedList = checked
      ? pickedData.concat(list.filter(ele => ele[valueKey] === value)[0])
      : pickedData.filter(item => (item[valueKey] !== value));

    this.setState({
      pickedData: checkedList
    })

    onChange(checkedList)
  }

  render() {
    const { className, style, name, disabled, direction, list, labelKey, valueKey } = this.props
    const { pickedData } = this.state;

    return (
      <div className={classNames(
        `${this.classPrefix}checkbox-group`,
        className
      )} style={style}>
        {
          list.map((item: ICheckboxProps, index) => {
            return (
              <CheckboxGroup.Item
                name={name}
                label={item[labelKey]}
                value={item[valueKey]}
                disabled={item.disabled || disabled}
                checked={typeof item.checked !== 'undefined' ?
                                 item.checked :
                                 pickedData.some((ele: any) => ele[valueKey] === item[valueKey])}
                direction={item.direction || direction}
                onChange={(pickedInfo) => { this.onChange(pickedInfo) }}
                key={item.value}
              ></CheckboxGroup.Item>
            )
          })
        }
      </div>
    )
  }
}
