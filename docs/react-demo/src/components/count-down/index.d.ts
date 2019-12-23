import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ICheckboxProps extends IBaseProps {
    count: number;
    text: string;
    leftText: string;
    rightText: string;
    resendText: string;
    onClick: (r: any) => void;
}
/**
 * CountDown
 * @prop {Function} onClick 触发倒计时事件
 * @prop {string} text 未倒计时时文本显示
 * @prop {number} count 倒计时秒数
 * @example
 */
declare class CountDown extends BaseComponent<ICheckboxProps, any> {
    static defaultProps: {
        count: number;
        text: string;
        leftText: string;
        rightText: string;
        resendText: string;
        onClick: () => void;
    };
    timeFlag: number;
    state: {
        btnStatus: number;
        count: number;
        isReSend: boolean;
    };
    constructor(props: any);
    componentWillUnmount(): void;
    onClick: () => void;
    start: () => void;
    reset(): void;
    render(): JSX.Element;
}
export default CountDown;
