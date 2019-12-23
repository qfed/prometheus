import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Progress, { IProgressProps } from '../index'
import Button from '../../button/index'
import Toast from '../../toast/index'

class ProgressDemo extends React.Component {
  state = {
    percent: 0,
    auto: false,
  }
  addPercent = () => {
    const percent = this.state.percent
    if (percent > 90) {
      Toast.max = 1
      Toast.fail({ message: '将大于100%' })
    } else {
      this.setState({
        percent: percent + 10,
      })
    }
  }
  reducePercent = () => {
    const percent = this.state.percent
    if (percent < 10) {
      Toast.max = 1
      Toast.fail({ message: '将小于0%' })
    } else {
      this.setState({
        percent: percent - 10,
      })
    }
  }
  render() {
    const { percent } = this.state
    const props: IProgressProps = {
      className: 'a nice process',
      percent: this.state.percent,
      style: { color: '#0098e5' },
    }
    return (
      <div>
        <div className='q-progress'>
          <Progress {...props} />
        </div>
        <h2 style={{ marginTop: '20px' }}>{percent}%</h2>
        <Button type='primary' onClick={this.addPercent}>
          + 10%
        </Button>
        <br />
        <Button type='default' onClick={this.reducePercent}>
          - 10%
        </Button>
        <div className='q-progress'>
          <Progress
            auto={this.state.auto}
            step={0.3}
            duration={6}
            onHundredPercent={() => alert('i am 100%')}
            percent={0}
            wrapperClassName={'progress-wrapper'}
            barClassName={'progress-bar'}
          />
        </div>
        <Button
          type='primary'
          style={{ marginTop: '22px' }}
          onClick={() => this.setState({ auto: true })}
        >
          开始自动涨
        </Button>
      </div>
    )
  }
}
ReactDOM.render(<ProgressDemo />, document.getElementById('root'))
