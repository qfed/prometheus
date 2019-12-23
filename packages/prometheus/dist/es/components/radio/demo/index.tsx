import React from 'react'
import ReactDOM from 'react-dom'
import RadioGroup, { IRadioGroupProps } from '../index'
import List from '../../list'
import Switch from '../../switch/index'
import Icon from "../../icon/index";
import "./index.scss";

class Example extends React.Component {
  state = {
    disabledTotal: false,
    data1: [
      {
        label1: '水果',
        value: 0,
      },
      {
        label1: '蔬菜',
        value: 1,
      },
      {
        label1: '冰激凌',
        value: 2,
      }
    ],
    data2: [
      {
        label: '大王',
        value2: 0,
      },
      {
        label: '小王',
        value2: 1,
      },
      {
        label: 'A',
        value2: 2,
      }
    ],
    icon2: (<Icon type="success" />),
    thumb: (<span className="demo-icon"></span>)
  }

  onChange = (dataSource) => {
    console.log(`选中的数据为: `, dataSource);
  }

  render() {
    const { data1, data2, icon2, disabledTotal, thumb } = this.state

    return (
      <div style={{ backgroundColor: '#f9f9f9' }}>
        <List header="1. 单项选择">
          <RadioGroup
            list={data1}
            labelKey={'label1'}
            name='like'
            value={1}
            disabled={disabledTotal}
            onChange={(pickedInfo) => { this.onChange(pickedInfo) }}
          />
        </List>
        <List header="2. 带左侧图标的单项选择">
          <RadioGroup
            list={data2}
            name='poker'
            icon={icon2}
            thumb={thumb}
            disabled={disabledTotal}
            onChange={(pickedInfo) => { this.onChange(pickedInfo) }}
            value={2}
            valueKey={'value2'}
          />
        </List>
        <List header="参数控制">
          <List.Item
            extra={
              <Switch
                defaultChecked={disabledTotal}
                onChange={() => { this.setState({ disabledTotal: !this.state.disabledTotal }) }}
              />
            }
          >
            disabled
          </List.Item>
        </List>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
