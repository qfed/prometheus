import '../../base';
import IBaseProps from '../../base/baseProps';
import './style.scss';
import BaseComponent from '../../base/baseComponent';
export interface ISpecialPageProps extends IBaseProps {
    className?: string;
    style?: object;
    isResult?: boolean;
    icon?: JSX.Element;
    title?: string;
    subTitle?: string;
    cancelText?: string;
    confirmText?: string;
    footer?: JSX.Element;
    onCancel?: (val?: any) => void;
    onConfirm?: (val?: any) => void;
}
/**
 * SpecialPage
 * @prop {string} className SpecialPage的类名
 * @prop {object} style 定义SpecialPage样式
 * @example
 * import SpecialPage, { ISpecialPageProps } from 'q-react'
 *    let props:ISpecialPageProps ={ name:'ts-SpecialPage' }
 *    <SpecialPage {...props} />
 */
export default class SpecialPage extends BaseComponent<ISpecialPageProps, any> {
    static defaultProps: {
        style: {};
        isResult: boolean;
        cancelText: string;
        confirmText: string;
    };
    state: {
        disabled: boolean;
    };
    readonly classNames: string;
    onCancel: () => void;
    onConfirm: () => void;
    render(): JSX.Element;
}
