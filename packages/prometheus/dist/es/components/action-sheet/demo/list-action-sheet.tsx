import * as React from 'react'
import ActionSheet from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import Radio from '../../radio/radio-item'
import Icon from '../../icon'
import './index.scss'

export default class ListActionSheet extends React.Component {
  state = {
    visible: false,
    visibleDemo1: false,
    visibleDemo2: false,
    visibleDemo3: false,
    visibleDemo4: false,
    visibleDemo5: false,
    visibleDemo6: false,
    mask: true,
    maskClosable: false,
    list: [
      {
        title: '操作一',
        id: 1,
      },
      {
        title: '操作二',
        id: 2,
      },
      {
        title: '操作三',
        id: 3,
      },
    ],
    disabledTotal: false,
    data1: [
      {
        label: '选项一描述最多一行',
        name: 'operate',
        value: 0,
      },
      {
        label: '选项二描述最多一行',
        name: 'operate',
        value: 1,
        checked: true,
      },
      {
        label: '选项三描述最多一行',
        name: 'operate',
        value: 2,
      },
    ],
    thumb2: <Icon type='hot' style={{ color: 'indianred' }} />,
    pickedIcon2: <Icon type='success' />,
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onCancel = (key: string) => {
    this.setState({ [key]: false })
  }

  onSelect = (selectData: any, index: number) => {
    console.log('选中：' + JSON.stringify(selectData) + '，索引：' + index)
  }

  onChange = (value) => {
    console.log('value = ' + value);
  }

  render() {
    const {
      visible,
      visibleDemo1,
      visibleDemo2,
      visibleDemo3,
      visibleDemo4,
      visibleDemo5,
      visibleDemo6,
      maskClosable,
      mask,
      list,
      data1,
      disabledTotal,
      thumb2,
      pickedIcon2,
    } = this.state
    return (
      <div>
        <Button onClick={this.toggleProxy.bind(this, 'visible')}>
          底部弹框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo1')}>
          带标题底部弹框
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo2')}>
          列表面板有说明
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo3')}>
          列表面板左对齐
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo4')}>
          列表面板左对齐-无标题带图标
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo5')}>
          列表面板-带按钮
        </Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo6')}>
          列表面板左对齐有图标
        </Button>
        <ActionSheet
          list={list}
          visible={visible}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.onCancel.bind(this, 'visible')}
        />
        <ActionSheet
          title='提示'
          list={list}
          type='primary'
          visible={visibleDemo1}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.onCancel.bind(this, 'visibleDemo1')}
        />
        <ActionSheet
          visible={visibleDemo2}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.onCancel.bind(this, 'visibleDemo2')}
        >
          <div>
            <div style={{ padding: '16px 15px' }}>
              <span style={{ fontSize: '14px', color: '#999' }}>
                这里提供一行或两行注释，通过信息澄清的方式避免产生用户疑问。
              </span>
            </div>
            <div
              onClick={this.toggleProxy.bind(this, 'visibleDemo2')}
              key={1}
              style={{
                fontSize: '18px',
                lineHeight: '27px',
                textAlign: 'center',
                padding: '11px 0',
                color: '#F4333C',
                borderTop: '1px solid #EEEEEE',
              }}
            >
              确认删除
            </div>
          </div>
        </ActionSheet>
        <ActionSheet
          title='提示'
          type='primary'
          visible={visibleDemo3}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.onCancel.bind(this, 'visibleDemo3')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={data => {
                  this.onChange(data)
                }}
                label={label}
                disabled={disabledTotal}
              />
            ))}
          </List>
        </ActionSheet>
        <ActionSheet
          type='primary'
          visible={visibleDemo4}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.onCancel.bind(this, 'visibleDemo4')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={data => {
                  this.onChange(data)
                }}
                label={label}
                disabled={disabledTotal}
                thumb={thumb2}
              />
            ))}
          </List>
        </ActionSheet>
        <ActionSheet
          title='提示'
          type='primary'
          visible={visibleDemo5}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.onCancel.bind(this, 'visibleDemo5')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={data => {
                  this.onChange(data)
                }}
                label={label}
                disabled={disabledTotal}
              />
            ))}
          </List>
          <div style={{ padding: '15px' }}>
            <Button>主要操作</Button>
          </div>
        </ActionSheet>
        <ActionSheet
          type='primary'
          visible={visibleDemo6}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.onCancel.bind(this, 'visibleDemo6')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={data => {
                  this.onChange(data)
                }}
                label={label}
                disabled={disabledTotal}
                thumb={thumb2}
                icon={pickedIcon2}
              />
            ))}
          </List>
          <div style={{ padding: '15px' }}>
            <Button>主要操作</Button>
          </div>
        </ActionSheet>

        <List header='参数控制'>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visible')}
                defaultChecked={visible}
              />
            }
          >
            visible
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'mask')}
                defaultChecked={mask}
              />
            }
          >
            mask
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'maskClosable')}
                defaultChecked={maskClosable}
              />
            }
          >
            maskClosable
          </List.Item>
        </List>
      </div>
    )
  }
}
