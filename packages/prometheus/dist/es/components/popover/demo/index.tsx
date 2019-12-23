import React from 'react'
import ReactDOM from 'react-dom'
import Popover, { IPopoverProps } from '../index'
import Button from '../../button'
import Checkbox from '../../checkbox'
import Input from '../../input'
import Radio from '../../radio'
import Slider from '../../slider'
import './style.scss'
const btnRef = React.createRef() as any

const demoItem = title => (
  <div
    style={{
      display: 'flex',
      alignContent: 'center',
    }}
  >
    <div
      style={{
        width: 20,
        height: 20,
        backgroundColor: '#4071FF',
        marginRight: 10,
      }}
    />
    {title}
  </div>
)
class Example extends React.Component<any, any> {
  topCenter: any = {}
  topRightWithCheckbox: any = {}
  topCenterSlider: any = {}
  constructor(props) {
    super(props)
    this.topCenter = React.createRef()
    this.topCenterSlider = React.createRef()
    this.topRightWithCheckbox = React.createRef()
    this.state = {
      value: '',
      visible: false,
      maxWidth: 0,
      data: [
        {
          label: demoItem('功能菜单1'),
          checked: false,
          disabled: false,
        },
        {
          label: demoItem('功能菜单2'),
          checked: false,
          disabled: true,
        },
        {
          label: demoItem('功能菜单3'),
          checked: true,
          disabled: false,
        },
      ],
      radioData: [
        {
          label: '功能菜单1',
          name: 'like',
          value: 0,
        },
        {
          label: '功能菜单2',
          name: 'like',
          value: 1,
        },
        {
          label: '功能菜单3',
          name: 'like',
          value: 2,
          checked: true,
        },
      ],
      popProps: [
        {
          target: btnRef,
          left: 0,
          top: 80,
          arrowPosition: 'topCenter',
          className: 'topCenter',
          ref: this.topCenter,
          type: 'normal',
        },
        {
          target: btnRef,
          left: 0,
          top: 150,
          arrowPosition: 'topRight',
          className: 'topRight',
          ref: this.topRightWithCheckbox,
          type: 'checkbox',
          autoClose: false,
        },
        {
          target: btnRef,
          left: 0,
          top: 220,
          arrowPosition: 'topRight',
          className: 'topRight',
          ref: this.topCenterSlider,
          type: 'normal',
          autoClose: false,
          animationType: 'slide',
          slideDirection: 'down',
        },
      ],
    }
  }

  componentDidMount() {
    console.log('wl', btnRef, btnRef.current, btnRef.current.clientWidth)
    this.setState({ maxWidth: btnRef.current.clientWidth })
  }

  renderPopoverChild(type) {
    if (type === 'normal') {
      return [
        <div
          key={1}
          className='popover__child popover__child--normal'
          onClick={() => alert(111)}
        >
          功能菜单1
        </div>,
        <div key={2} className='popover__child popover__child--normal'>
          功能菜单2
        </div>,
        <div key={3} className='popover__child popover__child--normal'>
          功能菜单3
        </div>,
      ]
    }

    if (type === 'checkbox') {
      return this.state.data.map((item, index) => {
        return (
          <Checkbox
            key={`${index}-${item.checked}`}
            {...item}
            onChange={this.onChange(index)}
            direction={Checkbox.directionType.LEFT}
          />
        )
      })
    }
  }

  onChange = index => () => {
    this.setState(state => ({
      data: state.data.map((item, i) => ({
        ...item,
        checked: index === i ? !item.checked : item.checked,
      })),
    }))
  }

  inputHandler(text) {
    const { popProps } = this.state
    const newPopProps = popProps.map((item, index) => {
      return { ...item, left: Number(text) }
    })

    this.setState({
      popProps: newPopProps,
    })
  }

  render() {
    const { visible } = this.state
    return (
      <div style={{ backgroundColor: '#ccc', height: '80vh' }}>
        <div ref={btnRef as any}>
          {/* <Input
            onChange={text => this.inputHandler(text)}
            value={this.state.value}
            label={'left值'}
            type={'number'}
            placeholder={'请输入第一个popover的left值'}
          /> */}
          <Slider
            value={this.state.value}
            max={this.state.maxWidth}
            style={{ padding: '20px' }}
            onChange={value => this.inputHandler(value)}
          />
          <Button onClick={e => this.topCenter.current.show()}>
            点击展示居中普通popover
          </Button>
          <Button
            style={{ marginTop: '22px' }}
            onClick={e => this.topRightWithCheckbox.current.show()}
          >
            点击展示 popoverWithCheckbox
          </Button>
          <Button
            style={{ marginTop: '22px' }}
            onClick={e => this.topCenterSlider.current.show()}
          >
            点击展示 slide动画popover
          </Button>
        </div>
        {this.state.popProps.map((props, index) => (
          <Popover key={`item${index}`} {...props}>
            {this.renderPopoverChild(props.type)}
          </Popover>
        ))}
      </div>
    )
  }
}
ReactDOM.render(<Example />, document.getElementById('root'))
