
import React from 'react'
import classNames from 'classnames'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import Icon from '../icon'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/searchBar/index.scss'

export interface ISearchBarProps extends IBaseProps {
  value: string
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  onSubmit?: (val: string) => void
  onChange?: (val: any, event: any) => void
  onFocus?: () => void
  onCancel?: () => void
  onBlur?: (val: string) => void
  type: 'default' | 'list'
  cancelText?: string
  autoFocus?: boolean
}
/**
 * SearchBar
 * @prop {string} value 搜索框的当前值
 * @prop {string} placeholder placeholder
 * @prop {boolean} disabled  设置禁用
 * @prop {number} maxLength 最多允许输入的字符个数
 * @prop {Function} onSubmit submit 事件 (点击键盘的 enter)|点击确定
 * @prop {Function} onChange change 事件的回调
 * @prop {Function} onFocus focus 事件的回调
 * @prop {Function} onCancel 点击取消按钮时触发的回调
 * @prop {Function} onBlur  搜索框失焦时触发的回调
 * @prop {string} type 搜索窗的显示类型
 * @prop {string} cancelText 取消焦点按钮文案
 * @prop {boolean} autoFocus 是否自动获取焦点
 */
@observer(['value'])
export default class SearchBar extends BaseComponent<ISearchBarProps, any> {
  static defaultProps = {
    disabled: false,
    onCancel() {},
    onChange() {},
    onFocus() {},
    onBlur(str) {},
    type: 'default',
    placeholder: '搜索',
    cancelText: '取消',
    autoFocus: false
  }
  state = {
    value: this.props.value,
    historyList: [],
    filterList: [],
    focus: this.props.autoFocus || false
  }
  inputRef: any
  get isFocus() {
    const {focus, value} = this.state
    return  focus || !!value
  }
  onCancel = event => {
    console.log('onCancel')
    const { onCancel, onChange, disabled } = this.props
    if (disabled) return
    const value = ''
    this.setState({
      value,
      focus: false,
    })
    onChange(value, event)
    onCancel()
  }
  onChange = event => {
    const { onChange, type } = this.props
    const { historyList } = this.state
    const {
      target: { value },
    } = event

    this.handleMemoryList(value)

    this.setState({
      value,
      content: '取消',
    })
    onChange(value, event)
  }
  onFocus = () => {
    const { onFocus, disabled } = this.props
    if (disabled) return
    this.setState({
      focus: true,
    })
    onFocus && onFocus()
  }
  onBlur = () => {
  
    const { value } = this.state
    const { onBlur } = this.props
    setTimeout(() => {
    if (!value) {
      this.setState({
        focus: false,
      })
      console.log("blur")
    }
     onBlur && onBlur(value)      
    }, 0);

  }

  focus = () => {
    const { onFocus } = this.props
    if (this.inputRef) {
      this.inputRef.focus()
      onFocus && onFocus()
    }
  }
  clear = event => {
    const { disabled } = this.props
    if (disabled) return
    const value = ''
    this.setState({
      value,
    })
    this.handleMemoryList('')
    this.props.onChange(value, event)
    this.focus()
  }

  handleMemoryList(value) {
    const { onChange, type } = this.props
    const { historyList } = this.state
    if (type === 'list') {
      const historyListTmp = Array.from(new Set([...historyList, value]))
      if (historyList.length > 5) {
        historyListTmp.splice(0, 1)
      }
      const filterList =
        value !== ''
          ? historyListTmp.filter(item => item.indexOf(value) > -1)
          : []
      this.setState({
        historyList: historyListTmp,
        filterList,
      })
    }
  }

  render() {
    const { placeholder, disabled, maxLength, style, type } = this.props
    const { value, focus, filterList } = this.state

    return (
      <div>
        <div
          className={classNames(`${this.classPrefix}searchbar`, {
            [`${this.classPrefix}searchbar--focus`]: this.isFocus,
          })}
          style={{ ...style, ...{ opacity: disabled ? 0.6 : 1 } }}
        >
          <div className={`${this.classPrefix}searchbar__input-wrap`}>
            <div className={`${this.classPrefix}searchbar__synthetic`}>
              <Icon
                type='navSearch'
                className={`${this.classPrefix}searchbar__synthetic__icon`}
                style={{
                  fontSize: 16,
                }}
              />
              {!value && (
                <span className={`${this.classPrefix}searchbar__placeholder`}>
                  {placeholder}
                </span>
              )}
            </div>
            <input
              className={`${this.classPrefix}searchbar__input`}
              type='text'
              value={value}
              onChange={this.onChange}
              readOnly={disabled}
              autoFocus={this.isFocus}
              maxLength={maxLength}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              ref={el => (this.inputRef = el)}
            />
            {
              value &&             <div
              className={`${this.classPrefix}searchbar__clear`}
              onClick={this.clear}
            >
              <Icon
                className={`${this.classPrefix}searchbar__clear__icon`}
                type='failure'
                style={{
                  fontSize: 16,
                }}
              />
            </div>
            }
          </div>
          <div
            className={`${this.classPrefix}searchbar__cancel`}
            onClick={this.onCancel}
          >
            {this.props.cancelText}
          </div>
        </div>
        {type === 'list' && filterList.length >= 1 && this.isFocus && (
          <div className={`${this.classPrefix}search-list`}>
            {filterList.map((item, index) => (
              <div className={`${this.classPrefix}search-list__item`} key={index}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}
