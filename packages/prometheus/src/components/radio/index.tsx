
import React from 'react'
import classNames from "classnames";
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'

import RadioItem from "./radio-item";
import { observer } from '../../base/observerProps';

export interface IRadioGroupProps extends IBaseProps {
  list: any[]
  name: string
  value?: string | number
  labelKey?: string
  valueKey?: string
  disabled?: boolean
  thumb?: string | JSX.Element
  icon?: string | JSX.Element
  onChange: (v: any) => void
}
/**
 * RadioGroup
 * @prop {*string} name RadioGroup的name
 * @prop {*Array} list RadioGroup的数据列表
 * @prop {string|number} value radioGroup的初始值
 * @prop {string} labelKey radioGroup数据源list里每一项中用作label的键值
 * @prop {string} valueKey radioGroup数据源list里每一项中用作value的键值
 * @prop {boolean} disabled 禁用
 * @prop {string | JSX.Element} thumb 前置位自定义内容
 * @prop {string | JSX.Element} icon 自定义选中图标展示
 * @prop {*Function} onChange change事件触发的函数
 */
@observer(['value'])
export default class RadioGroup extends BaseComponent<IRadioGroupProps, any> {
  static defaultProps = {
    disabled: false,
    list: [],
    labelKey: 'label',
    valueKey: 'value',
    onChange() { }
  }

  static Item = RadioItem

  state = { value: '' }

  onChange = (value) => {
    const { onChange, valueKey, list } = this.props;

    this.setState({
      value
    })

    // 筛选出选择的那一项源数据
    const originData = list.filter((ele, index) => {
      return ele[valueKey] === value;
    })[0];

    onChange(originData);
  }

  render() {
    const { list, style, disabled, name, thumb, className, icon, labelKey, valueKey } = this.props;
    const { value } = this.state;

    return (
      <div className={classNames(
        `${this.classPrefix}radio-group`,
        className
      )} style={style}>
        {
          list.map((item: any, index) => {
            return (
              <RadioGroup.Item
                disabled={item.disabled || disabled}
                checked={typeof item.checked === 'undefined' ? item[valueKey] === value : item.checked}
                name={name}
                value={item[valueKey]}
                label={item[labelKey]}
                thumb={item.thumb || thumb}
                icon={item.icon || icon}
                onChange={(data) => this.onChange(data)}
                key={item[valueKey]}
              ></RadioGroup.Item>
            )
          })
        }
      </div>
    )
  }
}
