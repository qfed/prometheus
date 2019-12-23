import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import Popup from '../popup'
// import '@q/q-ui/dist/scss/components/confirm/index.scss'

export interface IConfirmProps extends IBaseProps {
  visible: boolean
  title?: string | JSX.Element
  mask?: boolean
  maskClosable?: boolean
  okText?: string
  animation?: string // 'slide' | 'zoom' | 'drop' | false;
  onOk: (val?: any) => void
  onClose: (val?: any) => void
}
/**
 * Confirm
 * @prop {string} className confirm容器的类名
 * @prop {object} style 可用于设置confirm的样式
 * @prop {boolean} visible 是否展示
 * @prop {string} title 标题
 * @prop {boolean} mask 是否显示遮罩层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} okText 主操作
 * @prop {string} animation 动画效果
 * @prop {function} onOk 点击确定按钮的回调
 * @example
 */

export default class Confirm extends BaseComponent<IConfirmProps, any> {
  static defaultProps = {
    hasCloseButton: false,
    mask: true,
    maskClosable: false,
    okText: '确认',
    animation: 'zoom',
    onOk() {},
    onClose() {},
  }
  onOK = () => {
    this.props.onOk()
  }
  onClose() {
    const { onClose } = this.props
    onClose()
  }

  render() {
    const {
      className,
      style,
      mask,
      maskClosable,
      visible,
      okText,
      children,
      title,
      animation,
      onClose,
    } = this.props
    return (
      <Popup
        visible={visible}
        mask={mask}
        maskClosable={maskClosable}
        position='center'
        animation={animation}
        onClose={onClose}
      >
        <div
          className={classNames(`${this.classPrefix}confirm`, className)}
          style={style}
        >
          <div className={`${this.classPrefix}confirm__hd`}>
            {title && (
              <div className={`${this.classPrefix}confirm__hd__title`}>
                {title}
              </div>
            )}
          </div>
          <div className={`${this.classPrefix}confirm__bd`}>
            <div
              className={classNames({
                [`${this.classPrefix}confirm__bd__content`]: true,
                [`${this.classPrefix}confirm__bd__content--notitle`]: !title,
              })}
            >
              {children}
            </div>
          </div>
          <div className={`${this.classPrefix}confirm__ft`}>
            <a
              className={`${this.classPrefix}confirm__btn ${
                this.classPrefix
              }confirm__btn--primary`}
              onClick={this.onOK}
            >
              {okText}
            </a>
          </div>
        </div>
      </Popup>
    )
  }
}
