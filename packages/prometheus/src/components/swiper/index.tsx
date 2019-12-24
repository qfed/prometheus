
import React from 'react'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import classNames from 'classnames'
import SwiperItem from './swiper-item'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/swiper/index.scss'

export interface ISwiperProps extends IBaseProps {
  width: number
  height: number
  isAutoPlay?: boolean
  autoPlayDuring?: 2000
  type?: 'black' | 'white'
}
/**
 * Button
 * @prop {string} className Swiper的类名
 * @prop {object} style 定义Swiper样式
 * @example
 * import Swiper, { ISwiperProps } from 'q-react'
 *    let props:ISwiperProps ={ name:'ts-Swiper' }
 *    <Swiper {...props} />
 */
@observer(['disabled'])
export default class Swiper extends BaseComponent<ISwiperProps, any> {
  static defaultProps = {
    index: 1,
    width: 200,
    isAutoPlay: false,
    autoPlayDuring: 2000,
    type: 'black',
  }
  static SwiperItem = SwiperItem
  timer = 0
  autoPlayDuring: number
  $swiper: any = React.createRef()
  state = { originX: 0, endX: 0, index: 0, animation: {}, len: 0 }
  constructor(props) {
    super(props)
    const { index, width, autoPlayDuring } = props
    this.autoPlayDuring = autoPlayDuring
    this.state.animation = this.animation(0, -1 * width * index, 0)
    this.state.index = index
  }

  get classNames() {
    const { className } = this.props
    return classNames(`${this.classPrefix}swiper`, className)
  }
  /**
   *
   * @param from
   * @param to
   * @param duration 本来想根据当前滚动距离动态的计算 duration 但是看实际效果感觉不根据滚动距离控制during也没啥问题
   */
  animation(from = 0, to: number, duration = 300) {
    const translateX = to - from
    return {
      transform: `translate(${translateX}px)`,
      transition: `${duration}ms transform`,
    }
  }
  onStart = (clientX) => {
    clearTimeout(this.timer)
    this.setState({ originX: clientX })
  }
  onEnd = (endX) => {
    const { originX } = this.state
    let { index } = this.state
    let nextIndex = index
    if (endX - originX < -20) {
      nextIndex = ++index
    }
    if (endX - originX > 20) {
      nextIndex = --index
    }

    this.updateIndex(nextIndex)
    setTimeout(this.autoPlay, this.autoPlayDuring)
  }
  onTouchStart = event => {
    const { changedTouches: touches } = event
    const touch = touches[0]
    const { clientX, clientY } = touch
    this.onStart(clientX)
  }
  onTouchEnd = event => {
    const { changedTouches: touches } = event
    const touch = touches[0]
    const { clientX: endX, clientY } = touch
    this.onEnd(endX)
  }
  /**
   * @param {number} index preIndex
   * @param {number} nextIndex nextIndex
   */
  updateIndex = nextIndex => {
    const { width } = this.props
    let index = nextIndex
    this.setState({ animation: this.animation(0, -1 * width * nextIndex) })

    if (nextIndex === this.len + 1) {
      index = 1
      setTimeout(() => {
        this.setState({ animation: this.animation(0, -1 * width, 0) })
      }, 300)
    } else if (nextIndex === 0) {
      index = this.len
      setTimeout(() => {
        this.setState({
          animation: this.animation(0, -1 * width * this.len, 0),
        })
      }, 300)
    }
    setTimeout(() => {
      this.setState({
        index,
      })
    }, 300)
  }
  autoPlay = () => {
    const { isAutoPlay } = this.props
    if (!isAutoPlay) return
    window.clearTimeout(this.timer)
    this.timer = window.setTimeout(() => {
      const { index } = this.state

      const nextIndex = index + 1
      this.updateIndex(nextIndex)
      this.autoPlay()
    }, this.autoPlayDuring)
  }
  onMove = (clientX) => {
    const { width } = this.props
    const { originX, index } = this.state
    // 当translateX到达阙值时不滑动
    if (index === 0 || this.len + 1 === index) return
    // translateX 转成Int值的原因是如果有小数点滑动的时候swiperitem之间会有细微的缝隙
    // @ts-ignore
    const translateX = parseInt(clientX - originX - width * index, 10)

    this.setState({ animation: this.animation(0, translateX, 0) })
  }
  onTouchMove = event => {
    const { changedTouches: touches } = event
    const touch = touches[0]
    const { clientX, clientY } = touch
    this.onMove(clientX)
  }
  onMouseMove = (e) => {
    this.onMove(e.clientX)
  }
  onMouseUp = (e) => {
    this.onEnd(e.clientX)
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
  }
  onMouseDown = event => {
    this.onStart(event.clientX)
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
  }
  get len() {
    // 三种情况 undefined ， reactnode , array
    const { children } = this.props
    if (!children) return 0
    return (children as any).length || 1
  }
  // 目前没用
  get rect() {
    const $swiper = this.$swiper.current
    const rect = $swiper.getClientRects()[0]
    return JSON.parse(JSON.stringify(rect))
  }
  get swiperItems() {
    const { children = [] as any } = this.props
    let newChildren: any[] = []
    if (this.len === 0) return
    if (this.len === 1) {
      newChildren = new Array(3).fill(children, 0, 3)
    }
    newChildren.push(children[this.len - 1], ...children, children[0])
    return React.Children.toArray(newChildren)
  }
  /**
   * TODO
   * 1 做一个dot 移动的动画
   * 2 暴露自定义dot
   */
  get swiperDots() {
    const { index } = this.state
    const dots: JSX.Element[] = []
    for (let i = 1; i <= this.len; i++) {
      const isActive: boolean = i === index
      dots.push(
        <div
          className={classNames(`${this.classPrefix}swiper__dot`, {
            [`${this.classPrefix}swiper__dot--active`]: isActive,
          })}
        />
      )
    }
    return React.Children.toArray(dots)
  }
  componentWillUnmount() {
    window.clearTimeout(this.timer)
  }
  componentDidMount() {
    // this.setState({ rect: this.rect })
    this.autoPlay()
  }
  render() {
    const { style, children, width, height, type } = this.props
    const { animation, index } = this.state
    return (
      <div>
        <div
          className={classNames(`${this.classPrefix}swiper__wrap`, {
            [`${this.classPrefix}swiper__wrap--white`]: type === 'white',
          })}
          style={{ width, height, ...style }}
        >
          <div
            ref={this.$swiper}
            className={this.classNames}
            style={{ ...animation, height }}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchMove={this.onTouchMove}
            onMouseDown={this.onMouseDown}
          >
            {this.swiperItems}
          </div>
          <div className={`${this.classPrefix}swiper__dot__wrap`}>
            {this.swiperDots}
          </div>
        </div>
        <h1>index:{index}</h1>
      </div>
    )
  }
}
