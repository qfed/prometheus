import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Route, HashRouter, NavLink } from 'react-router-dom'
import BigBtn from './big-btn'
import SmallBtn from './small-btn'
import BtnGroup from './btn-group'
import OtherBtn from './other-btn'
import { routerList } from './router-config'
import './style.less'

// props 为 IButtonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错

// 如果有一些特殊需求也可以写一个class,对属性做一些个性化的处理,比如传入的数据为后台接口取回来的data
// class ButtonInit implements IButtonProps {
//   public name: string
//   // public width: number
//   // public height: number
//   constructor({ name }: { name: string }) {
//     this.name = name
//   }
// }
// let props: IButtonProps = new ButtonInit(data)
const path = '/'
class ButtonDemo extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <HashRouter>
          <div className="link-list">
            {routerList.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                children={({ match, location }) => (
                  <NavLink
                    to={item.path}
                    className={classNames(item.className, {
                      [item.activeClassName]:
                        match || (item.exact && location.pathname === '/')
                    })}
                  >
                    {item.linkName}
                  </NavLink>
                )}
              />
            ))}
          </div>
        </HashRouter>
        <HashRouter>
          {routerList.map((item, index) => {
            if (item.exact) {
              return (
                <Route key={index} exact path="/" component={item.component} />
              )
            }
          })}
          {routerList.map((item, index) => (
            <Route key={index} path={item.path} component={item.component} />
          ))}
        </HashRouter>
      </div>
    )
  }
}

ReactDOM.render(<ButtonDemo />, document.getElementById('root'))
