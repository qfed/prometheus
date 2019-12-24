
import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import { observer } from '../../base/observerProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/progress/index.scss'
export interface IProgressProps extends IBaseProps {
  percent: number
  barStyle?: object
  backStyle?: object
  unfilled?: boolean
  auto?: boolean
  duration?: number
  step?: number
  onHundredPercent?: () => any
  wrapperClassName?: string
  barClassName?: string
}
/**
 * Progress
 * @prop {string} className 进度条的类名
 * @prop {number} percent 进度百分比
 * @prop {object} barStyle 进度条样式
 * @prop {boolean} unfilled 是否显示未填充轨道
 */
@observer(['percent', 'auto'])
export default class Progress extends BaseComponent<IProgressProps, any> {
  static defaultProps = {
    percent: 0,
    style: {},
    unfilled: true,
    auto: false,
    duration: 5,
    step: 1,
    onHundredPercent: () => {},
  }

  timer: any = null

  state = {
    percent: 0,
    auto: false,
  }

  private startAddProgress() {
    const { auto } = this.state
    const {
      percent: basicPercent,
      duration,
      step,
      onHundredPercent,
    } = this.props
    if (auto) {
      this.timer = setInterval(() => {
        const { percent } = this.state
        const currentPercent =
          percent + (100 - basicPercent) / (duration / step)
        this.setState({
          percent: currentPercent,
          auto: false,
        })
        if (currentPercent >= 100) {
          window.setTimeout(onHundredPercent, 500)
          clearInterval(this.timer)
        }
      }, step * 1000)
    }
  }

  componentDidUpdate() {
    this.startAddProgress()
  }

  componentDidMount() {
    this.startAddProgress()
  }

  get progressPercent() {
    const { percent } = this.props
    return { width: percent + '%' }
  }
  render() {
    const {
      style,
      className,
      auto,
      wrapperClassName,
      barClassName,
      barStyle,
      backStyle,
    } = this.props
    const { percent } = this.state
    let percentStyle = this.progressPercent
    if (auto) {
      percentStyle = { width: percent + '%' }
    }
    return (
      <div
        className={classNames(`${this.classPrefix}progress`, className)}
        style={style}
      >
        <h3 className={`${this.classPrefix}progress__tip text-right`} />
        <div
          className={classNames(
            `${this.classPrefix}progress__outer`,
            wrapperClassName
          )}
          style={backStyle}
        >
          <div
            className={classNames(
              `${this.classPrefix}progress__bar`,
              barClassName
            )}
            style={{ ...percentStyle, ...barStyle }}
          />
        </div>
      </div>
    )
  }
}
