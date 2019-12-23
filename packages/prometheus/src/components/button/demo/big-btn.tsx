import React from 'react'
import ReactDOM from 'react-dom'
import Button, { IButtonProps } from '../index'
import log from '../../../base/log'

const props: IButtonProps = {
  disabled: false,
  style: {},
  className: 'btn'
}

export default class BigBtn extends React.Component {
  @log
  onClick() {}
  render() {
    return (
      <div>
        <Button {...props} onClick={this.onClick}>primary</Button>
        <br />
        <Button {...props} onClick={this.onClick} loading>
          primary default loading
        </Button>
        <br />
        <Button {...props} loading onClick={this.onClick} loadingType="circle">
          primary circle loading
        </Button>
        <br />
        <Button type="primary" disabled={true}>
          primary disabled
        </Button>
        <br />

        <Button type="default" className="eee" onClick={this.onClick}>
          default
        </Button>
        <br />
        <Button type="default" className="eee" loading>
          default default loading
        </Button>
        <br />
        <Button type="default" className="eee" loading loadingType="circle">
          default circle loading
        </Button>
        <br />
        <Button type="default" disabled={true}>
          default disabled
        </Button>
        <br />

        <Button type="danger" onClick={this.onClick} className="eee">
          danger
        </Button>
        <br />
        <Button type="danger" className="eee" onClick={this.onClick} loading>
          danger default loading
        </Button>
        <br />
        <Button type="danger" className="eee" loading loadingType="circle">
          danger circle loading
        </Button>
        <br />
        <Button type="danger" disabled={true}>
          danger disabled
        </Button>
        <br />
      </div>
    )
  }
}
