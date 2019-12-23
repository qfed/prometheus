import '../../base';
import React from 'react';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IInputProps extends IBaseProps {
    defaultValue?: string | number;
    value?: string | number;
    placeholder?: string;
    textAlign?: 'left' | 'right';
    readOnly?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    autoFocus?: boolean;
    label?: string;
    type?: string;
    multiLine?: boolean;
    maxLength?: number;
    arrow?: boolean;
    extra?: string | JSX.Element;
    thumb?: string | JSX.Element;
    theme?: string;
    onChange?: (value: any, e: any) => void;
    onFocus?: (value: any, e: any) => void;
    onBlur?: (value: any, e: any) => void;
    onClean?: (value: any, e: any) => void;
}
/**
 * Input
 * @prop {string | number} defaultValue input的当前值 (非受控)
 * @prop {string | number} value input的当前值（受控）
 * @prop {string} placeholder placeholder
 * @prop {string} textAlign 文字布局方向
 * @prop {boolean} readOnly 是否只读
 * @prop {boolean} disabled 是否禁用
 * @prop {boolean} clearable 是否带有清除箭头
 * @prop {boolean} autoFocus 是否自动聚焦
 * @prop {boolean} multiLine 是否多行折行输入
 * @prop {boolean} arrow 是否带有右箭头
 * @prop {string} label input描述
 * @prop {string} type input的类型，可以是密码，数字，文本等...
 * @prop {number} maxLength 输入框最大输入字符
 * @prop {string | JSX.Element} extra 右边注释
 * @prop {string | JSX.Element} thumb 左边注释内容
 * @prop {(value: any, event: any) => void} onChange change触发的事件
 * @prop {(value: any, event: any) => void } onFocus 聚焦时触发的事件
 * @prop {(value: any, event: any) => void } onBlur 失去焦点时触发的事件
 * @prop {(value: any, event: any) => void} onClean 点击清除icon触发的事件
 */
export default class Input extends BaseComponent<IInputProps, any> {
    static defaultProps: {
        defaultValue: string;
        placeholder: string;
        type: string;
        textAlign: string;
        readOnly: boolean;
        disabled: boolean;
        clearable: boolean;
        theme: string;
        multiLine: boolean;
        arrow: boolean;
        autoFocus: boolean;
        onChange(value: any, e: any): void;
        onBlur(value: any, e: any): void;
        onFocus(value: any, e: any): void;
        onClean(value: any, e: any): void;
    };
    constructor(props: IInputProps);
    ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
    static getDerivedStateFromProps(nextProps: IInputProps): {
        value: React.ReactText;
    };
    get canClearFlag(): boolean;
    get curWords(): number;
    private handleInputChange;
    /**
     * NOTE 自动聚焦在2种情况下会失效
     *  1. ios 非用户交互（没有点击操作）不能触发
     *  2. 页面刚加载好后，不能自动聚焦
     */
    focus: () => void;
    private handleInputEvent;
    renderParagraph(): JSX.Element;
    clickClearBtn(e: any): void;
    renderInput(): JSX.Element;
    get inputTheme(): string;
    render(): JSX.Element;
}
