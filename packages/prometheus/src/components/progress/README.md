# Progress <q-qrcode name='progress' />

进度条，包含两种形式，外部操控进度的进度条和自动上涨的进度条。支持设置进度百分比、进度条样式、自动上涨持续时长等。

## 代码演示

<q-code>
```jsx
iimport * as React from 'react'
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


```
</q-code>

## API

| Option           | Description                         |  Type  | Default Value |
| :--------------- | :---------------------------------- | :------- | :------------ |
| percent          | 进度百分比                          | Number   | 0             |
| barStyle         | 进度条样式                          | Object   | {}            |
| unfilled         | 是否显示未填充轨道                  | Boolean  | true          |
| auto             | 是否变为自动从 percent 涨到 100%    | Boolean  | false         |
| duration         | auto 的过程持续多久，单位 s         | Number   | 5             |
| step             | auto 的过程多久更新一次进度，单位 s | Number   | 1             |
| onHundredPercent | auto 涨至 100%的回调函数            | () => {} | -             |
| wrapperClassName | 进度条底部样式类名                  | String   | -             |
| barClassName     | 进度条样式类名                      | String   | -             |

<q-iframe name="progress" />
