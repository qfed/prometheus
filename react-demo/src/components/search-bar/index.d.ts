import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ISearchBarProps extends IBaseProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    onSubmit?: (val: string) => void;
    onChange?: (val: any, event: any) => void;
    onFocus?: () => void;
    onCancel?: () => void;
    onBlur?: (val: string) => void;
    type: 'default' | 'list';
    cancelText?: string;
    autoFocus?: boolean;
}
/**
 * SearchBar
 * @prop {string} value 搜索框的当前值
 * @prop {string} placeholder placeholder
 * @prop {boolean} disabled  设置禁用
 * @prop {number} maxLength 最多允许输入的字符个数
 * @prop {Function} onSubmit submit 事件 (点击键盘的 enter)|点击确定
 * @prop {Function} onChange change 事件的回调
 * @prop {Function} onFocus focus 事件的回调
 * @prop {Function} onCancel 点击取消按钮时触发的回调
 * @prop {Function} onBlur  搜索框失焦时触发的回调
 * @prop {string} type 搜索窗的显示类型
 * @prop {string} cancelText 取消焦点按钮文案
 * @prop {boolean} autoFocus 是否自动获取焦点
 */
export default class SearchBar extends BaseComponent<ISearchBarProps, any> {
    static defaultProps: {
        disabled: boolean;
        onCancel(): void;
        onChange(): void;
        onFocus(): void;
        onBlur(str: any): void;
        type: string;
        placeholder: string;
        cancelText: string;
        autoFocus: boolean;
    };
    state: {
        value: string;
        historyList: any[];
        filterList: any[];
        focus: boolean;
    };
    inputRef: any;
    get isFocus(): boolean;
    onCancel: (event: any) => void;
    onChange: (event: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    focus: () => void;
    clear: (event: any) => void;
    handleMemoryList(value: any): void;
    render(): JSX.Element;
}
