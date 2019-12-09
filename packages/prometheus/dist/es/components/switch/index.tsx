import '../../base'
import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/switch/index.scss'

export interface ISwitchProps extends IBaseProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  activeColor?: string
  style?: CSSProperties
  className?: string
  onChange?: (checked: boolean, event: any) => void
}
/**
 * Switch
 * @prop {className} className switch的类名
 * @prop {object} style 自定义switch的样式
 * @prop {boolean} checked 是否默认选中
 * @prop {boolean} disabled 是否不可修改
 * @prop {boolean} activeColor 开关打开后的颜色
 * @prop {Function} onChange change事件触发的函数
 */
export default class Switch extends BaseComponent<ISwitchProps, any> {
  static defaultProps = {
    checked: undefined,
    disabled: false,
    onChange() {},
    defaultChecked: false
  }
  state = {
    checked: this.props.defaultChecked,
  }
  get classNames() {
    const { className, disabled } = this.props
    const checked = this.props.checked !== undefined ? this.props.checked : this.state.checked
    return classNames(
      `${this.classPrefix}switch`,
      { [`${this.classPrefix}switch--checked`]: checked },
      { [`${this.classPrefix}switch--disabled`]: disabled },
      className
    )
  }
  onChange = (event: any) => {
    const { onChange, disabled, checked } = this.props

    if (disabled) return
    // 受控
    if ( checked !== undefined) {
      const checkedProps = !checked
      onChange(checkedProps, event)
      return
    }
    // 非受控
    const checkedState = !this.state.checked
    this.setState({
      checked: checkedState,
    })
    // event.stopPropagation()
    onChange(checkedState, event)
  }
  render() {
    const { style, activeColor } = this.props
    return (
      <div className={this.classNames} onClick={this.onChange} style={style}>
        <div
          className={`${this.classPrefix}switch__v-checkbox`}
          style={{ background: activeColor }}
        />
      </div>
    )
  }
}
