import '../../base'
import React from 'react'
// import Steps from "./index"
import Icon from '../icon'

import classNames from 'classnames'
import BaseComponent from '../../base/baseComponent'
export interface IStepProps {
  style?: object
  type?: 'row' | 'column'
  status?: boolean
  title?: string
  idx?: string | number
  icon?: string | JSX.Element
  tip?: string | JSX.Element
  tipIcon?: string | JSX.Element
  isFirst?: boolean
  isLast?: boolean
  // description?: string
  // icon?: object
}
/**
 * Step 步骤条内的每一个步骤
 * @description 显示一个任务的进度；或者引导用户完成某个复杂任务。
 * @prop {boolean} status 指定状态。
 * @prop {string} title 标题
 * @prop {string} description 步骤的详细描述
 * @prop {object} icon 步骤图标 可选
 */
class Step extends BaseComponent<IStepProps, any> {
  static defaultProps = {
    style: {},
    isFirst: false,
    isLast: false,
    type: 'row'
  }

  get classNames() {
    const { status } = this.props
    return classNames(`${this.classPrefix}steps__item`, {
      [`${this.classPrefix}steps__item--light`]: !status,
    })
  }
  get hdClassNames() {
    const { type, isFirst } = this.props
    return classNames(
      { [`${this.classPrefix}steps__item__hd__left`]: type === 'row' },
      { [`${this.classPrefix}steps__item__hd__up`]: type === 'column' },
      { [`${this.classPrefix}steps__item__hd__line--hide`]: isFirst }
    )
  }
  get ftClassNames() {
    const { type, isLast } = this.props
    return classNames(
      { [`${this.classPrefix}steps__item__hd__right`]: type === 'row' },
      { [`${this.classPrefix}steps__item__hd__down`]: type === 'column' },
      { [`${this.classPrefix}steps__item__hd__line--hide`]: isLast }
    )
  }

  render() {
    const {
      style,
      type,
      title,
      idx,
      icon = (
        <Icon type='success' className={`${this.classPrefix}steps__item__hd__icon`} />
      ),
      tip,
      tipIcon,
    } = this.props
    return (
      <div className={this.classNames} style={style}>
        <div style={type === 'column' ? {display: 'flex', alignItems: 'center', flex: '5'} : {}}>
          <div className={`${this.classPrefix}steps__item__hd`}>
            <div className={this.hdClassNames} />
            {idx ? (
              <span className={`${this.classPrefix}steps__item__hd__idx`}>
                {idx}
              </span>
            ) : (
              ''
            )}
            {!idx && icon ? icon : ''}
            <div className={this.ftClassNames} />
          </div>
          <div className={`${this.classPrefix}steps__item__content`}>{title}</div>
        </div>
        <div style={{textAlign: 'center', flex: '1'}}>
          {type === 'column' && tip}
          {type === 'column' && tipIcon}
        </div>
      </div>
    )
  }
}

export default Step
