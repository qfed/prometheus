import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {icons} from '../iconType'
import Icon from '../index'


class IconDemo extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>icon</h3>

        <ul
          style={{
            flexWrap: 'wrap',
            display: 'flex',
            fontSize: 36,
            margin: '.5em'
          }}
        >
          {icons.map((type, index) => (
            <li
              key={`icon-${index}`}
              style={{ width: '45%', listStyle: 'none', textAlign: 'center' }}
            >
              <Icon type={type as any} />
              <div style={{ fontSize: 12 }}> {type}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<IconDemo />, document.getElementById('root'))
