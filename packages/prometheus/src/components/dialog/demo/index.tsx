import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Route, HashRouter, NavLink } from 'react-router-dom'
import { routerList } from './router-config'
import './style.less'

const path = '/'
class DialogDemo extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <HashRouter>
          <div className='link-list'>
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
                        match || (item.exact && location.pathname === '/'),
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
                <Route key={index} exact path='/' component={item.component} />
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

ReactDOM.render(<DialogDemo />, document.getElementById('root'))
