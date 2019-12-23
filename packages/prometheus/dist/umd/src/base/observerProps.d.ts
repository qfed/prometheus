/**
 * 同步同名 props 到 state 中
 * @param  {string[]} props 需要监听并同步到state中的属性
 * @example
 * static getDerivedStateFromProps = observerProps(['selectedIndex', 'tabs'])
 */
declare const observerProps: (props: string[]) => (nextProps: any, prevState: any) => any;
/**
 * 监听属性装饰器,当属性变化时会同步到state 中同名属性
 * @param {string[]} props 需要监听的属性集合
 * @example
 * import { observer } from 'base/observerProps'
 * @observer(['value'])
 * export default class Input extends React.Component<IInputProps, any> {
 */
export declare function observer(props: string[]): (target: any) => void;
export default observerProps;
