import '../../base';
import BaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ITabItemProps extends BaseProps {
    height?: string;
}
/**
 * TabItem
 */
declare class TabItem extends BaseComponent<ITabItemProps, any> {
    static defaultProps: {
        content: string;
        animated: boolean;
    };
    get height(): string;
    render(): JSX.Element;
}
export default TabItem;
