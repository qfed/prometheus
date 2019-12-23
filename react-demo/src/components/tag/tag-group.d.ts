import '../../base';
import React from 'react';
import IBaseProps from '../../base/baseProps';
export interface ITagGroupProps extends IBaseProps {
    className?: string;
    style?: any;
}
/**
 * TagGroup
 * @prop {object} style
 * @prop {string} className
 */
export default class ButtonGroup extends React.Component<ITagGroupProps, any> {
    static defaultProps: {
        className: string;
        activeColor: string;
        selected: boolean;
        disabled: boolean;
        closable: boolean;
        onClose(): void;
        onChange(): void;
    };
    render(): JSX.Element;
}
