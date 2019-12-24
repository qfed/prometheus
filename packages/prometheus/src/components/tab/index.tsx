
import React from 'react'
import createDebug from '../../base/createDebug'
import classNames from 'classnames'
import TabItem from './tab-item'
import observerProps from '../../base/observerProps'
import IBaseProps from '../../base/baseProps'
import Icon from '../icon'
import { iconType } from '../icon/iconType'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/tab/index.scss'

import Tag from '../tag/index'
import TagGroup from '../tag/tag-group'

const debug = createDebug('qr:Tabs')
interface ITabIcon {
  title: string
  icon?: iconType | JSX.Element
  children?: IPoplistItem[]
}

export interface IPoplistItem {
  title?: React.ReactNode
  isSelected?: boolean
}

export interface ITabState {
  maxCount?: number
  selectedIndex?: number
  tabs?: ITabIcon[]
  popupList?: IPoplistItem[]
  isShowPopupList?: boolean
  subselectedIndex?: number
}
export interface ITabProps extends IBaseProps {
  tabs?: ITabIcon[]
  selectedIndex?: number
  defaultTabIndex?: number
  maxCount?: number
  tabBarPosition?: 'top' | 'bottom'
  onChange?: (v: number, e: any) => void
  animated?: boolean
  activeColor?: string
  onSubChange?: (item) => void
}
/**
 * Tabs
 * @prop {string} className tab容器的类名
 * @prop {array} tabs tab数据
 * @prop {boolean} animated 是否开启切换动画
 * @prop {number} selectedIndex 只可被选中tab
 * @prop {number} defaultTabIndex 默认被选中的tab
 * @prop {string} tabBarPosition TabBar位置
 * @prop {string} activeColor tab被选中色
 * @prop {number} maxCount 可见标签数量
 * @prop {function} onChange tab变化时触发
 * @prop {function} onSubChange tab变化时触发
 * @example
 * import Tabs, { ITabsProps } from 'q-react'
 *    let props:ITabsProps ={ name:'ts-Tabs' }
 *    <Tabs {...props} />
 */
export default class Tabs extends BaseComponent<ITabProps, ITabState> {
  static defaultProps = {
    className: '',
    animated: true,
    tabBarPosition: 'top',
    height: '150px',
    maxCount: 4,
    onChange() {},
    tabIcons: [],
    tabs: [],
  }
  static Item = TabItem
  static getDerivedStateFromProps = observerProps([
    'tabs',
    'maxCount',
  ])

  state: ITabState = {
    popupList: [],
    selectedIndex: 0,
  }
  parentBar: any = null

  componentDidMount() {
    let selectedIndex = 0
    if ( this.props.defaultTabIndex !== undefined) {
      selectedIndex = this.props.defaultTabIndex
    }
    if ( this.props.selectedIndex !== undefined) {
      selectedIndex = this.props.selectedIndex
    }
    this.setState({
      selectedIndex
    })
  }

  get selectTrueIndex () {
    let selectedIndex = 0
    if ( this.state.selectedIndex !== undefined) {
      selectedIndex = this.state.selectedIndex
    }
    if ( this.props.selectedIndex !== undefined) {
      selectedIndex = this.props.selectedIndex
    }
    return selectedIndex
  }

  get barWidth() {
    const { maxCount } = this.props
    const percentage: any = (1 / maxCount).toFixed(4)
    return percentage * 100
  }
  /**
   * 假设默认显示的tabbar 数量为 n ，那么tabbar下面的滑块为了居中则将整个 tab 分为 2n 份
   * 假设当前selectedIndex 为 m ，那么向左偏移的百分比就为  2m+1/2n
   * 示意图如下
   * |---.---|---.---|---.---|     三个tabbar
   * |---|---|---|---|---|---|     滑块为了居中将tab分成六份
   */
  get barLeft() {

    const  selectedIndex  = this.selectTrueIndex
    const { maxCount } = this.props
    const toal = 2 * maxCount
    const cur = 2 * selectedIndex + 1
    const percentage: any = (cur / toal).toFixed(4)

    return percentage * 100
  }

  onSelected = (index: number, e: any) => {
    const { onChange, tabs } = this.props
    const parentBar = this.parentBar as HTMLElement

    if (e.pageX < e.currentTarget.offsetWidth) {
      if (parentBar && (typeof parentBar.scrollTo === 'function')) {
        parentBar.scrollTo(e.currentTarget.offsetWidth * index, 0)
      }
    }

    if (e.pageX + e.currentTarget.offsetWidth > parentBar.offsetWidth) {
      if (parentBar && (typeof parentBar.scrollTo === 'function')) {
        parentBar.scrollTo(e.currentTarget.offsetWidth * (index - 3), 0)
      }
    }

    const { isShowPopupList } = this.state

    if (!tabs[index].children && isShowPopupList === true) {
      this.setState({
        isShowPopupList: false,
      })
      return
    }
    if (tabs[index].children && tabs[index].children.length > 0) {
      this.setState({
        isShowPopupList: !isShowPopupList,
        popupList: tabs[index].children,
        subselectedIndex: index,
      })
      return
    }
    this.setState({
      selectedIndex: index,
    })
    onChange(index, e)
  }

  onItemClick = (item: IPoplistItem) => {
    const { onSubChange, onChange } = this.props
    const { subselectedIndex, isShowPopupList, tabs } = this.state
    if (tabs[subselectedIndex].children) {
      tabs[subselectedIndex].children.forEach(ele => (ele.isSelected = false))
    }
    item.isSelected = true
    this.setState({
      isShowPopupList: !isShowPopupList,
      selectedIndex: subselectedIndex,
    })
    onChange(subselectedIndex, null)
    if (onSubChange) {
      onSubChange(item)
    }
  }
  render() {
    const { tabBarPosition, className, animated, activeColor } = this.props
    const {
      tabs,
      popupList,
      isShowPopupList,
      subselectedIndex,
    } = this.state
    const len = tabs.length
    const selectedIndex = this.selectTrueIndex;
    // debug(this.props)
    return (
      <div
        className={classNames(
          `${this.classPrefix}tab`,
          `${this.classPrefix}tab--${tabBarPosition}`,
          className
        )}
      >
        <div
          className={classNames(
            `${this.classPrefix}tab__bar`,
            `${this.classPrefix}tab--q-tab__bar--${tabBarPosition}`
          )}
        >
          <div
            className={`${this.classPrefix}tab__bar-content`}
            ref={ref => (this.parentBar = ref)}
          >
            {tabs.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  `${this.classPrefix}tab__bar-tab`,
                  `${this.classPrefix}tab__bar-tab--
                ${tabBarPosition}`,
                  {
                    [`${this.classPrefix}tab__bar-tab--active`]:
                      selectedIndex === index,
                  }
                )}
                style={{ width: `${this.barWidth}%` }}
                onClick={this.onSelected.bind(this, index)}
                data-index={index}
              >
                <div
                  id={index.toString()}
                  className={`${this.classPrefix}tab__bar-tab__mask`}
                />

                {!!item.icon && typeof item.icon === 'string' && (
                  <Icon
                    type={item.icon}
                    className={`${this.classPrefix}tab__bar-tab__icon`}
                    style={{
                      fontSize: 16,
                      color: selectedIndex === index ? activeColor : '',
                    }}
                  />
                )}
                {!!item.icon && typeof item.icon !== 'string' && item.icon}
                <span
                  className={`${this.classPrefix}tab__bar-tab__txt`}
                  style={{
                    color: selectedIndex === index ? activeColor : '',
                  }}
                >
                  {item.title}
                </span>
                {item.children && item.children.length > 0 && (
                  <Icon
                    className={classNames({
                      [`${this.classPrefix}tab__bar-tab__arrow`]: true,
                      [`${this.classPrefix}tab__bar-tab__arrow--active`]:
                        subselectedIndex === index && isShowPopupList,
                    })}
                    type='arrowUnder'
                  />
                )}
              </div>
            ))}
            {tabBarPosition === 'top' && (
              <span
                className={classNames(
                  `${this.classPrefix}tab__bar-underline`,
                  animated
                    ? `${this.classPrefix}tab__bar-underline--animated`
                    : ''
                )}
                style={{ left: `${this.barLeft}%`, backgroundColor: activeColor }}
              />
            )}
          </div>
        </div>
        <div className={`${this.classPrefix}tab__wrap`}>
          <div
            className={classNames(
              `${this.classPrefix}tab__content`,
              animated ? `${this.classPrefix}tab__content--animated` : ''
            )}
            style={{
              WebkitTransform: `translate3d(${-100 *
                selectedIndex}%, 0px, 0px)`,
              transform: `translate3d(${-100 * selectedIndex}%, 0px, 0px)`
            }}
          >
            {this.props.children}
          </div>
          {isShowPopupList && popupList && (
            <div className='popup-list'>
              <div className='popup-list__wrap'>
                {popupList.map((item, index) => {
                  return (
                    <div
                      key={item.title + '' + index}
                      className='popup-list__item'
                      onClick={() => this.onItemClick(item)}
                    >
                      <div
                        className={classNames({
                          'popup-list__item__content': true,
                          'popup-list__item__content--active': item.isSelected,
                        })}
                      >
                        {item.title}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='popup-list__mask' />
            </div>
          )}
        </div>
      </div>
    )
  }
}
