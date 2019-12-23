# Bulletin <q-qrcode name='bulletin' />

公告栏，在页面顶部的公告、更新通知。支持自定义通知内容、图标、关闭按钮，通知可设置滚动显示。

## 代码演示

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Bulletin, { IBulletinProps } from '../index'
import Icon from '../../icon'

class Example extends React.Component {
  state = {
    visible1: true,
    visible2: true,
    visible3: true,
    visible4: true
  }

  onClose(key) {
    this.setState({
      [`visible${key}`]: !this.state[`visible${key}`]
    })
  }

  render() {
    const {
      visible1,
      visible2,
      visible3,
      visible4
    } = this.state
    return (
      <div>
        <Bulletin
          content='有20条内容更新啦'
          isCenter
        />
        <Bulletin
          content='321店庆狂降1000万！'
          className='q-bulletin--yellow'
          icon={(<Icon type='prompt' />)}
          isCenter
        />
        <Bulletin
          visible={visible1}
          content='有20条内容更新啦'
          icon={(<Icon type='prompt' />)}
          closeIcon={(<Icon type='closePop' />)}
          onClose={this.onClose.bind(this, '1')}
        />
        <Bulletin
          visible={visible2}
          className='q-bulletin--yellow'
          content='有20条内容更新啦'
          icon={(<Icon type='prompt' />)}
          closeIcon='关闭'
          onClose={this.onClose.bind(this, '2')}
        />
        <Bulletin
          visible={visible3}
          content='【不滚动】有20条内容更新啦！【不滚动】有20条内容更新啦！【不滚动】有20条内容更新啦！'
          icon={(<Icon type='prompt' />)}
          closeIcon={(<Icon type='closePop' />)}
          onClose={this.onClose.bind(this, '3')}
        />
        <Bulletin
          visible={visible4}
          className='q-bulletin--yellow'
          content='有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！'
          icon={(<Icon type='prompt' />)}
          closeIcon={(<Icon type='closePop' />)}
          onClose={this.onClose.bind(this, '4')}
          isScroll
        />
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
```
</q-code>

## API

| Option      | Description                |  Type                | Default Value |
| :---------- | :------------------------- | :--------------------- | :------------ |
| style       | Bulletin的样式            | Object                 | -             |
| className   | Bulletin的类名             | String                 | -             |
| visible     | Bulletin是否可见           | Boolean                | true          |
| contentClass  | Bulletin文字内容的类名     | String                 | -             |
| contentStyle | Bulletin文字内容的样式     | Object                 | -             |
| content     | Bulletin文字内容           | string                 | ''            |
| icon        | Bulletin的icon             | JSX.Element            | -             |
| closeIcon   | Bulletin的关闭图标或文字   | JSX.Element `|` String | -             |
| isCenter    | Bulletin文字和图标是否居中 | Boolean                | false         |
| isScroll    | Bulletin文字是否滚动显示   | Boolean                | false         |
| scrollClass   | Bulletin文字滚动的类名     | String                 | -             |
| scrollStyle  | Bulletin文字滚动的样式     | Object                 | -             |
| onClick     | 点击文字的回调             | () => void `|` {}      | -             |
| onClose     | 点击关闭的回调             | () => void `|` {}      | -             |

<q-iframe name="bulletin"  />
