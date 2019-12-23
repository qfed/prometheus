import React, { Fragment } from 'react'
import * as ReactDOM from 'react-dom'
import CheckboxGroup, { ICheckboxGroupProps } from '../index'
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
    }} />
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

  onChange(dataSource: any[]) {

    console.log(`data= `, dataSource);
  }

  render() {
    const { data1, data2, data3, data4 } = this.state

    return (
      <Fragment>
        <List header=" ">
          <CheckboxGroup
            name='example1'
            list={data1}
            defaultValue={[1, 2]}
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
