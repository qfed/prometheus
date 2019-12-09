import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
/**
 * url: 图片地址
 * theme: 图片展示方式 icon-图标 image-图片 bigImage-大图片占满顶部
 */
interface Image {
    url?: string;
    theme?: string;
}
export interface IDialogProps extends IBaseProps {
    visible: boolean;
    hasCloseButton?: boolean;
    footer?: string | JSX.Element;
    hasShowCancel?: boolean;
    title?: string | JSX.Element;
    mask?: boolean;
    maskClosable?: boolean;
    okText?: string;
    cancelText?: string;
    image?: Image;
    animation?: string;
    onCancel?: (val?: any) => void;
    onOk?: (val?: any) => void;
}
/**
 * Dialog
 * @prop {string} className dialog容器的类名
 * @prop {object} style 可用于设置dialog的样式
 * @prop {boolean} visible 是否展示
 * @prop {boolean} footer 底部 (JSX.Element or nofooter)
 * @prop {boolean} hasCloseButton 右上角是否有关闭按钮
 * @prop {boolean} hasShowCancel 是否有辅助操作
 * @prop {string} title 标题
 * @prop {boolean} mask 是否显示遮罩层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} okText 主操作
 * @prop {string} cancelText 辅助操作
 * @prop {Image} image 对象 url参数图片地址; theme参数图片展示方式,icon-图标 image-图片 bigImage-大图片占满顶部;
 * @prop {string} animation 动画效果
 * @prop {function} onCancel 点击关闭按钮的回调
 * @prop {function} onOk 点击确定按钮的回调
 * @example
 */
export default class Dialog extends BaseComponent<IDialogProps, any> {
    static defaultProps: {
        hasCloseButton: boolean;
        footer: boolean;
        hasShowCancel: boolean;
        mask: boolean;
        maskClosable: boolean;
        okText: string;
        cancelText: string;
        image: {
            url: string;
            theme: string;
        };
        animation: string;
        onOk(): void;
        onCancel(): void;
    };
    onCancel: () => void;
    onOK: () => void;
    render(): JSX.Element;
}
export {};
