import * as React from "react";
import * as ReactDOM from "react-dom";
import { autobind } from "core-decorators";
import PickerView from "../index";
import Button from "../../button";
import List from '../../list';
import Switch from '../../switch';
import Input from '../../input';
const { Picker } = PickerView;
const brandPrimary = '#fa6c41';
const date = [
  {
    label: '12月16日 周三',
    value: '1216'
  },
  {
    label: '12月17日 周四',
    value: '1217'
  },
  {
    label: '12月18日 周五',
    value: '1218'
  },
  {
    label: '12月19日 周六',
    value: '1219'
  },
  {
    label: '12月20日 周日',
    value: '1220'
  },
  {
    label: '12月21日 周一',
    value: '1221'
  }
]
const time = [
  {
    label: '09:00-11:00',
    value: '9-11'
  },
  {
    label: '12:00-14:00',
    value: '12-14'
  },
  {
    label: '14:00-16:00',
    value: '14-16'
  },
  {
    label: '16:00-18:00',
    value: '16-18'
  }
]
// const time = ['']
const year = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const day = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
const dataList = [
  [
    {
      value: 'spring',
      label: '春'
    },
    {
      value: 'summer',
      label: '夏'
    },
    {
      value: 'autumn',
      label: '秋'
    },
    {
      value: 'winter',
      label: '冬'
    }
  ],
  [
    {
      value: 'mei',
      label: '梅'
    },
    {
      value: 'lan',
      label: '兰'
    },
    {
      value: 'zhu',
      label: '竹'
    },
    {
      value: 'ju',
      label: '菊'
    }
  ],
]
@autobind
class DatePickerDemo extends React.Component<any, any> {
  state = {
    value1: ['1221', '12-14'],
    visible1: false,
    pickerValue1: ["-"],
    is3D1: false,
    noAnimate1: true,
    value2: ['summer', 'zhu'],
    visible2: false,
    pickerValue2: ["-"],
    is3D2: false,
    isAnimate2: true,
  };

  onChange = (key, value) => {
    console.log("onChange", value);
    this.setState({
      [`value${key}`]: value
    });
  };

  onScrollChange = value => {
    console.log("onScrollChange", value);
  };
  toggle = (key) => {
    this.setState({ [`visible${key}`]: !this.state[`visible${key}`] });
  };
  toggleProxy = (key) => {
    this.setState({
      [key]: !this.state[key]
    })
  }
  onConfirm = (key) => {
    this.setState({
      [`pickerValue${key}`]: this.state[`value${key}`]
    })
    this.toggle(key)
  }
  render() {
    const { visible1, pickerValue1, is3D1, noAnimate1,
      visible2, pickerValue2, is3D2, isAnimate2 } = this.state;
    const header1 = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px 10px',
          backgroundColor: '#F5F5F5',
          fontSize: 16
        }}
      >
        <div
          style={{
            color: '999999'
          }}
          onClick={this.toggle.bind(this, '1')}
        >取消</div>
        <div
          style={{
            color: brandPrimary
          }}
          onClick={this.onConfirm.bind(this, '1')}
        >确定</div>
      </div>
    )
    const header2 = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px 10px',
          backgroundColor: '#F5F5F5',
          fontSize: 16
        }}
      >
        <div
          style={{
            color: '999999'
          }}
          onClick={this.toggle.bind(this, '2')}
        >取消</div>
        <div
          style={{
            color: brandPrimary
          }}
          onClick={this.onConfirm.bind(this, '2')}
        >确定</div>
      </div>
    )
    return (
      <div>
        <Button onClick={this.toggle.bind(this, '1')}>2列picker（未封装）</Button>
        <div
          style={{ fontSize: 16, marginTop: 20 }}>
          当前选择值value：{pickerValue1.join(',')}
        </div>
        <PickerView
          visible={visible1}
          header={header1}
          onChange={this.onChange.bind(this, '1')}
          onScrollChange={this.onScrollChange}
          value={this.state.value1}
        >
          <Picker
            indicatorClassName="my-picker-indicator"
            is3D={is3D1}
            noAnimate={noAnimate1}
          >
            {date.map((item, index) => (
              <Picker.Item key={index} className="my-picker-view-item" value={item.value}>{item.label}</Picker.Item>
            ))}
          </Picker>
          <Picker
            indicatorClassName="my-picker-indicator"
            is3D={is3D1}
            noAnimate={noAnimate1}
          >
            {time.map((item, index) => (
              <Picker.Item key={index} className="my-picker-view-item" value={item.value}>{item.label}</Picker.Item>
            ))}
          </Picker>
        </PickerView>
        <List header='参数控制'>
          <List.Item
            extra={
              <Switch
                defaultChecked={is3D1}
                onChange={this.toggleProxy.bind(this, 'is3D1')}
              />
            }
          >
            是否有3D效果（is3D）
          </List.Item>
          <List.Item
            extra={
              <Switch
                defaultChecked={noAnimate1}
                onChange={this.toggleProxy.bind(this, 'noAnimate1')}
              />
            }
          >
            是否有动画效果（noAnimate）
          </List.Item>
        </List>
        <br />
        <Button onClick={this.toggle.bind(this, '2')}>3列picker（封装）</Button>
        <div
          style={{ fontSize: 16, marginTop: 20 }}>
          当前选择值value：{pickerValue2.join(',')}
        </div>
        <PickerView
          visible={visible2}
          header={header2}
          onChange={this.onChange.bind(this, '2')}
          onScrollChange={this.onScrollChange}
          value={this.state.value2}
          dataList={dataList}
          is3D={is3D2}
          isAnimate={isAnimate2}
        />
        <List header='参数控制'>
          <List.Item
            extra={
              <Switch
                defaultChecked={is3D2}
                onChange={this.toggleProxy.bind(this, 'is3D2')}
              />
            }
          >
            是否有3D效果（is3D）
          </List.Item>
          <List.Item
            extra={
              <Switch
                defaultChecked={isAnimate2}
                onChange={this.toggleProxy.bind(this, 'isAnimate2')}
              />
            }
          >
            是否有动画效果（isAnimate）
          </List.Item>
        </List>
      </div>
    );
  }
}
ReactDOM.render(<DatePickerDemo />, document.getElementById("root"));
