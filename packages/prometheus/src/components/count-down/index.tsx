
import React from 'react'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/count-down/index.scss'

export interface ICheckboxProps extends IBaseProps {
  count: number
  text: string
  leftText: string
  rightText: string
  resendText: string
  onClick: (r: any) => void
}

const COUNT = 60

/**
 * CountDown
 * @prop {Function} onClick 触发倒计时事件
 * @prop {string} text 未倒计时时文本显示
 * @prop {number} count 倒计时秒数
 * @example
 */
class CountDown extends BaseComponent<ICheckboxProps, any> {
  static defaultProps = {
    count: COUNT,
    text: '发送验证码',
    leftText: '重发(',
    rightText: ')',
    resendText: '重发验证码',
    onClick: () => {}
  }

  timeFlag = 0
  state = {
    btnStatus: 0, // 0为未点击，1为点击
    count: COUNT,
    isReSend: false
  }

  constructor(props) {
    super(props)
    this.state.count = props.count
  }

  componentWillUnmount() {
    clearInterval(this.timeFlag)
  }

  onClick = () => {
    const { onClick } = this.props
    const { btnStatus } = this.state
    if (btnStatus === 1) return
    onClick(this)
  }

  start = () => {
    let { count } = this.state
    const { btnStatus } = this.state

    if (btnStatus === 1) return
    clearInterval(this.timeFlag)
    this.setState({ btnStatus: 1, count: --count })
    this.timeFlag = setInterval(() => {
      if (count === 0) {
        this.reset()
        clearInterval(this.timeFlag)
        return
      }
      this.setState({
        count: --count,
        btnStatus: 1,
        isReSend: true
      })
    }, 1000)
  }

  reset() {
    clearInterval(this.timeFlag)
    this.setState({
      btnStatus: 0,
      count: this.props.count ? this.props.count : COUNT
    })
  }

  render() {
    const { text, leftText, rightText, resendText } = this.props
    const { btnStatus, count, isReSend } = this.state
    return (
      <div className={`${this.classPrefix}count-down`} onClick={this.onClick}>
        {btnStatus === 1 ? (
          <div>
            <span className={`${this.classPrefix}count-down__text`}>
              {leftText}
            </span>
            <span className={`${this.classPrefix}count-down__count`}>
              {count}S
            </span>
            <span className={`${this.classPrefix}count-down__text`}>
              {rightText}
            </span>
          </div>
        ) : isReSend ? (
          <span>{resendText}</span>
        ) : (
          <span>{text}</span>
        )}
        {/* { btnStatus === 0 ? text : (
          <div>
            <span className={`${this.classPrefix}count-down__text`}>{leftText}</span>
            <span className={`${this.classPrefix}count-down__count`}>{count}S</span>
            <span className={`${this.classPrefix}count-down__text`}>{rightText}</span>
          </div>
        )} */}
      </div>
    )
  }
}

export default CountDown
