import * as React from 'react';
import './index.scss';
export default class CellActionSheet extends React.Component {
    state: {
        visibleDemo7: boolean;
        visibleDemo8: boolean;
        visibleDemo9: boolean;
        visibleDemo10: boolean;
        mask: boolean;
        maskClosable: boolean;
        data2: number[];
        data3: number[];
        shareList1: {
            text: string;
            icon: JSX.Element;
        }[];
        shareList2: {
            text: string;
            icon: JSX.Element;
        }[];
    };
    toggle: (key: string) => void;
    toggleProxy: (key: string) => void;
    onCancel: (key: string) => void;
    onSelect: (selectData: any, index: number) => void;
    onChange: ({ name, value }: {
        name: any;
        value: any;
    }) => void;
    render(): JSX.Element;
}
