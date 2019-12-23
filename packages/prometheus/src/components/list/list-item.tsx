import classnames from 'classnames'
import React from 'react'
import createDebug from '../../base/createDebug'
import '../../base'
import observerProps from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import Icon from '../icon'
const debug = createDebug('qr:list')

export interface IListItemProps extends IBaseProps {
  /**
   * 最右侧详细信息
   */
  extra?: string | JSX.Element
  /**
   * 最左侧前置说明
   */
  thumb?: string | JSX.Element
  /**
   * 是否多行,默认单行
   */
  multiLine: boolean
  /**
   * 右侧详细信息增加箭头指向
   */
  arrow: boolean
  /**
   * 标题下方描述信息
   */
  brief?: string | JSX.Element
  /** body 的对齐方式  */
  bdAlign: string
  onClick?: (event: any) => void
}
export default class ListItem extends BaseComponent<IListItemProps, any> {
  static defaultProps = {
    multiLine: false,
    arrow: false,
    bdAlign: 'baseline',
    onClick: () => {},
  }

  render() {
    const {
      children,
      extra,
      thumb,
      onClick,
      multiLine,
      arrow,
      brief,
      bdAlign,
    } = this.props

    return (
      <div
        className={classnames(`${this.classPrefix}list-line`, {
          [`${this.classPrefix}list-line--multiple`]: multiLine,
        })}
        onClick={onClick}
      >
        {thumb && (
          <div className={`${this.classPrefix}list-line__hd`}>{thumb}</div>
        )}
        <div
          className={`${this.classPrefix}list-line__bd`}
          style={{ alignSelf: bdAlign }}
        >
          {children}
          {brief && (
            <div className={`${this.classPrefix}list-line__bd__brief`}>
              {brief}
            </div>
          )}
        </div>
        {extra && (
          <div className={`${this.classPrefix}list-line__ft`}>{extra}</div>
        )}
        {arrow && (
          <Icon
            type='arrowRight'
            className={`${this.classPrefix}list-line__arrow`}
          />
        )}
      </div>
    )
  }
}
