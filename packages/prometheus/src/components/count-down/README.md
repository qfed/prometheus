# CountDown <q-qrcode name='count-down' />

倒计时，主要用于发送验证码倒计时，配合输入框使用。有三个状态，点击前、点击后倒计时、倒计时结束后状态。可设置三个状态的文字内容，点击的回调事件。

## 代码演示

<q-code>
```jsx
const COUNT = 60

/**
 * CountDown
 * @prop {Function} onClick 触发倒计时事件
 * @prop {string} text 未倒计时时文本显示
 * @prop {number} count 倒计时秒数
 * @example
 */
class CountDown extends React.Component<any, any> {

  static defaultProps = {
    onClick: () => {},
    text: '发送验证码',
    count: COUNT,
  }

  timeFlag = 0
  state = {
    btnStatus: 0, // 0为未点击，1为点击
    count: COUNT,
  }

  constructor(props) {
    super(props)
    this.state.count = props.count
  }

  componentWillUnmount() {
    clearInterval(this.timeFlag)
  }

  onCheckCodeClick = () => {
    const { onClick } = this.props
    let { count } = this.state
    const { btnStatus } = this.state

    if (btnStatus === 1) return
    onClick()

    this.timeFlag = setInterval(() => {
      if (count === 0) {
        this.reset()
        clearInterval(this.timeFlag)
        return
      }
      this.setState({
        count: --count,
        btnStatus: 1,
      })
    }, 1000);
  }

  reset() {
    clearInterval(this.timeFlag)
    this.setState({
      btnStatus: 0,
      count: COUNT,
    })
  }

  render() {
    const { text } = this.props
    const { btnStatus, count } = this.state
    return (
      <div className='count-down' onClick={this.onCheckCodeClick}>
        { btnStatus === 0 ? text : `${count}秒`}
      </div>
    )
  }
}

export default CountDown
```
</q-code>

## API

| Option     | Description                  |  Type  | Default Value |
| :--------- | :--------------------------- | :------- | :------------ |
| onClick    | 点击事件，点击后进行倒计时   | () => {} | -             |
| text       | 未点击时文案                 | String   | '发送验证码'  |
| leftText   | 倒计时数字左侧文案           | String   | '重发('       |
| rightText  | 倒计时数字右侧文案           | String   | ')'           |
| resendText | 倒计时结束后文案             | String   | '重发验证码'  |
| count      | 初始倒计时数                 | Number   | 60            |
| start      | 开始计时函数                 | Function | -             |
| reset      | 重置到未开始倒计时状态的函数 | Function | -             |


<q-iframe name="count-down" />