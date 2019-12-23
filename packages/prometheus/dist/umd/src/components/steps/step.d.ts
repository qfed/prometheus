import '../../base';
import BaseComponent from '../../base/baseComponent';
export interface IStepProps {
    style?: object;
    type?: 'row' | 'column';
    status?: boolean;
    title?: string;
    idx?: string | number;
    icon?: string | JSX.Element;
    tip?: string | JSX.Element;
    tipIcon?: string | JSX.Element;
    isFirst?: boolean;
    isLast?: boolean;
}
/**
 * Step 步骤条内的每一个步骤
 * @description 显示一个任务的进度；或者引导用户完成某个复杂任务。
 * @prop {boolean} status 指定状态。
 * @prop {string} title 标题
 * @prop {string} description 步骤的详细描述
 * @prop {object} icon 步骤图标 可选
 */
declare class Step extends BaseComponent<IStepProps, any> {
    static defaultProps: {
        style: {};
        isFirst: boolean;
        isLast: boolean;
        type: string;
    };
    readonly classNames: string;
    readonly hdClassNames: string;
    readonly ftClassNames: string;
    render(): JSX.Element;
}
export default Step;
