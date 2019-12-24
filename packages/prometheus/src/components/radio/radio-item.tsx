
import React from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import { observer } from '../../base/observerProps';

export interface IRadioProps extends IBaseProps {
  disabled?: boolean
  checked?: boolean
  name?: string
  value: string | number
  label: string | JSX.Element
  thumb?: string | JSX.Element
  icon?: string | JSX.Element
  onChange?: (v: any) => void
}
/**
 * Radio
 * @prop {*any} dataSouce radio的数据源（包含label,value等）
 * @prop {*string} name radio的name
 * @prop {*string|number} vaule radio的值
 * @prop {*string|number} label 指定当前项的label值，可以自定义
 * @prop {boolean} checked 初始化选中状态
 * @prop {boolean} disabled 禁用
 * @prop {string | JSX.Element} thumb 前置位自定义内容
 * @prop {string | JSX.Element} icon 自定义选中图标展示
 * @prop {*Function} onChange change事件触发的函数
 */
@observer(['checked'])
export default class RadioItem extends BaseComponent<IRadioProps, any> {
  static defaultProps = {
    disabled: false,
    checked: false,
    onChange(v: any) { }
  }

  state = {checked: false}

  onChange = (e: any) => {
    const { onChange, value } = this.props;

    this.setState({
      checked: this.props.checked
    })

    onChange(value)
  }

  render() {
    const { label, disabled, thumb, icon, name, value } = this.props
    const { checked } = this.state;

    return (
      <div className={classNames(
        `${this.classPrefix}radio`,
        `${this.classPrefix}list-line`,
      )}
      >
        <input
          type="radio"
          className={`${this.classPrefix}radio__control`}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={this.onChange}
          value={value}
        />
        <div className={classNames(
          `${this.classPrefix}radio__pic`,
          {[`${this.classPrefix}radio__pic--disabled`]: disabled},
        )}>
          {thumb}
        </div>
        <div className={classNames(
          `${this.classPrefix}radio__text`,
          {[`${this.classPrefix}radio__text--disabled`]: disabled},
        )}>
          {label}
        </div>
        <div className={classNames(
          `${this.classPrefix}radio__pick-icon`,
          `${this.classPrefix}radio__pick-icon--default`,
          {[`${this.classPrefix}radio__pick-icon--disabled`]: disabled},
        )}>
          {
            icon ? (
              icon
            ) : (
              <Icon type='selectDownRadio' />
              )
          }
        </div>
      </div>
    )
  }
}
