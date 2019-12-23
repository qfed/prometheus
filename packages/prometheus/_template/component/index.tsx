import '../../base'
import React from 'react'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import classNames from 'classnames'
import './style.scss'

export interface I{{name|pascal}}Props extends IBaseProps {}
/**
 * Button
 * @prop {string} className {{name|pascal}}的类名
 * @prop {object} style 定义{{name|pascal}}样式
 * @example
 * import {{name|pascal}}, { I{{name|pascal}}Props } from 'q-react'
 *    let props:I{{name|pascal}}Props ={ name:'ts-{{name|pascal}}' }
 *    <{{name|pascal}} {...props} />
 */
@observer(['disabled'])
export default class {{name|pascal}} extends React.Component<I{{name|pascal}}Props, any> {
  static defaultProps = {
    style: {},
  }

  state = { disabled: false }
  get classNames() {
    const { className } = this.props
    return classNames(
      'q-{{name|lowerCase}}',
      className
    )
  }
  private onClick = (event: any) => {
    if (this.props.onClick(event)) event.stopPropagation()
  }
  render() {
    const { style, children } = this.props
    return (
      <div className={this.classNames} style={style} onClick={this.onClick}>
        {children}
      </div>
    )
  }
}
