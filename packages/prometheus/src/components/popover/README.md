# Popover <q-qrcode name='popover' />

气泡菜单，在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作，建议配合动画组件使用。可设置气泡定位元素、偏移量、凸起箭头位置等。

## 代码演示

<q-code>
```jsx

import React from 'react'
import ReactDOM from 'react-dom'
import Popover, { IPopoverProps } from '../index'
import Button from '../../button'
import Checkbox from '../../checkbox'
import Radio from '../../radio'
import './style.scss'
const btnRef = React.createRef()

const demoItem = title => (
  <div
    style={{
      display: 'flex',
      alignContent: 'center',
    }}
  >
    <div
      style={{
        width: 20,
        height: 20,
        backgroundColor: '#4071FF',
        marginRight: 10,
      }}
    />
    {title}
  </div>
)
class Example extends React.Component {
  topCenter: any = {}
  topRightWithCheckbox: any = {}
  topCenterSlider: any = {}
  popProps = []
  state = {
    visible: false,
    data: [
      {
        label: demoItem('功能菜单1'),
        checked: false,
        disabled: false,
      },
      {
        label: demoItem('功能菜单2'),
        checked: false,
        disabled: true,
      },
      {
        label: demoItem('功能菜单3'),
        checked: true,
        disabled: false,
      },
    ],
    radioData: [
      {
        label: '功能菜单1',
        name: 'like',
        value: 0,
      },
      {
        label: '功能菜单2',
        name: 'like',
        value: 1,
      },
      {
        label: '功能菜单3',
        name: 'like',
        value: 2,
        checked: true,
      },
    ],
  }
  constructor(props) {
    super(props)
    this.topCenter = React.createRef()
    this.topCenterSlider = React.createRef()
    this.topRightWithCheckbox = React.createRef()
    this.popProps = [
      {
        target: btnRef,
        left: 0,
        top: 10,
        arrowPosition: 'topCenter',
        className: 'topCenter',
        ref: this.topCenter,
        type: 'normal',
      },
      {
        target: btnRef,
        left: 0,
        top: 180,
        arrowPosition: 'topRight',
        className: 'topRight',
        ref: this.topRightWithCheckbox,
        type: 'checkbox',
        autoClose: false,
      },
      {
        target: btnRef,
        left: 0,
        top: 300,
        arrowPosition: 'topRight',
        className: 'topRight',
        ref: this.topCenterSlider,
        type: 'normal',
        autoClose: false,
        animationType: 'slide',
      },
    ]
  }

  renderPopoverChild(type) {
    if (type === 'normal') {
      return [
        <div
          key={1}
          className='popover__child popover__child--normal'
          onClick={() => alert(111)}
        >
          功能菜单1
        </div>,
        <div key={2} className='popover__child popover__child--normal'>
          功能菜单2
        </div>,
        <div key={3} className='popover__child popover__child--normal'>
          功能菜单3
        </div>,
      ]
    }

    if (type === 'checkbox') {
      return this.state.data.map((item, index) => {
        return (
          <Checkbox
            key={`${index}-${item.checked}`}
            {...item}
            onChange={this.onChange(index)}
            direction={Checkbox.directionType.LEFT}
          />
        )
      })
    }
  }

  onChange = index => () => {
    this.setState(state => ({
      data: state.data.map((item, i) => ({
        ...item,
        checked: index === i ? !item.checked : item.checked,
      })),
    }))
  }

  render() {
    const { visible } = this.state
    return (
      <div style={{ backgroundColor: '#ccc', height: '80vh' }}>
        <div ref={btnRef as any}>
          <Button onClick={e => this.topCenter.current.show()}>
            点击开启居中普通popover
          </Button>
          <Button
            onClick={e => this.topCenter.current.close()}
            style={{ marginTop: '22px' }}
          >
            点击关闭居中普通popover
          </Button>
          <Button
            style={{ marginTop: '22px' }}
            onClick={e => this.topRightWithCheckbox.current.show()}
          >
            点击开启popoverWithCheckbox
          </Button>
          <Button
            onClick={e => this.topRightWithCheckbox.current.close()}
            style={{ marginTop: '22px' }}
          >
            点击关闭popoverWithCheckbox
          </Button>
          <Button
            style={{ marginTop: '22px' }}
            onClick={e => this.topCenterSlider.current.show()}
          >
            点击开启slide动画popover
          </Button>
          <Button
            onClick={e => this.topCenterSlider.current.close()}
            style={{ marginTop: '22px' }}
          >
            点击关闭slide动画popover
          </Button>
        </div>
        {this.popProps.map((props, index) => (
          <Popover key={`item${index}`} {...props}>
            {this.renderPopoverChild(props.type)}
          </Popover>
        ))}
      </div>
    )
  }
}
ReactDOM.render(<Example />, document.getElementById('root'))

```
</q-code>

## Popover API

| Option         | Description                 |  Type                                                           | Default Value |
| :------------- | :-------------------------- | :---------------------------------------------------------------- | :------------ |
| style          | popover样式                 | CSSProperties                                                     | {}            |
| visible        | 当前显隐状态                | Boolean                                                           | true          |
| target         | 待显示气泡 DOM(定位 origin) | React.createRef()                                                 | -             |
| left           | 基于 target 偏移量          | Number                                                            | 0             |
| top            | 基于 target 偏移量          | Number                                                            | 10            |
| arrowPosition  | 凸起箭头的位置              | 'bottomLeft' `|` 'bottomCenter' `|` 'bottomRight' `|` 'topLeft'等 | 'topCenter'   |
| autoClose      | 操作菜单后是否自动关闭      | Boolean                                                           | true          |
| animationType  | 动画的类型                  | 'fade' `|` 'slide'                                                | 'fade'        |
| slideDirection | 动画类型为 slide 时的方向   | 'up' `|` 'down'                                                   | 'down'        |

<q-iframe  name="popover" />
