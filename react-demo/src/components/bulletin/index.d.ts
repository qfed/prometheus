import IBaseProps from '../../base/baseProps';
import 'base';
import BaseComponent from '../../base/baseComponent';
export interface IBulletinProps extends IBaseProps {
    className?: string;
    style?: object;
    contentClass?: string;
    contentStyle?: object;
    iconClass?: string;
    iconStyle?: object;
    closeClass?: string;
    closeStyle?: object;
    visible?: boolean;
    content?: string | JSX.Element;
    icon?: JSX.Element;
    theme?: 'blue' | 'yellow';
    closeIcon?: JSX.Element | string;
    isCenter?: boolean;
    isScroll?: boolean;
    scrollClass?: string;
    scrollStyle?: object;
    onClose?: () => void;
    onClick?: () => void;
}
/**
 * Bulletin
 * @prop {string} className Bulletin容器的类名
 * @prop {object} style Bulletin的行内样式
 * @prop {string} contentClass 公告栏文字的类名
 * @prop {object} contentStyle 公告栏文字的行内样式
 * @prop {string} iconClass 公告栏图标的类名
 * @prop {object} iconStyle 公告栏图标的行内样式
 * @prop {string} closeClass 关闭按钮或文字的类名
 * @prop {boolean} visible 是否可见公告栏
 * @prop {string} content 公告栏文字内容
 * @prop {JSX.Element} icon 公告栏图标
 * @prop {JSX.Element | string} closeIcon 关闭图标或文字
 * @prop {boolean} isCenter 内容是否居中
 * @prop {boolean} isScroll 内容是否可滚动
 * @prop {string} scrollClass 滚动内容的类名
 * @prop {object} scrollStyle 滚动内容的行内样式
 * @prop {function} onClose 点击关闭回调事件
 * @prop {function} onClick 点击公告内容回调事件
 */
export default class Bulletin extends BaseComponent<IBulletinProps, any> {
    static defaultProps: {
        visible: boolean;
        content: string;
        isCenter: boolean;
        theme: string;
        onClose(): void;
        onClick(): void;
    };
    onClose: () => void;
    onClick: () => void;
    get classNames(): string;
    get iconClassNames(): string;
    get contentClassNames(): string;
    get scrollClassNames(): string;
    get closeClassNames(): string;
    render(): JSX.Element;
}
