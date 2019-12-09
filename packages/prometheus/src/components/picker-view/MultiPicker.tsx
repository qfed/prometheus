import React from 'react';
import classnames from 'classnames';
import MultiPickerProps from './MultiPickerProps';
import MultiPickerMixin from './MultiPickerMixin';
import Picker from "./Picker";
/* tslint:disable: ban-types interface-over-type-literal align whitespace */

export interface IMultiPickerProp {
  getValue: Function;
}

const MultiPicker = (props: IMultiPickerProp & MultiPickerProps) => {
  const { prefixCls, className, rootNativeProps, children, style, dataList, disabled, is3D, isAnimate,
    indicatorStyle, indicatorClassName, itemStyle, pickerPrefixCls, pickerClassName, pickerStyle,
    onValueChange, onScrollChange } = props;
  const selectedValue = props.getValue();
  // 1. 使用dataList 2. 使用children
  let colElements
  if (dataList) {
    colElements = dataList.map((col, i) => {
      return (
        <Picker
          key={i}
          selectedValue={selectedValue[i]}
          disabled={disabled}
          is3D={is3D}
          noAnimate={!isAnimate}
          prefixCls={pickerPrefixCls}
          indicatorStyle={indicatorStyle}
          indicatorClassName={indicatorClassName}
          itemStyle={itemStyle}
          className={pickerClassName}
          style={pickerStyle}
          onValueChange={onValueChange.bind(this, i)}
          onScrollChange={onScrollChange.bind(this, i)}
        >
          {col.map((item, index) => {
            return (
              <Picker.Item key={index} value={item.value}>{item.label}</Picker.Item>
            )
          })}
        </Picker>
      )
    })
  } else {
    colElements = React.Children.map(children, (col: any, i) => {
      return React.cloneElement(col, {
        selectedValue: selectedValue[i],
        onValueChange: (...args) => props.onValueChange!(i, ...args),
        onScrollChange: props.onScrollChange && ((...args) => props.onScrollChange!(i, ...args)),
      });
    });
  }
  return (
    <div
      {...rootNativeProps}
      style={style}
      className={classnames(className, prefixCls)}
    >
      {colElements}
    </div>
  );
};

export default MultiPickerMixin(MultiPicker);
