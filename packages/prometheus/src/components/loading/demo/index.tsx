import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Toast from '../../toast'
import Button from '../../button'
import Loading from '../index'
import './style.scss'
Toast.max = 4
class LoadingDemo extends React.Component {
  state = {
    typeText: {
      default: 'DEFAULT',
      bounce: 'BOUNCE',
      circle: 'CIRCLE',
    },
  }
  toast: any = {}
  onClick(type) {
    const { typeText } = this.state
    if (type.toUpperCase() === typeText[type]) {
      this.toast[type] = Toast.loading({
        message: '加载中...',
        loadingType: type,
      })
      typeText[type] = `CANCEL ${typeText[type]} TOAST`
      this.setState({
        typeText,
      })
    } else {
      Toast.destroy(this.toast[type])
      typeText[type] = type.toUpperCase()
      this.setState({
        typeText,
      })
    }
  }
  render() {
    const { typeText } = this.state
    return (
      <div style={{ textAlign: 'center', fontSize: '60px' }}>
        <h1
          style={{ borderBottom: '1px solid #cccccc', paddingBottom: '22px' }}
        >
          配合Toast 使用
        </h1>
        <Button type={'primary'} onClick={() => this.onClick('default')}>
          {typeText.default}
        </Button>
        <Button
          type={'primary'}
          style={{ marginTop: '22px' }}
          onClick={() => this.onClick('bounce')}
        >
          {typeText.bounce}
        </Button>
        <Button
          type={'primary'}
          style={{ marginTop: '22px' }}
          onClick={() => this.onClick('circle')}
        >
          {typeText.circle}
        </Button>
        <h1
          style={{ borderBottom: '1px solid #cccccc', paddingBottom: '22px' }}
        >
          直接引用
        </h1>
        <Loading
          type='default'
          className='default-loading-view'
          wrapperClassName='default-wrapper'
        />
        <Loading
          type='circle'
          className='circle-loading-view'
          wrapperClassName='circle-wrapper'
        />
        <Loading
          type='bounce'
          className='bounce-loading-view'
          wrapperClassName='bounce-wrapper'
        />
      </div>
    )
  }
}

ReactDOM.render(<LoadingDemo />, document.getElementById('root'))
