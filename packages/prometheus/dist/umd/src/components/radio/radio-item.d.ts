import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IRadioProps extends IBaseProps {
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    value: string | number;
    label: string | JSX.Element;
    thumb?: string | JSX.Element;
    icon?: string | JSX.Element;
    onChange?: (v: any) => void;
}
/**
 * Radio
 * @prop {*any} dataSouce radio的数据源（包含label,value等）
 * @prop {*string} name radio的name
 * @prop {*string|number} vaule radio的值
 * @prop {*string|number} label 指定当前项的label值，可以自定义
 * @prop {boolean} checked 初始化选中状态
 * @prop {boolean} disabled 禁用
 * @prop {string | JSX.Element} thumb 前置位自定义内容
 * @prop {string | JSX.Element} icon 自定义选中图标展示
 * @prop {*Function} onChange change事件触发的函数
 */
export default class RadioItem extends BaseComponent<IRadioProps, any> {
    static defaultProps: {
        disabled: boolean;
        checked: boolean;
        onChange(v: any): void;
    };
    state: {
        checked: boolean;
    };
    onChange: (e: any) => void;
    render(): JSX.Element;
}
