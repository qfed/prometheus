import * as React from "react";
import * as ReactDOM from "react-dom";
import Switch, { ISwitchProps } from "../index";
import List from "../../list";
import log from "../../../base/log";
import { autobind } from "core-decorators";
@autobind
class Example extends React.Component {
  state = {
    checked: false
  };
  @log
  onChangeContrl(checked) {
    this.setState({checked})
  }
  @log
  onChange(checked) {
    // this.setState({checked})
  }
  render() {
    const {checked} = this.state

    return (
      <List>
        <List.Item extra={<Switch onChange={this.onChange} />}>
          默认颜色
        </List.Item>
        <List.Item
          extra={
            <Switch onChange={this.onChange} defaultChecked={true} disabled={true} />
          }
        >
          默认颜色禁止状态
        </List.Item>
        <List.Item
          extra={
            <Switch onChange={this.onChange} activeColor="#f4333c" defaultChecked={true} />
          }
        >
          自定义颜色
        </List.Item>

        <List.Item
          extra={
            <Switch
              onChange={this.onChange}
              activeColor="#f4333c"
              defaultChecked={true}
              disabled={true}
            />
          }
        >
          自定义色禁止状态
        </List.Item>

        <List.Item
          extra={
            <Switch
              onChange={this.onChangeContrl}
              activeColor="#f4333c"
              defaultChecked={true}
              checked={this.state.checked}
            />
          }
        >
          受控状态
        </List.Item>
      </List>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
