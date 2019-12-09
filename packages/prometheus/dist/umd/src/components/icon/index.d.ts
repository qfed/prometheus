import '../../base';
import BaseComponent from '../../base/baseComponent';
import './iconfont.js';
import IBaseProps from '../../base/baseProps';
import { iconType } from './iconType';
export interface IIconProps extends IBaseProps {
    type: iconType;
    onClick?: (e: any) => any;
}
/**
 * Icon
 * @prop {string} className Icon的类名
 * @prop {boolean} disabled 禁用
 * @prop {} height desc
 * @example
 * import Icon, { IIconProps } from 'q-react'
 *    let props:IIconProps ={ name:'ts-Icon' }
 *    <Icon {...props} />
 */
export default class Icon extends BaseComponent<IIconProps, any> {
    static defaultProps: {
        disabled: boolean;
        style: {};
        type: string;
    };
    readonly type: string;
    render(): JSX.Element;
}
