import '../../base';
import React from 'react';
import './styles/index.scss';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IAnimationProps extends IBaseProps {
    in: boolean;
    timeout?: number;
    unmountOnExit?: boolean;
    appear?: boolean;
    classNames: string | object;
    onEnter?: () => void;
    onEntered?: () => void;
    onExit?: () => void;
    onExited?: () => void;
}
/**
 * Icon
 * @prop {string} className Icon的类名
 * @prop {boolean} disabled 禁用
 * @prop {} height desc
 * @example
 */
export default class Animation extends BaseComponent<IAnimationProps, any> {
    static defaultProps: {
        timeout: number;
        unmountOnExit: boolean;
        classNames: string;
        appear: boolean;
        onEnter(): void;
        onEntered(): void;
        onExit(): void;
        onExited(): void;
    };
    onEnter: () => void;
    onEntered: () => void;
    onExit: () => void;
    onExited: () => void;
    readonly children: React.ReactNode;
    render(): JSX.Element;
}
