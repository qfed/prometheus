import * as React from 'react'
import ActionSheet from '../index'
import classNames from 'classnames'
import Button from '../../button'
import List from '../../list'
import Switch from '../../switch'
import Icon from '../../icon'
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
        icon: <Icon type='wechatGreen' className='share-wrap__item__icon' />
      },
      {
        text: '朋友圈',
        icon: <Icon type='friendColor' className='share-wrap__item__icon' />
      },
      {
        text: 'QQ',
        icon: <Icon type='qq' className='share-wrap__item__icon' />
      }
    ],
    shareList2: [
      {
        text: '微信好友/群',
        icon: <Icon type='wechatWhite' className='share-wrap__item__icon' />
      },
      {
        text: '朋友圈',
        icon: <Icon type='friendWhite' className='share-wrap__item__icon' />
      }
    ],
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
          onCancel={this.onCancel.bind(this, 'visibleDemo7')}
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
          onCancel={this.onCancel.bind(this, 'visibleDemo8')}
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
          onCancel={this.onCancel.bind(this, 'visibleDemo9')}
        >
          <div className='share-wrap__title'>分享到</div>
          <div className='share-wrap__wrap'>
            {shareList1.map((item, index) => (
              <div className='share-wrap__item' key={index}>
                {item.icon}
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
          onCancel={this.onCancel.bind(this, 'visibleDemo10')}
        >
          <div className='share-wrap__wrap'>
            {shareList2.map((item, index) => (
              <div className='share-wrap__item' key={index}>
                {item.icon}
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
                defaultChecked={visibleDemo7}
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
