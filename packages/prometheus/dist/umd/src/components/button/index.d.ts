import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IButtonProps extends IBaseProps {
    disabled?: boolean;
    loading?: boolean;
    loadingType?: 'default' | 'circle';
    type?: 'default' | 'primary' | 'danger' | 'operate';
    size?: 'medium' | 'small' | 'mini';
    shape?: 'pill';
    mainText?: string;
    subText?: string;
    icon?: JSX.Element;
    onClick?: (event: any) => void | {};
}
/**
 * Button
 * @prop {string} className Button的类名
 * @prop {object} style 定义Button样式
 * @prop {boolean} disabled 是否禁用
 * @prop {object} type Button的类型
 * @prop {function} onClick 点击Button时触发的回调
 * @example
 * import Button, { IButtonProps } from 'q-react'
 *    let props:IButtonProps ={ name:'ts-button' }
 *    <Button {...props} />
 */
export default class Button extends BaseComponent<IButtonProps, any> {
    static defaultProps: {
        disabled: boolean;
        loading: boolean;
        loadingType: string;
        style: {};
        type: string;
        onClick(): void;
    };
    state: {
        disabled: boolean;
    };
    readonly classNames: string;
    private onClick;
    loadingRenderFunction(): JSX.Element;
    render(): JSX.Element;
}
