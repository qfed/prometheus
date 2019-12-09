import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import Popup from '../popup'
import Icon from '../icon'

export interface IActionSheetProps extends IBaseProps {
  list?: any[]
  title?: string | JSX.Element
  visible: boolean
  type?: string // 'default' | 'primary';
  mask?: boolean
  maskClosable?: boolean
  cancelText?: string
  onSelect: (selectData: any, index: number) => void
  onCancel?: (val?: any) => void
}
/**
 * ActionSheet
 * @prop {string} className actionSheet容器的类名
 * @prop {object} style 可用于设置actionSheet的样式
 * @prop {array} list 操作列表数据 每项item需包含title和id，title 属性用于展示
 * @prop {string} title 标题
 * @prop {boolean} visible 是否展示
 * @prop {string} type 类型 //default-关闭按钮在底部  primary-关闭按钮在右上角
 * @prop {boolean} mask 是否显示遮罩层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} cancelText 辅助操作
 * @prop {function} onSelect 选中操作的回调
 * @prop {function} onCancel 点击关闭按钮的回调
 * @example
 */

export default class ActionSheet extends BaseComponent<IActionSheetProps, any> {
  static defaultProps = {
    list: [],
    type: 'default',
    mask: true,
    maskClosable: false,
    cancelText: '取消',
    onSelect() {},
    onCancel() {},
  }

  onSelect = (selectData: any, index: number) => {
    this.props.onSelect(selectData, index)
  }

  onCancel = () => {
    this.props.onCancel()
  }

  render() {
    const {
      className,
      style,
      list,
      title,
      type,
      mask,
      maskClosable,
      visible,
      cancelText,
      children,
    } = this.props
    const hasHead = title || type === 'primary'
    return (
      <Popup
        onClose={this.onCancel}
        visible={visible}
        mask={mask}
        maskClosable={maskClosable}
        position='bottom'
        animation='slide-up'
      >
        <div
          className={classNames(`${this.classPrefix}action-sheet`, className)}
          style={style}
        >
          {hasHead && (
            <div className={`${this.classPrefix}action-sheet__hd`}>
              <div className={`${this.classPrefix}action-sheet__hd__title`}>
                {title ? title : ''}
              </div>
              {type === 'primary' && (
                <div
                  className={`${this.classPrefix}action-sheet__hd__close`}
                  onClick={this.onCancel}
                >
                  <Icon type='closePop' style={{ fontSize: 18 }} />
                </div>
              )}
            </div>
          )}
          <div className={`${this.classPrefix}action-sheet__bd`}>
            {list.map((item: any, index: number) => {
              return (
                <div
                  onClick={this.onSelect.bind(this, item, index)}
                  key={item.id}
                  className={`${this.classPrefix}action-sheet__bd__item`}
                >
                  {item.title}
                </div>
              )
            })}
            {!list.length && <div>{children}</div>}
          </div>
          {type === 'default' && (
            <div className={`${this.classPrefix}action-sheet__ft`}>
              <a
                className={`${this.classPrefix}action-sheet__btn`}
                onClick={this.onCancel}
              >
                {cancelText}
              </a>
            </div>
          )}
        </div>
      </Popup>
    )
  }
}
