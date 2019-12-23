import * as React from 'react'
import * as ReactDOM from 'react-dom'
import SpecialPage from '../index'

export default class ErrorPage extends React.Component {
  state = {}

  render() {
    const icon = (
      <img
        className="q-page__wrap__img"
        src='http://img002.qufenqi.com/products/d2/cf/d2cf5bb206a138affc4ad9faca22180d.png'
      />
    )
    return (
      <div>
        <SpecialPage
          icon={icon}
          title='找不到网络'
        />
      </div>
    )
  }
}
