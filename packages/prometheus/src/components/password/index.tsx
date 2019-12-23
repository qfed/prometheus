import '../../base'
import React from 'react'
import classNames from 'classnames'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/password/index.scss'

export interface IPasswordProps extends IBaseProps {
  className?: string
  style?: object
  length?: number
  onChange?: (val: string) => void
  submit?: (val: string) => void
  onClick?: (val: string) => void
}
const KeyCodeMap = {
  BackSpace: 8,
  Delete: 46,
  Enter: 13,
}
let seed = 0
/**
 * Password
 * @prop {string} className Password的类名
 * @prop {object} style 定义Password样式
 * @prop {object} length Password的长度
 * @prop {function} onClick 点击Password时触发的回调
 * @prop {function} onChange 密码内容变化时触发的回调
 * @prop {function} submit 点击回车键提交时触发的回调
 * @example
 * import Password, { IPasswordProps } from 'q-react'
 *    let props:IPasswordProps ={ name:'ts-Password' }
 *    <Password {...props} />
 */
@observer(['disabled', 'value'])
export default class Password extends BaseComponent<IPasswordProps, any> {
  static defaultProps = {
    length: 6,
    onChange() {},
    submit() {},
    onClick() {},
  }
  seed: number
  constructor(props) {
    super(props)
    this.seed = seed++
    this.state = {
      value: '',
    }
  }
  onInputChange = event => {
    const {
      target: { value },
    } = event
    const { onChange = () => {} } = this.props
    // 限制只能输入6位密码
    const newValue = value.slice(0, 6)
    this.setState({ value: newValue })
    onChange(newValue)
  }
  onInputKeyDown = event => {
    const { value } = this.state
    const { submit = () => {} } = this.props
    const { keyCode } = event
    const del = [KeyCodeMap.Enter]
    if (del.includes(keyCode)) {
      submit(value)
    }
  }

  onClick = event => {
    const { onClick } = this.props
    onClick(event)
  }

  get cells() {
    const { value } = this.state
    const { length } = this.props
    console.log('value', value)
    const valueLength = value.length
    const cells = new Array(length)
    cells.fill('*', 0, valueLength)
    cells.fill('', valueLength, length)
    return cells.map((item, i) => (
      <div
        key={`cell-${i}`}
        className={`${this.classPrefix}password__cell`}
        style={{ width: 100 / length + '%' }}
      >
        {!!item && <div className={`${this.classPrefix}password__cell__dot`} />}
      </div>
    ))
  }

  render() {
    const { style, className } = this.props
    const { value } = this.state
    return (
      <div className={`${this.classPrefix}password__wrap`}>
        <div
          className={classNames(`${this.classPrefix}password`, className)}
          style={style}
        >
          {this.cells}
        </div>
        <label
          htmlFor={`password_-_${this.seed}`}
          className={`${this.classPrefix}password__label`}
          onClick={this.onClick}
        />
        <input
          id={`password_-_${this.seed}`}
          className={`${this.classPrefix}password__input`}
          value={value}
          type='tel'
          onChange={this.onInputChange}
          onKeyDown={this.onInputKeyDown}
        />
      </div>
    )
  }
}
