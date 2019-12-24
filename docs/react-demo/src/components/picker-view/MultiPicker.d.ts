import React from 'react';
import MultiPickerProps from './MultiPickerProps';
export interface IMultiPickerProp {
    getValue: Function;
}
declare const _default: {
    new (props: Readonly<MultiPickerProps>): {
        getValue: () => any[];
        onChange: (i: any, v: any, cb: any) => void;
        onValueChange: (i: any, v: any) => void;
        onScrollChange: (i: any, v: any) => void;
        render(): JSX.Element;
        readonly classPrefix: string;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<MultiPickerProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<MultiPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<MultiPickerProps>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<MultiPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<MultiPickerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<MultiPickerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<MultiPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<MultiPickerProps>, nextState: Readonly<any>, nextContext: any): void;
    };
    new (props: MultiPickerProps, context?: any): {
        getValue: () => any[];
        onChange: (i: any, v: any, cb: any) => void;
        onValueChange: (i: any, v: any) => void;
        onScrollChange: (i: any, v: any) => void;
        render(): JSX.Element;
        readonly classPrefix: string;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<MultiPickerProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<MultiPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<MultiPickerProps>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<MultiPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<MultiPickerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<MultiPickerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<MultiPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<MultiPickerProps>, nextState: Readonly<any>, nextContext: any): void;
    };
    defaultProps: {
        prefixCls: string;
        onValueChange(): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
