# address-picker 

地址选择器，通常与popup搭配使用

## DOM

-  pro-picker-address__header：地址选择栏头部，放在地址信息顶部，字体最大，用来放标题
-  pro-picker-address__body：地址选择栏内容区，flex布局将选中项和列表垂直方向分为上下两部分
-  pro-picker-address__body__hd：地址选中项显示区，未选中时无特殊样式，存在选中项时会添加下划线与地区列表进行区分
-  pro-picker-address__body__hd__column：选中项显示区中的具体项，每个选中项水平方向等间距排列
-  pro-picker-address__body__hd__column__text：地址列表选项区的具体项文本的基础样式
-  pro-picker-address__body__hd__column__text--active：地址列表选项区中的选中样式
-  pro-picker-address__body__bd：地址列表选项区，区域内水平方向等间距存在三个地区列表
-  pro-picker-address__body__bd__column：地址列表选项区中的列表区域，垂直方向排列，可滑动且隐藏滑动条
-  pro-picker-address__body__bd__column__text：地址列表中的地址项
-  pro-picker-address__body__bd__column__text--active：地址列表中选中的地址项样式

<template>
  <q-demo>
    <div class='pro-picker-address'>
    <div class='pro-picker-address__header'>
      <span>Address-picker</span>
    </div>
    <div class='pro-picker-address__body'>
      <div class='pro-picker-address__body__hd bottom-1px'>
        <div class='pro-picker-address__body__hd__column'>
          <span 
            class='pro-picker-address__body__hd__column__text  pro-picker-address__body__hd__column__text--active'
          >
            北京
          </span>
        </div>
        <div class='pro-picker-address__body__hd__column'>
          <span class='pro-picker-address__body__hd__column__text  pro-picker-address__body__hd__column__text--active'>
            上海
          </span>
        </div>
        <div class='pro-picker-address__body__hd__column'>
          <span class='pro-picker-address__body__hd__column__text'>
            请选择
          </span>
        </div>
      </div>
      <div class='pro-picker-address__body__bd'>
        <div class='pro-picker-address__body__bd__column'>
          <div class='pro-picker-address__body__bd__column__text  pro-picker-address__body__bd__column__text--active'>
            北京
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            上海
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            广州
          </div>
        </div>
        <div class='pro-picker-address__body__bd__column'>
          <div class='pro-picker-address__body__bd__column__text'>
            北京
          </div>
          <div class='pro-picker-address__body__bd__column__text  pro-picker-address__body__bd__column__text--active'>
            上海
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            广州
          </div>
        </div>
        <div class='pro-picker-address__body__bd__column'>
          <div class='pro-picker-address__body__bd__column__text'>
            北京
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            上海
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            广州
          </div>
        </div>
      </div>
    </div>
  </div>
  </q-demo>
</template>

```html
<q-demo>
  <div class='pro-picker-address'>
    <div class='pro-picker-address__header'>
      <span>Address-picker</span>
    </div>
    <div class='pro-picker-address__body'>
      <div class='pro-picker-address__body__hd bottom-1px'>
        <div class='pro-picker-address__body__hd__column'>
          <span 
            class='pro-picker-address__body__hd__column__text  pro-picker-address__body__hd__column__text--active'
          >
            北京
          </span>
        </div>
        <div class='pro-picker-address__body__hd__column'>
          <span class='pro-picker-address__body__hd__column__text  pro-picker-address__body__hd__column__text--active'>
            上海
          </span>
        </div>
        <div class='pro-picker-address__body__hd__column'>
          <span class='pro-picker-address__body__hd__column__text'>
            请选择
          </span>
        </div>
      </div>
      <div class='pro-picker-address__body__bd'>
        <div class='pro-picker-address__body__bd__column'>
          <div class='pro-picker-address__body__bd__column__text  pro-picker-address__body__bd__column__text--active'>
            北京
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            上海
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            广州
          </div>
        </div>
        <div class='pro-picker-address__body__bd__column'>
          <div class='pro-picker-address__body__bd__column__text'>
            北京
          </div>
          <div class='pro-picker-address__body__bd__column__text  pro-picker-address__body__bd__column__text--active'>
            上海
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            广州
          </div>
        </div>
        <div class='pro-picker-address__body__bd__column'>
          <div class='pro-picker-address__body__bd__column__text'>
            北京
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            上海
          </div>
          <div class='pro-picker-address__body__bd__column__text'>
            广州
          </div>
        </div>
      </div>
    </div>
  </div>
</q-demo>
```