import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import 'base'
import BaseComponent from '../../base/baseComponent'
import Animation from '../animation'
// import '@q/q-ui/dist/scss/components/bulletin/index.scss'

export interface IBulletinProps extends IBaseProps {
  className?: string
  style?: object
  contentClass?: string
  contentStyle?: object
  iconClass?: string
  iconStyle?: object
  closeClass?: string
  closeStyle?: object
  visible?: boolean
  content?: string | JSX.Element
  icon?: JSX.Element
  theme?: 'blue' | 'yellow'
  closeIcon?: JSX.Element | string
  isCenter?: boolean
  isScroll?: boolean
  scrollClass?: string
  scrollStyle?: object
  onClose?: () => void
  onClick?: () => void
}
/**
 * Bulletin
 * @prop {string} className Bulletin容器的类名
 * @prop {object} style Bulletin的行内样式
 * @prop {string} contentClass 公告栏文字的类名
 * @prop {object} contentStyle 公告栏文字的行内样式
 * @prop {string} iconClass 公告栏图标的类名
 * @prop {object} iconStyle 公告栏图标的行内样式
 * @prop {string} closeClass 关闭按钮或文字的类名
 * @prop {boolean} visible 是否可见公告栏
 * @prop {string} content 公告栏文字内容
 * @prop {JSX.Element} icon 公告栏图标
 * @prop {JSX.Element | string} closeIcon 关闭图标或文字
 * @prop {boolean} isCenter 内容是否居中
 * @prop {boolean} isScroll 内容是否可滚动
 * @prop {string} scrollClass 滚动内容的类名
 * @prop {object} scrollStyle 滚动内容的行内样式
 * @prop {function} onClose 点击关闭回调事件
 * @prop {function} onClick 点击公告内容回调事件
 */
export default class Bulletin extends BaseComponent<IBulletinProps, any> {
  static defaultProps = {
    visible: true,
    content: '',
    isCenter: false,
    theme: 'blue',
    onClose() {},
    onClick() {},
  }
  onClose = () => {
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  get classNames() {
    const { isCenter, isScroll, className, theme } = this.props
    return classNames(
      `${this.classPrefix}bulletin`,
      { [`${this.classPrefix}bulletin--yellow`]: theme === 'yellow' },
      { [`${this.classPrefix}bulletin--center`]: isCenter },
      { [`${this.classPrefix}bulletin--scroll`]: isScroll },
      className
    )
  }

  get iconClassNames() {
    const { iconClass } = this.props
    return classNames(`${this.classPrefix}bulletin__icon`, iconClass)
  }

  get contentClassNames() {
    const { contentClass } = this.props
    return classNames(`${this.classPrefix}bulletin__content`, contentClass)
  }

  get scrollClassNames() {
    const { isScroll, scrollClass } = this.props
    return classNames(
      { [`${this.classPrefix}bulletin__content__animation`]: isScroll },
      scrollClass
    )
  }

  get closeClassNames() {
    const { closeClass, closeIcon } = this.props
    return classNames(
      { [`${this.classPrefix}bulletin__close`]: closeIcon },
      closeClass
    )
  }

  render() {
    const {
      style,
      contentStyle,
      iconStyle,
      closeStyle,
      visible,
      content,
      icon,
      closeIcon,
      isScroll,
      scrollStyle,
    } = this.props
    return (
      <Animation in={visible} classNames='fade-animation'>
        <div className={this.classNames} style={style}>
          <div className={`${this.classPrefix}bulletin__wrap`}>
            {icon && (
              <span className={this.iconClassNames} style={iconStyle}>
                {icon}
              </span>
            )}
            <div
              className={this.contentClassNames}
              style={contentStyle}
              onClick={this.onClick}
            >
              <span
                className={this.scrollClassNames}
                style={isScroll ? scrollStyle : {}}
              >
                {content}
              </span>
            </div>
          </div>
          <span
            className={this.closeClassNames}
            style={closeIcon ? closeStyle : {}}
            onClick={this.onClose}
          >
            {closeIcon}
          </span>
        </div>
      </Animation>
    )
  }
}
