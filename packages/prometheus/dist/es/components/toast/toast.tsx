import '../../base'
import React from 'react'

import ToastItem, { IToastItemProps } from './toast-item'
import createDebug from '../../base/createDebug'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/toast/index.scss'
const debug = createDebug('qr:toast')
const seed = 0
export interface IToastProps {
  name: 'toast-item'
}

/**
 * toast manager
 */
export default class Toast extends BaseComponent<IToastProps, any> {
  static defaultProps = {
    name: 'toast-item',
  }
  /**
   * 控制同时存在的toast最大数量
   */
  static max: number = 1
  state = { toastList: [] }

  push(toast: IToastItemProps) {
    const { toastList }: { toastList: IToastItemProps[] } = this.state
    const max = Toast.max

    toastList.push(toast)
    this.setState({ toastList: toastList.slice(-max) })
  }
  pop() {
    const { toastList } = this.state
    toastList.pop()
    this.setState({ toastList })
  }
  clear(current?: string) {
    const { toastList } = this.state
    if (current) {
      this.setState({
        toastList: toastList.filter(({ uuid }) => {
          return uuid !== current
        }),
      })
    } else {
      this.setState({
        toastList: [],
      })
    }
  }
  replace(toast: IToastItemProps) {
    this.setState({ toastList: [toast] })
  }
  onClose = (current: string) => {
    const { toastList }: { toastList: IToastItemProps[] } = this.state

    this.setState({
      toastList: toastList.filter(({ uuid }) => {
        return uuid !== current
      }),
    })
  }
  render() {
    const { toastList } = this.state
    return (
      <div
        className={`${this.classPrefix}toast__container`}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {toastList.length ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {toastList.map((props: IToastItemProps) => {
              const { uuid } = props
              return <ToastItem {...props} key={uuid} onClose={this.onClose} />
            })}
          </div>
        ) : null}
      </div>
    )
  }
}
