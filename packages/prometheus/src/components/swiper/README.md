# Swiper <q-qrcode name='swiper' />

移动端swiper组件，用于滑动轮播展示。支持黑白两种风格轮播点，可设置是否自动轮播、自动轮播时间间隔。

## 代码演示

<q-code>
```jsx
import Swiper from '../index'
const { SwiperItem } = Swiper
class SwiperDemo extends React.Component {
  state = {}

  render () {
    const itemStyle: React.CSSProperties = {
      textAlign: 'center',
      background: 'gray',
      color: 'red',
      fontSize: 50,
      height: '100%'
    }
    return (
      <div>
        <Swiper width={300} height={200} isAutoPlay={true}>
          <SwiperItem>
            <div style={{...itemStyle,...{background:'yellow'}}}>1</div>
          </SwiperItem>
          <SwiperItem>
            <div  style={{...itemStyle,...{background:'gray'}}}>2</div>
          </SwiperItem>
          <SwiperItem>
            <div  style={{...itemStyle,...{background:'green'}}}>3</div>
          </SwiperItem>
          <SwiperItem>
            <div style={{...itemStyle,...{background:'blue'}}}>4</div>
          </SwiperItem>
        </Swiper>
      </div>
    )
  }
}
```
</q-code>

## API

| Option         | Description  |  Type | Default Value |
| :------------- | :----------- | :------ | :------------ |
| style          | swiper 样式 | Object  | {}            |
| width          | swiper 宽度  | Number  | 200           |
| height         | swiper 高度  | Number  | -             |
| isAutoPlay     | 是否自动播放 | Boolean | false         |
| autoPlayDuring | 自动播放间隔 | Number  | 2000          |

<q-iframe name="swiper"  />