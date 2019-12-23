import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IJumpPromptProps extends IBaseProps {
    /**
     * 点击确认的回调函数，默认为只关闭弹窗
     */
    onConfirm?: () => void;
    /**
     * 点击取消的回调函数，默认为history.goBack()
     */
    onCancel?: (e: any) => void;
    /**
     * 何时进行拦截，默认为true即只要后退就拦截
     */
    when?: boolean;
    /**
     * Dialog的内容, 默认为一个提示字符串
     */
    dialogChildren?: JSX.Element | string;
    /**
     * Dialog的title, 默认为空
     */
    dialogTitle?: string;
    /**
     * dialog确认的文案，默认为继续申请
     */
    okText?: string;
    /**
     * dialog取消的文案，默认为残忍拒绝
     */
    cancelText?: string;
    /**
     * history对象
     */
    history: any;
}
export default class JumpPrompt extends BaseComponent<IJumpPromptProps, any> {
    static defaultProps: {
        onConfirm: any;
        onCancel: any;
        when: boolean;
        dialogChildren: JSX.Element[];
        okText: string;
        cancelText: string;
        dialogTitle: string;
        history: any;
    };
    state: {
        isShowModal: boolean;
        nextLocation: any;
    };
    unblock: any;
    currentPathname: string;
    currentSearch: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onCancel: () => void;
    onConfirm: () => void;
    render(): JSX.Element;
}
