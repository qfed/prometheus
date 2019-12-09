# Tag <q-qrcode name='tag' />

进行标记和分类的标签，用于标记事物的属性和维度。有默认、可关闭、不可选、推荐模式等多种类型标签，支持自定义标签颜色。

## 代码演示

<q-code>
```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import Tag, { ITagProps } from "../index";
import TagGroup from "../tag-group";

class Example extends React.Component {
  onClose = (e: any) => {
    console.log(e);
  };
  handleChange = e => {
    console.log(e, "~~~~~~~~~");
  };
  render() {
    return (
      <div>
        <TagGroup>
          <Tag style={{ margin: "0 0 10px 10px" }}>默认标签</Tag>
          <Tag
            style={{ margin: "0 0 10px 10px" }}
            selected
            onChange={this.handleChange}
          >
            默认选中标签
          </Tag>
          <Tag
            style={{ margin: "0 0 10px 10px" }}
            selected
            activeColor="#62C0A0"
          >
            自定义选中颜色标签
          </Tag>
          <Tag
            style={{ margin: "0 0 10px 10px" }}
            disabled
            onChange={this.handleChange}
          >
            不可用标签
          </Tag>
          <Tag
            style={{ margin: "0 0 10px 10px" }}
            closable
            onClose={this.onClose}
          >
            可移除标签
          </Tag>
          <Tag
            style={{ margin: "0 0 10px 10px" }}
            type="recommend"
            onClose={this.onClose}
          >
            推荐模式标签
          </Tag>
        </TagGroup>
      </div>
    );
  }
}
```
</q-code>

## API

| Option      | Description               |  Type     | Default Value |
| :---------- | :------------------------ | :---------- | :------------ |
| activeColor | 标签选中颜色              | String      | -             |
| className   | 标签类名                  | String      | -             |
| style       | 标签样式                  | Object      | {}            |
| closable    | 标签是否可以关闭          | Boolean     | false         |
| selected    | 是否默认选中              | Boolean     | false         |
| disabled    | 是否不可用                | Boolean     | false         |
| type        | 标签模式 ('recommend'/'normal') | String      | 'normal'            |
| onClose     | 关闭时的回调              | (e) => void | -             |
| onClick    | click 事件触发的回调函数 | (e) => void | -             |

<q-iframe  name='tag' />
