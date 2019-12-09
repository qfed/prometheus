import BaseComponent from '../../base/baseComponent';
interface IProps {
    loadMore: () => Promise<any>;
    render: (data: any[], noData?: boolean) => JSX.Element;
    threshold?: number;
}
/**
 * InfiniteScroll
 * @prop {function} loadMore 加载更多回调
 * @prop {number} render 渲染列表的模板
 * @prop {function} threshold 距离文档底部的距离
 */
declare class InfiniteScroll extends BaseComponent<IProps, any> {
    static defaultProps: {
        threshold: number;
    };
    state: {
        timeId: number;
        list: any[];
        hasMore: boolean;
        noData: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleScroll: () => void;
    loadMore(): Promise<void>;
    readonly scrollTop: number;
    readonly scrollHeight: number;
    readonly clientHeight: number;
    renderFooterComponent(): JSX.Element;
    render(): JSX.Element;
}
export default InfiniteScroll;
