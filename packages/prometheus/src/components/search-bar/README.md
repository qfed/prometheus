# SearchBar <q-qrcode name='search-bar' />

搜索栏，一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

## 规则

- 应该在 placeholder 里提供提示文字，提醒用户输入相关内容，比如：搜索。
- 用户输入实时会触发更新
- 可以通过取消按钮让 searchbar 失去焦点
- 可以通过清除按钮清除输入内容
- 开启模糊搜索时会自动匹配与记忆用户每次输入内容,最多匹配五个

## 代码演示

<q-code>
```jsx
import SearchBar, { ISearchBarProps } from "../index";
import List from "../../list";
import Input from "../../input";
import Switch from "../../switch";
class Example extends React.Component {
  state = { value: "", disabled: false, maxLength: 15 };
  onCancel() {}

  onChange = value => {
    this.setState({ value });
  };

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] });
  };
  toggleProxy = (key: string) => {
    this.toggle(key);
  };
  render() {
    const { value, disabled, maxLength } = this.state;
    const props: ISearchBarProps = {
      value,
      disabled,
      placeholder: "搜索",
      maxLength,
      onCancel: this.onCancel,
      onChange: this.onChange
    };
    return (
      <div>
        <SearchBar {...props} />
        <h3>
          onChange:
          {this.state.value}
        </h3>
        <List header="参数控制">
          <List.Item
            extra={
              <div>
                <span>{disabled ? "已禁用" : "未禁用"}:</span>
                <Switch
                  onChange={this.toggleProxy.bind(this, "disabled")}
                  checked={disabled}
                />
              </div>
            }
          />
          <List.Item
            extra={
              <div>
                <span>maxLength:</span>
                <Input
                  type="number"
                  value={maxLength}
                  onChange={val => this.setState({ maxLength: val })}
                />
              </div>
            }
          />
          <List.Item
            extra={
              <div>
                <span>{!surportMemory ? "不" : ""}支持模糊匹配:</span>
                <Switch
                  onChange={this.toggleProxy.bind(this, "surportMemory")}
                  checked={surportMemory}
                />
              </div>
            }
          />
        </List>
      </div>
    );
  }
}
```
</q-code>

## API

| Option      | Description                  | Type                                       | Default Value |
| :---------- | :--------------------------- | :------------------------------------------- | :------------ |
| value       | 搜索框的当前值               | String                                       | -             |
| placeholder | placeholder                  | String                                       | -             |
| disabled    | 是否禁用                     | Boolean                                      | false         |
| maxLength   | 最多允许输入的字符个数       | Number                                       | -             |
| autoFocus   | 是否自动获得焦点              | Boolean                                      | false         |
| cancelText  | 取消聚焦文本                 | String                                     | '取消'        |
| onChange    | change 事件的回调            | (val: any,event: any) => void                | -             |
| onFocus     | focus 事件的回调             | () => void                                   | -             |
| onBlur      | blur 事件的回调              | (val) => void                                   | -             |
| onCancel    | 点击『取消』按钮时触发的回调 | () => void                                   | -             |
| type        | 搜索框类型                   | 'default'(默认类型) `|` 'list'(支持模糊匹配) | 'default'     |

<q-iframe name='search-bar' />
