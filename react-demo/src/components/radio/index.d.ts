import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
import RadioItem from "./radio-item";
export interface IRadioGroupProps extends IBaseProps {
    list: any[];
    name: string;
    value?: string | number;
    labelKey?: string;
    valueKey?: string;
    disabled?: boolean;
    thumb?: string | JSX.Element;
    icon?: string | JSX.Element;
    onChange: (v: any) => void;
}
/**
 * RadioGroup
 * @prop {*string} name RadioGroup的name
 * @prop {*Array} list RadioGroup的数据列表
 * @prop {string|number} value radioGroup的初始值
 * @prop {string} labelKey radioGroup数据源list里每一项中用作label的键值
 * @prop {string} valueKey radioGroup数据源list里每一项中用作value的键值
 * @prop {boolean} disabled 禁用
 * @prop {string | JSX.Element} thumb 前置位自定义内容
 * @prop {string | JSX.Element} icon 自定义选中图标展示
 * @prop {*Function} onChange change事件触发的函数
 */
export default class RadioGroup extends BaseComponent<IRadioGroupProps, any> {
    static defaultProps: {
        disabled: boolean;
        list: any[];
        labelKey: string;
        valueKey: string;
        onChange(): void;
    };
    static Item: typeof RadioItem;
    state: {
        value: string;
    };
    onChange: (value: any) => void;
    render(): JSX.Element;
}
