import '../../base'
import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import Animation from '../animation'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/popup/index.scss'
/**
 * popup
 * @prop {boolean}  visible 显示/隐藏
 * @prop {boolean}  mask 是否显示蒙层，默认显示
 * @prop {boolean}  maskClosable 点击蒙层是否关闭
 * @prop {number}   timeout 动画时间
 * @prop {string | boolean}   animation 动画效果 自定义动画参考 https://reactcommunity.org/react-transition-group/css-transition
 *
 * 内容框位置, 可以控制一个或者两个方向；两个以上 已优先两个有效值为准。如 ['top', 'bottom', 'left'] => ['top', 'left']
 * center 拥有最高优先级。如 ['top', 'center'] => ['center']
 * @prop {string}   position
 * @prop {function} onClose maskClosable = true 时，点击蒙层触发此函数
 * @prop {function} onEnter 动画生命周期
 * @prop {function} onEntered 动画生命周期
 * @prop {function} onExit 动画生命周期
 * @prop {function} onExited 动画生命周期
 * @example
 */

const DefinedAnimation = [
  'zoom',
  'slide-up',
  'slide-left',
  'slide-right',
  'slide-down',
]

export interface IPopupProps extends IBaseProps {
  visible: boolean
  timeout?: number
  position?: string | string[] // 'center' | 'top' | 'right' | 'left' | 'bottom';
  animation?: string | boolean // 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | false;
  maskClosable?: boolean
  mask?: boolean
  onClose?: () => void
  onEnter?: () => void
  onEntered?: () => void
  onExit?: () => void
  onExited?: () => void
}

export default class Popup extends BaseComponent<IPopupProps, any> {
  static defaultProps = {
    mask: true,
    maskClosable: false,
    position: 'center',
    animation: 'zoom',
    onClose() {},
    onEnter() {},
    onEntered() {},
    onExit() {},
    onExited() {},
  }

  bodyDom = null
  maskRef: any = React.createRef()

  get positionClassnames() {
    const { position } = this.props

    if (position && typeof position === 'string') {
      return `${this.classPrefix}popup--${position}`
    } else if (position && typeof position === 'object') {
      const tmpPosition: string[] = []

      // center 最高优先级
      if (position.indexOf('center') > -1) {
        return `${this.classPrefix}popup--center`
      }

      position.forEach(item => {
        const isContain = tmpPosition.indexOf(item) > -1

        if (!isContain) {
          tmpPosition.push(`${this.classPrefix}popup--${item}`)
        }
      })

      return tmpPosition.join(' ')
    }

    return ''
  }

  componentWillUnmount() {
    // tslint:disable-next-line:no-unused-expression
    this.maskRef.current &&
      this.maskRef.current.removeEventListener('touchmove', this.preventDefault)
  }

  onClose = () => {
    this.props.onClose()
  }

  onEnter = () => {
    this.props.onEnter()
  }

  onEntered = () => {
    this.toggleScroll(true)
    this.props.onEntered()
  }

  onExit = () => {
    this.props.onExit()
  }

  onExited = () => {
    this.toggleScroll(false)
    this.props.onExited()
  }

  preventDefault(e) {
    e.preventDefault()
  }

  // 滚动控制
  toggleScroll = (visible: boolean) => {
    this.bodyDom = this.bodyDom || document.querySelector('body')
    this.bodyDom.style.overflow = visible ? 'hidden' : ''
    const maskDom = this.maskRef.current
    const { mask } = this.props

    if (mask && maskDom && visible) {
      // 禁止滚动
      maskDom.addEventListener('touchmove', this.preventDefault)
    } else if (mask && maskDom && !visible) {
      this.maskRef.current.removeEventListener('touchmove', this.preventDefault)
    }
  }

  maskClick = e => {
    const { maskClosable } = this.props

    // tslint:disable-next-line:no-unused-expression
    maskClosable && this.onClose()
  }

  render() {
    const {
      visible,
      mask,
      children,
      className,
      animation,
      style,
      timeout,
    } = this.props
    let containerAnim: any = animation

    // 如果是已定义的动画，加上 '-animation'
    if (DefinedAnimation.indexOf(containerAnim) > -1) {
      containerAnim = `${containerAnim}-animation`
    }

    return (
      <Animation in={visible}>
        <div
          className={classNames(
            `${this.classPrefix}popup`,
            className,
            this.positionClassnames
          )}
          style={style}
        >
          {mask && (
            <Animation
              in={mask && visible}
              classNames={animation ? 'fade-animation' : ''}
              timeout={timeout}
            >
              <div
                className={`${this.classPrefix}popup__mask`}
                ref={this.maskRef}
                onClick={this.maskClick}
              />
            </Animation>
          )}
          <Animation
            in={visible}
            classNames={containerAnim}
            timeout={timeout}
            onEnter={this.onEnter}
            onEntered={this.onEntered}
            onExit={this.onExit}
            onExited={this.onExited}
          >
            <div className={`${this.classPrefix}popup__container`}>
              {children}
            </div>
          </Animation>
        </div>
      </Animation>
    )
  }
}
