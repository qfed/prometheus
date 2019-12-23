import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ISwiperItemProps extends IBaseProps {
}
/**
 * Button
 * @prop {string} className SwiperItem的类名
 * @prop {object} style 定义SwiperItem样式
 * @example
 * import SwiperItem, { ISwiperItemProps } from 'q-react'
 *    let props:ISwiperItemProps ={ name:'ts-SwiperItem' }
 *    <SwiperItem {...props} />
 */
export default class SwiperItem extends BaseComponent<ISwiperItemProps, any> {
    render(): JSX.Element;
}
