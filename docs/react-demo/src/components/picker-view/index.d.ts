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
        new (props: Readonly<import("./PickerTypes").IPickerProps>): {
            select: (value: any, itemHeight: any, scrollTo: any) => void;
            selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
            computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
            doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
            render(): JSX.Element;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callback?: () => void): void;
            readonly props: Readonly<import("./PickerTypes").IPickerProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("./PickerTypes").IPickerProps>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("./PickerTypes").IPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        };
        new (props: import("./PickerTypes").IPickerProps, context?: any): {
            select: (value: any, itemHeight: any, scrollTo: any) => void;
            selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
            computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
            doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
            render(): JSX.Element;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callback?: () => void): void;
            readonly props: Readonly<import("./PickerTypes").IPickerProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("./PickerTypes").IPickerProps>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("./PickerTypes").IPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        };
        Item: any;
        contextType?: React.Context<any>;
    };
    static MultiPicker: {
        new (props: Readonly<import("./MultiPickerProps").default>): {
            getValue: () => any[];
            onChange: (i: any, v: any, cb: any) => void;
            onValueChange: (i: any, v: any) => void;
            onScrollChange: (i: any, v: any) => void;
            render(): JSX.Element;
            readonly classPrefix: string;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callback?: () => void): void;
            readonly props: Readonly<import("./MultiPickerProps").default> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("./MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("./MultiPickerProps").default>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("./MultiPickerProps").default>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("./MultiPickerProps").default>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./MultiPickerProps").default>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("./MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
        };
        new (props: import("./MultiPickerProps").default, context?: any): {
            getValue: () => any[];
            onChange: (i: any, v: any, cb: any) => void;
            onValueChange: (i: any, v: any) => void;
            onScrollChange: (i: any, v: any) => void;
            render(): JSX.Element;
            readonly classPrefix: string;
            context: any;
            setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
            forceUpdate(callback?: () => void): void;
            readonly props: Readonly<import("./MultiPickerProps").default> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<any>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("./MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("./MultiPickerProps").default>, prevState: Readonly<any>): any;
            componentDidUpdate?(prevProps: Readonly<import("./MultiPickerProps").default>, prevState: Readonly<any>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("./MultiPickerProps").default>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./MultiPickerProps").default>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("./MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./MultiPickerProps").default>, nextState: Readonly<any>, nextContext: any): void;
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
