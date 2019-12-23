import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Popup, { IPopupProps } from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import '../../../base'
import './style.scss'

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

ReactDOM.render(<Example />, document.getElementById('root'))
