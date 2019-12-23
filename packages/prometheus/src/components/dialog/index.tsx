import React from 'react'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import Popup from '../popup'
import Icon from '../icon'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/dialog/index.scss'

/**
 * url: 图片地址
 * theme: 图片展示方式 icon-图标 image-图片 bigImage-大图片占满顶部
 */
interface Image {
  url?: string
  theme?: string // 'icon' | 'image' | 'bigImage'
}

export interface IDialogProps extends IBaseProps {
  visible: boolean
  hasCloseButton?: boolean
  footer?: string | JSX.Element
  hasShowCancel?: boolean
  title?: string | JSX.Element
  mask?: boolean
  maskClosable?: boolean
  okText?: string
  cancelText?: string
  image?: Image
  animation?: string // 'slide' | 'zoom' | 'drop' | false;
  onCancel?: (val?: any) => void
  onOk?: (val?: any) => void
}
/**
 * Dialog
 * @prop {string} className dialog容器的类名
 * @prop {object} style 可用于设置dialog的样式
 * @prop {boolean} visible 是否展示
 * @prop {boolean} footer 底部 (JSX.Element or nofooter)
 * @prop {boolean} hasCloseButton 右上角是否有关闭按钮
 * @prop {boolean} hasShowCancel 是否有辅助操作
 * @prop {string} title 标题
 * @prop {boolean} mask 是否显示遮罩层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} okText 主操作
 * @prop {string} cancelText 辅助操作
 * @prop {Image} image 对象 url参数图片地址; theme参数图片展示方式,icon-图标 image-图片 bigImage-大图片占满顶部;
 * @prop {string} animation 动画效果
 * @prop {function} onCancel 点击关闭按钮的回调
 * @prop {function} onOk 点击确定按钮的回调
 * @example
 */

export default class Dialog extends BaseComponent<IDialogProps, any> {
  static defaultProps = {
    hasCloseButton: false,
    footer: false,
    hasShowCancel: true,
    mask: true,
    maskClosable: false,
    okText: '确认',
    cancelText: '取消',
    image: {
      url: '',
      theme: 'image'
    },
    animation: 'zoom',
    onOk() {},
    onCancel() {}
  }
  onCancel = () => {
    this.props.onCancel()
  }
  onOK = () => {
    this.props.onOk()
  }

  render() {
    const {
      className,
      style,
      mask,
      maskClosable,
      visible,
      hasCloseButton,
      okText,
      cancelText,
      image,
      children,
      footer,
      hasShowCancel,
      title,
      animation
    } = this.props
    const {url = '', theme= 'image' } = image
    return (
      <Popup
        onClose={this.onCancel}
        visible={visible}
        mask={mask}
        maskClosable={maskClosable}
        position="center"
        animation={animation}
      >
        <div
          className={classNames(`${this.classPrefix}dialog`, className)}
          style={style}
        >
          <div className={`${this.classPrefix}dialog__hd`}>
            {url && (
              <div
                className={classNames(
                  `${this.classPrefix}dialog__hd__image`,
                  `${this.classPrefix}dialog__hd__image--${theme}`
                )}
              >
                <img src={url} />
              </div>
            )}
            {hasCloseButton && (
              <div
                className={classNames({
                  [`${this.classPrefix}dialog__hd__close`]: true,
                  [`${this.classPrefix}dialog__hd__close--primary`]:
                  theme === 'bigImage'
                })}
                onClick={this.onCancel}
              >
                <Icon type="closePop" style={{ fontSize: 18 }} />
              </div>
            )}
            {title && (
              <div
                className={classNames({
                  [`${this.classPrefix}dialog__hd__title`]: true,
                  [`${this.classPrefix}dialog__hd__title--nocontent`]: !children
                })}
              >
                {title}
              </div>
            )}
          </div>
          {children && (
            <div className={`${this.classPrefix}dialog__bd`}>
              <div
                className={classNames({
                  [`${this.classPrefix}dialog__bd__content`]: true,
                  [`${this.classPrefix}dialog__bd__content--notitle`]: !title
                })}
              >
                {children}
              </div>
            </div>
          )}
          {!footer && (
            <div className={`${this.classPrefix}dialog__ft`}>
              {hasShowCancel && (
                <a
                  className={`${this.classPrefix}dialog__btn ${
                    this.classPrefix
                  }dialog__btn--default`}
                  onClick={this.onCancel}
                >
                  {cancelText}
                </a>
              )}
              <a
                className={`${this.classPrefix}dialog__btn ${
                  this.classPrefix
                }dialog__btn--primary`}
                onClick={this.onOK}
              >
                {okText}
              </a>
            </div>
          )}
          {footer &&
            footer !== 'nofooter' && (
            <div className={`${this.classPrefix}dialog__ft`}>{footer}</div>
          )}
        </div>
      </Popup>
    )
  }
}
