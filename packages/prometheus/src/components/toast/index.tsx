import React from 'react'
import Toast from './toast'
import ReactDOM from 'react-dom'
import { IToastItemProps } from './toast-item'
import createDebug from '../../base/createDebug'

const debug = createDebug('qr:toast')

export interface IToastProps {
  name?: '$'
}
let seed = 0
type UUID = string | number | undefined
class ToastManager {
  private $root: HTMLDivElement | null | undefined = null
  private toastRef: any = React.createRef()
  private initStatus: 'none' | 'ing' | 'done' = 'none'
  private infoList: IToastItemProps[] = []

  private createToastContainer(callback) {
    // if (this.initStatus) return callback()
    this.$root = document.createElement('div')
    document.body.appendChild(this.$root)

    ReactDOM.render(<Toast ref={this.toastRef} />, this.$root, callback)
  }
  private _info(props: IToastItemProps) {
    const { uuid } = props
    if (this.initStatus === 'none') {
      this.infoList.push(props)
      this.initStatus = 'ing'
      this.createToastContainer(() => {
        this.initStatus = 'done'
        this.infoList.forEach(item => {
          this._push(item)
        })
      })
    } else if (this.initStatus === 'ing') {
      this.infoList.push(props)
    } else if (this.initStatus === 'done') {
      this._push(props)
    }
    return uuid
  }
  private _push(param: IToastItemProps) {
    try {
      return this.toastRef.current.push(param)
    } catch (error) {
      debug(error)
    }
  }
  set max(count: number) {
    Toast.max = count
  }
  get UUID() {
    return `q-toast-${seed++}`
  }
  /**
   * 组合参数返回 IToastItemProps
   */
  suffleParam(param: IToastItemProps | string, type?: number): IToastItemProps {
    if (param.constructor === String) {
      return { message: param, type, uuid: this.UUID } as IToastItemProps
    } else {
      return { type, ...(param as IToastItemProps), uuid: this.UUID }
    }
  }
  info(param: IToastItemProps | string) {
    const props = this.suffleParam(param)
    return this._info(props)
  }

  success(param: IToastItemProps | string) {
    const props = this.suffleParam(param, 0)
    return this._info(props)
  }
  fail(param: IToastItemProps | string) {
    const props = this.suffleParam(param, 1)
    return this._info(props)
  }
  loading(param: IToastItemProps | string) {
    const props = this.suffleParam(param, 2)
    props.duration = 0
    return this._info(props)
  }
  warn(param: IToastItemProps | string) {
    const props = this.suffleParam(param, 3)
    return this._info(props)
  }
  destroy(uuid?: string) {
    try {
      this.toastRef.current.clear(uuid)
    } catch (error) {
      debug(error)
    }
  }
}
const toastManager = new ToastManager()
export default toastManager
