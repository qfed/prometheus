import React from 'react';
import IBaseProps from '../../base/baseProps';
import './styles/index.scss';
import BaseComponent from '../../base/baseComponent';
export interface IPickerViewProps extends IBaseProps {
    value: any[];
    visible: boolean;
    header?: JSX.Element;
    prefixCls?: string;
    onChange?: (v: any) => void;
    onScrollChange?: (v: any) => void;
    dataList?: Array<Array<{
        value: any;
        label: any;
    }>>;
    disabled?: boolean;
    is3D?: boolean;
    isAnimate?: boolean;
    pickerPrefixCls?: string;
    indicatorStyle?: object;
    indicatorClassName?: string;
    itemStyle?: object;
    pickerClassName?: string;
    pickerStyle?: object;
}
declare class PickerView extends BaseComponent<IPickerViewProps, any> {
    static Picker: {
        new (props: Readonly<import("components/picker-view/PickerTypes").IPickerProps>): {
            select: (value: any, itemHeight: any, scrollTo: any) => void;
            selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
            computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
            doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
            render(): JSX.Element;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<import("components/picker-view/PickerTypes").IPickerProps>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        };
        new (props: import("components/picker-view/PickerTypes").IPickerProps, context?: any): {
            select: (value: any, itemHeight: any, scrollTo: any) => void;
            selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
            computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
            doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
            render(): JSX.Element;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<import("components/picker-view/PickerTypes").IPickerProps>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("components/picker-view/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        };
        Item: any;
        contextType?: React.Context<any>;
    };
    static MultiPicker: {
        new (props: Readonly<import("components/picker-view/MultiPickerProps").default>): {
            getValue: () => any[];
            onChange: (i: any, v: any, cb: any) => void;
            onValueChange: (i: any, v: any) => void;
            onScrollChange: (i: any, v: any) => void;
            render(): JSX.Element;
            readonly classPrefix: string;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<import("components/picker-view/MultiPickerProps").default>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("components/picker-view/MultiPickerProps").default>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("components/picker-view/MultiPickerProps").default>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
        };
        new (props: import("components/picker-view/MultiPickerProps").default, context?: any): {
            getValue: () => any[];
            onChange: (i: any, v: any, cb: any) => void;
            onValueChange: (i: any, v: any) => void;
            onScrollChange: (i: any, v: any) => void;
            render(): JSX.Element;
            readonly classPrefix: string;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<import("components/picker-view/MultiPickerProps").default>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("components/picker-view/MultiPickerProps").default>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("components/picker-view/MultiPickerProps").default>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("components/picker-view/MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
        };
        defaultProps: {
            prefixCls: string;
            onValueChange(): void;
        };
        contextType?: React.Context<any>;
    };
    static defaultProps: {
        onChange(): void;
        onScrollChange(): void;
    };
    onChange: (value: any) => void;
    onScrollChange: (value: any) => void;
    render(): JSX.Element;
}
export default PickerView;
