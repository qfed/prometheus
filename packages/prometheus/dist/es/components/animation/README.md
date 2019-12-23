# Animation <q-qrcode name='animation' />

[心路历程](https://juejin.im/post/5caf0d6ef265da036c577713)

动画效果，支持fade、slider和zoom动画，可以控制动画开关、动画时长，设置进入、进入后、退出和退出后的动画生命周期回调。

## 代码演示

### fade动画

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Animation from '../index'
import Button from '../../button'
import './style.less'

class Example extends React.Component {
  state = {
    fadeIn: true
  }

  toggle = type => {
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    const { fadeIn } = this.state
    return (
      <div>
        <h2>animation fade</h2>
        <Button
          type="default"
          onClick={this.toggle.bind(this, 'fadeIn')}
          style={{ width: 100 }}
        >
          toggle
        </Button>
        <div className="demo-wrap">
          <Animation in={fadeIn} classNames="fade-animation">
            {
              <div className="demo">
                fade-
                {fadeIn ? 'in' : 'out'}
              </div>
            }
          </Animation>
        </div>
      </div>
    )
  }
}
```
</q-code>

### slide动画

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Animation from '../index'
import Button from '../../button'
import './style.less'

class Example extends React.Component {
  state = {
    slideIn: true
  }

  toggle = type => {
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    const { slideIn } = this.state
    return (
      <div>
        <h2>animation slide</h2>
        <Button
          type="default"
          onClick={this.toggle.bind(this, 'slideIn')}
          style={{ width: 100 }}
        >
          toggle
        </Button>
        <div className="demo-wrap">
          <Animation in={slideIn} classNames="slide-animation">
            {
              <div className="demo slide">
                slide-
                {slideIn ? 'in' : 'out'}
              </div>
            }
          </Animation>
        </div>
      </div>
    )
  }
}
```
</q-code>

### zoom动画

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Animation from '../index'
import Button from '../../button'
import './style.less'

class Example extends React.Component {
  state = {
    zoomIn: true
  }

  toggle = type => {
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    const { zoomIn } = this.state
    return (
      <div>
        <h2>animation zoom</h2>
        <Button
          type="default"
          onClick={this.toggle.bind(this, 'zoomIn')}
          style={{ width: 100 }}
        >
          toggle
        </Button>
        <div className="demo-wrap">
          <div className="zoom__wrap">
            <Animation in={zoomIn} classNames="zoom-animation">
              {
                <div className="demo zoom">
                  zoom-
                  {zoomIn ? 'in' : 'out'}
                </div>
              }
            </Animation>
          </div>
        </div>
      </div>
    )
  }
}
```
</q-code>

<!-- toggleProxy = type => {
  this.toggle(type)
}
toggle = type => {
  this.setState({ [type]: !this.state[type] })
}
onEnter = () => {
  console.time('enter')
}
onEntered = () => {
  console.timeEnd('enter')
}
onExit = () => {
  console.time('exit')
}
onExited = () => {
  console.timeEnd('exit')
} -->

## API

| Option        | Description                  |  Type           | Default Value |
| :------------ | :--------------------------- | :---------------- | :------------ |
| in            | 动画开关                     | Boolean           | -             |
| timeout       | 动画持续时间                 | Number            | 500           |
| unmountOnExit | 动画退场时移除DOM            | Boolean           | true          |
| appear        | 默认显示状态是否添加动画效果 | Boolean           | true          |
| classNames    | 动画效果对应的 name          | String `|` Object | -             |
| onEnter       | 生命周期回调                 | () => void        | -             |
| onEntered     | 生命周期回调                 | () => void        | -             |
| onExit        | 生命周期回调                 | () => void        | -             |
| onExited      | 生命周期回调                 | () => void        | -             |

<q-iframe name="animation"  />