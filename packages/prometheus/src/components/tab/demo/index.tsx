import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Tabs, { ITabProps } from '../index'
import List from '../../list'
import Switch from '../../switch'
import Input from '../../input'
import Radio from '../../radio'
import Button from '../../button'
import ButtonGroup from '../../button/button-group'
import Tag from '../../tag'
import TagGroup from '../../tag/tag-group'

class Example extends React.Component {
  state = {
    tabBarPosition: true,
    maxCount: 4,
    animated: true,
    icon: false,
    tabSubItem: false,
    activeColor: '',
    theme: 'default',
    selectedIndex: 0,
    isSupportControlTab:false
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
    if (item.title.type) {
      alert(JSON.stringify({ 'title': item.title.type, 'isSelected': item.isSelected }))
    } else {
      alert(JSON.stringify(item))
    }
  }

  render() {
    const {
      tabBarPosition,
      maxCount,
      animated,
      icon,
      activeColor,
      theme,
      selectedIndex,
      tabSubItem,
      isSupportControlTab
    } = this.state

    let props: ITabProps = {
      activeColor,
      defaultTabIndex: 1,
      tabs: [
        {
          title: 'First Tab',
          icon: icon ? 'warning' : null,
          children: tabSubItem
            ? [
                {
                  title: '我是选择一',
                  isSelected: false,
                },
                {
                  title: '我是选择二',
                  isSelected: false,
                }
              ]
            : []
        },
        {
          title: 'Second Tab',
          icon: icon ? 'warning' : null,
          children: tabSubItem
            ? [
                {
                  title: '我是选择2-1',
                  isSelected: false,
                },
                {
                  title: '我是选择2-2',
                  isSelected: false,
                }
              ]
            : []
        },
        {
          title: 'Third Tab',
          icon: icon ? 'warning' : null,
          children: tabSubItem
            ? [
                {
                  title: (
                    <div>
                      <div className='popup-list__item__title'>分类3-1</div>
                      <TagGroup>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡一</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}} selected>选项卡二</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡三</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡四</Tag>
                      </TagGroup>
                    </div>
                  )
                },
                {
                  title: (
                    <div>
                      <div className='popup-list__item__title'>分类3-2</div>
                      <TagGroup>
                          <Tag style={{ margin: '0 0 10px 10px'}} selected>选项卡一</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡二</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}} selected>选项卡三</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡四</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡五</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡六</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡七</Tag>
                          <Tag style={{ margin: '0 0 10px 10px'}}>选项卡八</Tag>
                      </TagGroup>
                    </div>
                  )
                },
                {
                  title: (
                    <ButtonGroup>
                      <Button type="default" style={{ flex: 1, margin: '0 5px' }}>重置</Button>
                      <Button type="primary" style={{ flex: 1, margin: '0 5px' }}>确定</Button>
                    </ButtonGroup>
                  )
                }
              ]
            : []
        },
        { title: 'fourth Tab', icon: icon ? 'warning' : null },
        { title: 'fifth Tab', icon: icon ? 'warning' : null },
        { title: 'fifth Tab', icon: icon ? 'warning' : null },
        { title: 'fifth Tab', icon: icon ? 'warning' : null },
        { title: 'fifth Tab' }
      ],
      animated,
      maxCount,
      tabBarPosition: tabBarPosition ? 'top' : 'bottom',
      onChange: this.onChange,
      onSubChange: this.onSubChange,
    }
    props = this.state.isSupportControlTab ? {...props, selectedIndex} : props
    const ItemProps = {
      height: '200px',
      style: {
        backgroundColor: '#fff',
        height: '150px',
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
                defaultChecked={tabBarPosition}
              />
            }
          >
            {tabBarPosition ? '标签在顶部' : '标签在底部'}
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'animated')}
                defaultChecked={animated}
              />
            }
          >
            {animated ? '支持动画' : '不支持动画'}
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'icon')}
                defaultChecked={icon}
              />
            }
          >
            {icon ? '支持显示图标' : '不支持显示图标'}
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'tabSubItem')}
                defaultChecked={tabSubItem}
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
            label='tab被选中颜色'
            onChange={val => {
              this.setState({ activeColor: val })
            }}
            value={activeColor}
          />
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'isSupportControlTab')}
                defaultChecked={isSupportControlTab}
              />
            }
          >
            {isSupportControlTab ? '支持受控' : '不支持受控'}
          </List.Item>
          {isSupportControlTab && <Input
            label='tab被选中的title-tab'
            onChange={val => {
              this.setState({ selectedIndex: val })
            }}
            value={selectedIndex}
          />}
        </List>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
