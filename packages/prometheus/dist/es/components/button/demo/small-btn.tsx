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

export default class SmallBtn extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" size="medium" className="eee">medium default</Button>
        <br />
        <Button type="primary" size="medium" className="eee" loading>medium default</Button>
        <br />
        <Button type="primary" size="medium" className="eee" loading loadingType='circle'>medium default</Button>
        <br />
        <Button type="primary" size="medium" disabled={true}>medium default disabled</Button>
        <br />

        <Button type="default" size="medium" className="eee">medium default</Button>
        <br />
        <Button type="default" size="medium" className="eee" loading>medium default</Button>
        <br />
        <Button type="default" size="medium" className="eee" loading loadingType='circle'>medium default</Button>
        <br />
        <Button type="default" size="medium" disabled={true}>medium default disabled</Button>
        <br />

        <Button type="default" size="medium" className="eee" mainText="按钮主标题Normal" subText="按钮副标题文本Normal"></Button>
        <br />
        <Button
          type="default" size="medium" className="eee" mainText="按钮主标题Normal"
          subText="按钮副标题文本Normal" loading>
        </Button>
        <br />
        <Button
          type="default" size="medium" className="eee" mainText="按钮主标题Normal"
          subText="按钮副标题文本Normal" loading loadingType='circle'>
        </Button>
        <br />

        <Button type="primary" size="small" className="eee">primary</Button>
        <br />
        <Button type="primary" size="small" className="eee" loading>primary</Button>
        <br />
        <Button type="primary" size="small" className="eee" loading loadingType='circle'>primary</Button>
        <br />
        <Button type="primary" size="small" disabled={true}>primary disabled</Button>
        <br />

        <Button type="default" size="small" className="eee">default</Button>
        <br />
        <Button type="default" size="small" className="eee" loading>default</Button>
        <br />
        <Button type="default" size="small" className="eee" loading loadingType='circle'>default</Button>
        <br />
        <Button type="default" size="small" disabled={true}>default disabled</Button>
        <br />

        <Button type="primary" size="mini" className="eee">primary</Button>
        <br />
        <Button type="primary" size="mini" className="eee" loading>primary</Button>
        <br />
        <Button type="primary" size="mini" className="eee" loading loadingType='circle'>primary</Button>
        <br />
        <Button type="primary" size="mini" disabled={true}>primary disabled</Button>
        <br />

        <Button type="default" size="mini" className="eee">default</Button>
        <br />
        <Button type="default" size="mini" className="eee" loading>default</Button>
        <br />
        <Button type="default" size="mini" className="eee" loading loadingType='circle'>default</Button>
        <br />
        <Button type="default" size="mini" disabled={true}>default disabled</Button>
        <br />
      </div>
    )
  }
}
