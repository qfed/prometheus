import '../../base';
import React from 'react';
import IBaseProps from '../../base/baseProps';
import SwiperItem from './swiper-item';
import BaseComponent from '../../base/baseComponent';
export interface ISwiperProps extends IBaseProps {
    width: number;
    height: number;
    isAutoPlay?: boolean;
    autoPlayDuring?: 2000;
    type?: 'black' | 'white';
}
/**
 * Button
 * @prop {string} className Swiper的类名
 * @prop {object} style 定义Swiper样式
 * @example
 * import Swiper, { ISwiperProps } from 'q-react'
 *    let props:ISwiperProps ={ name:'ts-Swiper' }
 *    <Swiper {...props} />
 */
export default class Swiper extends BaseComponent<ISwiperProps, any> {
    static defaultProps: {
        index: number;
        width: number;
        isAutoPlay: boolean;
        autoPlayDuring: number;
        type: string;
    };
    static SwiperItem: typeof SwiperItem;
    timer: number;
    autoPlayDuring: number;
    $swiper: any;
    state: {
        originX: number;
        endX: number;
        index: number;
        animation: {};
        len: number;
    };
    constructor(props: any);
    readonly classNames: string;
    /**
     *
     * @param from
     * @param to
     * @param duration 本来想根据当前滚动距离动态的计算 duration 但是看实际效果感觉不根据滚动距离控制during也没啥问题
     */
    animation(from: number, to: number, duration?: number): {
        transform: string;
        transition: string;
    };
    onStart: (clientX: any) => void;
    onEnd: (endX: any) => void;
    onTouchStart: (event: any) => void;
    onTouchEnd: (event: any) => void;
    /**
     * @param {number} index preIndex
     * @param {number} nextIndex nextIndex
     */
    updateIndex: (nextIndex: any) => void;
    autoPlay: () => void;
    onMove: (clientX: any) => void;
    onTouchMove: (event: any) => void;
    onMouseMove: (e: any) => void;
    onMouseUp: (e: any) => void;
    onMouseDown: (event: any) => void;
    readonly len: any;
    readonly rect: any;
    readonly swiperItems: React.ReactChild[];
    /**
     * TODO
     * 1 做一个dot 移动的动画
     * 2 暴露自定义dot
     */
    readonly swiperDots: React.ReactChild[];
    componentWillUnmount(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
