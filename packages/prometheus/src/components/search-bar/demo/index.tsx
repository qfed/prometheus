import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar, { ISearchBarProps } from '../index'
import List from '../../list'
import Input from '../../input'
import Switch from '../../switch'
class Example extends React.Component {
  state = { value: '', disabled: false, maxLength: 15, surportMemory: false }
  onCancel() {}

  onChange = value => {
    this.setState({ value })
  }

  toggle = (key: string) => {
    this.setState({ [key]: !this.state[key] })
  }
  toggleProxy = (key: string) => {
    this.toggle(key)
  }
  render() {
    const { value, disabled, maxLength, surportMemory } = this.state
    const props: ISearchBarProps = {
      value,
      disabled,
      placeholder: '搜索',
      maxLength,
      onCancel: this.onCancel,
      onChange: this.onChange,
      type: surportMemory ? 'list' : 'default',
      autoFocus: true
    }
    return (
      <div>
        <SearchBar {...props} />

        <h3>
          onChange:
          {this.state.value}
        </h3>
        <List header='参数控制'>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'disabled')}
                defaultChecked={disabled}
              />
            }
          >
            <span>{disabled ? '已禁用' : '未禁用'}</span>
          </List.Item>
          <List.Item
            extra={
              <Input
                type='number'
                value={maxLength}
                onChange={val => this.setState({ maxLength: val })}
              />
            }
          >
            <span>maxLength</span>
          </List.Item>
          <List.Item
            extra={
              <Switch
                onChange={this.toggleProxy.bind(this, 'surportMemory')}
                defaultChecked={surportMemory}
              />
            }
          >
            <span>{!surportMemory ? '不' : ''}支持模糊匹配</span>
          </List.Item>
        </List>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))
