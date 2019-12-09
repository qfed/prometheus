import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IPasswordProps extends IBaseProps {
    className?: string;
    style?: object;
    length?: number;
    onChange?: (val: string) => void;
    submit?: (val: string) => void;
    onClick?: (val: string) => void;
}
/**
 * Password
 * @prop {string} className Password的类名
 * @prop {object} style 定义Password样式
 * @prop {object} length Password的长度
 * @prop {function} onClick 点击Password时触发的回调
 * @prop {function} onChange 密码内容变化时触发的回调
 * @prop {function} submit 点击回车键提交时触发的回调
 * @example
 * import Password, { IPasswordProps } from 'q-react'
 *    let props:IPasswordProps ={ name:'ts-Password' }
 *    <Password {...props} />
 */
export default class Password extends BaseComponent<IPasswordProps, any> {
    static defaultProps: {
        length: number;
        onChange(): void;
        submit(): void;
        onClick(): void;
    };
    seed: number;
    constructor(props: any);
    onInputChange: (event: any) => void;
    onInputKeyDown: (event: any) => void;
    onClick: (event: any) => void;
    readonly cells: JSX.Element[];
    render(): JSX.Element;
}
