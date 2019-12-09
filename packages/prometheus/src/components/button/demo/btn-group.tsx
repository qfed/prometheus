import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button, { IButtonProps } from '../index'
import ButtonGroup from '../button-group'
import './style.less'

const props: IButtonProps = {
  disabled: false,
  style: {},
  className: 'btn',
  onClick(e) {
    console.log(e)
  },
}
const iconStyle: React.CSSProperties = {
  width: '22px',
  height: '22px',
  backgroundColor: '#cccccc',
  margin: '8px auto 0'
}
const btnStyle: React.CSSProperties = {
  flex: 1,
  border: 'none',
  borderTop: '1px solid #eee',
  color: '#999'
}

export default class BtnGroup extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="primary" style={{ width: 210 }}>主要操作</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="primary" style={{ width: 210 }} disabled>主要操作</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="primary" style={{ width: 215 }}>主要操作</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="primary" style={{ width: 215 }} disabled>主要操作</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="primary" style={{ width: 295 }}>主要操作</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup>
          <Button type="operate" mainText="操作" icon={<div style={iconStyle}></div>}></Button>
          <Button type="primary" style={{ width: 295 }} disabled>主要操作</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup>
          <Button type="default" style={btnStyle}>次要操作</Button>
          <Button type="primary" style={{ flex: 2 }}>主要操作</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup>
          <Button type='default' style={{ flex: 1, margin: '0 5px' }}>
            重置
          </Button>
          <Button type='primary' style={{ flex: 1, margin: '0 5px' }}>
            确定
          </Button>
        </ButtonGroup>
        <br />
      </div>
    )
  }
}
