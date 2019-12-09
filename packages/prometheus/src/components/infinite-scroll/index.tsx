import React, { Component } from 'react'
import BaseComponent from '../../base/baseComponent'
import Loading from '../loading'
// import '@q/q-ui/dist/scss/components/infinite-scroll/index.scss'

interface IProps {
  loadMore: () => Promise<any>
  render: (data: any[], noData?: boolean) => JSX.Element
  threshold?: number
}

/**
 * InfiniteScroll
 * @prop {function} loadMore 加载更多回调
 * @prop {number} render 渲染列表的模板
 * @prop {function} threshold 距离文档底部的距离
 */

class InfiniteScroll extends BaseComponent<IProps, any> {
  static defaultProps = {
    threshold: 100,
  }

  state = {
    timeId: 0,
    list: [],
    hasMore: true,
    noData: false,
  }

  componentDidMount() {
    this.loadMore()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { timeId, hasMore } = this.state
    const { threshold = 100 } = this.props
    // 防抖
    if (timeId) {
      clearTimeout(timeId)
    }
    const setTimeOutId = setTimeout(() => {
      // 浏览器视口底部距离文档底部threshold距离时且还有下一页时触发加载更多
      if (
        this.scrollTop + this.clientHeight + threshold > this.scrollHeight &&
        hasMore
      )
        this.loadMore()
    }, 100)
    this.setState({
      timeId: setTimeOutId,
    })
  }

  async loadMore() {
    const { list = [], hasMore = false } = await this.props.loadMore()
    this.setState(state => ({
      list: state.list.concat(list),
      hasMore,
    }))
    if (this.state.list.length < 1) {
      this.setState({
        noData: true,
      })
    }
  }

  // 滚动条在Y轴上的滚动距离
  get scrollTop() {
    let scrollTop = 0
    let bodyScrollTop = 0
    let documentScrollTop = 0
    if (document.body) {
      bodyScrollTop = document.body.scrollTop
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop
    }
    scrollTop =
      bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
    return scrollTop
  }

  // 文档的总高度
  get scrollHeight() {
    let scrollHeight = 0
    let bodyScrollHeight = 0
    let documentScrollHeight = 0
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight
    }
    scrollHeight =
      bodyScrollHeight - documentScrollHeight > 0
        ? bodyScrollHeight
        : documentScrollHeight
    return scrollHeight
  }

  // 浏览器视口的高度
  get clientHeight() {
    let clientHeight = 0
    if (document.compatMode === 'CSS1Compat') {
      clientHeight = document.documentElement.clientHeight
    } else {
      clientHeight = document.body.clientHeight
    }
    return clientHeight
  }

  renderFooterComponent() {
    const { list, hasMore } = this.state
    if (!hasMore && list.length > 0) {
      return (
        <p
          className={`${
            this.classPrefix
          }infinite-scroll__footer text-center fc-c`}
          style={{ marginBottom: '10px' }}
        >
          <span className={`${this.classPrefix}infinite-scroll__border`} />
          <span className={`${this.classPrefix}infinite-scroll__text`}>
            已经到底啦
          </span>
          <span className={`${this.classPrefix}infinite-scroll__border`} />
        </p>
      )
    }

    if (hasMore && list.length > 0) {
      return (
        <Loading
          className={`${this.classPrefix}infinite-scroll__loading`}
          type='bounce'
        />
      )
    }
  }

  render() {
    const { list, hasMore, noData } = this.state
    return (
      <div>
        {this.props.render(list, noData)}
        {this.renderFooterComponent()}
      </div>
    )
  }
}

export default InfiniteScroll
