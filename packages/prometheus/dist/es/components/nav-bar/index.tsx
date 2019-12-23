import '../../base'
import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/nav-bar/index.scss'
export interface INavBarProps extends IBaseProps {
  type?: 'primary' | 'default'
  leftContent?: string | JSX.Element
  onLeftClick?: (e: any) => void
  rightContent?: string | JSX.Element
  onRightClick?: (e: any) => void
}
/**
 * navBar
 * @prop {string} className Button的类名
 * @prop {object} style 定义Button样式
 * @example
 * import Button, { IButtonProps } from 'q-react'
 *    let props:IButtonProps ={ name:'ts-button' }
 *    <Button {...props} />
 */
export default class NavBar extends BaseComponent<INavBarProps, any> {
  static defaultProps = {
    type: 'primary',
    leftContent: '',
    rightContent: '',
    onLeftClick : (e: any) => {},
    onRightClick : (e: any) => {}
  }

  state = {}
  render() {
    const { onLeftClick, onRightClick, leftContent, rightContent, className, style, type } = this.props
    return (
      <div
        className={classNames(
          `${this.classPrefix}navbar`,
          { [`${this.classPrefix}navbar--default`]: type === 'default' },
          className
        )}
        style={style}
      >
        {leftContent && <div onClick={onLeftClick} className={`${this.classPrefix}navbar__left`}>{leftContent}</div>}
        <div className={`${this.classPrefix}navbar__title`}>
          {this.props.children}
        </div>
        {rightContent && <div onClick={onRightClick} className={`${this.classPrefix}navbar__right`}>{rightContent}</div>}
      </div>
    )
  }
}
