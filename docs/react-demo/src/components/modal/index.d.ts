import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IModalProps extends IBaseProps {
    title: string | JSX.Element;
    type: string;
    visible: boolean;
    mask?: boolean;
    maskClosable?: boolean;
    animation?: string;
    onClose: (event: any) => void;
}
/**
 * Modal
 * @prop {string} className modal容器的类名
 * @prop {object} style 可用于设置modal的样式
 * @prop {string | JSX.Element} title 标题
 * @prop {string} type 类型:default-默认,primary-内容充满整个modal框
 * @prop {boolean} visible 显示/隐藏
 * @prop {boolean} mask 是否显示蒙层
 * @prop {boolean} maskClosable 点击蒙层是否关闭
 * @prop {string} animation 动画效果
 * @prop {function} onClose 关闭modal时触发的回调
 * @example
 * import Modal, { IModalProps } from 'q-react'
 *    let props:IModalProps ={
 *      title: 'title',
 *      type: 'default',
 *      visible: false,
 *      mask: true,
 *      maskClosable: false,
 *      animation: 'zoom',
 *      onClose() {}
 *    }
 *    <Modal {...props} />
 */
export default class Modal extends BaseComponent<IModalProps, any> {
    static defaultProps: {
        title: string;
        type: string;
        visible: boolean;
        mask: boolean;
        maskClosable: boolean;
        animation: string;
        onClose(): void;
    };
    onClose: () => void;
    render(): JSX.Element;
}
