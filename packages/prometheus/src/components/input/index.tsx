import '../../base'
import React from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'

export interface IInputProps extends IBaseProps {
  defaultValue?: string | number
  value?: string | number
  placeholder?: string
  textAlign?: 'left' | 'right'
  readOnly?: boolean
  disabled?: boolean
  clearable?: boolean
  autoFocus?: boolean
  label?: string
  type?: string
  multiLine?: boolean
  maxLength?: number
  arrow?: boolean
  extra?: string | JSX.Element
  thumb?: string | JSX.Element
  theme?: string
  onChange?: (value: any, e: any) => void
  onFocus?: (value: any, e: any) => void
  onBlur?: (value: any, e: any) => void
  onClean?: (value: any, e: any) => void
}

/**
 * Input
 * @prop {string | number} defaultValue input的当前值 (非受控)
 * @prop {string | number} value input的当前值（受控）
 * @prop {string} placeholder placeholder
 * @prop {string} textAlign 文字布局方向
 * @prop {boolean} readOnly 是否只读
 * @prop {boolean} disabled 是否禁用
 * @prop {boolean} clearable 是否带有清除箭头
 * @prop {boolean} autoFocus 是否自动聚焦
 * @prop {boolean} multiLine 是否多行折行输入
 * @prop {boolean} arrow 是否带有右箭头
 * @prop {string} label input描述
 * @prop {string} type input的类型，可以是密码，数字，文本等...
 * @prop {number} maxLength 输入框最大输入字符
 * @prop {string | JSX.Element} extra 右边注释
 * @prop {string | JSX.Element} thumb 左边注释内容
 * @prop {(value: any, event: any) => void} onChange change触发的事件
 * @prop {(value: any, event: any) => void } onFocus 聚焦时触发的事件
 * @prop {(value: any, event: any) => void } onBlur 失去焦点时触发的事件
 * @prop {(value: any, event: any) => void} onClean 点击清除icon触发的事件
 */
export default class Input extends BaseComponent<IInputProps, any> {
  static defaultProps = {
    defaultValue: '',
    placeholder: '',
    type: 'text',
    textAlign: 'left',
    readOnly: false,
    disabled: false,
    clearable: true,
    theme: 'default',
    multiLine: false,
    arrow: false,
    autoFocus: false,
    onChange(value: any, e: any) { },
    onBlur(value: any, e: any) { },
    onFocus(value: any, e: any) { },
    onClean(value: any, e: any) { },
  }

  constructor(props: IInputProps) {
    super(props)

    const { value, defaultValue } = props

    this.state = {
      value: value || defaultValue, // 优先取受控的值 value
    }
  }

  ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement> = React.createRef()

  static getDerivedStateFromProps(nextProps: IInputProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  get canClearFlag() {
    const { value } = this.state;
    let canClearFlag = false;

    try {
      canClearFlag = value.toString().length > 0;
    } catch (error) {
      console.log(`canClearFlag判断错误 =>`, error);
    }

    return canClearFlag;
  }

  get curWords() {
    const { value } = this.state;
    let curWords = 0;

    try {
      curWords = value.toString().length;
    } catch (error) {
      console.log(`curWords获取错误 =>`, error);
    }

    return curWords;
  }

  private handleInputChange(e: any) {
    const { maxLength, onChange, value } = this.props

    let val = e.target.value;

    /**
     * maxLength统一在这里收口
     * type=number类型的，maxLength不管用
     */
    if (maxLength) {
      val = val.length > maxLength ? val.slice(0, maxLength) : val;
    }

    // NOTE 受控时只显示受控的值，其他非受控情况显示当前input的值
    this.setState({
      value: value || val,
    })

    onChange(val, e);
  }

  /**
   * NOTE 自动聚焦在2种情况下会失效
   *  1. ios 非用户交互（没有点击操作）不能触发
   *  2. 页面刚加载好后，不能自动聚焦
   */ 
  focus = () => {
    this.ref.current && this.ref.current.focus();
  }

  private handleInputEvent(e: any, type: any) {
    const { onFocus, onBlur } = this.props;

    if (type === 'focus') {
      onFocus(e.target.value, e);
    } else if (type === 'blur') {
      onBlur(e.target.value, e);
    }
  }

  renderParagraph() {
    const {
      maxLength = 200,
      className,
      style,
      type,
      placeholder,
      disabled,
      readOnly,
      autoFocus
    } = this.props
    const { value } = this.state

    return (
      <div
        className={classNames(
          `${this.classPrefix}input`,
          { [`${this.classPrefix}input--textarea`]: type === 'paragraph' },
          className
        )}
        style={style}
      >
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={e => this.handleInputChange(e)}
          onFocus={e => this.handleInputEvent(e, 'focus')}
          onBlur={e => this.handleInputEvent(e, 'blur')}
          disabled={disabled}
          readOnly={readOnly}
          ref={this.ref as React.RefObject<HTMLTextAreaElement>}
          autoFocus={autoFocus}
          className={classNames(`${this.classPrefix}input__textarea`, {
            [`${this.classPrefix}input__textarea--disabled`]: disabled,
          })}
        />
        <div className={`${this.classPrefix}input__words`}>
          {this.curWords}/{maxLength}
        </div>
      </div>
    )
  }

  clickClearBtn(e: any) {
    const { value } = this.state;
    const { onClean, onChange } = this.props;

    this.setState({
      value: '',
    })

    /**
     * NOTE: 这里有个小缺陷，给onChange传递的e事件不对
     * ant design里onchange只传递了一个value参数，不存在这个问题
     * 临时这样写，过后还得解决这个问题
     */
    onChange('', e);

    onClean(value, e);
  }

  renderInput() {
    const {
      className,
      style,
      type,
      readOnly,
      label,
      disabled,
      textAlign,
      thumb,
      placeholder,
      multiLine,
      clearable,
      extra,
      arrow,
      autoFocus
    } = this.props

    const { value } = this.state

    return (
      <div
        className={classNames(
          `${this.classPrefix}input`,
          `${this.classPrefix}list-line`,
          { [`${this.classPrefix}input--more`]: multiLine },
          className
        )}
        style={style}
      >
        {label ? (
          <div
            className={classNames(`${this.classPrefix}input__label`, {
              [`${this.classPrefix}input__label--disabled`]: disabled,
            })}
          >
            {thumb ? (
              <div
                className={classNames(`${this.classPrefix}input__label__thumb`, {
                  [`${this.classPrefix}input__label__thumb--disabled`]: disabled,
                })}
              >
                {thumb}
              </div>
            ) : null}
            <div className={`${this.classPrefix}input__label__text`}>
              {label}
            </div>
          </div>
        ) : null}
        <div className={`${this.classPrefix}input__content`}>
          {multiLine ? (
            <textarea
              placeholder={placeholder}
              readOnly={readOnly}
              disabled={disabled}
              value={value}
              autoFocus={autoFocus}
              ref={this.ref as React.RefObject<HTMLTextAreaElement>}
              onChange={e => this.handleInputChange(e)}
              onFocus={e => this.handleInputEvent(e, 'focus')}
              onBlur={e => this.handleInputEvent(e, 'blur')}
              className={classNames(
                `${this.classPrefix}input__content__textarea`,
                {
                  [`${this.classPrefix}input__content__textarea--right`]:
                    textAlign === 'right',
                },
                {
                  [`${
                    this.classPrefix
                    }input__content__textarea--disabled`]: disabled,
                }
              )}
            />
          ) : (
              <input
                type={type}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                autoFocus={autoFocus}
                value={value}
                ref={this.ref as React.RefObject<HTMLInputElement>}
                onChange={e => this.handleInputChange(e)}
                onFocus={e => this.handleInputEvent(e, 'focus')}
                onBlur={e => this.handleInputEvent(e, 'blur')}
                className={classNames(
                  `${this.classPrefix}input__content__input`,
                  {
                    [`${this.classPrefix}input__content__input--right`]:
                      textAlign === 'right',
                  },
                  {
                    [`${
                      this.classPrefix
                      }input__content__input--disabled`]: disabled,
                  }
                )}
              />
            )}
          {clearable && this.canClearFlag && !multiLine && !disabled && !readOnly ? (
            <Icon
              type='failure'
              className={`${this.classPrefix}input__content__close`}
              onClick={(e) => this.clickClearBtn(e)}
            />
          ) : null}
        </div>
        {extra ? (
          <div
            className={classNames(`${this.classPrefix}input__extra`, {
              [`${this.classPrefix}input__extra--disabled`]: disabled,
            })}
          >
            {extra}
          </div>
        ) : null}
        {arrow && (
          <Icon
            type='arrowRight'
            className={`${this.classPrefix}input__arrow`}
          />
        )}
      </div>
    )
  }

  get inputTheme() {
    const theme = this.props.theme
    if (theme) {
      return `q-input--${theme}`
    }
  }

  render() {
    const { type } = this.props

    if (type === 'paragraph') {
      return this.renderParagraph()
    } else {
      return this.renderInput()
    }
  }
}
