import '../../base';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ISliderProps extends IBaseProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    disabled?: boolean;
    onChange?: (val: number) => void;
    onComplete?: (val: number) => void;
    controller: boolean;
}
export default class Slider extends BaseComponent<ISliderProps, any> {
    static defaultProps: {
        min: number;
        max: number;
        step: number;
        disabled: boolean;
        onChange(val: any): void;
        onComplete(): void;
        controller: boolean;
    };
    $slider: any;
    controlled: boolean;
    oldValue: number;
    state: {
        step: number;
        value: number;
        max: number;
        min: number;
        isPC: boolean;
    };
    constructor(props: any);
    readonly percentage: string;
    readonly range: number;
    readonly rect: any;
    onTounchMove: (event: any) => void;
    onTouchStart: () => void;
    mousemove: (e: any) => void;
    mouseup: () => void;
    onMouseDown: () => void;
    onMove: (clientX: any) => void;
    convert2Precentage(num: number): string;
    getValue: () => number;
    setOldValue: () => void;
    onChange: (step: any) => void;
    onComplete: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
