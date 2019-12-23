import * as React from 'react';
import './index.scss';
export default class ListActionSheet extends React.Component {
    state: {
        visible: boolean;
        visibleDemo1: boolean;
        visibleDemo2: boolean;
        visibleDemo3: boolean;
        visibleDemo4: boolean;
        visibleDemo5: boolean;
        visibleDemo6: boolean;
        mask: boolean;
        maskClosable: boolean;
        list: {
            title: string;
            id: number;
        }[];
        disabledTotal: boolean;
        data1: ({
            label: string;
            name: string;
            value: number;
            checked?: undefined;
        } | {
            label: string;
            name: string;
            value: number;
            checked: boolean;
        })[];
        thumb2: JSX.Element;
        pickedIcon2: JSX.Element;
    };
    toggle: (key: string) => void;
    toggleProxy: (key: string) => void;
    onCancel: (key: string) => void;
    onSelect: (selectData: any, index: number) => void;
    onChange: (value: any) => void;
    render(): JSX.Element;
}
