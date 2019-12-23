import React from 'react'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
import Dialog from '../dialog'

export interface IJumpPromptProps extends IBaseProps {
  /**
   * 点击确认的回调函数，默认为只关闭弹窗
   */
  onConfirm?: () => void
  /**
   * 点击取消的回调函数，默认为history.goBack()
   */
  onCancel?: (e: any) => void
  /**
   * 何时进行拦截，默认为true即只要后退就拦截
   */
  when?: boolean
  /**
   * Dialog的内容, 默认为一个提示字符串
   */
  dialogChildren?: JSX.Element | string
  /**
   * Dialog的title, 默认为空
   */
  dialogTitle?: string
  /**
   * dialog确认的文案，默认为继续申请
   */
  okText?: string
  /**
   * dialog取消的文案，默认为残忍拒绝
   */
  cancelText?: string
  /**
   * history对象
   */
  history: any
}

export default class JumpPrompt extends BaseComponent<IJumpPromptProps, any> {
  static defaultProps = {
    onConfirm: null,
    onCancel: null,
    when: true,
    dialogChildren: [
      <div key='dialogChildren1'>确认退出申请吗？</div>,
      <div key='dialogChildren2'>极速审核，最快一分钟放款！</div>,
    ],
    okText: '继续申请',
    cancelText: '残忍拒绝',
    dialogTitle: '',
    history: null,
  }

  state = {
    isShowModal: false,
    nextLocation: null as any,
  }

  unblock: any

  // 记录页面的pathname
  currentPathname: string = window.location.pathname

  // 记录页面的search
  currentSearch: string = window.location.search

  componentDidMount() {
    const { history } = this.props
    if (!history) {
      return console.warn('使用跳转拦截的前提是你有安装history')
    }
    // history.block返回的是取消block函数
    this.unblock = history.block((nextLocation, action) => {
      // NOTE safari兼容，safari使用window.location.href跳转，A -> B, 然后在B页面回退
      // 会额外触发一次A页面的popState事件，导致block再次触发，
      // 因此使用如下判断当前的location.key和目标nextLocation.key，如果key相同则啥也不干
      const { location } = history
      if (location.key === nextLocation.key) {
        return
      }
      // 只有当when被设置为true且history变化的行为为pop回退时，才触发拦截
      // TODO 如果要对其他路由行为添加拦截，可添加判断类型
      if (this.props.when && action.toLowerCase() === 'pop') {
        // NOTE 解决原地刷新后，回退拦截的「未回退，路由却先改变的问题」
        setTimeout(() => {
          if (window.location.pathname !== this.currentPathname) {
            history.push(`${this.currentPathname}${this.currentSearch}`)
          }
        }, 200)
        this.setState({
          isShowModal: true,
          nextLocation,
        })
        return false
      }
    })
  }

  componentWillUnmount() {
    this.unblock()
  }

  onCancel = () => {
    this.unblock()
    const { nextLocation } = this.state
    const {
      onCancel,
      history = {
        goBack: () => {
          console.warn('history 没有传入')
        },
      },
    } = this.props
    if (onCancel) {
      onCancel(nextLocation)
    } else {
      history.goBack()
    }
  }

  onConfirm = () => {
    this.setState({ nextLocation: null, isShowModal: false })
    const { onConfirm } = this.props
    if (onConfirm) {
      onConfirm()
    }
  }

  render() {
    const { isShowModal } = this.state
    const { dialogChildren, dialogTitle, okText, cancelText } = this.props

    return (
      <div className={`${this.classPrefix}jump-prompt`}>
        <Dialog
          title={dialogTitle}
          visible={isShowModal}
          onOk={this.onConfirm}
          onCancel={this.onCancel}
          mask
          okText={okText}
          cancelText={cancelText}
        >
          {dialogChildren}
        </Dialog>
      </div>
    )
  }
}
