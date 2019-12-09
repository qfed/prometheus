import '../../base'
import React from 'react'
import { observer } from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import classNames from 'classnames'
import Icon from '../icon'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/slider/index.scss'

export interface ISliderProps extends IBaseProps {
  min?: number
  max?: number
  step?: number
  value?: number
  disabled?: boolean
  onChange?: (val: number) => void
  onComplete?: (val: number) => void
  controller: boolean
}

@observer(['min', 'max', 'step', 'value'])
export default class Slider extends BaseComponent<ISliderProps, any> {
  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    onChange(val) {
      // console.log(val)
    },
    onComplete() { },
    controller: true,
  }

  $slider: any = React.createRef()
  controlled: boolean = false
  oldValue: number = 0

  state = {
    step: 1,
    value: 0,
    max: 100,
    min: 0,
    isPC: false
  }

  constructor(props) {
    super(props)
    this.controlled = typeof this.props.value !== 'undefined'
  }

  get percentage() {
    const { min } = this.state
    const value = this.getValue()
    let offset = value - min
    if (offset < 0) offset = 0
    return this.convert2Precentage(offset / this.range)
  }
  get range() {
    const { max, min } = this.props
    return max - min
  }
  get rect() {
    const $slider = this.$slider.current
    const rect = $slider.getClientRects()[0]
    return JSON.parse(JSON.stringify(rect))
  }
  onTounchMove = event => {
    if (this.props.disabled) return

    const { changedTouches: touches } = event
    const touch = touches[0]
    const { clientX } = touch
    this.onMove(clientX)
  }
  onTouchStart = () => {
    this.setOldValue()
  }

  mousemove = (e) => {
    this.onMove(e.clientX)
  }
  mouseup = () => {
    document.removeEventListener('mousemove', this.mousemove)
    this.onComplete()
    document.removeEventListener('mouseup', this.mouseup)
  }

  onMouseDown = () => {
    this.setOldValue()
    if (this.props.disabled) return

    document.addEventListener('mousemove', this.mousemove)
    document.addEventListener('mouseup', this.mouseup)
  }

  onMove = (clientX) => {
    const { step, min } = this.state
    const oldValue = this.getValue()
    const { left, width } = this.rect
    let currentOffsetLeft = (clientX - left) as number
    if (currentOffsetLeft < 0) currentOffsetLeft = 0
    if (currentOffsetLeft > width) currentOffsetLeft = width
    const percentage = this.convert2Precentage(currentOffsetLeft / width)
    const accurateValue: any = (this.range * currentOffsetLeft) / width / step
    const value = parseInt(accurateValue, 10) * step + min

    this.setState({ percentage })
    if (!this.controlled) this.setState({ value })
    if (value !== oldValue) this.props.onChange(value)
  }

  convert2Precentage(num: number): string {
    return Math.round(num * 10000) / 100 + '%'
  }
  getValue = () => {
    return this.controlled ? this.props.value : this.state.value
  }

  setOldValue = () => {
    this.oldValue = this.getValue()
  }

  // Element.getClientRects()  看起可以获得所有要用的属性
  // get sliderOffsetLeft() {
  //   const $slider = this.$slider.current
  //   let actualLeft = $slider.offsetLeft
  //   let current = $slider.offsetParent

  //   while (current !== null) {
  //     actualLeft += current.offsetLeft
  //     current = current.offsetParent
  //   }

  //   return actualLeft
  // }

  onChange = step => {
    const { disabled, onChange, onComplete } = this.props

    if (disabled) return
    const { max, min} = this.state
    const oldValue = this.getValue()
    // @ts-ignore
    let value = parseFloat(oldValue) + parseFloat(step)
    if (value > max) value = max
    if (value < min) value = min

    if(!this.controlled) this.setState({ value })
    if (value !== oldValue) {
      onChange(value)
      onComplete(value)
    }
  }

  onComplete = () => {
    const { disabled, onComplete } = this.props

    if (disabled) return
    const value  = this.getValue();
    if (this.oldValue !== value) onComplete(value)
  }

  componentDidMount() {
    this.setState({
      rect: this.rect
    })
  }

  render() {
    const { step } = this.state
    const { controller, style } = this.props
    return (
      <div className={`${this.classPrefix}slider`} style={style}>
        {controller && (
          <Icon
            className={`${this.classPrefix}slider__icon`}
            type='less'
            onClick={this.onChange.bind(this, -1 * step)}
            style={{ fontSize: '22px', marginRight: '15px', fill: '#ffffff' }}
          />
        )}
        <div
          className={`${this.classPrefix}slider__wrapper`}
          ref={this.$slider}
        >
          {/* <div className="slider__step" /> */}
          <div className={`${this.classPrefix}slider__rail`} onClick={(e) => this.onMove(e.clientX)} />
          <div
            className={`${this.classPrefix}slider__track`}
            style={{ width: this.percentage }}
            onClick={(e) => this.onMove(e.clientX)}
          />
          <div
            className={`${this.classPrefix}slider__handler`}
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTounchMove}
            onTouchEnd={this.onComplete}
            onMouseDown={this.onMouseDown}
            style={{ left: this.percentage }}
          >
            <Icon type='slide' style={{ fontSize: '22px' }} />
          </div>
        </div>
        {controller && (
          <Icon
            className={`${this.classPrefix}slider__icon`}
            type='add'
            onClick={this.onChange.bind(this, step)}
            style={{ fontSize: '22px', marginLeft: '15px', fill: '#ffffff' }}
          />
        )}
      </div>
    )
  }
}
