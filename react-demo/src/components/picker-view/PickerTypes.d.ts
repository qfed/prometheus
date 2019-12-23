export interface IPickerProps {
    disabled?: boolean;
    selectedValue?: any;
    onValueChange?: (value: any) => void;
    itemStyle?: any;
    is3D?: boolean;
    /** web only */
    prefixCls?: string;
    indicatorStyle?: any;
    indicatorClassName?: string;
    className?: string;
    defaultSelectedValue?: any;
    style?: any;
    onScrollChange?: (value: any) => void;
    noAnimate?: boolean;
}
