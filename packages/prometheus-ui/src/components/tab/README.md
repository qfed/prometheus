# tab

> 标签页，用于让用户在不同的视图中进行切换。

## 规则

- 标签数量，一般 2-4 个，多于 4 哥时候标签 title 会横向滚动；其中，标签中的文案需要精简，一般 2-4 个字。
- 用户可以通过 tabPosition 属性控制视图的位置（上或下）
- 用户可以通过 barTabs 属性控制 标签中是否显示 icon，现在只支持 iconfont
- 用户可以通过 defaultActive 控制默认选中的标签
- 用户可以通过 animated 控制是否支持切换时候动画
- 用户可以通过 maxcount 显示在视图中标签最多个数

## Dom 结构

- pro-tab 是 tab 的包裹容器定位与布局
- pro-tab--top、pro-tab--bottom 标记内容视图区域显示位置
- pro-tab\_\_bar-tab 标签容器
- pro-tab**bar-tab**mask 标签内容蒙层用于触发点击事件
- pro-tab**bar-tab**icon 标签内部图标，暂时仅支持 iconfont，可选项
- pro-tab**bar-tab**txt 标签 title
- pro-tab\_\_bar-underline 被选中标签下的下划线，高亮
- pro-tab\_\_content 标签内容区容器
- pro-tab\_\_content--animated 是否支持动画
- pro-tab\_\_content-item 标签内容区
- pro-tab\_\_content-item--active 被激活的内容区
- pro-tab\_\_bar-tab--active 被激活的标签

## 基本样式 - tab 在上

```html
<div id="pro-tab-1" class="pro-tab pro-tab--top" style="">
  <div class="pro-tab__bar pro-tab__bar--top ">
    <div class="pro-tab__bar-content">
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="0" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt">First Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--active pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="1" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt">Second Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="2" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Third Tab</span>
      </div>
      <span
        class="pro-tab__bar-underline pro-tab__bar-underline--animated"
        style="left: 50%;"
      ></span>
    </div>
  </div>

  <div
    class="pro-tab__content pro-tab__content--animated"
    style="transform: translate3d(-100%, 0px, 0px); height: auto;"
  >
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 1
      </div>
    </div>
    <div class="pro-tab__content-item pro-tab__content-item--active">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 2
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 3
      </div>
    </div>
  </div>
</div>
```

<q-demo>
<q-tab id="pro-tab-1" :barTabs="['First Tab', 'Second Tab', 'Third Tab']" :defaultActive="1"></q-tab>
</q-demo>

## 基本样式 - tab 在下

```html
<div id="pro-tab-2" class="pro-tab pro-tab--bottom" style="">
  <div class="pro-tab__bar pro-tab__bar--bottom ">
    <div class="pro-tab__bar-content">
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--bottom "
        style="width: 25%;"
      >
        <div id="0" class="pro-tab__bar-tab__mask"></div>
        <i class="pro-tab__bar-tab__icon iconfont icon-slide"></i>
        <span class="pro-tab__bar-tab__txt"> First Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--bottom "
        style="width: 25%;"
      >
        <div id="1" class="pro-tab__bar-tab__mask"></div>
        <i class="pro-tab__bar-tab__icon iconfont icon-slide"></i>
        <span class="pro-tab__bar-tab__txt"> Second Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--active pro-tab__bar-tab--bottom "
        style="width: 25%;"
      >
        <div id="2" class="pro-tab__bar-tab__mask"></div>
        <i class="pro-tab__bar-tab__icon iconfont icon-slide"></i>
        <span class="pro-tab__bar-tab__txt">Third Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--bottom "
        style="width: 25%;"
      >
        <div id="3" class="pro-tab__bar-tab__mask"></div>
        <i class="pro-tab__bar-tab__icon iconfont icon-slide"></i>
        <span class="pro-tab__bar-tab__txt">Fourth Tab</span>
      </div>
      <span
        class="pro-tab__bar-underline pro-tab__bar-underline--animated"
        style="left: 62.5%;"
      ></span>
    </div>
  </div>

  <div
    class="pro-tab__content pro-tab__content--animated"
    style="transform: translate3d(-200%, 0px, 0px); height: auto;"
  >
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 1
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 2
      </div>
    </div>
    <div class="pro-tab__content-item q-tab__content-item--active">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 3
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 4
      </div>
    </div>
  </div>
</div>
```

<q-demo>
<q-tab id="pro-tab-2" :tabIcons="['icon-slide','icon-slide','icon-slide','icon-slide']" :barTabs="['First Tab', 'Second Tab', 'Third Tab', 'Fourth Tab']" :defaultActive="2" tabPosition="bottom"></q-tab>
</q-demo>

## 无动画

```html
<div id="pro-tab-3" class="pro-tab pro-tab--top" style="">
  <div class="pro-tab__bar pro-tab__bar--top ">
    <div class="pro-tab__bar-content">
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 50%;"
      >
        <div id="0" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> First Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--active pro-tab__bar-tab--top "
        style="width: 50%;"
      >
        <div id="1" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Second Tab</span>
      </div>
      <span class="pro-tab__bar-underline" style="left: 75%;"></span>
    </div>
  </div>

  <div
    class="pro-tab__content"
    style="transform: translate3d(-100%, 0px, 0px); height: auto;"
  >
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 1
      </div>
    </div>
    <div class="pro-tab__content-item pro-tab__content-item--active">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 2
      </div>
    </div>
  </div>
</div>
```

<q-demo>
<q-tab id="pro-tab-3" :barTabs="['First Tab', 'Second Tab']" :defaultActive="1" :animated="false"></q-tab>
</q-demo>

## 固定高度

```html
<div id="pro-tab-4" class="pro-tab pro-tab--top" style="">
  <div class="pro-tab__bar pro-tab__bar--top ">
    <div class="pro-tab__bar-content">
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="0" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> First Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--active pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="1" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Second Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="2" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt">Third Tab</span>
      </div>
      <span
        class="pro-tab__bar-underline pro-tab__bar-underline--animated"
        style="left: 50%;"
      ></span>
    </div>
  </div>

  <div
    class="pro-tab__content pro-tab__content--animated"
    style="transform: translate3d(-100%, 0px, 0px); height: 100px;"
  >
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 1
      </div>
    </div>
    <div class="pro-tab__content-item pro-tab__content-item--active">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 2
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 3
      </div>
    </div>
  </div>
</div>
```

<q-demo>
<q-tab id="pro-tab-4" :barTabs="['First Tab', 'Second Tab', 'Third Tab']" :defaultActive="1" contentHeight="100px"></q-tab>
</q-demo>

## tab 个数超出界面宽度

```html
<div id="pro-tab-5" class="pro-tab pro-tab--top" style="">
  <div class="pro-tab__bar pro-tab__bar--top ">
    <div class="pro-tab__bar-content">
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 25%;"
      >
        <div id="0" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt">First Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--active pro-tab__bar-tab--top "
        style="width: 25%;"
      >
        <div id="1" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Second Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 25%;"
      >
        <div id="2" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Third Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 25%;"
      >
        <div id="3" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Fourth Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 25%;"
      >
        <div id="4" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Fifth Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 25%;"
      >
        <div id="5" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt"> Sixth Tab</span>
      </div>
      <span
        class="pro-tab__bar-underline pro-tab__bar-underline--animated"
        style="left: 37.5%;"
      ></span>
    </div>
  </div>

  <div
    class="pro-tab__content pro-tab__content--animated"
    style="transform: translate3d(-100%, 0px, 0px); height: 100px;"
  >
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 1
      </div>
    </div>
    <div class="pro-tab__content-item pro-tab__content-item--active">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 2
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 3
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 4
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 5
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 6
      </div>
    </div>
  </div>
</div>
```

<q-demo>
<q-tab id="pro-tab-5" :barTabs="['First Tab', 'Second Tab', 'Third Tab', 'Fourth Tab', 'Fifth Tab', 'Sixth Tab']" :defaultActive="1" :maxCount="4" contentHeight="100px"></q-tab>
</q-demo>


## 自定义tab颜色
```html
<div id="pro-tab-6" class="pro-tab pro-tab--top" style="">
  <div class="pro-tab__bar pro-tab__bar--top ">
    <div class="pro-tab__bar-content">
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="0" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt" style="color:'#4071ff'"> First Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--active pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="1" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt" style="color:'#4071ff'"> Second Tab</span>
      </div>
      <div
        class="pro-tab__bar-tab pro-tab__bar-tab--top "
        style="width: 33.3333%;"
      >
        <div id="2" class="pro-tab__bar-tab__mask"></div>
        <span class="pro-tab__bar-tab__txt" style="color:'#4071ff'">Third Tab</span>
      </div>
      <span
        class="pro-tab__bar-underline pro-tab__bar-underline--animated"
        style="left: 50%;background-color:'#4071ff'"
        style=""
      ></span>
    </div>
  </div>

  <div
    class="pro-tab__content pro-tab__content--animated"
    style="transform: translate3d(-100%, 0px, 0px); height: 100px;"
  >
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 1
      </div>
    </div>
    <div class="pro-tab__content-item pro-tab__content-item--active">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 2
      </div>
    </div>
    <div class="pro-tab__content-item">
      <div
        style="background-color: #FFF; height: 150px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        Content of tab 3
      </div>
    </div>
  </div>
</div>
```

<q-demo>
<q-tab id="pro-tab-6" :barTabs="['First Tab', 'Second Tab', 'Third Tab']" :defaultActive="1" contentHeight="100px" :color="'#4071ff'"></q-tab>
</q-demo>
