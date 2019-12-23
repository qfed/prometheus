// import createDebug from 'base/createDebug'
// const debug = createDebug('qr:observerProps')
/**
 * 同步同名 props 到 state 中
 * @param  {string[]} props 需要监听并同步到state中的属性
 * @example
 * static getDerivedStateFromProps = observerProps(['selectedIndex', 'tabs'])
 */
const observerProps = (props: string[]) => (nextProps: any, prevState: any) => {
  const { prevProps = {} } = prevState
  const isChange = props.some(key => {
    return nextProps[key] !== prevProps[key]
  })

  if (isChange) {
    // 删除非监控的属性
    const nextState = { ...nextProps }
    for (const key in nextState) {
      if (props.indexOf(key) < 0) {
        delete nextState[key]
      }
    }
    // console.log('nextState', nextState)
    // debug('nextState', nextState)
    return { ...nextState, prevProps: nextState }
  }

  return null
}
/**
 * 监听属性装饰器,当属性变化时会同步到state 中同名属性
 * @param {string[]} props 需要监听的属性集合
 * @example
 * import { observer } from 'base/observerProps'
 * @observer(['value'])
 * export default class Input extends React.Component<IInputProps, any> {
 */

export function observer(props: string[]) {
  return (target: any) => {
    target.getDerivedStateFromProps = observerProps(props)
  }
}
export default observerProps
