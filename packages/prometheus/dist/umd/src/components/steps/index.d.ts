import '../../base';
import IBaseProps from '../../base/baseProps';
import Step from './step';
import BaseComponent from '../../base/baseComponent';
export interface IStepsProps extends IBaseProps {
    name?: string;
    type?: 'row' | 'column';
}
/**
 * Steps 步骤条
 * @description 显示一个任务的进度；或者引导用户完成某个复杂任务。
 * @prop {string} className 步骤条类名
 * @prop {object} style 自定义进度条的样式
 */
declare class Steps extends BaseComponent<IStepsProps, any> {
    static Step: typeof Step;
    static defaultProps: {
        type: string;
    };
    state: {};
    render(): JSX.Element;
}
export default Steps;
