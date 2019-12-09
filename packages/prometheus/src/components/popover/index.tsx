import '../../base'
import React from 'react'
import classNames from 'classnames'
import Animation from '../animation'
import createDebug from '../../base/createDebug'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/popover/index.scss'
const debug = createDebug('qr:Popover')

export interface IPopoverProps extends IBaseProps {
  /**
   * popover的定位上下文
   */
  target: any
  /**
   * 与target的左边距
   */
  left?: number
  /**
   * 与target的上边距
   */
  top?: number
  /**
   * 是否显示popover箭头
   */
  arrow?: boolean
  /**
   * 凸起箭头的位置
   */
  arrowPosition?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
    | 'topCenter'
    | 'topLeft'
    | 'topRight'
  /**
   * 是否开启点击popover以外的地方关闭
   */
  documentClose?: boolean
  /**
   * 操作完菜单后是否自动关闭菜单
   */
  autoClose?: boolean
  /**
   * 动画类型：包含移动和渐隐
   */
  animationType?: 'fade' | 'slide'
  /**
   * 当动画为slide时的方向
   */
  slideDirection?: 'up' | 'down'
}
/**
 * Popover
 * @example
 * import Popover, { IPopoverProps } from 'q-react'
 *    let props:IPopoverProps ={ name:'ts-Popover' }
 *    <Popover {...props} />
 */

export default class Popover extends BaseComponent<IPopoverProps, any> {
  static defaultProps = {
    style: {},
    left: 0,
    top: 10,
    arrowPosition: 'topCenter',
    documentClose: true,
    autoClose: true,
    arrow: true,
    animationType: 'fade',
    slideDirection: 'down',
  }

  state = {
    visible: false,
  }

  arrowPositionMap = {
    bottomLeft: `${this.classPrefix}popover__arrow--bottom-left`,
    bottomRight: `${this.classPrefix}popover__arrow--bottom-right`,
    bottomCenter: `${this.classPrefix}popover__arrow--bottom-center`,
    topCenter: `${this.classPrefix}popover__arrow--top-center`,
    topLeft: `${this.classPrefix}popover__arrow--top-left`,
    topRight: `${this.classPrefix}popover__arrow--top-right`,
  }

  get position() {
    const { target, style, left, top } = this.props
    const { offsetTop, offsetLeft, offsetHeight } = target.current
    return { top: offsetTop + top, left: offsetLeft + left }
  }

  componentDidMount() {
    this.forceUpdate()
    const _self = this
    document.body.addEventListener('click', this.close.bind(_self))
  }

  componentWillUnmount() {
    const _self = this
    document.body.removeEventListener('click', this.close.bind(_self))
  }

  show() {
    this.setState({
      visible: true,
    })
  }

  close(e) {
    const { path = [] } = e || {}
    const { autoClose } = this.props
    if (autoClose || !path.some(item => /q-popover/.test(item.className))) {
      this.setState({
        visible: false,
      })
    }
  }

  getAnimationClass() {
    const { animationType, slideDirection } = this.props
    if (animationType === 'slide') {
      return `slide-${slideDirection}-animation`
    } else {
      return `${animationType}-animation`
    }
  }

  render() {
    const {
      className,
      style,
      target: { current },
      children,
      arrowPosition,
      arrow,
      animationType,
    } = this.props
    // ref didMount时候才有值
    const { visible } = this.state
    const animationClass = this.getAnimationClass()
    if (!current) return <div />
    return (
      <div
        className={classNames(`${this.classPrefix}popover`, className)}
        style={{
          ...style,
          ...(animationType === 'slide' ? { overflow: 'hidden' } : {}),
          ...this.position,
        }}
      >
        <Animation in={visible} classNames={animationClass}>
          <div className={`${this.classPrefix}popover__content`}>
            {arrow && animationType !== 'slide' && (
              <div
                className={classNames(
                  `${this.classPrefix}popover__arrow`,
                  this.arrowPositionMap[arrowPosition]
                )}
              />
            )}
            {children &&
              Array.prototype.map.call(children, (child, index) => {
                return (
                  <div
                    className={`${this.classPrefix}popover__item`}
                    key={`q-popover${index}`}
                  >
                    {child}
                  </div>
                )
              })}
          </div>
        </Animation>
      </div>
    )
  }
}
