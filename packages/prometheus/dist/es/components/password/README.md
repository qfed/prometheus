# Password <q-qrcode name='password' />

密码输入框，支持自定义密码长度，设置输入、提交、点击时回调事件。

## 代码演示

<q-code>
```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import Password from "../index";

class PasswordDemo extends React.Component {
  state = { value: "", submitValue: "" };
  onChange = value => {
    console.log(value, 888888);
    this.setState({ value });
  };
  submit = val => {
    this.setState({ submitValue: val });
  };
  onClick = e => {
    console.log(e, 77777);
  };
  render() {
    const { value, submitValue } = this.state;
    return (
      <div>
        <div style={{ padding: "0 10px" }}>
          <Password
            onChange={this.onChange}
            submit={this.submit}
            onClick={this.onClick}
          />
        </div>
        <div style={{ padding: 10 }}>input: {value}</div>
        <div style={{ padding: 10 }}>submit: {submitValue}</div>
      </div>
    );
  }
}
```
</q-code>

## API

| Option    | Description            |  Type                     | Default Value |
| :-------- | :--------------------- | :-------------------------- | :------------ |
| style     |  password样式         | Object                      | {}            |
| className | password的类名         | String                      | -             |
| length    | 密码位数               | Number                      | 6             |
| onChange  | 输入框密码时的回调     | (value: any) => void `|` {} | -             |
| submit    | 按下回车键提交时的回调 | (value: any) => void `|` {} | -             |
| onClick   | 点击密码时的回调       | (e: any) => void `|` {}     | -             |

<q-iframe name="password"  />
