import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Toast from '../index'
import Button from '../../button'
import { autobind } from 'core-decorators'
import List from '../../list'
import Input from '../../input'
let seed = 0
Toast.max = 10
@autobind
class Example extends React.Component {
  state = {
    max: 10,
    loadingHandle: '',
    choke: false,
  }
  loadingHandle: string = ''
  constructor(props) {
    super(props)
  }

  show(method) {
    const styleObj: any = {}
    if (method === 'info') {
      styleObj.style = { width: '200px' }
    }
    Toast[method]({
      message: `info${seed++}`,
      duration: 2,
      ...styleObj,
      choke: this.state.choke,
    })
  }
  loading() {
    const loadingHandle = Toast.loading({
      message: '加载中...',
      loadingType: 'default',
      choke: this.state.choke,
    })
    this.setState({ loadingHandle })
  }
  destroy() {
    Toast.destroy(this.state.loadingHandle)
    this.setState({ loadingHandle: '' })
  }
  onChange = max => {
    this.setState({ max })
    Toast.max = max

    Toast.success(`set max:${max}`)
  }
  toggleChokeToast = () => {
    const { choke } = this.state
    if (!choke) {
      Toast.success('成功设定了阻塞Toast')
    } else {
      Toast.success('成功关闭了阻塞Toast')
    }
    this.setState({
      choke: !choke,
    })
  }
  componentDidMount() {}
  render() {
    const { max, loadingHandle } = this.state
    return (
      <List>
        <Button onClick={this.show.bind(this, 'info')}>
          show info Toast(with Extra style)
        </Button>
        <Button
          onClick={this.show.bind(this, 'fail')}
          style={{ marginTop: '22px' }}
        >
          {' '}
          show fail Toast
        </Button>
        <Button
          onClick={this.show.bind(this, 'success')}
          style={{ marginTop: '22px' }}
        >
          show success Toast
        </Button>
        <Button
          onClick={this.show.bind(this, 'warn')}
          style={{ marginTop: '22px' }}
        >
          {' '}
          show warn Toast
        </Button>
        <br />

        <Input label='max' onChange={this.onChange} value={max} />
        <br />
        <Button onClick={this.loading} disabled={!!loadingHandle}>
          show loading
        </Button>
        <br />
        <Button onClick={this.destroy}>destroy loading </Button>
        <Button onClick={this.toggleChokeToast} style={{ marginTop: '22px' }}>
          toggle choke toast
        </Button>
      </List>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
