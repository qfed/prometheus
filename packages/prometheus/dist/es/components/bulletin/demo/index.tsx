import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Bulletin, { IBulletinProps } from '../index'
import Icon from '../../icon'

class Example extends React.Component {
  state = {
    visible1: true,
    visible2: true,
    visible3: true,
    visible4: true,
  }

  onClose(key) {
    this.setState({
      [`visible${key}`]: false,
    })
  }

  render() {
    const { visible1, visible2, visible3, visible4 } = this.state
    return (
      <div>
        <Bulletin content='有20条内容更新啦' isCenter />
        <br />
        <Bulletin
          content='321店庆狂降1000万！'
          theme='yellow'
          icon={(<Icon type='warningLine' />)}
          isCenter
        />
        <br />
        <Bulletin
          visible={visible1}
          content='有20条内容更新啦'
          icon={<Icon type='warningLine' />}
          closeIcon={<Icon type='closePop' />}
          onClose={this.onClose.bind(this, '1')}
        />
        <br />
        <Bulletin
          visible={visible2}
          theme='yellow'
          content='有20条内容更新啦'
          icon={<Icon type='warningLine' />}
          closeIcon='关闭'
          onClose={this.onClose.bind(this, '2')}
        />
        <br />
        <Bulletin
          visible={visible3}
          content='【不滚动】有20条内容更新啦！【不滚动】有20条内容更新啦！【不滚动】有20条内容更新啦！'
          icon={<Icon type='warningLine' />}
          closeIcon={<Icon type='closePop' />}
          onClose={this.onClose.bind(this, '3')}
        />
        <br />
        <Bulletin
          visible={visible4}
          theme='yellow'
          content='有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！'
          icon={<Icon type='warningLine' />}
          closeIcon={<Icon type='closePop' />}
          onClose={this.onClose.bind(this, '4')}
          isScroll
        />
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
