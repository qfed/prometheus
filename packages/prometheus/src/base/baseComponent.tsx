import React from 'react'

export default class BaseComponent<P, S> extends React.Component<P, S> {
  get classPrefix() {
    return 'pro-'
  }
}
