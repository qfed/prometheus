import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
/**
 * 地址项数据接口
 */
interface IAddressItem {
    area_id: string | number;
    parent_id: string | number;
    area_name: string;
}
export interface IAddressPickerProps extends IBaseProps {
    placeList: IAddressItem[];
    value?: number[];
    onClick: (val: IAddressItem, column: number) => void;
}
/**
 * AddressPicker
 * @prop {Array} placeList 地址数据列表
 * @prop {Array} value 回显数据列表
 * @prop {Function} onClick 点击地址列表项回调
 * @example
 */
export default class AddressPicker extends BaseComponent<IAddressPickerProps, any> {
    static defaultProps: {
        placeList: any[];
        value: any[];
        onClick: () => void;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    initData: (value?: any[], placeList?: any[]) => void;
    echoPlace(root: any, placeList: any, value: any): void;
    scrollIntoView: () => void;
    getArea(payload: any): void;
    handleClick: (value: any, column: any) => void;
    render(): JSX.Element;
}
export {};
