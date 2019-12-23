# ActionSheet <q-qrcode name='action-sheet' />

动作面板，点击后从底部弹出模态框。提供和当前场景相关的多个操作动作，支持列表面板和宫格面板两种类型。列表面板主要用于自定义多操作，宫格面板主要用于分享等操作。列表面板操作、面板标题、辅操作及其事件支持自定义，可选关闭模式（关闭按钮在下方或右上）、是否显示遮罩层、遮罩层是否可关闭。

## 代码演示

### 列表面板

<q-code>
```jsx
import * as React from 'react'
import ActionSheet from '../index'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import Radio from '../../radio';
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
    list: [{
      title: '操作一',
      id: 1
    }, {
      title: '操作二',
      id: 2
    }, {
      title: '操作三',
      id: 3
    }],
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
      }
    ],
    thumb2: (<Icon type='hot' style={{ color: 'indianred' }} />),
    pickedIcon2: (<Icon type='success' />)
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onSelect = (selectData: any, index: number) => {
    console.log('选中：' + JSON.stringify(selectData) + '，索引：' + index);
  }

  onChange = ({ name, value }) => {
    console.log('name = ' + name, '  value = ' + value);
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
        <Button onClick={this.toggleProxy.bind(this, 'visible')}>底部弹框</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo1')}>带标题底部弹框</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo2')}>列表面板有说明</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo3')}>列表面板左对齐</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo4')}>列表面板左对齐-无标题带图标</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo5')}>列表面板-带按钮</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo6')}>列表面板左对齐有图标</Button>
        <ActionSheet
          list={list}
          visible={visible}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visible')}
        >
        </ActionSheet>
        <ActionSheet
          title="提示"
          list={list}
          type='primary'
          visible={visibleDemo1}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo1')}
        >
        </ActionSheet>
        <ActionSheet
          visible={visibleDemo2}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo2')}
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
              style={{ fontSize: '18px', lineHeight: '27px', textAlign: 'center', padding: '11px 0',
              color: '#F4333C', borderTop: '1px solid #EEEEEE' }}
            >确认删除</div>
          </div>
        </ActionSheet>
        <ActionSheet
          title="提示"
          type='primary'
          visible={visibleDemo3}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo3')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={(data) => { this.onChange(data) }}
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
          onCancel={this.toggleProxy.bind(this, 'visibleDemo4')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={(data) => { this.onChange(data) }}
                label={label}
                disabled={disabledTotal}
                thumb={thumb2}
              />
            ))}
          </List>
        </ActionSheet>
        <ActionSheet
          title="提示"
          type='primary'
          visible={visibleDemo5}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo5')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={(data) => { this.onChange(data) }}
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
          onCancel={this.toggleProxy.bind(this, 'visibleDemo6')}
        >
          <List>
            {data1.map(({ name, value, checked, label }) => (
              <Radio
                key={value}
                name={name}
                checked={checked}
                value={value}
                onChange={(data) => { this.onChange(data) }}
                label={label}
                disabled={disabledTotal}
                thumb={thumb2}
                pickedIcon={pickedIcon2}
              />
            ))}
          </List>
          <div style={{ padding: '15px' }}>
            <Button>主要操作</Button>
          </div>
        </ActionSheet>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visible')}
                checked={visible}
              />
            }
          >
            visible
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'mask')}
                checked={mask}
              />
            }
          >
            mask
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'maskClosable')}
                checked={maskClosable}
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
```
</q-code>

### 宫格面板

<q-code>
```jsx
import * as React from 'react'
import ActionSheet from '../index'
import classNames from 'classnames'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import './index.scss'

export default class CellActionSheet extends React.Component {
  state = {
    visibleDemo7: false,
    visibleDemo8: false,
    visibleDemo9: false,
    visibleDemo10: false,
    mask: true,
    maskClosable: false,
    data2: [1, 2, 3, 4, 5, 6, 7, 8],
    data3: [1, 2, 3, 4],
    shareList1: [
      {
        text: '微信',
        icon: 'http://img002.qufenqi.com/products/f2/f3/f2f3008d74dc30af4740f34dc920c6d2.png'
      },
      {
        text: '朋友圈',
        icon: 'http://img003.qufenqi.com/products/39/a9/39a9e2d6315d3d558f99e1d43aa2b0bc.png'
      },
      {
        text: 'QQ',
        icon: 'http://img002.qufenqi.com/products/f2/f3/f2f3008d74dc30af4740f34dc920c6d2.png'
      }
    ],
    shareList2: [
      {
        text: '微信好友/群',
        icon: 'http://img003.qufenqi.com/products/17/19/1719b8eb348c30a1d231316f09c91f69.png'
      },
      {
        text: '朋友圈',
        icon: 'http://img002.qufenqi.com/products/71/6a/716a64c6d5af7ba0413e107a193344f3.png'
      }
    ],
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }

  onSelect = (selectData: any, index: number) => {
    console.log('选中：' + JSON.stringify(selectData) + '，索引：' + index);
  }

  onChange = ({ name, value }) => {
    console.log('name = ' + name, '  value = ' + value);
  }

  render() {
    const {
      visibleDemo7,
      visibleDemo8,
      visibleDemo9,
      visibleDemo10,
      maskClosable,
      mask,
      data2,
      data3,
      shareList1,
      shareList2,
    } = this.state
    return (
      <div>
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo7')}>宫格面板-两行</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo8')}>宫格面板</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo9')}>分享面板-1</Button>
        <br />
        <Button onClick={this.toggleProxy.bind(this, 'visibleDemo10')}>分享面板-2</Button>

        <ActionSheet
          className='block-panel'
          visible={visibleDemo7}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo7')}
        >
          <div className='block-panel__wrap'>
            {data2.map((item, index) => (
              <div key={index} className={classNames({
                'block-panel__item': true,
                'block-panel__item__line': (index + 1) % 4 === 0 && ((index + 1) / 4 !== data2.length / 4)
              })}>
                <div className='block-panel__item__icon' style={{ backgroundColor: '#fff' }}></div>
                <div className='block-panel__item__title'>标题{item}</div>
              </div>
            ))}
          </div>
        </ActionSheet>
        <ActionSheet
          className='block-panel'
          visible={visibleDemo8}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo8')}
        >
          <div className='block-panel__wrap'>
            {data3.map((item, index) => (
              <div className='block-panel__item' key={index}>
                <div className='block-panel__item__icon' style={{ backgroundColor: '#fff' }}></div>
                <div className='block-panel__item__title'>标题{item}</div>
              </div>
            ))}
          </div>
        </ActionSheet>
        <ActionSheet
          className='share-wrap'
          visible={visibleDemo9}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo9')}
        >
          <div className='share-wrap__title'>分享到</div>
          <div className='share-wrap__wrap'>
            {shareList1.map((item, index) => (
              <div className='share-wrap__item' key={index}>
                <img className='share-wrap__item__icon' src={item.icon} />
                <div className='share-wrap__item__title'>{item.text}</div>
              </div>
            ))}
          </div>
        </ActionSheet>
        <ActionSheet
          className='share-wrap share-wrap--primary'
          type='primary'
          visible={visibleDemo10}
          mask={mask}
          maskClosable={maskClosable}
          onSelect={this.onSelect}
          onCancel={this.toggleProxy.bind(this, 'visibleDemo10')}
        >
          <div className='share-wrap__wrap'>
            {shareList2.map((item, index) => (
              <div className='share-wrap__item' key={index}>
                <img className='share-wrap__item__icon' src={item.icon} />
                <div className='share-wrap__item__title'>{item.text}</div>
              </div>
            ))}
          </div>
        </ActionSheet>

        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'visibleDemo7')}
                checked={visibleDemo7}
              />
            }
          >
            visible
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'mask')}
                checked={mask}
              />
            }
          >
            mask
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'maskClosable')}
                checked={maskClosable}
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

```
</q-code>


## API

| Option       | Description                                          |  Type                                           | Default Value |
| :----------- | :--------------------------------------------------  | :---------------------------------------------- | :------------ |
| list         | 弹窗面板操作列表数据，每项item需包含title和id，title属性用于展示| any[]                                           | -             |
| title        | 面板标题                                              | String                                          | -             |
| visible      | 面板是否可见                                           | Boolean                                         | -             |
| type         | 类型(default: 关闭按钮在下方；primary: 关闭按钮在右上) | 'default' `|` 'primary'                          | 'default'    |
| mask         | 是否显示遮罩层                                         | Boolean                                          | true         |
| maskClosable | 遮罩层是否可关闭                                       | Boolean                                          | false        |
| cancelText   | 辅操作按钮文字                                         | String                                           | '取消'       |
| onSelect     | 选中操作的回调                                         | (selectData: any, index: Number) => void  `|` {} | -            |
| onCancel     | 取消点击事件的回调                                      | (val?: any) => void  `|` {}                      | -            |

<q-iframe name="action-sheet" />
