import * as React from 'react'
import * as ReactDOM from 'react-dom'
import SpecialPage from '../index'
import Icon from '../../icon'

export default class ResultPage extends React.Component {
  state = {}

  render() {
    const icon = (
      <Icon className='pro-page__wrap__img' type='success' />
    )
    return (
      <div>
        <SpecialPage
          icon={icon}
          isResult
          title='操作成功'
          subTitle='内容详情可折行，建议不超过两行'
          cancelText='重置'
          confirmText='确定'
        />
      </div>
    )
  }
}
