# Slider <q-qrcode name='slider' />

滑动输入条，用于范围取数值，允许用户在一个区间中选取特定值。支持通过controller控制两种类型，携带左右的控制组件（controller = true）和不携带控制组件（controller = false）。

## 代码演示

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Slider from '../index'

class SliderDemo extends React.Component {
  state = {
    value1 : undefined  ,
    value2 : undefined
   }
  onTounchMove = event => {
    const { changedTouches: touches } = event
    const [touch] = touches
    console.dir(touch)
  }
  onChange = (value) => {
    this.setState({ value })
  }
  render() {
    return (
      <div style={{ padding: 20, background: '#3AC2B6' }}>
        <h1 style={{ textAlign: 'center', padding: '22px 0' }}>
          Slider With Controller
        </h1>
        <Slider  onChange={this.onChange} controller={true} min={100} max={500} value={this.state.value1} step={10} />
        <h1 style={{ textAlign: 'center', padding: '22px 0' }}>
          Slider Without Controller
        </h1>
        <Slider onChange={this.onChange} controller={false} min={100} max={500} value={this.state.value2} step={10} />
      </div>
    )
  }
}

ReactDOM.render(<SliderDemo />, document.getElementById('root'))
```
</q-code>

## API

| Option     | Description                           |  Type              | Default Value |
| :--------- | :------------------------------------ | :------------------- | :------------ |
| min        |  取值范围的最小值                    | Number               | 0             |
| max        | 取值范围的最大值                     | Number               | 100           |
| value      | 设定值，传入undefined时组件为非受控组件，否则为受控组件  | Number      | undefined       |
| step       | 滑块每次移动的值增长步长              | Number               | 1             |
| disabled   | 是否禁用                              | Boolean              | false         |
| onChange   | 滑块移动导致值改变后的回调函数        | (value:number) => {} | -             |
| onComplete | touchStart->touchEnd 为 complete 操作 | (value:number) => {} | -             |
| controller | 是否携带左右+/-操作按钮               | Boolean              | true          |

<q-iframe name="slider"  />
