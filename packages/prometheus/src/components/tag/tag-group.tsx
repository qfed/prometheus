
import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
export interface ITagGroupProps extends IBaseProps {
  className?: string
  style?: any
}
/**
 * TagGroup
 * @prop {object} style
 * @prop {string} className
 */
export default class ButtonGroup extends React.Component<ITagGroupProps, any> {
  static defaultProps = {
    className: '',
    activeColor: '',
    selected: false,
    disabled: false,
    closable: false,
    onClose() {},
    onChange() {},
  }
  render() {
    const { children, className, style } = this.props
    return (
      <div
        className={classNames('pro-tag-group', className)}
        style={{ ...style }}
      >
        {children}
      </div>
    )
  }
}
