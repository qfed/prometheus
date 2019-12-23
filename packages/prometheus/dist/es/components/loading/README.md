# Loading <q-qrcode name='loading' />

Loading 组件，可以单独引用，也可以配合 Toast.loading 使用。支持四种类型（default、bounce和circle）。

## 代码演示

如果需要修改 Loading 的样式，每种类型的样式请参考对应的 scss 代码

### 组件引用

<q-code>
```jsx
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

```
</q-code>

### 样式修改

<q-code>
```scss
// change default style
.default-loading-view:before {
  background-color: #000; // change default color
}
.default-wrapper {
  width: 200px;
  height: 200px; // change default size
}
// change circle style
.circle-loading-view:before {
  background-color: #000; // change circle color
}
.circle-wrapper {
  width: 200px;
  height: 200px; // change circle size
}

// change bounce style
.bounce-wrapper {
  width: 160px;
  height: 160px; // change bounce size
}
.bounce-loading-view {
  // 用bounce__wrapper的宽度除以4
  background-color: #000; // change bounce color
  width: 40px;
  height: 40px; // change bounce size
}

```
</q-code>

## API

| Option           | Description               |  Type                             | Default Value |
| :--------------- | :------------------------ | :---------------------------------- | :------------ |
| type             | loading 类型             | 'circle' `|` 'default' `|` 'bounce' | 'default'     |
| className        | loading 内部每个点的类名 | String                              | -             |
| wrapperClassName | loading的包裹层的类名     | String                              | -             |

<q-iframe name="loading"  />
