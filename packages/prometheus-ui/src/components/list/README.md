# list

列表组件，一般内部用来放置用户输入数据的表单项，input checkbox radio 皆为特殊的 list item

## 1. DOM 结构

- "pro-list\_\_hd：头部标题，用于描述 body 内部项
- "pro-list\_\_bd：存放列表项
- "pro-list__bd__line"：列表项

## 2. 样式

- `q-list__hd`：用户表单标题色#666666
- `q-list__bd`：存放列表项，背景色#fff
- `q-list-line`：flex 布局  默认主轴排列，水平方向宽度铺满

<template>
  <q-demo class="pro-demo--radio">
    <div class="pro-list">
      <div class="pro-list__hd">checkbox demo </div>
      <div class="pro-list__bd">
        <div class="pro-list-line pro-checkbox">
          <div class="pro-list-line__bd">checkbox在右边未选中</div>
          <div class="pro-list-line__ft pro-checkbox__icon">
            <label class="pro-checkbox__icon__label">checkbox在右边未选中</label>
            <input class="pro-checkbox__icon__input" type="checkbox" checked />
            <i class="iconfont icon-selectUp pro-checkbox__icon" style='font-size: 18px'></i>
          </div>
        </div>
        <div class="pro-list-line pro-checkbox pro-checkbox--checked">
          <div class="pro-list-line__bd">checkbox在右边选中</div>
          <div class="pro-list-line__ft pro-checkbox__icon">
            <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
            <input class="pro-checkbox__icon__input" type="checkbox" checked/>
            <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
          </div>
        </div>
        <div class="pro-list-line pro-checkbox">
          <div class="pro-list-line__hd pro-checkbox__icon">
            <label class="pro-checkbox__icon__label">checkbox在左边未选中</label>
            <input class="pro-checkbox__icon__input" type="checkbox" />
            <i class="iconfont icon-selectUp pro-checkbox__icon" style='font-size: 18px'></i>
          </div>
          <div class="pro-list-line__bd">checkbox在左边未选中</div>
        </div>
        <div class="pro-list-line pro-checkbox pro-checkbox--checked">
          <div class="pro-list-line__hd pro-checkbox__icon">
            <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
            <input class="pro-checkbox__icon__input" type="checkbox" checked/>
            <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
          </div>
          <div class="pro-list-line__bd">checkbox在左边选中</div>
        </div>
        <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
          <div class="pro-list-line__bd">checkbox在右边选中</div>
          <div class="pro-list-line__ft pro-checkbox__icon">
            <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
            <input class="pro-checkbox__icon__input" type="checkbox" checked/>
            <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
          </div>
        </div>
        <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
          <div class="pro-list-line__hd pro-checkbox__icon">
            <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
            <input class="pro-checkbox__icon__input" type="checkbox" checked/>
            <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
          </div>
          <div class="pro-list-line__bd">checkbox在左边选中</div>
        </div>
      </div>
    </div>
    <div class="pro-list">
      <div class="pro-list__hd">多项筛选</div>
      <div class="pro-tag-group">
        <div class="pro-tag selected">选项卡一</div>
        <div class="pro-tag">选项卡二</div>
        <div class="pro-tag">选项卡三</div>
        <div class="pro-tag selected">选项卡四</div>
        <div class="pro-tag">选项卡五</div>
      </div>
    </div>
  </q-demo>
</template>

```html
<q-demo class="pro-demo--radio">
  <div class="pro-list">
    <div class="pro-list__hd">checkbox demo </div>
    <div class="pro-list__bd">
      <div class="pro-list-line pro-checkbox">
        <div class="pro-list-line__bd">checkbox在右边未选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边未选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked />
          <i class="iconfont icon-selectUp pro-checkbox__icon" style='font-size: 18px'></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked">
        <div class="pro-list-line__bd">checkbox在右边选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
        </div>
      </div>
      <div class="pro-list-line pro-checkbox">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边未选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" />
          <i class="iconfont icon-selectUp pro-checkbox__icon" style='font-size: 18px'></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边未选中</div>
      </div>
      <div class="pro-list-line pro-checkbox pro-checkbox--checked">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边选中</div>
      </div>

      <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
        <div class="pro-list-line__bd">checkbox在右边选中</div>
        <div class="pro-list-line__ft pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在右边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
        </div>
      </div>

      <div class="pro-list-line pro-checkbox pro-checkbox--checked pro-checkbox--disabled">
        <div class="pro-list-line__hd pro-checkbox__icon">
          <label class="pro-checkbox__icon__label">checkbox在左边选中</label>
          <input class="pro-checkbox__icon__input" type="checkbox" checked/>
          <i class="iconfont icon-success pro-checkbox__icon" style='font-size: 18px'></i>
        </div>
        <div class="pro-list-line__bd">checkbox在左边选中</div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">多项筛选</div>
    <div class="pro-tag-group">
      <div class="pro-tag selected">选项卡一</div>
      <div class="pro-tag">选项卡二</div>
      <div class="pro-tag">选项卡三</div>
      <div class="pro-tag selected">选项卡四</div>
      <div class="pro-tag">选项卡五</div>
    </div>
  </div>
</q-demo>
```
