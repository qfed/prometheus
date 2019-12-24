
import React from 'react'
import classNames from 'classnames'
import { observer } from '../../base/observerProps'
import Icon from '../icon/index'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'

export enum DIRECTION {
  LEFT = 1,
  RIGHT,
}

export interface IPickedItemInfo {
  name: string
  value: string | number
  checked: boolean
}

export interface ICheckboxProps extends IBaseProps {
  /**
   * 是否选中
   */
  checked?: boolean
  /**
   * 是否可修改
   */
  disabled?: boolean
  /**
   * 用于展示的标签
   */
  label: string | JSX.Element
  /**
   * checkbox name属性
   */
  name?: string
  /**
   * checkbox 值
   */
  value: string | number
  /**
   * 图标在label的左边还是右边
   */
  direction?: DIRECTION
  /**
   * 点击是的change事件
   */
  onChange?: (pickedInfo: IPickedItemInfo) => void
}

@observer(['checked'])
export default class Checkbox extends BaseComponent<ICheckboxProps, any> {
  static defaultProps = {
    disabled: false,
    checked: false,
    direction: DIRECTION.RIGHT,
    onChange(p: IPickedItemInfo) { },
  }
  static directionType = DIRECTION

  state = { checked: false, disabled: false }
  onChange = (event: any) => {
    const { disabled, onChange, value, name } = this.props
    if (disabled) return
    const checked = !this.state.checked
    this.setState({
      checked,
    })
    onChange({ name, value, checked })
  }

  render() {
    const { checked } = this.state
    const { label, disabled, direction, className, style } = this.props
    return (
      <div
        className={classNames(
          `${this.classPrefix}checkbox`,
          `${this.classPrefix}list-line`,
          {
            [`${this.classPrefix}checkbox--checked`]: checked,
            [`${this.classPrefix}checkbox--disabled`]: disabled,
          },
          className
        )}
        style={style}
        onClick={this.onChange}
      >
        {direction === DIRECTION.LEFT && (
          <div
            className={classNames(
              `${this.classPrefix}list-line__hd ${
              this.classPrefix
              }checkbox__icon`
            )}
          >
            {checked ? <Icon type='success' /> : <Icon type='selectUp' />}
            <label className={`${this.classPrefix}checkbox__icon__label`}>
              {label}
            </label>
            <input
              className={`${this.classPrefix}checkbox__icon__input`}
              type='checkbox'
              checked={checked}
              onChange={this.onChange}
            />
          </div>
        )}
        <div className={`${this.classPrefix}list-line__bd`}>{label}</div>
        {direction === DIRECTION.RIGHT && (
          <div
            className={classNames(
              `${this.classPrefix}-list-line__ft ${
              this.classPrefix
              }checkbox__icon`
            )}
          >
            {checked ? <Icon type='success' /> : <Icon type='selectUp' />}
            <label className={`${this.classPrefix}checkbox__icon__label`}>
              {label}
            </label>
            <input
              className={`${this.classPrefix}checkbox__icon__input`}
              type='checkbox'
              checked={checked}
              onChange={this.onChange}
            />
          </div>
        )}
      </div>
    )
  }
}
