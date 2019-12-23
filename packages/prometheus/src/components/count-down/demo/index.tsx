import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CountDown from '../index'
import List from '../../list'
import Input from '../../input'

class Example extends React.Component {
  state = {
    value: ''
  }

onChange = value => {
  console.log('onChange', value)
  this.setState({ value })
}
onClick = ref => {
  ref.start()
}
componentDidMount() {
  // this.countDown.start()
}
render() {
  const { value } = this.state
  const countDown = (
    <CountDown
      // ref={(countDown) => {
      //   this.countDown = countDown
      // }}
      // onChange={this.onClick}
      text="发送验证码"
      resendText="重发验证码"
      onClick={this.onClick}
    />
  )
  return (
    <List>
      <Input
        value={value}
        label="验证码"
        placeholder="请输入验证码"
        clearable
        maxLength={6}
        extra={countDown}
        onChange={this.onChange}
      />
    </List>
  )
}
}

ReactDOM.render(<Example />, document.getElementById('root'))
