import '../../base';
import { IToastItemProps } from './toast-item';
import BaseComponent from '../../base/baseComponent';
export interface IToastProps {
    name: 'toast-item';
}
/**
 * toast manager
 */
export default class Toast extends BaseComponent<IToastProps, any> {
    static defaultProps: {
        name: string;
    };
    /**
     * 控制同时存在的toast最大数量
     */
    static max: number;
    state: {
        toastList: any[];
    };
    push(toast: IToastItemProps): void;
    pop(): void;
    clear(current?: string): void;
    replace(toast: IToastItemProps): void;
    onClose: (current: string) => void;
    render(): JSX.Element;
}
