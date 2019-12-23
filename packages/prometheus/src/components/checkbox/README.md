# Checkbox <q-qrcode name='checkbox' />

多选框组，主要用于一组可选项，可多选。可设置选项是否带icon，设置多选框和icon的位置。

## 代码演示

<q-code>
```jsx
import React, {Fragment} from 'react'
import * as ReactDOM from 'react-dom'
import CheckboxGroup, { ICheckboxGroupProps, IPickedGroupInfo } from '../index'
import List from '../../list'

const demoItem = (title) => (
  <div style={{
    display: 'flex',
    alignContent: 'center'
  }}>
    <div style={{
      width: 20,
      height: 20,
      backgroundColor: '#4071FF',
      marginRight: 10
    }}/>
    {title}
  </div>
)

class Example extends React.Component {
  state = {
    data1: [
      {
        label: '多选居左1',
        value: 1,
        checked: false,
        direction: CheckboxGroup.directionType.LEFT,
        disabled: false
      },
      {
        label: '多选居左2',
        value: 2,
        checked: true,
        direction: CheckboxGroup.directionType.LEFT,
        disabled: false
      },
      {
        label: '多选居左3',
        value: 3,
        checked: true,
        direction: CheckboxGroup.directionType.LEFT,
        disabled: false
      },
    ],
    data2: [
      {
        label: '多选居右1',
        value: 1,
        disabled: false
      },
      {
        label: '多选居右2',
        value: 2,
        disabled: false
      },
      {
        label: '多选居右3',
        value: 3,
        disabled: false
      },
    ],
    data3: [
      {
        label: demoItem('多项选择居左1'),
        value: 1,
        checked: true,
        direction: CheckboxGroup.directionType.LEFT,
        disabled: false
      },
      {
        label: demoItem('多项选择居左2'),
        value: 2,
        direction: CheckboxGroup.directionType.LEFT,
        disabled: false
      },
      {
        label: demoItem('多项选择居左3'),
        value: 3,
        checked: true,
        direction: CheckboxGroup.directionType.LEFT,
        disabled: false
      },
    ],
    data4: [
      {
        label: demoItem('多项选择居右1'),
        value: 1,
        checked: true,
        disabled: false
      },
      {
        label: demoItem('多项选择居右2'),
        value: 2,
        checked: true,
        disabled: false
      },
      {
        label: demoItem('多项选择居右3'),
        value: 3,
        disabled: false
      },
    ],
  }

  onChange(pickedInfo: IPickedGroupInfo) {
    
    console.log(`name=${pickedInfo.name}, data=${pickedInfo.list}`);
  }

  render() {
    const { data1, data2, data3, data4 } = this.state

    return (
      <Fragment>
        <List header=" ">
          <CheckboxGroup 
            name='example1'
            list={data1}
            defaultValue={[1,2]}
            onChange={(pickedInfo) => this.onChange(pickedInfo)}
          />
        </List>
        <List header=" ">
          <CheckboxGroup 
            name='example2'
            list={data2}
            defaultValue={[1]}
            onChange={(pickedInfo) => this.onChange(pickedInfo)}
          />
        </List>
        <List header=" ">
          <CheckboxGroup 
            name='example3'
            list={data3}
            defaultValue={[1]}
            onChange={(pickedInfo) => this.onChange(pickedInfo)}
          />
        </List>
        <List header=" ">
          <CheckboxGroup 
            name='example4'
            list={data4}
            defaultValue={[2]}
            onChange={(pickedInfo) => this.onChange(pickedInfo)}
          />
        </List>
      </Fragment>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
```
</q-code>

## CheckboxGroup API

| Option   | Description      |  Type                                   | Default Value | 必传|
| :------- | :--------------- | :---------------------------------------- | :------------ |:---:|
| **name**     | 当前checkboxGroup的共属name | string                                   | ''         |是|
| **list**    | 数据列表       |     Array                  |       ''        |是|
| **onChange**    | 数据改变的回调函数       | (Array: 选中的数据源数组) => void                        |       -       |是|
| labelKey    | checkboxGroup数据源list里每一项中用作label的键值       | string                        |       'label'        |否|
| valueKey    | checkboxGroup数据源list里每一项中用作value的键值       | string                        |       'value'       |否|
| defaultValue    | 列表里默认选中项的value值组成的数组      | Array                        |       []        |否|
| disabled   | 是否禁用       | boolean                       |       false        |否|
| direction    | 选中的icon位置       |      CheckboxGroup.DIRECTION                 |     CheckboxGroup.DIRECTION.RIGHT         |否|

## CheckboxItem API

| Option   | Description      |  Type                                   | Default Value | 必传|
| :------- | :--------------- | :---------------------------------------- | :------------ |:---:|
| **name**     | 当前checkbox的共属name | string                                   | ''         |是|
| **value**    | 当前项的值       | string \| number                         |       ''        |是|
| **label**    | 当前项的label元素       | string \| JSX.Element                        |       ''        |是|
| **onChange** | change回调函数   | (value) => void |     -          | 是|
| checked  | 指定当前是否选中 | boolean                                   | false         |否|
| direction    | 选中的icon位置       |      CheckboxGroup.DIRECTION               |     CheckboxGroup.DIRECTION.RIGHT         |否|
| disabled | 是否禁用         | boolean                                   | false         |否|


## 使用注意事项
* 其中`direction`、 `disabled`、 `defaultValue`属性值的优先级是 CheckboxItem > CheckboxGroup， 优先取CheckboxItem的配置

<q-iframe name="checkbox" />