import { CSSProperties } from 'react';
import BaseComponent from '../../base/baseComponent';
export interface IToastItemProps {
    /**
     * @property duration 隐藏toast 目前是根据css 动画控制的，这个设置目前无效
     */
    message?: string | JSX.Element;
    type?: number;
    duration?: number;
    uuid?: string;
    onClose?: (uuid: string) => void;
    style?: CSSProperties;
    loadingType?: 'default' | 'circle' | 'bounce';
    choke?: boolean;
}
/**
 * @class ToastItem
 * @prop {string} message 消息内容
 */
export default class ToastItem extends BaseComponent<IToastItemProps, any> {
    static defaultProps: {
        duration: number;
        onClose(uuid: string): void;
        choke: boolean;
        message: string;
    };
    private closeTimer;
    constructor(props: any);
    readonly Icon: JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    close: () => void;
    startCloseTimer: () => void;
    clearCloseTimer: () => void;
    render(): JSX.Element;
}
