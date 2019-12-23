/**
 * copy 的 https://github.com/react-component/m-picker
 * 因为这个仓储好久不更新了所以copy一份做了简单的改动
 */
import React from 'react';
import { IPickerProps } from './PickerTypes';
import './styles/picker.scss';
declare const _default: {
    new (props: Readonly<IPickerProps>): {
        select: (value: any, itemHeight: any, scrollTo: any) => void;
        selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
        computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
        doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<IPickerProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IPickerProps>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<IPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IPickerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IPickerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
    };
    new (props: IPickerProps, context?: any): {
        select: (value: any, itemHeight: any, scrollTo: any) => void;
        selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
        computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
        doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<IPickerProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IPickerProps>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<IPickerProps>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IPickerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IPickerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
    };
    Item: any;
    contextType?: React.Context<any>;
};
export default _default;
