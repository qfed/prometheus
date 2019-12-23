import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IPopupProps extends IBaseProps {
    visible: boolean;
    timeout?: number;
    position?: string | string[];
    animation?: string | boolean;
    maskClosable?: boolean;
    mask?: boolean;
    onClose?: () => void;
    onEnter?: () => void;
    onEntered?: () => void;
    onExit?: () => void;
    onExited?: () => void;
}
export default class Popup extends BaseComponent<IPopupProps, any> {
    static defaultProps: {
        mask: boolean;
        maskClosable: boolean;
        position: string;
        animation: string;
        onClose(): void;
        onEnter(): void;
        onEntered(): void;
        onExit(): void;
        onExited(): void;
    };
    bodyDom: any;
    maskRef: any;
    readonly positionClassnames: string;
    componentWillUnmount(): void;
    onClose: () => void;
    onEnter: () => void;
    onEntered: () => void;
    onExit: () => void;
    onExited: () => void;
    preventDefault(e: any): void;
    toggleScroll: (visible: boolean) => void;
    maskClick: (e: any) => void;
    render(): JSX.Element;
}
