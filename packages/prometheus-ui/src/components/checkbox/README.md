# checkbox

多选框组件，建议搭配 list 使用

## 1. DOM 结构

- checkbox\_\_icon：多选框中是否选中图标
- checkbox\_\_label：多选框 label 标题
- checkbox\_\_input：多选框 input

## 2. 样式

- pro-checkbox__hd: 设置单选框大小
- pro-checkbox__bd: 设置listline外边距
- pro-checkbox__icon: 设置单选框样式，且不可见
- pro-checkbox__checked: 设置单选框被勾选样式，使icon为可见

## DOM 参考 **radio**

<q-demo class="pro-demo--radio">
  <div class="pro-list">
    <div class="pro-list__hd">checkbox demo </div>
    <div class="pro-list__bd">
      <div class="pro-list-line pro-checkbox">
        <div class="pro-list-line__bd">checkbox在右边未选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边未选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked />
          <i class="iconfont icon-selectUp" style="font-size: 18px"></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked">
        <div class="pro-list-line__bd">checkbox在右边选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边未选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" />
          <i class="iconfont icon-selectUp" style="font-size: 18px"></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边未选中</div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边选中</div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
        <div class="pro-list-line__bd">checkbox在右边选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边选中</div>
      </div>
   </div>
  </div>
</q-demo>


## code

```html
<q-demo>
 <div class="pro-list">
    <div class="pro-list__hd">checkbox demo </div>
    <div class="pro-list__bd">
      <div class="pro-list-line pro-checkbox">
        <div class="pro-list-line__bd">checkbox在右边未选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边未选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked />
          <i class="iconfont icon-selectUp" style="font-size: 18px"></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked">
        <div class="pro-list-line__bd">checkbox在右边选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边未选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" />
          <i class="iconfont icon-selectUp" style="font-size: 18px"></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边未选中</div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边选中</div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
        <div class="pro-list-line__bd">checkbox在右边选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success" style="font-size: 18px"></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边选中</div>
      </div>
   </div>
  </div>
</q-demo>
```
