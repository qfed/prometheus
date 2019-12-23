export interface IPickerCol {
    key?: string;
    props?: any;
}
interface IMultiPickerProps {
    prefixCls?: string;
    selectedValue?: any[];
    className?: string;
    rootNativeProps?: any;
    onValueChange?: (v?: any, i?: number) => void;
    children?: any;
    style?: any;
    onScrollChange?: (v?: any, i?: number) => void;
    dataList?: Array<Array<{
        value: any;
        label: any;
    }>>;
    disabled?: boolean;
    is3D?: boolean;
    isAnimate?: boolean;
    pickerPrefixCls?: string;
    indicatorStyle?: object;
    indicatorClassName?: string;
    itemStyle?: object;
    pickerClassName?: string;
    pickerStyle?: object;
}
export default IMultiPickerProps;
