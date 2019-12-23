import '../../base';
import React from 'react';
import TabItem from './tab-item';
import IBaseProps from '../../base/baseProps';
import { iconType } from '../icon/iconType';
import BaseComponent from '../../base/baseComponent';
interface ITabIcon {
    title: string;
    icon?: iconType | JSX.Element;
    children?: IPoplistItem[];
}
export interface IPoplistItem {
    title?: React.ReactNode;
    isSelected?: boolean;
}
export interface ITabState {
    maxCount?: number;
    selectedIndex?: number;
    tabs?: ITabIcon[];
    popupList?: IPoplistItem[];
    isShowPopupList?: boolean;
    subselectedIndex?: number;
}
export interface ITabProps extends IBaseProps {
    tabs?: ITabIcon[];
    selectedIndex?: number;
    defaultTabIndex?: number;
    maxCount?: number;
    tabBarPosition?: 'top' | 'bottom';
    onChange?: (v: number, e: any) => void;
    animated?: boolean;
    activeColor?: string;
    onSubChange?: (item: any) => void;
}
/**
 * Tabs
 * @prop {string} className tab容器的类名
 * @prop {array} tabs tab数据
 * @prop {boolean} animated 是否开启切换动画
 * @prop {number} selectedIndex 只可被选中tab
 * @prop {number} defaultTabIndex 默认被选中的tab
 * @prop {string} tabBarPosition TabBar位置
 * @prop {string} activeColor tab被选中色
 * @prop {number} maxCount 可见标签数量
 * @prop {function} onChange tab变化时触发
 * @prop {function} onSubChange tab变化时触发
 * @example
 * import Tabs, { ITabsProps } from 'q-react'
 *    let props:ITabsProps ={ name:'ts-Tabs' }
 *    <Tabs {...props} />
 */
export default class Tabs extends BaseComponent<ITabProps, ITabState> {
    static defaultProps: {
        className: string;
        animated: boolean;
        tabBarPosition: string;
        height: string;
        maxCount: number;
        onChange(): void;
        tabIcons: any[];
        tabs: any[];
    };
    static Item: typeof TabItem;
    static getDerivedStateFromProps: (nextProps: any, prevState: any) => any;
    state: ITabState;
    parentBar: any;
    componentDidMount(): void;
    get selectTrueIndex(): number;
    get barWidth(): number;
    /**
     * 假设默认显示的tabbar 数量为 n ，那么tabbar下面的滑块为了居中则将整个 tab 分为 2n 份
     * 假设当前selectedIndex 为 m ，那么向左偏移的百分比就为  2m+1/2n
     * 示意图如下
     * |---.---|---.---|---.---|     三个tabbar
     * |---|---|---|---|---|---|     滑块为了居中将tab分成六份
     */
    get barLeft(): number;
    onSelected: (index: number, e: any) => void;
    onItemClick: (item: IPoplistItem) => void;
    render(): JSX.Element;
}
export {};
