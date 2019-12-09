# Popup <q-qrcode name='popup' />

弹窗组件，主要用来作为其他弹窗组件的基础组件。比如 `dialog`, `confirm`, `action-sheet` 组件。只需设置对应的动画、内容就能实现。

## 代码演示

<q-code>
```jsx

export interface IPopupState {
  visible: boolean
  mask: boolean
  animation: string | boolean
  position: string | string[]
  maskCloseable: boolean
  height?: string | number
  width?: string | number
}

const initState: IPopupState = {
  visible: false,
  mask: true,
  animation: 'zoom',
  position: 'center',
  maskCloseable: false,
  height: 200,
  width: 'auto',
}
class Example extends React.Component {
  state = initState

  reset = () => {
    this.setState(initState)
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onClose = () => {
    this.toggleProxy('visible')
  }

  onExited = () => {
    const { visible } = this.state

    if (!visible) {
      this.reset()
    }
  }

  onClickHandle = (type?: string) => {
    switch (type) {
      case 'noAnimation': {
        this.setState({
          mask: true,
          maskCloseable: false,
          position: 'center',
          animation: '',
        })
        break
      }
      case 'popup': {
        this.setState({
          mask: true,
          maskCloseable: true,
          position: 'bottom',
          animation: 'slide-up',
        })
        break
      }
      case 'drop': {
        this.setState({
          mask: true,
          maskCloseable: true,
          position: 'top',
          animation: 'slide-down',
        })
        break
      }
      case 'left': {
        this.setState({
          mask: true,
          maskCloseable: true,
          position: 'left',
          animation: 'slide-left',
          height: '100%',
        })
        break
      }
      case 'right': {
        this.setState({
          mask: true,
          maskCloseable: true,
          position: 'right',
          animation: 'slide-right',
          height: '100%',
        })
        break
      }
      case 'customAnim': {
        this.setState({
          mask: true,
          maskCloseable: true,
          position: 'center',
          animation: 'alert',
        })
        break
      }
      default: {
        this.setState({
          mask: true,
          maskCloseable: true,
          position: 'center',
          animation: 'zoom',
        })
      }
    }

    this.toggleProxy('visible')
  }

  render() {
    const {
      visible,
      mask,
      maskCloseable,
      animation,
      position,
      height,
    } = this.state
    const width =
      position === 'top' || position === 'bottom' ? { width: '100vw' } : {}
    return (
      <div>
        <div>
          <Button
            onClick={() => {
              this.onClickHandle()
            }}
          >
            默认弹窗
          </Button>
          <br />
          <Button
            onClick={() => {
              this.onClickHandle('noAnimation')
            }}
          >
            无动画弹窗
          </Button>
          <br />
          <Button
            onClick={() => {
              this.onClickHandle('popup')
            }}
          >
            底部弹起
          </Button>
          <br />
          <Button
            onClick={() => {
              this.onClickHandle('drop')
            }}
          >
            头部下落
          </Button>
          <br />
          <Button
            onClick={() => {
              this.onClickHandle('left')
            }}
          >
            左边划出
          </Button>
          <br />
          <Button
            onClick={() => {
              this.onClickHandle('right')
            }}
          >
            右边划出
          </Button>
          <br />
          <Button
            onClick={() => {
              this.onClickHandle('customAnim')
            }}
          >
            自定义动画
          </Button>
        </div>
        <Popup
          onClose={this.onClose}
          visible={visible}
          timeout={300}
          mask={mask}
          maskClosable={maskCloseable}
          position={position}
          animation={animation}
          onExited={this.onExited}
        >
          <div
            style={{
              height,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              backgroundColor: '#fff',
              ...width,
            }}
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <div>内部内容完全之定义可以是`string`也可以是`JSX.Element`</div>

            <Button onClick={this.toggleProxy.bind(this, 'visible')}>
              close
            </Button>
          </div>
        </Popup>
      </div>
    )
  }
}
```
</q-code>

## API

| Option    | Description                                                                                   | Type               | Default Value |
| :-------- | :-------------------------------------------------------------------------------------------- | :----------------- | :------------ |
| style     | popup样式                                                                                     | Object             | -             |
| className | popup类名                                                                                     | String             | -             |
| visible   | 显示/隐藏设置                                                                                 | Boolean            | false         |
| mask      | 是否显示蒙层                                                                                  | Boolean            | -             |
| timeout   | 动画时间                                                                                      | Number             | 500           |
| animation | 动画效果'slide-up','slide-down', 'slide-left', 'slide-right', 'zoom', false。也支持自定义动画 | String `|` Boolean | 'zoom'        |
| position  | 可以控制一个或者两个方向内容框，不能设置冲突的方向                                            | String `|` Array   | 'center'      |
| onClose   | 关闭事件                                                                                      | () => void         | -             |
| onEnter   | 生命周期回调                                                                                  | () => void         |               |
| onEntered | 生命周期回调                                                                                  | () => void         |               |
| onExit    | 生命周期回调                                                                                  | () => void         |               |
| onExited  | 生命周期回调                                                                                  | () => void         |               |
<q-iframe  name="popup"  />