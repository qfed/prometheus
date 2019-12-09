import '../../base'
import React from 'react'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import classNames from 'classnames'
import './style.scss'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/special-page/index.scss'

export interface ISpecialPageProps extends IBaseProps {
  className?: string
  style?: object
  isResult?: boolean
  icon?: JSX.Element
  title?: string
  subTitle?: string
  cancelText?: string
  confirmText?: string
  footer?: JSX.Element
  onCancel?: (val?: any) => void
  onConfirm?: (val?: any) => void
}
/**
 * SpecialPage
 * @prop {string} className SpecialPage的类名
 * @prop {object} style 定义SpecialPage样式
 * @example
 * import SpecialPage, { ISpecialPageProps } from 'q-react'
 *    let props:ISpecialPageProps ={ name:'ts-SpecialPage' }
 *    <SpecialPage {...props} />
 */
@observer(['disabled'])
export default class SpecialPage extends BaseComponent<ISpecialPageProps, any> {
  static defaultProps = {
    style: {},
    isResult: false,
    cancelText: '重置',
    confirmText: '确定',
  }

  state = { disabled: false }
  get classNames() {
    const { className, isResult } = this.props
    return classNames(
      `${this.classPrefix}page`,
      { [`${this.classPrefix}page--result`]: isResult },
      className
    )
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

  onConfirm = () => {
    if (this.props.onConfirm) {
      this.props.onConfirm()
    }
  }

  render() {
    const {
      style,
      icon,
      isResult,
      title,
      subTitle,
      cancelText,
      confirmText,
      footer,
    } = this.props
    return (
      <div className={this.classNames} style={style}>
        <div className={`${this.classPrefix}page__wrap`}>
          {icon ? icon : null}
          {isResult ? (
            <div>
              <div className={`${this.classPrefix}page__wrap__title`}>
                {title}
              </div>
              <div className={`${this.classPrefix}page__wrap__sub-title`}>
                {subTitle}
              </div>
            </div>
          ) : (
            <div className={`${this.classPrefix}page__wrap__text`}>{title}</div>
          )}
          {cancelText && confirmText ? (
            <div
              className={`${this.classPrefix}bottom-group ${
                this.classPrefix
              }page__bottom`}
            >
              <div
                className={`${this.classPrefix}btn ${
                  this.classPrefix
                }btn--default ${this.classPrefix}bottom-group__item ${
                  this.classPrefix
                }bottom--half`}
                onClick={this.onCancel}
              >
                {cancelText}
              </div>
              <div
                className={`${this.classPrefix}btn ${
                  this.classPrefix
                }bottom-group__main ${this.classPrefix}btn--primary ${
                  this.classPrefix
                }bottom-group__item ${this.classPrefix}bottom--half`}
                onClick={this.onConfirm}
              >
                {confirmText}
              </div>
            </div>
          ) : null}
          {footer ? footer : null}
        </div>
      </div>
    )
  }
}
