
import * as React from 'react'
import IBaseProps from '../../base/baseProps'
import BaseComponent from '../../base/baseComponent'
// import '@q/q-ui/dist/scss/components/address-picker/index.scss'

/**
 * 地址项数据接口
 */
interface IAddressItem {
  area_id: string | number
  parent_id: string | number
  area_name: string
}

export interface IAddressPickerProps extends IBaseProps {
  placeList: IAddressItem[]
  value?: number[]
  onClick: (val: IAddressItem, column: number) => void
}

/**
 * AddressPicker
 * @prop {Array} placeList 地址数据列表
 * @prop {Array} value 回显数据列表
 * @prop {Function} onClick 点击地址列表项回调
 * @example
 */
export default class AddressPicker extends BaseComponent<
  IAddressPickerProps,
  any
> {
  static defaultProps = {
    placeList: [],
    value: [],
    onClick: () => {},
  }

  constructor(props) {
    super(props)
    this.state = {
      column: -1,
      column0: {},
      column1: {},
      column2: {},

      provinceList: [],
      cityList: [],
      areaList: [],
    }
  }

  componentDidMount() {
    const { value, placeList } = this.props
    this.initData(value, placeList)
  }

  componentWillReceiveProps(nextProps) {
    const { value, placeList } = nextProps
    this.initData(value, placeList)
  }

  initData = (value = [], placeList = []) => {
    const { provinceList, cityList, areaList, column } = this.state

    // 如果无省数据，则认为是第一次初始化过程，数组数据判断为省
    if (provinceList.length === 0) {
      this.setState({
        provinceList: placeList,
        cityList: [],
        areaList: [],
        column0: {},
        column1: {},
        column2: {},
      })
      return
    }

    // 点击省后数组判断为市
    if (column === 0) {
      const column0 = provinceList.find(i => +i.area_id === +value[0]) || {}
      const cityListTmp = placeList.filter(
        i => +i.parent_id === +column0.area_id
      )
      this.setState({
        column0,
        column1: {},
        column2: {},
        cityList: cityListTmp,
        areaList: [],
      })
      return
    }

    // 点击市后数组判断为区
    if (column === 1) {
      const column1 = cityList.find(i => +i.area_id === +value[1]) || {}
      const areaListTmp = placeList.filter(
        i => +i.parent_id === +column1.area_id
      )
      this.setState({
        column1,
        column2: {},
        areaList: areaListTmp,
      })
      return
    }

    // 点击区后回显选中区
    if (column === 2) {
      const column2 = areaList.find(i => +i.area_id === +value[2]) || {}
      this.setState({
        column2,
      })
      return
    }
  }

  echoPlace(root, placeList, value) {
    // 如果在各自list中存在找不到回显项，则从placeList中过滤
    const provinceList = placeList.filter(i => +i.parent_id === +root)
    const column0 = provinceList.find(i => +i.area_id === +value[0]) || {}
    const cityList = placeList.filter(i => +i.parent_id === +value[0])
    const column1 = cityList.find(i => +i.area_id === +value[1]) || {}
    const areaList = placeList.filter(i => +i.parent_id === +value[1])
    const column2 = areaList.find(i => +i.area_id === +value[2]) || {}
    this.setState(
      {
        column0,
        column1,
        column2,
        provinceList,
        cityList,
        areaList,
        column: -1,
      },
      () => {
        // 滚动到可视区
        this.scrollIntoView()
      }
    )
  }

  scrollIntoView = () => {
    const container = document.querySelector('.region__bd')
    if (!container) return
    const activeArr: any = container.querySelectorAll('.active') || []
    activeArr.forEach(ele => {
      ele.scrollIntoView()
    })
  }

  getArea(payload) {
    const { areaItem, column } = payload
    const { onClick } = this.props
    onClick(areaItem, column)
    // @ts-ignore
    this.state.column = column
  }

  handleClick = (value, column) => {
    this.setState(
      {
        [`column${column}`]: value,
      },
      () => {
        this.getArea({ areaItem: value, column })
      }
    )
  }

  render() {
    const {
      column1,
      column2,
      column0,
      provinceList,
      cityList,
      areaList,
    } = this.state

    return (
      <div className={`${this.classPrefix}picker-address`}>
        <div className={`${this.classPrefix}picker-address__body`}>
          <div
            className={`${this.classPrefix}picker-address__body__hd bottom-1px`}
          >
            {provinceList.length > 0 ? (
              <div
                className={`${
                  this.classPrefix
                }picker-address__body__hd__column`}
              >
                <span
                  className={
                    column0.area_name
                      ? `${
                          this.classPrefix
                        }picker-address__body__hd__column__text`
                      : `${
                          this.classPrefix
                        }picker-address__body__hd__column__text--active`
                  }
                >
                  {column0.area_name || '请选择'}
                </span>
              </div>
            ) : null}
            {cityList.length > 0 ? (
              <div
                className={`${
                  this.classPrefix
                }picker-address__body__hd__column`}
              >
                <span
                  className={
                    column1.area_name
                      ? `${
                          this.classPrefix
                        }picker-address__body__hd__column__text`
                      : `${
                          this.classPrefix
                        }picker-address__body__hd__column__text--active`
                  }
                >
                  {column1.area_name || '请选择'}
                </span>
              </div>
            ) : null}
            {areaList.length > 0 ? (
              <div
                className={`${
                  this.classPrefix
                }picker-address__body__hd__column`}
              >
                <span
                  className={
                    column2.area_name
                      ? `${
                          this.classPrefix
                        }picker-address__body__hd__column__text`
                      : `${
                          this.classPrefix
                        }picker-address__body__hd__column__text--active`
                  }
                >
                  {column2.area_name || '请选择'}
                </span>
              </div>
            ) : null}
          </div>
          <div className={`${this.classPrefix}picker-address__body__bd`}>
            <div
              className={`${this.classPrefix}picker-address__body__bd__column`}
            >
              {provinceList.map((item, index) => (
                <div
                  className={
                    item.area_id === column0.area_id
                      ? `${
                          this.classPrefix
                        }picker-address__body__bd__column__text--active`
                      : `${
                          this.classPrefix
                        }picker-address__body__bd__column__text`
                  }
                  onClick={this.handleClick.bind(this, item, 0)}
                  key={index}
                >
                  {item.area_name}
                </div>
              ))}
            </div>
            <div
              className={`${this.classPrefix}picker-address__body__bd__column`}
            >
              {cityList.map((item, index) => (
                <div
                  className={
                    item.area_id === column1.area_id
                      ? `${
                          this.classPrefix
                        }picker-address__body__bd__column__text--active`
                      : `${
                          this.classPrefix
                        }picker-address__body__bd__column__text`
                  }
                  onClick={this.handleClick.bind(this, item, 1)}
                  key={index}
                >
                  {item.area_name}
                </div>
              ))}
            </div>
            <div
              className={`${this.classPrefix}picker-address__body__bd__column`}
            >
              {areaList.map((item, index) => (
                <div
                  className={
                    item.area_id === column2.area_id
                      ? `${
                          this.classPrefix
                        }picker-address__body__bd__column__text--active`
                      : `${
                          this.classPrefix
                        }picker-address__body__bd__column__text`
                  }
                  onClick={this.handleClick.bind(this, item, 2)}
                  key={index}
                >
                  {item.area_name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
