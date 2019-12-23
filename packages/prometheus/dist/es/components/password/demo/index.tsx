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

ReactDOM.render(<PasswordDemo />, document.getElementById("root"));
