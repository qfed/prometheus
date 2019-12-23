import * as React from 'react'
import * as ReactDOM from 'react-dom'
import List from '../index'
import Switch from '../../switch'
const { Item } = List

class Example extends React.Component {
  state = {}
  onClick(event: any) {
    console.log(event)
  }
  render() {
    return (
      <div className='q-list-demo' style={{ background: '#f9f9f9' }}>
        <List header='单行列表'>
          <Item onClick={this.onClick} extra='详细信息'>
            单行列表
          </Item>
        </List>
        <List header='单行列表'>
          <Item
            onClick={this.onClick}
            extra='详细信息文案内容过多的情况下可折行显示'
            multiLine
          >
            单行列表
          </Item>
        </List>
        <List header='多行列表'>
          <Item onClick={this.onClick} arrow extra='详细信息'>
            多行列表
          </Item>
          <Item onClick={this.onClick} arrow extra='详细信息' multiLine>
            多行列表  多行列表  多行列表  多行列表  多行列表  多行列表  多行列表  多行列表
          </Item>
          <Item onClick={this.onClick} extra='详细信息' arrow>
            多行列表
          </Item>
        </List>

        <List header='多描述列表'>
          <Item
            onClick={this.onClick}
            brief='列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。'
          >
            标题
          </Item>
          <Item
            onClick={this.onClick}
            brief='列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。'
            arrow
            multiLine
          >
            标题
          </Item>
          <Item onClick={this.onClick} brief='描述信息'>
            双行列表
          </Item>
          <Item onClick={this.onClick} brief='描述信息' arrow>
            双行列表
          </Item>
        </List>

        <List header='多描述列表'>
          <Item
            onClick={this.onClick}
            multiLine
            bdAlign='center'
            thumb={
              <div
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: '#4071FF',
                }}
              />
            }
            brief='列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。'
          >
            标题
          </Item>
          <Item
            onClick={this.onClick}
            multiLine
            bdAlign='center'
            thumb={
              <div
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: '#4071FF',
                }}
              />
            }
            brief='列表将数据呈现为可以分为平铺和分组形式。也可以在列表中加入图标、按钮、箭头等其他元素扩展场景。'
          >
            标题
          </Item>

          <Item
            onClick={this.onClick}
            brief='描述信息'
            thumb={
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#4071FF',
                }}
              />
            }
          >
            双行列表
          </Item>

          <Item
            onClick={this.onClick}
            brief='描述信息'
            thumb={
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#4071FF',
                }}
              />
            }
            arrow
          >
            双行列表
          </Item>
        </List>
        <List>
          <Item
            onClick={this.onClick}
            multiLine
            bdAlign='center'
            extra={<Switch defaultChecked />}
            thumb={
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#4071FF',
                }}
              />
            }
          >
            标题文字
          </Item>
          <Item
            onClick={this.onClick}
            multiLine
            bdAlign='center'
            extra={<Switch defaultChecked={false} />}
            thumb={
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#4071FF',
                }}
              />
            }
          >
            标题文字
          </Item>
        </List>
        <List>
          <Item
            onClick={this.onClick}
            brief='描述信息'
            extra={<div style={{ color: '#333333' }}>67,000</div>}
            thumb={
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#4071FF',
                }}
              />
            }
          >
            双行列表
          </Item>
          <Item
            onClick={this.onClick}
            brief='描述信息'
            extra={
              <div style={{ color: '#333333' }}>
                67,000<div className='q-list-line__bd__brief'>描述信息</div>
              </div>
            }
            thumb={
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#4071FF',
                }}
              />
            }
          >
            双行列表
          </Item>
        </List>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
