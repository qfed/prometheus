import * as React from 'react';
import './index.scss';
export default class InputDialog extends React.Component {
    state: {
        visibleDemo10: boolean;
        visibleDemo11: boolean;
        visibleDemo12: boolean;
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
