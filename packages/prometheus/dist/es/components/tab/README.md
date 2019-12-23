# Tab <q-qrcode name='tab' />

标签页，可设置在顶部或底部、显示标签页数量、选中标签页颜色及其回调事件等。

## 代码演示

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Tabs, { ITabProps } from '../index'
import List from '../../list'
import Switch from '../../switch'
import Input from '../../input'
import Radio from '../../radio'

class Example extends React.Component {
  state = {
    tabBarPosition: true,
    maxCount: 4,
    animated: true,
    icon: false,
    tabSubItem: false,
    height: '150px',
    activeColor: '',
    theme: 'default'
  }
  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onChange = (index: number, e: any) => {
    console.log(index, e)
  }
  onSubChange = item => {
    alert(JSON.stringify(item))
  }

  render() {
    const {
      tabBarPosition,
      maxCount,
      animated,
      icon,
      height,
      activeColor,
      theme,
      tabSubItem
    } = this.state

    const props: ITabProps = {
      activeColor,
      tabs: [
        {
          title: 'First Tab',
          icon: icon ? 'icon-slide' : '',
          children: tabSubItem
            ? [
                {
                  title: '我是选择一',
                  isSelected: false
                },
                {
                  title: '我是选择二',
                  isSelected: false
                }
              ]
            : []
        },
        {
          title: 'Second Tab',
          icon: icon ? 'icon-slide' : '',
          children: tabSubItem
            ? [
                {
                  title: '我是选择2-1',
                  isSelected: false
                },
                {
                  title: '我是选择2-2',
                  isSelected: false
                }
              ]
            : []
        },
        { title: 'Third Tab', icon: icon ? <span>span标签</span> : '' },
        { title: 'fourth Tab', icon: icon ? 'icon-slide' : '' },
        { title: 'fifth Tab', icon: icon ? 'icon-slide' : '' },
        { title: 'fifth Tab', icon: icon ? 'icon-slide' : '' },
        { title: 'fifth Tab', icon: icon ? 'icon-slide' : '' },
        { title: 'fifth Tab' }
      ],
      animated,
      maxCount,
      selectedIndex: 0,
      tabBarPosition: tabBarPosition ? 'top' : 'bottom',
      onChange: this.onChange,
      onSubChange: this.onSubChange
    }
    const ItemProps = {
      height: '200px',
      style: {
        backgroundColor: '#fff',
        height: height ? height : '150px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
    return (
      <div>
        <Tabs {...props}>
          <Tabs.Item {...ItemProps}>Content of first tab</Tabs.Item>
          <Tabs.Item {...ItemProps}>Content of second tab</Tabs.Item>
          <Tabs.Item {...ItemProps}>Content of third tab</Tabs.Item>
          <Tabs.Item {...ItemProps}>Content of fourth tab</Tabs.Item>
          <Tabs.Item {...ItemProps}>Content of fifth tab</Tabs.Item>
        </Tabs>

        <List header={'参数控制'}>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'tabBarPosition')}
                checked={tabBarPosition}
              />
            }
          >
            {tabBarPosition ? '标签在顶部' : '标签在底部'}
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'animated')}
                checked={animated}
              />
            }
          >
            {animated ? '支持动画' : '不支持动画'}
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'icon')}
                checked={icon}
              />
            }
          >
            {icon ? '支持显示图标' : '不支持显示图标'}
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'tabSubItem')}
                checked={tabSubItem}
              />
            }
          >
            {tabSubItem ? '支持tab中下拉选项' : '不支持tab中下拉选项'}
          </List.Item>
          <Input
            label='可见标签'
            onChange={val => {
              this.setState({ maxCount: val })
            }}
            value={maxCount}
          />
          <Input
            label='固定内容区域高度'
            onChange={val => {
              this.setState({ height: val })
            }}
            value={height}
          />
          <Input
            label='tab被选中颜色'
            onChange={val => {
              this.setState({ activeColor: val })
            }}
            value={activeColor}
          />
        </List>
      </div>
    )
  }
}
```
</q-code>

## API

| Option         | Description                  |  Type                        | Default Value |
| :------------- | :--------------------------- | :----------------------------- | :------------ |
| className      | tab 类名                     | String                         | -             |
| tabs           | tab 数据                     | ITabIcon[]                     | {}            |
| selectedIndex  | 受控状态被选中的 tab 序号（从0开始）   | Number                         | 0             |
| defaultTabIndex  | 默认选中的 tab 序号              | Number                         | 0             |
| tabBarPosition | TabBar 位置                  | 'top' `|` 'bottom'             | 'top'         |
| onChange       | change 回调事件              | (index:number,e:event) => void | -             |
| maxCount       | 默认显示的 tab 数量          | Number                         | 4             |
| animated       | 是否支持动画                 | Boolean                        | true          |
| activeColor          | 自定义被选中 tab 颜色        | string                         | -             |
| onSubChange    | tab 弹出菜单子项选中回调事件 | (item:IPoplistItem) => void    | -             |


<q-iframe  name='tab' />
