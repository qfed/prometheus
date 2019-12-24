import { IToastItemProps } from './toast-item';
export interface IToastProps {
    name?: '$';
}
declare class ToastManager {
    private $root;
    private toastRef;
    private initStatus;
    private infoList;
    private createToastContainer;
    private _info;
    private _push;
    set max(count: number);
    get UUID(): string;
    /**
     * 组合参数返回 IToastItemProps
     */
    suffleParam(param: IToastItemProps | string, type?: number): IToastItemProps;
    info(param: IToastItemProps | string): string;
    success(param: IToastItemProps | string): string;
    fail(param: IToastItemProps | string): string;
    loading(param: IToastItemProps | string): string;
    warn(param: IToastItemProps | string): string;
    destroy(uuid?: string): void;
}
declare const toastManager: ToastManager;
export default toastManager;
