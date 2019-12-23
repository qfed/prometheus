import '../../base';
import ButtonItem from './index';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IButtonGroupProps extends IBaseProps {
}
/**
 * ButtonGroup
 * @prop {string | JSX.Element} header
 * @prop {object} style
 */
export default class ButtonGroup extends BaseComponent<IButtonGroupProps, any> {
    static defaultProps: {};
    static getDerivedStateFromProps: (nextProps: any, prevState: any) => any;
    static Item: typeof ButtonItem;
    state: {};
    readonly MainClassNames: string;
    render(): JSX.Element;
}
