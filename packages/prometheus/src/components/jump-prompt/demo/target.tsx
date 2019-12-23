import React, { Component } from 'react'
import JumpPrompt from '../index'
import history from './history'

export default class Target extends Component {
  render() {
    return (
      <div>
        <JumpPrompt history={history} />
        回退会出现弹窗
      </div>
    )
  }
}
