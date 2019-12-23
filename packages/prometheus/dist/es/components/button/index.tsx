import '../../base'
import React from 'react'
import observerProps, { observer } from '../../base/observerProps'
import classNames from 'classnames'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import Animation from '../animation' ;
// import '@q/q-ui/dist/scss/components/button/index.scss'

export interface IButtonProps extends IBaseProps {
  disabled?: boolean
  loading?: boolean
  loadingType?: 'default' | 'circle'
  type?: 'default' | 'primary' | 'danger' | 'operate'
  size?: 'medium' | 'small' | 'mini'
  shape?: 'pill'
  mainText?: string
  subText?: string
  icon?: JSX.Element
  onClick?: (event: any) => void | {}
}
/**
 * Button
 * @prop {string} className Button的类名
 * @prop {object} style 定义Button样式
 * @prop {boolean} disabled 是否禁用
 * @prop {object} type Button的类型
 * @prop {function} onClick 点击Button时触发的回调
 * @example
 * import Button, { IButtonProps } from 'q-react'
 *    let props:IButtonProps ={ name:'ts-button' }
 *    <Button {...props} />
 */
@observer(['disabled'])
export default class Button extends BaseComponent<IButtonProps, any> {
  static defaultProps = {
    disabled: false,
    loading: false,
    loadingType: 'default',
    style: {},
    type: 'primary',
    onClick() { },
  }

  state = { disabled: false }
  get classNames() {
    const { className, mainText, subText, loading } = this.props
    const { disabled } = this.state
    return classNames(
      `${this.classPrefix}btn`,
      { [`${this.classPrefix}btn--${this.props.type}`]: this.props.type },
      { [`${this.classPrefix}btn--disabled`]: disabled },
      { [`${this.classPrefix}btn--loading`]: loading },
      { [`${this.classPrefix}btn--${this.props.size}`]: this.props.size },
      { [`${this.classPrefix}btn--${this.props.shape}`]: this.props.shape },
      {
        [`${this.classPrefix}bottom-group__item`]:
          this.props.type === 'operate',
      },
      { [`${this.classPrefix}btn--more-content`]: mainText && subText },
      className
    )
  }
  private onClick = (event: any) => {
    const { disabled } = this.state
    const { loading } = this.props
    if (disabled || loading) return
    this.props.onClick(event)
  }
  loadingRenderFunction() {
    // const {loadingType} = this.props
    const { loading } = this.props
    return loading ? (
      <Animation in= {loading} classNames='expand-animation'>
            {
              <div style={{width : 37.5 , display: 'inline-block' }} className='icon_div'>
              <img style={{width: 25, height: 25, }}
                src='http://img002.qufenqi.com/products/cd/26/cd26f15cc6397e22a9c5c98f04170e1f.gif'/></div>
            }
          </Animation>
      // <Loading
      //   type={loadingType}
      //   wrapperClassName={`${this.classPrefix}btn__loading`}
      //   className={`${this.classPrefix}btn__loading__item`}
      // />
    ) : null
  }
  render() {
    const { style, children, mainText, subText, type, icon, loading } = this.props

    return (
      <div className={`${this.classNames}` } style={style} onClick={this.onClick}>
        {loading && this.loadingRenderFunction && this.loadingRenderFunction.bind(this)()}
        {mainText && subText ? (
          <div className={`${this.classPrefix}btn__content` }>
            <div className='content_text'>{mainText}</div>
            <div className='content_sub-text'>{subText}</div>
          </div>
        ) : null}
        {!(mainText && subText) && type === 'operate' ? (
          <div>
            {icon}
            <div className={`${this.classPrefix}bottom-group__item__text`}>
              {mainText}
            </div>
          </div>
        ) : children}
      </div>
    )
  }
}
