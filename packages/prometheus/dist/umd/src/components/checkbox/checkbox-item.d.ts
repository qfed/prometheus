import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export declare enum DIRECTION {
    LEFT = 1,
    RIGHT = 2
}
export interface IPickedItemInfo {
    name: string;
    value: string | number;
    checked: boolean;
}
export interface ICheckboxProps extends IBaseProps {
    /**
     * 是否选中
     */
    checked?: boolean;
    /**
     * 是否可修改
     */
    disabled?: boolean;
    /**
     * 用于展示的标签
     */
    label: string | JSX.Element;
    /**
     * checkbox name属性
     */
    name?: string;
    /**
     * checkbox 值
     */
    value: string | number;
    /**
     * 图标在label的左边还是右边
     */
    direction?: DIRECTION;
    /**
     * 点击是的change事件
     */
    onChange?: (pickedInfo: IPickedItemInfo) => void;
}
export default class Checkbox extends BaseComponent<ICheckboxProps, any> {
    static defaultProps: {
        disabled: boolean;
        checked: boolean;
        direction: DIRECTION;
        onChange(p: IPickedItemInfo): void;
    };
    static directionType: typeof DIRECTION;
    state: {
        checked: boolean;
        disabled: boolean;
    };
    onChange: (event: any) => void;
    render(): JSX.Element;
}
