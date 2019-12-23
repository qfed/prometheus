import * as React from "react";
import * as ReactDOM from "react-dom";
import Tag, { ITagProps } from "../index";
import TagGroup from '../tag-group'

class Example extends React.Component {
  onClose = (e: any) => {
    console.log(e);
  };
  handleClick = (e) => {
    console.log(e, '~~~~~~~~~')
  }
  render() {
    return (
      <div>
        <TagGroup>
          <Tag style={{ margin: '0 0 10px 10px' }}>默认标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            selected
            onClick={this.handleClick}>默认选中标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            selected
            activeColor="#62C0A0">自定义选中颜色标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            disabled
            onClick={this.handleClick}>不可用标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            closable
            onClose={this.onClose}>可移除标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            type='recommend'
            onClose={this.onClose}>推荐模式标签</Tag>
          <Tag style={{ margin: '0 0 10px 10px' }}>默认标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            selected
            onClick={this.handleClick}>默认选中标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            selected
            activeColor="#62C0A0">自定义选中颜色标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            disabled
            onClick={this.handleClick}>不可用标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            closable
            onClose={this.onClose}>可移除标签</Tag>
          <Tag
            style={{ margin: '0 0 10px 10px' }}
            type='recommend'
            onClose={this.onClose}>推荐模式标签</Tag>
        </TagGroup>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
