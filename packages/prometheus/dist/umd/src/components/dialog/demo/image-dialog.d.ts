import * as React from 'react';
import './index.scss';
export default class ImageDialog extends React.Component {
    state: {
        visibleDemo2: boolean;
        visibleDemo3: boolean;
        visibleDemo4: boolean;
        visibleDemo8: boolean;
        mask: boolean;
        maskClosable: boolean;
        hasShowCancel: boolean;
        value: string;
    };
    toggle: (key: string) => void;
    toggleProxy: (key: string) => void;
    onChange: () => void;
    render(): JSX.Element;
}
