# List <q-qrcode name='list' />

列表组件，一般内部用来放置用户输入数据的表单项。

## 代码演示

<q-code>
```jsx

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import List from '../index'
import { string } from 'prop-types'
const { Item } = List

class Example extends React.Component {
  state = {}
  onClick(event: any) {
    console.log(event)
  }
  render() {
    return (
     <div className="q-list-demo">
        <List header="单行列表">
          <Item
            onClick={this.onClick}
            extra="详细信息"
          >
            单行列表
          </Item>
        </List>
        <List header="单行列表">
          <Item
            onClick={this.onClick}
            extra="详细信息文案内容过多的情况下可折行显示"
            multiLine
          >
            单行列表
          </Item>
        </List>
        <List header="多行列表">
          <Item
            onClick={this.onClick}
            arrow
            extra="详细信息"
          >
            多行列表
          </Item>
          <Item
            onClick={this.onClick}
            arrow
            extra="详细信息"
          >
            多行列表
          </Item>
          <Item
            onClick={this.onClick}
            extra="详细信息"
            arrow
          >
            多行列表
          </Item>
        </List>

        <List header="多描述列表">
          <Item
            onClick={this.onClick}
            brief="列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。"
          >
            标题
          </Item>
          <Item
            onClick={this.onClick}
            brief="列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。"
            arrow
          >
            标题
          </Item>
          <Item
            onClick={this.onClick}
            brief="描述信息"
            extra="详细信息"
          >
            双行列表
          </Item>
          <Item
            onClick={this.onClick}
            brief="描述信息"
            extra="详细信息"
            arrow
          >
            双行列表
          </Item>
        </List>

        <List header="多描述列表">
          <Item
            onClick={this.onClick}
            multiLine
            thumb={<div style={{
              width: 70,
              height: 70,
              backgroundColor: '#4071FF'
            }}></div>}
            brief="列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。"
          >
            标题
          </Item>
          <Item
            onClick={this.onClick}
            multiLine
            thumb={<div style={{
              width: 70,
              height: 70,
              backgroundColor: '#4071FF'
            }}></div>}
            brief="列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。"
          >
            标题
          </Item>
        </List>
      </div>
    )
  }
}


```
</q-code>

## List API

| Option | Description |  Type                | Default Value |
| :----- | :---------- | :--------------------- | :------------ |
| header | 头部标题    | String `|` JSX.Element | ''            |

## ListItem API

| Option    | Description                                |  Type                        | Default Value |
| :-------- | :----------------------------------------- | :----------------------------- | :------------ |
| brief     | 标题下方描述信息                               | String `|` JSX.Element       |               |
| className | list的类名                                 | String                         | -             |
| style     | list的样式                                 | Object                         | {}            |
| extra     | 最右侧详细信息                             | String `|` JSX.Element         | -             |
| thumb     | 最左侧前置说明                             | String `|` JSX.Elemnt          | -             |
| multiLine  | 是否多行显示，单行显示时 超过一行会显示... | Boolean                        | false         |
| arrow     | 右侧详细信息增加箭头指向                   | Boolean                        | false         |
| onClick   | 点击item回调事件                           | onClick?: (event: any) => void | -             |

<q-iframe name="list" />