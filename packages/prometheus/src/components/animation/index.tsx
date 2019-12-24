
import React from 'react'
// import classNames from 'classnames'
import './styles/index.scss'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import { CSSTransition } from 'react-transition-group'

// let count = 0

export interface IAnimationProps extends IBaseProps {
  in: boolean
  timeout?: number
  unmountOnExit?: boolean
  appear?: boolean
  classNames: string | object
  onEnter?: () => void
  onEntered?: () => void
  onExit?: () => void
  onExited?: () => void
}
/**
 * Icon
 * @prop {string} className Icon的类名
 * @prop {boolean} disabled 禁用
 * @prop {} height desc
 * @example
 */
// @observer(['disabled'])
export default class Animation extends BaseComponent<IAnimationProps, any> {
  static defaultProps = {
    timeout: 500,
    unmountOnExit: true,
    classNames: '',
    appear: true,
    onEnter() {},
    onEntered() {},
    onExit() {},
    onExited() {},
  }

  onEnter = () => {
    this.props.onEnter()
  }
  onEntered = () => {
    this.props.onEntered()
  }
  onExit = () => {
    this.props.onExit()
  }
  onExited = () => {
    this.props.onExited()
  }

  get children() {
    const { children, timeout } = this.props
    let currentChildren = children
    // 发现个小问题同样的动画效果 children 为function 时比 children DOM 慢一一丢
    if (children.constructor !== Function) {
      const {
        props: { className = '', style = {} },
      } = children as any

      currentChildren = React.cloneElement(children as any, {
        className: `animated ${className}`,
        style: {
          ...{
            '--webkit-animation-duration': `${timeout}ms`,
            animationDuration: `${timeout}ms`,
          },
          ...style,
        },
      })
    }

    return currentChildren
  }

  render() {
    const { in: isIn, timeout, unmountOnExit, classNames, appear } = this.props

    return (
      <CSSTransition
        in={isIn}
        appear={appear}
        timeout={timeout}
        unmountOnExit={unmountOnExit}
        classNames={classNames}
        onEnter={this.onEnter}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExited={this.onExited}
      >
        {this.children}
      </CSSTransition>
    )
  }
}
