import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IConfirmProps extends IBaseProps {
    visible: boolean;
    title?: string | JSX.Element;
    mask?: boolean;
    maskClosable?: boolean;
    okText?: string;
    animation?: string;
    onOk: (val?: any) => void;
    onClose: (val?: any) => void;
}
/**
 * Confirm
 * @prop {string} className confirm容器的类名
 * @prop {object} style 可用于设置confirm的样式
 * @prop {boolean} visible 是否展示
 * @prop {string} title 标题
 * @prop {boolean} mask 是否显示遮罩层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} okText 主操作
 * @prop {string} animation 动画效果
 * @prop {function} onOk 点击确定按钮的回调
 * @example
 */
export default class Confirm extends BaseComponent<IConfirmProps, any> {
    static defaultProps: {
        hasCloseButton: boolean;
        mask: boolean;
        maskClosable: boolean;
        okText: string;
        animation: string;
        onOk(): void;
        onClose(): void;
    };
    onOK: () => void;
    onClose(): void;
    render(): JSX.Element;
}
