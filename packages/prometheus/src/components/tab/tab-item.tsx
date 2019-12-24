
import BaseProps from '../../base/baseProps'
import React from 'react'
import classNames from 'classnames'
import BaseComponent from '../../base/baseComponent'
export interface ITabItemProps extends BaseProps {
  height?: string
}
/**
 * TabItem
 */
class TabItem extends BaseComponent<ITabItemProps, any> {
  static defaultProps = {
    content: 'hello, world',
    animated: true,
  }
  get height() {
    const { height, style } = this.props
    if (+height) {
      return height + 'px'
    } else {
      const heightArr = (height || "")
        .toString()
        .toLocaleLowerCase()
        .split('px')
      if (heightArr.length <= 0) {
        return 'auto'
      }
      if (+heightArr[0]) {
        return height
      } else {
        return 'auto'
      }
    }
  }

  render() {
    const { className, style } = this.props

    return (
      <div
        className={classNames(
          `${this.classPrefix}tab__content-item`,
          className
        )}
        style={{ height: this.height, ...style }}
      >
        {this.props.children}
      </div>
    )
  }
}
export default TabItem
