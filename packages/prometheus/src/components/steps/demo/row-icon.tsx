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
const step1Props: IStepProps = {
  type: 'row',
  status: true,
  title: '第一步',
  isFirst: true,
  icon: (
    <Icon type='success' style={hdIconStyle} />
  )
}
const step2Props: IStepProps = {
  type: 'row',
  status: true,
  title: '第二步',
}
const step3Props: IStepProps = {
  type: 'row',
  status: true,
  title: '第三步',
}
const step4Props: IStepProps = {
  type: 'row',
  status: false,
  title: '第四步',
  isLast: true
}
export default class RowIcon extends React.Component {
  state = {}
  render() {
    return (
      <Steps type='row'>
        <Step {...step1Props} />
        <Step {...step2Props} />
        <Step {...step3Props} />
        <Step {...step4Props} />
      </Steps>
    )
  }
}
