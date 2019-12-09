# Switch <q-qrcode name='switch' />

滑动开关，支持设置开关颜色、开关状态、是否禁用及其change回调事件。

## 代码演示

<q-code>
```jsx
import Switch, { ISwitchProps } from "../index";
import List from "../../list";
import "./style.scss";
import log from "base/log";
import { autobind } from "core-decorators";
@autobind
class Example extends React.Component {
  state = {};
  @log
  onChange() {}

  render() {
    const props: ISwitchProps = {
      checked: true,
      onChange: this.onChange
    };
    return (
      <List>
        <List.Item extra={<Switch onChange={this.onChange} checked={true} />}>
          默认颜色
        </List.Item>
        <List.Item
          extra={
            <Switch onChange={this.onChange} checked={true} disabled={true} />
          }
        >
          默认颜色禁止状态
        </List.Item>
        <List.Item
          extra={
            <Switch onChange={this.onChange} activeColor="#f4333c" checked={true} />
          }
        >
          自定义色禁止状态
        </List.Item>

        <List.Item
          extra={
            <Switch
              onChange={this.onChange}
              activeColor="#f4333c"
              checked={true}
              disabled={true}
            />
          }
        >
          自定义色禁止状态
        </List.Item>
      </List>
    );
  }
}
```
</q-code>

## API

| Option    | Description  | Type                 | Default Value |
| :-------- | :----------- | :--------------------- | :------------ |
| className | switch 类名  | String                 | -             |
| style     | switch 样式  | CSSProperties          | {}            |
| defaultChecked   | 初始开关状态  | Boolean          |   false         |
| checked   | 开关状态     | Boolean `|` undefined                | undefined         |
| disabled  | 是否禁用     | Boolean                | false         |
| activeColor     | 开关颜色     | String                 | -             |
| onChange  | 改变开关状态 | (event: any) => void{} | -             |

<q-iframe  name='switch' />
