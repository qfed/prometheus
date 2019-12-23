import * as React from 'react'
import * as ReactDOM from 'react-dom'
import JumpPrompt from '../index'
import { createBrowserHistory } from 'history'
import Button from '../../button'
import { Router, Route } from 'react-router-dom'
import Target from './target'
import Init from './init'
import history from './history'

class JumpPromptDemo extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <Router history={history}>
          <Route
            key='router0'
            path='/jump-prompt/jump-prompt.html'
            component={Init}
          />
          <Route
            key='router1'
            path='/jump-prompt/jump-prompt-target'
            component={Target}
          />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<JumpPromptDemo />, document.getElementById('root'))
