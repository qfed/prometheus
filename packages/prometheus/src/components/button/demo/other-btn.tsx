import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button, { IButtonProps } from '../index'

const props: IButtonProps = {
  disabled: false,
  style: {},
  className: 'btn',
  onClick(e) {
    console.log(e)
  }
}

export default class OtherBtn extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" shape="pill" className="eee">primary pill</Button>
        <br />
        <Button type="primary" shape="pill" className="eee" loading>primary pill</Button>
        <br />
        <Button type="primary" shape="pill" className="eee" loading loadingType='circle'>primary pill</Button>
        <br />
        <Button type="primary" shape="pill" disabled={true}>primary pill disabled</Button>
        <br />

        <Button type="default" shape="pill" className="eee">default pill</Button>
        <br />
        <Button type="default" shape="pill" className="eee" loading>default pill</Button>
        <br />
        <Button type="default" shape="pill" className="eee" loading loadingType='circle'>default pill</Button>
        <br />
        <Button type="default" shape="pill" disabled={true}>default pill disabled</Button>
        <br />

        <Button
          type="default"
          size="medium"
          shape="pill"
          className="eee"
          mainText="按钮主标题Normal"
          subText="按钮副标题文本Normal"
          loading
        ></Button>
        <br />
        <Button
          type="default"
          size="medium"
          shape="pill"
          className="eee"
          mainText="按钮主标题Normal"
          subText="按钮副标题文本Normal"
          loading
          loadingType='circle'
        ></Button>
      </div>
    )
  }
}
