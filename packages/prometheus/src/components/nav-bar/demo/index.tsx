import * as React from 'react'
import * as ReactDOM from 'react-dom'
import NavBar, { INavBarProps } from '../index'
import Icon from '../../icon'

// props 为 IButtonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
const props1: INavBarProps = {
  style: {},
  className: 'btn',
  leftContent: <Icon type='navBack' />,
  rightContent: <Icon type='phone' style={{fontSize: '20px'}} />
}
const props2: INavBarProps = {
  style: {},
  leftContent: <Icon type='navBack' />,
  rightContent: '操作',
  type: 'default'
}
class NavBarDemo extends React.Component {
  state = {
    value: ''
  }

  render() {
    return (
      <div>
        <NavBar {...props1}>首页</NavBar>
        <br />
        <NavBar {...props2}>首页</NavBar>
      </div>
    )
  }
}

ReactDOM.render(<NavBarDemo />, document.getElementById('root'))
