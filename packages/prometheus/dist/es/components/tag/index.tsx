import '../../base'
import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import Icon from '../icon'
// import '@q/q-ui/dist/scss/components/tag/index.scss'

export interface ITagProps extends IBaseProps {
  activeColor?: string
  closable?: boolean
  selected?: boolean
  disabled?: boolean
  type?: string
  onClose?: (e: any) => void
  onClick?: (e: any) => void
}
/**
 * Tag
 * @prop {boolean} closable 标签是否可以关闭
 * @prop {string} activeColor 	标签选中颜色
 * @prop {string} selected 	是否默认选中
 * @prop {string} disabled 	是否不可用
 * @prop {string} type 	标签模式（默认'normal'或者'recommend'）
 * @prop {function} onClose 关闭时的回调
 * @prop {function} onClick click 事件触发的回调函数
 */
export default class Tag extends BaseComponent<ITagProps, any> {
  static defaultProps = {
    activeColor: '',
    selected: false,
    disabled: false,
    closable: false,
    type: 'normal',
    onClose() {},
    onClick() {},
  }
  constructor(props) {
    super(props)
    this.state = {
      selected: props.selected,
      visible: true,
    }
  }
  private onClose = (e: any) => {
    const { onClose } = this.props
    const { visible } = this.state
    this.setState({
      visible: false,
    })
    onClose(e)
  }
  private onClick = () => {
    const { onClick, disabled, closable, type } = this.props
    const { selected } = this.state
    if (disabled || closable || type === 'recommend') return
    this.setState({
      selected: !selected,
    })
    onClick(!selected)
  }
  getTagStyle = () => {
    const { activeColor, style } = this.props
    const { selected, visible } = this.state
    const objStyle = { ...style }
    if (selected) objStyle.backgroundColor = activeColor
    if (!visible) objStyle.display = 'none'
    return objStyle
  }
  render() {
    const { className, closable, disabled, type } = this.props
    const { selected } = this.state
    return (
      <div
        className={classNames(
          `${this.classPrefix}tag`,
          {
            selected,
            disabled,
            [`${this.classPrefix}tag--recommend`]: type === 'recommend',
          },
          className
        )}
        style={this.getTagStyle()}
        onClick={this.onClick}
      >
        {this.props.children}
        {closable && <Icon type='closePop' onClick={this.onClose} />}
      </div>
    )
  }
}
