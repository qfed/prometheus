import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {{name|pascal}} from '../index'

class {{name|pascal}}Demo extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <{{name|pascal}}>primary</{{name|pascal}}>
      
      </div>
    )
  }
}

ReactDOM.render(<{{name|pascal}}Demo />, document.getElementById('root'))
