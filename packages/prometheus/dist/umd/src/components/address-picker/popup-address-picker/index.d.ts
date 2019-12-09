import IBaseProps from '../../../base/baseProps';
import BaseComponent from '../../../base/baseComponent';
interface IAddressItem {
    area_id: string | number;
    parent_id: string | number;
    area_name: string;
}
export interface IPopupAddressPickerProps extends IBaseProps {
    visible: boolean;
    title?: string;
    placeList: IAddressItem[];
    onChange: (value: number[]) => void;
    onClose: () => void;
}
/**
 * PopupAddressPicker
 * @prop {boolean} visible 控制显示隐藏
 * @prop {string} title picker标题
 * @prop {Array} placeList 地址数据列表
 * @prop {Function} onChange 选择区后的回调函数，参数为省市区id数组
 * @prop {Function} onClose 弹出关闭icon点击回调事件
 * @example
 */
export default class PopupAddressPicker extends BaseComponent<IPopupAddressPickerProps, any> {
    state: {
        value: any[];
        placeListTmp: any[];
    };
    addressPicker: {
        echoPlace: (root: any, placeList: any, value: any) => void;
    };
    componentWillReceiveProps(nextProps: any): void;
    onClick: (value: any, column: any) => void;
    echoPlace: (root: any, placeList: any, value: any) => void;
    render(): JSX.Element;
}
export {};
