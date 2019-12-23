
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Steps, { IStepsProps } from '../index'
import { IStepProps } from '../step'
import Icon from '../../icon'
const { Step } = Steps
const hdIconStyle: React.CSSProperties = {
  color: '#4071ff',
  fontSize: '23px',
  lineHeight: '23px'
}
const iconStyle: React.CSSProperties = {
  fontSize: '18px',
  color: '#4071ff',
  lineHeight: '45px',
  textAlign: 'center',
  width: '38px'
}
const tipStyle: React.CSSProperties = {
  fontSize: '12px',
  lineHeight: '45px',
  width: '38px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}
const step13Props: IStepProps = {
  type: 'column',
  status: true,
  title: '这是第一步',
  isFirst: true,
  tipIcon: (
    <Icon type='selectDownRadio' style={iconStyle} />
  ),
  icon: (
    <Icon type='success' style={hdIconStyle} />
  )
}
const step14Props: IStepProps = {
  type: 'column',
  status: true,
  title: '这是第二步',
  tip: (
    <span style={tipStyle}>提示语</span>
  ),
  icon: (
    <Icon type='success' style={hdIconStyle} />
  )
}
const step15Props: IStepProps = {
  type: 'column',
  status: false,
  title: '这是第三步',
  tipIcon: (
    <Icon type='selectDownRadio' style={iconStyle} />
  ),
  icon: (
    <Icon type='success' style={hdIconStyle} />
  )
}
const step16Props: IStepProps = {
  type: 'column',
  status: false,
  title: '这是第四步',
  isLast: true,
  tip: (
    <span style={tipStyle}>提示语</span>
  ),
  icon: (
    <Icon type='success' style={hdIconStyle} />
  )
}
export default class ColumnIcon extends React.Component {
  state = {}
  render() {
    return (
      <Steps type='column' style={{padding: '0 10px'}}>
        <Step {...step13Props} />
        <Step {...step14Props} />
        <Step {...step15Props} />
        <Step {...step16Props} />
      </Steps>
    )
  }
}
