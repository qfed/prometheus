import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IListItemProps extends IBaseProps {
    /**
     * 最右侧详细信息
     */
    extra?: string | JSX.Element;
    /**
     * 最左侧前置说明
     */
    thumb?: string | JSX.Element;
    /**
     * 是否多行,默认单行
     */
    multiLine: boolean;
    /**
     * 右侧详细信息增加箭头指向
     */
    arrow: boolean;
    /**
     * 标题下方描述信息
     */
    brief?: string | JSX.Element;
    /** body 的对齐方式  */
    bdAlign: string;
    onClick?: (event: any) => void;
}
export default class ListItem extends BaseComponent<IListItemProps, any> {
    static defaultProps: {
        multiLine: boolean;
        arrow: boolean;
        bdAlign: string;
        onClick: () => void;
    };
    render(): JSX.Element;
}
