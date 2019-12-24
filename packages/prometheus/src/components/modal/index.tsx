
import React from 'react'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import Icon from '../icon'
import Popup from '../popup'
import classNames from 'classnames'
// import '@q/q-ui/dist/scss/components/modal/index.scss'

export interface IModalProps extends IBaseProps {
  title: string | JSX.Element
  type: string
  visible: boolean
  mask?: boolean
  maskClosable?: boolean
  animation?: string // 'slide' | 'zoom' | 'drop';
  onClose: (event: any) => void
}
/**
 * Modal
 * @prop {string} className modal容器的类名
 * @prop {object} style 可用于设置modal的样式
 * @prop {string | JSX.Element} title 标题
 * @prop {string} type 类型:default-默认,primary-内容充满整个modal框
 * @prop {boolean} visible 显示/隐藏
 * @prop {boolean} mask 是否显示蒙层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} animation 动画效果
 * @prop {function} onClose 关闭modal时触发的回调
 * @example
 * import Modal, { IModalProps } from 'q-react'
 *    let props:IModalProps ={
 *      title: 'title',
 *      type: 'default',
 *      visible: false,
 *      mask: true,
 *      maskClosable: false,
 *      animation: 'zoom',
 *      onClose() {}
 *    }
 *    <Modal {...props} />
 */

export default class Modal extends BaseComponent<IModalProps, any> {
  static defaultProps = {
    title: '',
    type: 'default',
    visible: false,
    mask: true,
    maskClosable: true,
    animation: 'zoom',
    onClose() {},
  }

  onClose = () => {
    this.props.onClose(event)
  }

  render() {
    const {
      children,
      title,
      type,
      visible,
      mask,
      maskClosable,
      animation,
      className,
      style,
    } = this.props

    return (
      <Popup
        onClose={this.onClose}
        visible={visible}
        mask={mask}
        maskClosable={maskClosable}
        position='center'
        animation={animation}
      >
        <div
          className={classNames(`${this.classPrefix}modal`, className)}
          style={style}
        >
          <div
            className={classNames({
              [`${this.classPrefix}modal__wrap`]: true,
              [`${this.classPrefix}modal__wrap--primary`]: type === 'primary',
            })}
          >
            {title && (
              <div className={`${this.classPrefix}modal__wrap__title`}>
                {title}
              </div>
            )}
            <div
              className={classNames({
                [`${this.classPrefix}modal__wrap__content`]:
                  type === 'default',
                [`${this.classPrefix}modal__wrap__content--nopadding`]:
                  type === 'primary',
              })}
            >
              {children}
            </div>
          </div>
          <div
            className={`${this.classPrefix}modal__close`}
            onClick={this.onClose}
          >
            <Icon type='close' style={{ fontSize: 32, color: '#fff' }} />
          </div>
        </div>
      </Popup>
    )
  }
}
