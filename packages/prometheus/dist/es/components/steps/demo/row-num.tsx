import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Steps, { IStepsProps } from '../index'
import { IStepProps } from '../step'
import Icon from '../../icon'
const { Step } = Steps
const step9Props: IStepProps = {
  type: 'row',
  status: true,
  title: '第一步',
  isFirst: true,
  idx: '1'
}
const step10Props: IStepProps = {
  type: 'row',
  status: true,
  title: '第二步',
  idx: '2'
}
const step11Props: IStepProps = {
  type: 'row',
  status: true,
  title: '第三步',
  idx: '3'
}
const step12Props: IStepProps = {
  type: 'row',
  status: false,
  title: '第四步',
  isLast: true,
  idx: '4'
}
export default class RowNum extends React.Component {
  state = {}
  render() {
    return (
      <Steps type='row'>
        <Step {...step9Props} />
        <Step {...step10Props} />
        <Step {...step11Props} />
        <Step {...step12Props} />
      </Steps>
    )
  }
}
