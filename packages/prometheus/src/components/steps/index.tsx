import '../../base'
import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import Step from './step'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/steps/index.scss'
export interface IStepsProps extends IBaseProps {
  name?: string
  type?: 'row' | 'column'
}
/**
 * Steps 步骤条
 * @description 显示一个任务的进度；或者引导用户完成某个复杂任务。
 * @prop {string} className 步骤条类名
 * @prop {object} style 自定义进度条的样式
 */
class Steps extends BaseComponent<IStepsProps, any> {
  static Step = Step
  static defaultProps = {
    type: 'row'
  }
  state = {}
  render() {
    const { className, style, type } = this.props
    return (
      <div
        className={classNames(
          `${this.classPrefix}steps`,
          type === 'row'
            ? `${this.classPrefix}steps--row`
            : `${this.classPrefix}steps--column`,
          className
        )}
        style={style}
      >
        {this.props.children}
      </div>
    )
  }
}
export default Steps
