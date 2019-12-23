import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Steps, { IStepsProps } from '../index'
import { IStepProps } from '../step'
import Icon from '../../icon'
const { Step } = Steps
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
const step5Props: IStepProps = {
  type: 'column',
  status: true,
  title: '这是第一步',
  isFirst: true,
  tipIcon: (
    <Icon type='selectDownRadio' style={iconStyle} />
  ),
  idx: '1'
}
const step6Props: IStepProps = {
  type: 'column',
  status: true,
  title: '这是第二步',
  idx: '2',
  tip: (
    <span style={tipStyle}>提示语</span>
  )
}
const step7Props: IStepProps = {
  type: 'column',
  status: false,
  title: '这是第三步',
  tipIcon: (
    <Icon type='selectDownRadio' style={iconStyle} />
  ),
  idx: '3'
}
const step8Props: IStepProps = {
  type: 'column',
  status: false,
  title: '这是第四步',
  isLast: true,
  tip: (
    <span style={tipStyle}>提示语</span>
  ),
  idx: '4'
}
export default class ColumnNum extends React.Component {
  state = {}
  render() {
    return (
      <Steps type='column' style={{padding: '0 10px'}}>
        <Step {...step5Props} />
        <Step {...step6Props} />
        <Step {...step7Props} />
        <Step {...step8Props} />
      </Steps>
    )
  }
}
