
import observerProps from '../../base/observerProps'
import React from 'react'
import ButtonItem from './index'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/button/index.scss'
// import createDebug from '../../base/createDebug'
// const debug = createDebug('qr:list')
export interface IButtonGroupProps extends IBaseProps {}
/**
 * ButtonGroup
 * @prop {string | JSX.Element} header
 * @prop {object} style
 */
export default class ButtonGroup extends BaseComponent<IButtonGroupProps, any> {
  static defaultProps = {}
  static getDerivedStateFromProps = observerProps(['header'])
  static Item = ButtonItem
  state = {}
  get MainClassNames() {
    const { className } = this.props
    return classNames(`${this.classPrefix}bottom-group`, className)
  }
  render() {
    const { children } = this.props
    return (
      <div className={this.MainClassNames} style={{ display: 'flex' }}>
        {children}
      </div>
    )
  }
}
