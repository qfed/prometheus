
import observerProps from '../../base/observerProps'
import React from 'react'
import ListItem from './list-item'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/list/index.scss'
// import createDebug from '../../base/createDebug'
// const debug = createDebug('qr:list')
export interface IListProps extends IBaseProps {
  header?: string | JSX.Element
}
/**
 * List
 * @prop {string | JSX.Element} header
 * @prop {object} style
 */
export default class List extends BaseComponent<IListProps, any> {
  static defaultProps = {
    header: '',
  }
  static getDerivedStateFromProps = observerProps(['header'])
  static Item = ListItem
  state = { header: '' }
  render() {
    const { header } = this.state
    const { className, style } = this.props
    return (
      <div
        className={classNames(`${this.classPrefix}list`, className)}
        style={style}
      >
        {!!header && (
          <div className={`${this.classPrefix}list__hd`}>{header}</div>
        )}
        <div className={`${this.classPrefix}list__bd`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
