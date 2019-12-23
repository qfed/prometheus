import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ILoadingProps extends IBaseProps {
    type?: 'default' | 'circle' | 'bounce';
    /**
     * 容器类名
     */
    wrapperClassName?: string;
    /**
     * loading内层每个点的类名
     */
    className?: string;
}
/**
 * 请参考 https://github.com/tobiasahlin/SpinKit
 * Loading
 * @prop {string} className Loading的类名
 * @prop {object} style 定义Loading样式
 * @example
 * import Loading, { ILoadingProps } from {`${this.classPrefix}react`}
 *    let props:ILoadingProps ={ name:'ts-Loading' }
 *    <Loading {...props} />
 */
export default class Loading extends BaseComponent<ILoadingProps, any> {
    static defaultProps: {
        type: string;
    };
    state: {
        disabled: boolean;
    };
    readonly classNames: string;
    readonly wrapperClassNames: string;
    _bounceType(): JSX.Element;
    _circleType(): JSX.Element;
    _defaultType(): JSX.Element;
    render(): any;
}
