import '../../base'
import React from 'react'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import classNames from 'classnames'
// import '@q/q-ui/dist/scss/components/loading/index.scss'

export interface ILoadingProps extends IBaseProps {
  type?: 'default' | 'circle' | 'bounce'
  /**
   * 容器类名
   */
  wrapperClassName?: string
  /**
   * loading内层每个点的类名
   */
  className?: string
}
/**
 * 请参考 https://github.com/tobiasahlin/SpinKit
 * Loading
 * @prop {string} className Loading的类名
 * @prop {object} style 定义Loading样式
 * @example
 * import Loading, { ILoadingProps } from {`${this.classPrefix}react`}
 *    let props:ILoadingProps ={ name:'ts-Loading' }
 *    <Loading {...props} />
 */
export default class Loading extends BaseComponent<ILoadingProps, any> {
  static defaultProps = {
    type: 'default',
  }

  state = { disabled: false }
  get classNames() {
    const { type } = this.props
    const { disabled } = this.state
    return classNames(
      `${this.classPrefix}loading ${this.classPrefix}loading--${type}`
    )
  }
  get wrapperClassNames() {
    const { wrapperClassName, type } = this.props
    return classNames(
      `${this.classPrefix}loading__${type}__wrapper`,
      wrapperClassName
    )
  }
  _bounceType() {
    const { className } = this.props
    return (
      <div className={this.classNames}>
        <div className={this.wrapperClassNames}>
          <div
            className={`${this.classPrefix}loading__bounce ${
              this.classPrefix
            }loading__bounce--1 ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__bounce ${
              this.classPrefix
            }loading__bounce--2 ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__bounce ${
              this.classPrefix
            }loading__bounce--3 ${className}`}
          />
        </div>
      </div>
    )
  }
  _circleType() {
    const { className } = this.props
    return (
      <div className={this.classNames}>
        <div className={this.wrapperClassNames}>
          <div
            className={`${this.classPrefix}loading__circle--1 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--2 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--3 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--4 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--5 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--6 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--7 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--8 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--9 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--10 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--11 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__circle--12 ${
              this.classPrefix
            }loading__circle ${className}`}
          />
        </div>
      </div>
    )
  }
  _defaultType() {
    const { className } = this.props
    return (
      <div className={this.classNames}>
        <div className={this.wrapperClassNames}>
          <div
            className={`${this.classPrefix}loading__default--1 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--2 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--3 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--4 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--5 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--6 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--7 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--8 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--9 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--10 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--11 ${
              this.classPrefix
            }loading__default ${className}`}
          />
          <div
            className={`${this.classPrefix}loading__default--12 ${
              this.classPrefix
            }loading__default ${className}`}
          />
        </div>
      </div>
    )
  }
  render() {
    const { type } = this.props
    const renderFunction = this[`_${type}Type`]
    return renderFunction && renderFunction.bind(this)()
  }
}
