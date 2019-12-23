import React, { CSSProperties } from 'react'
import createDebug from '../../base/createDebug'
import classNames from 'classnames'
import Loading from '../loading'
import Icon from '../icon'
import BaseComponent from '../../base/baseComponent'
import { PositionProperty } from 'csstype'
const debug = createDebug('qr:toast')

export interface IToastItemProps {
  /**
   * @property duration 隐藏toast 目前是根据css 动画控制的，这个设置目前无效
   */
  message?: string | JSX.Element
  type?: number
  duration?: number
  uuid?: string
  onClose?: (uuid: string) => void
  // [propName: string]: any
  style?: CSSProperties
  loadingType?: 'default' | 'circle' | 'bounce'
  choke?: boolean
}

/**
 * @class ToastItem
 * @prop {string} message 消息内容
 */
export default class ToastItem extends BaseComponent<IToastItemProps, any> {
  static defaultProps = {
    duration: 2,
    onClose(uuid: string) {
      debug('key', uuid)
    },
    choke: false,
    message: '',
  }
  private closeTimer: number | null = null

  constructor(props: any) {
    super(props)
    this.closeTimer = null
  }

  get Icon() {
    const { type, loadingType } = this.props
    // 0 succeed 1 fail 3 warn
    switch (type) {
      case 0:
        // return <i className="q-toast__icon q-icon-r" />
        return (
          <Icon
            type='successLine'
            className={`${this.classPrefix}toast__icon`}
          />
        )
      case 1:
        // return <i className="q-toast__icon q-icon-w" />
        return (
          <Icon
            type='failureLine'
            className={`${this.classPrefix}toast__icon`}
          />
        )
      case 2:
        return <Loading type={loadingType} />
      case 3:
        return (
          <Icon
            type='warningLine'
            className={`${this.classPrefix}toast__icon`}
          />
        )
      default:
        return null
    }
  }

  componentDidMount() {
    const { duration } = this.props
    if (duration) this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  close = () => {
    const { uuid, onClose } = this.props
    this.clearCloseTimer()
    if (onClose) {
      onClose(uuid)
    }
  }

  startCloseTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close()
      }, this.props.duration * 1000)
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  render() {
    const { message, style, choke, type } = this.props
    const chokeStyle = choke
      ? {
          width: '100vw',
          height: '100vh',
          backgroundColor: 'transparent',
        }
      : {}
    const chokePositionStyle = choke
      ? {
          position: 'fixed' as PositionProperty,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }
      : {}
    return (
      <div style={chokeStyle}>
        <div
          className={classNames(
            `${this.classPrefix}toast`,
            `${this.classPrefix}toast--fade`,
            this.Icon ? `${this.classPrefix}toast--withicon` : ''
          )}
          style={{
            // top: '65px',
            ...chokePositionStyle,
            ...style,
          }}
        >
          <div className={`${this.classPrefix}toast__content`}>
            {this.Icon}
            {message}
          </div>
        </div>
      </div>
    )
  }
}

// export class ToastItem
