import '../../base';
import CheckboxItem, { ICheckboxProps, DIRECTION, IPickedItemInfo } from "./checkbox-item";
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ICheckboxGroupProps extends IBaseProps {
    name: string;
    list: ICheckboxProps[];
    labelKey?: string;
    valueKey?: string;
    defaultValue?: any[];
    direction?: DIRECTION;
    disabled?: boolean;
    onChange: (pickedInfo: any[]) => void;
}
export default class CheckboxGroup extends BaseComponent<ICheckboxGroupProps, any> {
    static defaultProps: {
        disabled: boolean;
        defaultValue: any[];
        labelKey: string;
        valueKey: string;
        list: any[];
        direction: DIRECTION;
        onChange(p: any[]): void;
    };
    static directionType: typeof DIRECTION;
    static Item: typeof CheckboxItem;
    constructor(props: ICheckboxGroupProps);
    onChange: ({ name, value, checked }: IPickedItemInfo) => void;
    render(): JSX.Element;
}
