import '../../base';
import { CSSProperties } from 'react';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ISwitchProps extends IBaseProps {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    activeColor?: string;
    style?: CSSProperties;
    className?: string;
    onChange?: (checked: boolean, event: any) => void;
}
/**
 * Switch
 * @prop {className} className switch的类名
 * @prop {object} style 自定义switch的样式
 * @prop {boolean} checked 是否默认选中
 * @prop {boolean} disabled 是否不可修改
 * @prop {boolean} activeColor 开关打开后的颜色
 * @prop {Function} onChange change事件触发的函数
 */
export default class Switch extends BaseComponent<ISwitchProps, any> {
    static defaultProps: {
        checked: any;
        disabled: boolean;
        onChange(): void;
        defaultChecked: boolean;
    };
    state: {
        checked: boolean;
    };
    get classNames(): string;
    onChange: (event: any) => void;
    render(): JSX.Element;
}
