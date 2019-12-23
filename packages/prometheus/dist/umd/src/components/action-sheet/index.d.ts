import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IActionSheetProps extends IBaseProps {
    list?: any[];
    title?: string | JSX.Element;
    visible: boolean;
    type?: string;
    mask?: boolean;
    maskClosable?: boolean;
    cancelText?: string;
    onSelect: (selectData: any, index: number) => void;
    onCancel?: (val?: any) => void;
}
/**
 * ActionSheet
 * @prop {string} className actionSheet容器的类名
 * @prop {object} style 可用于设置actionSheet的样式
 * @prop {array} list 操作列表数据 每项item需包含title和id，title 属性用于展示
 * @prop {string} title 标题
 * @prop {boolean} visible 是否展示
 * @prop {string} type 类型 //default-关闭按钮在底部  primary-关闭按钮在右上角
 * @prop {boolean} mask 是否显示遮罩层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} cancelText 辅助操作
 * @prop {function} onSelect 选中操作的回调
 * @prop {function} onCancel 点击关闭按钮的回调
 * @example
 */
export default class ActionSheet extends BaseComponent<IActionSheetProps, any> {
    static defaultProps: {
        list: any[];
        type: string;
        mask: boolean;
        maskClosable: boolean;
        cancelText: string;
        onSelect(): void;
        onCancel(): void;
    };
    onSelect: (selectData: any, index: number) => void;
    onCancel: () => void;
    render(): JSX.Element;
}
