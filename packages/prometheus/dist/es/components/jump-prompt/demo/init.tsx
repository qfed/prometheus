import React, { Component } from 'react'
import Button from '../../button'
import history from './history'

export default class Init extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => history.push('/jump-prompt/jump-prompt-target')}>
          GO to Target
        </Button>
      </div>
    )
  }
}
