import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface IProgressProps extends IBaseProps {
    percent: number;
    barStyle?: object;
    backStyle?: object;
    unfilled?: boolean;
    auto?: boolean;
    duration?: number;
    step?: number;
    onHundredPercent?: () => any;
    wrapperClassName?: string;
    barClassName?: string;
}
/**
 * Progress
 * @prop {string} className 进度条的类名
 * @prop {number} percent 进度百分比
 * @prop {object} barStyle 进度条样式
 * @prop {boolean} unfilled 是否显示未填充轨道
 */
export default class Progress extends BaseComponent<IProgressProps, any> {
    static defaultProps: {
        percent: number;
        style: {};
        unfilled: boolean;
        auto: boolean;
        duration: number;
        step: number;
        onHundredPercent: () => void;
    };
    timer: any;
    state: {
        percent: number;
        auto: boolean;
    };
    private startAddProgress;
    componentDidUpdate(): void;
    componentDidMount(): void;
    get progressPercent(): {
        width: string;
    };
    render(): JSX.Element;
}
