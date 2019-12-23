import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IPopoverProps extends IBaseProps {
    /**
     * popover的定位上下文
     */
    target: any;
    /**
     * 与target的左边距
     */
    left?: number;
    /**
     * 与target的上边距
     */
    top?: number;
    /**
     * 是否显示popover箭头
     */
    arrow?: boolean;
    /**
     * 凸起箭头的位置
     */
    arrowPosition?: 'bottomLeft' | 'bottomRight' | 'bottomCenter' | 'topCenter' | 'topLeft' | 'topRight';
    /**
     * 是否开启点击popover以外的地方关闭
     */
    documentClose?: boolean;
    /**
     * 操作完菜单后是否自动关闭菜单
     */
    autoClose?: boolean;
    /**
     * 动画类型：包含移动和渐隐
     */
    animationType?: 'fade' | 'slide';
    /**
     * 当动画为slide时的方向
     */
    slideDirection?: 'up' | 'down';
}
/**
 * Popover
 * @example
 * import Popover, { IPopoverProps } from 'q-react'
 *    let props:IPopoverProps ={ name:'ts-Popover' }
 *    <Popover {...props} />
 */
export default class Popover extends BaseComponent<IPopoverProps, any> {
    static defaultProps: {
        style: {};
        left: number;
        top: number;
        arrowPosition: string;
        documentClose: boolean;
        autoClose: boolean;
        arrow: boolean;
        animationType: string;
        slideDirection: string;
    };
    state: {
        visible: boolean;
    };
    arrowPositionMap: {
        bottomLeft: string;
        bottomRight: string;
        bottomCenter: string;
        topCenter: string;
        topLeft: string;
        topRight: string;
    };
    get position(): {
        top: any;
        left: any;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    show(): void;
    close(e: any): void;
    getAnimationClass(): string;
    render(): JSX.Element;
}
