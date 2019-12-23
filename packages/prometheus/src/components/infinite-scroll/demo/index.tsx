import * as React from 'react'
import * as ReactDOM from 'react-dom'
import List from '../../list'
import InfiniteScroll from '../index'

const allList = [
  {
    area_id: '1',
    area_name: '\u5317\u4eac',
    parent_id: '0',
    is_last: '0',
  },
  {
    area_id: '2',
    area_name: '\u4e0a\u6d77',
    parent_id: '0',
    is_last: '0',
  },
  {
    area_id: '3',
    area_name: '\u5929\u6d25',
    parent_id: '0',
    is_last: '0',
  },
  {
    area_id: '4',
    area_name: '\u91cd\u5e86',
    parent_id: '0',
    is_last: '0',
  },
  {
    area_id: '5',
    area_name: '\u6cb3\u5317',
    parent_id: '1',
    is_last: '0',
  },
  {
    area_id: '6',
    area_name: '\u5c71\u897f',
    parent_id: '1',
    is_last: '0',
  },
  {
    area_id: '7',
    area_name: '\u6cb3\u5357',
    parent_id: '1',
    is_last: '0',
  },
  {
    area_id: '8',
    area_name: '\u8fbd\u5b81',
    parent_id: '1',
    is_last: '0',
  },
  {
    area_id: '9',
    area_name: '\u5409\u6797',
    parent_id: '2',
    is_last: '0',
  },
  {
    area_id: '10',
    area_name: '\u9ed1\u9f99\u6c5f',
    parent_id: '2',
    is_last: '0',
  },
  {
    area_id: '11',
    area_name: '\u5185\u8499\u53e4',
    parent_id: '2',
    is_last: '0',
  },
  {
    area_id: '12',
    area_name: '\u6c5f\u82cf',
    parent_id: '2',
    is_last: '0',
  },
  {
    area_id: '13',
    area_name: '\u5c71\u4e1c',
    parent_id: '3',
    is_last: '0',
  },
  {
    area_id: '14',
    area_name: '\u5b89\u5fbd',
    parent_id: '3',
    is_last: '0',
  },
  {
    area_id: '15',
    area_name: '\u6d59\u6c5f',
    parent_id: '3',
    is_last: '0',
  },
  {
    area_id: '16',
    area_name: '\u798f\u5efa',
    parent_id: '3',
    is_last: '0',
  },
  {
    area_id: '17',
    area_name: '\u6e56\u5317',
    parent_id: '4',
    is_last: '0',
  },
  {
    area_id: '18',
    area_name: '\u6e56\u5357',
    parent_id: '4',
    is_last: '0',
  },
  {
    area_id: '19',
    area_name: '\u5e7f\u4e1c',
    parent_id: '4',
    is_last: '0',
  },
  {
    area_id: '20',
    area_name: '\u5e7f\u897f',
    parent_id: '4',
    is_last: '0',
  },
]

class Example extends React.Component<any, any> {
  state = {
    param: {
      hasMore: true,
      pageSize: 10,
      pageNo: 1,
    },
  }
  count: number = 0
  loadMore = () => {
    if (this.count >= 3) {
      this.setState({
        param: {
          hasMore: false,
          pageSize: 10,
          pageNo: 1,
        },
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            hasMore: false,
          })
        }, 1000)
      })
    }
    this.count++
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          list: allList,
          hasMore: true,
        })
      }, 1000)
    })
  }

  render() {
    return (
      <InfiniteScroll
        loadMore={() => this.loadMore()}
        render={(list, noData) => (
          <div>
            {list.length > 0 && (
              <List>
                {list.map((item, index) => (
                  <List.Item key={`${item.no}${index}`}>
                    {item.area_name}
                  </List.Item>
                ))}
              </List>
            )}
            {noData && (
              <div>
                <p>您当前还没有数据哦～</p>
              </div>
            )}
          </div>
        )}
      />
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
