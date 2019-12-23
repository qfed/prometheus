import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface INavBarProps extends IBaseProps {
    type?: 'primary' | 'default';
    leftContent?: string | JSX.Element;
    onLeftClick?: (e: any) => void;
    rightContent?: string | JSX.Element;
    onRightClick?: (e: any) => void;
}
/**
 * navBar
 * @prop {string} className Button的类名
 * @prop {object} style 定义Button样式
 * @example
 * import Button, { IButtonProps } from 'q-react'
 *    let props:IButtonProps ={ name:'ts-button' }
 *    <Button {...props} />
 */
export default class NavBar extends BaseComponent<INavBarProps, any> {
    static defaultProps: {
        type: string;
        leftContent: string;
        rightContent: string;
        onLeftClick: (e: any) => void;
        onRightClick: (e: any) => void;
    };
    state: {};
    render(): JSX.Element;
}
