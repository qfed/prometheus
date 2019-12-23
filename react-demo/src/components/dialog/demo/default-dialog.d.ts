import * as React from 'react';
import './index.scss';
export default class DefaultDialog extends React.Component {
    state: {
        visible: boolean;
        visibleDemo1: boolean;
        visibleDemo5: boolean;
        visibleDemo6: boolean;
        visibleDemo7: boolean;
        visibleDemo9: boolean;
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
