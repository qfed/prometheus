import '../../base';
import ListItem from './list-item';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IListProps extends IBaseProps {
    header?: string | JSX.Element;
}
/**
 * List
 * @prop {string | JSX.Element} header
 * @prop {object} style
 */
export default class List extends BaseComponent<IListProps, any> {
    static defaultProps: {
        header: string;
    };
    static getDerivedStateFromProps: (nextProps: any, prevState: any) => any;
    static Item: typeof ListItem;
    state: {
        header: string;
    };
    render(): JSX.Element;
}
