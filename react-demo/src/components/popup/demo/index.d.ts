import '../../../base';
import './style.scss';
export interface IPopupState {
    visible: boolean;
    mask: boolean;
    animation: string | boolean;
    position: string | string[];
    maskCloseable: boolean;
    height?: string | number;
    width?: string | number;
}
