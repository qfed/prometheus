# InfiniteScroll <q-qrcode name='infinite-scroll' />

列表滚动到距离底部一定距离触发加载更多回调，实现列表分页加载功能。

## 代码演示

<q-code>
```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import List from '../../list'

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
        }, 5000)
      })
    }
    this.count++
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          list: allList,
          hasMore: true,
        })
      }, 5000)
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
```
</q-code>

## API

| Option    | Description                        |  Type                                        | Default Value |
| --------- | ---------------------------------- | ---------------------------------------------- | ------------- |
| loadMore  | 滚动到底部时触发加载更多数据的函数 | Promise<{ list: [], hasMore: boolean }>        | -             |
| render    | 列表渲染模板                       | (data: any[], noData?: boolean) => JSX.Element | -             |
| threshold | 距离文档底部该距离时加载更多       | Number                                         | 100           |

<q-iframe name="infinite-scroll" />
