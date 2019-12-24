
import React from 'react'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import classNames from 'classnames'

export interface ISwiperItemProps extends IBaseProps {}
/**
 * Button
 * @prop {string} className SwiperItem的类名
 * @prop {object} style 定义SwiperItem样式
 * @example
 * import SwiperItem, { ISwiperItemProps } from 'q-react'
 *    let props:ISwiperItemProps ={ name:'ts-SwiperItem' }
 *    <SwiperItem {...props} />
 */
export default class SwiperItem extends BaseComponent<ISwiperItemProps, any> {
  render() {
    const { children } = this.props
    return <div className={classNames(`${this.classPrefix}swiper__item`)}>{children}</div>
  }
}
