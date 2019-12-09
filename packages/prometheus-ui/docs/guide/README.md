---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->

# 设计

## 颜色 <span style="fontSize: 15px"> / </span><span style="color: #999999; fontSize: 15px;">主色与辅色为变量</span>

<div style="display: flex; height: 380px; color: #fff; fontSize: 20px; lineHeight: 46px">
  <div style="width: 49%; backgroundColor: #4071FF; padding: 20px; marginRight: 2%">
    <div style="color: #fff; borderBottom: 2px solid #fff; width: 50px; textAlign: center">主色</div>
    <div>#4071FF</div>
  </div>
  <div style="width: 49%;">
    <div style="height: 50%; backgroundColor: #FF7B42; marginBottom: 2%; padding: 20px">
      <div style="color: #fff; borderBottom: 2px solid #fff; width: 50px; textAlign: center">辅色</div>
      <div>#FF7B42</div>
    </div>
    <div style="height: 24%; backgroundColor: #F4333C; marginBottom: 2%; display: flex; justify-content: space-between; padding: 20px">
      <div style="color: #fff; lineHeight: 30px; borderBottom: 2px solid #fff; width: 50px; textAlign: center">辅色</div>
      <div>#FF7B42</div>
    </div>
    <div style="height: 23%; display: flex; justify-content: space-between; fontSize: 12px; textAlign: center">
      <div style="backgroundColor: #333; width: 19%; paddingTop: 15%; textAlign: center">#333333</div>
      <div style="backgroundColor: #666; width: 19%; paddingTop: 15%; textAlign: center">#666666</div>
      <div style="backgroundColor: #999; width: 19%; paddingTop: 15%; textAlign: center">#999999</div>
      <div style="backgroundColor: #ccc; width: 19%; paddingTop: 15%; color: #222; textAlign: center">#cccccc</div>
      <div style="backgroundColor: #eee; width: 19%; paddingTop: 15%; color: #222; textAlign: center">#eeeeee</div>
    </div>
  </div>
</div>

## 颜色使用场景 <span style="fontSize: 15px"> / </span><span style="color: #999999; fontSize: 15px;">主色与辅色为变量</span>

<style>
.t-color th {
  color: #999;
  font-size: 9px;
  line-height: 20px;
  text-align: center;
}
.t-color td {
  color: #222;
  font-size: 9px;
  line-height: 18px;
  padding: 10px 20px;
}
</style>
<table class="t-color">
  <tr>
    <th>颜色</th>
    <th>色值</th>
    <th>用途</th>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #4071FF"></div>
    </td>
    <td>#4071FF</td>
    <td>主色：用于按钮背景/icon/大面积背景/导航条背景/tab文本等</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #FF7B42"></div>
    </td>
    <td>#FF7B42</td>
    <td>辅色：用于数字字体金额/重点提示突出文本等</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #F4333C"></div>
    </td>
    <td>#F4333C</td>
    <td>辅色：用于错误信息提示/警示色</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #333333"></div>
    </td>
    <td>#333333</td>
    <td>辅色：标题/输入内容/重要信息文字/切换标签栏</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #666666"></div>
    </td>
    <td>#666666</td>
    <td>辅色：正文二级文本</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #999999"></div>
    </td>
    <td>#999999</td>
    <td>辅色：正文三级文本/表单箭头颜色/提示信息文本/说明文本等</td>
  </tr><tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #cccccc"></div>
    </td>
    <td>#cccccc</td>
    <td>辅色：用户表单右侧输入文字</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #eeeeee"></div>
    </td>
    <td>#eeeeee</td>
    <td>辅色：分隔线颜色</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #f9f9f9"></div>
    </td>
    <td>#f9f9f9</td>
    <td>辅色：所有默认背景色</td>
  </tr>
</table>

## 通用字体 <span style="fontSize: 15px"> / </span><span style="color: #999999; fontSize: 15px;">通用字体</span>

<style>
.t-font th {
  color: #999;
  font-size: 9px;
  line-height: 20px;
  text-align: center;
}
.t-font td {
  padding: 10px 20px;
}
</style>
<table class="t-font">
  <tr>
    <th>大小</th>
    <th>样式</th>
    <th>用途</th>
  </tr>
  <tr style="fontSize: 28px; fontWeight: 400">
    <td>56px</td>
    <td>Regular</td>
    <td>用于登录注册靠左大标题</td>
  </tr>
  <tr style="fontSize: 18px; fontWeight: 500">
    <td>36px</td>
    <td>Medium</td>
    <td>用于titlebar标题/弹窗标题/按钮文本</td>
  </tr>
  <tr style="fontSize: 16px; fontWeight: 400">
    <td>32px</td>
    <td>Regular</td>
    <td>用于商品标题/表单文本/表单输入</td>
  </tr>
  <tr style="fontSize: 14px; fontWeight: 400">
    <td>28px</td>
    <td>Regular</td>
    <td>用于正文、二级文本等</td>
  </tr>
  <tr style="fontSize: 12px; fontWeight: 400">
    <td>24px</td>
    <td>Regular</td>
    <td>用于三级文本/时间显示/</td>
  </tr>
  <tr style="fontSize: 10px; fontWeight: 400">
    <td>20px</td>
    <td>Regular</td>
    <td>用于标签、提示信息文本等</td>
  </tr>
</table>

## 字体颜色 <span style="fontSize: 15px"> / </span><span style="color: #999999; fontSize: 15px;">应用于全局</span>

<style>
.t-color th {
  color: #999;
  font-size: 9px;
  line-height: 20px;
  text-align: center;
}
.t-color td {
  padding: 10px 20px;
}
</style>
<table class="t-color">
  <tr>
    <th>颜色</th>
    <th>色值</th>
    <th>用途</th>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #333"></div>
    </td>
    <td>#333333</td>
    <td>主色：用于按钮、重点突出文本等</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #666"></div>
    </td>
    <td>#666666</td>
    <td>主色：用于按钮、重点突出文本等</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #999"></div>
    </td>
    <td>#999999</td>
    <td>主色：用于按钮、重点突出文本等</td>
  </tr>
  <tr>
    <td>
      <div style="width: 20px; height: 20px; backgroundColor: #ccc"></div>
    </td>
    <td>#CCCCCC</td>
    <td>主色：用于按钮、重点突出文本等</td>
  </tr>
</table>

## 行高 <span style="fontSize: 15px"> / </span><span style="color: #999999; fontSize: 15px;">通用字体</span>

字体行高为字号的1.5倍 <span style="color: #999; fontSize: 12px">例如：</span>趣店设计 <span style="color: #999; fontSize: 12px">（字号：32px 行高：48px）</span>

## 间距与圆角 <span style="fontSize: 15px"> / </span><span style="color: #999999; fontSize: 15px;">通用字体</span>

左右间距为30px；主间距为2的倍数；圆角为2的倍数。
<div style="color: #F4333C; fontSize: 12px">注释：实际出现单数间距或者单数圆角的标注，以 +1px 方式解决</div>

<!-- ## 主题变量

```less
//
// Variables
// --------------------------------------------------
//- Colors （optional） some description
//- Scaffolding
//- Typography

//== Colors
//
//## ）


@brand-primary:         #FA6C41;//
@brand-nav-bg:          #2E2E4D;
@brand-form-title:      #B7B7C7;
@barnd-bg:              #F0F0FA;
// 下面的都待定
// @brand-success:         #3BB62A;
// @brand-info:            #fef5de;
// @brand-warning:         #f0ad4e;
// @brand-danger:          #D3350E;




//== Scaffolding
//
//## Settings for some of the most global styles.

// @bg-:    linear-gradient(45deg,#FA6C41,#FAA264);
//** Background color for `<body>`.
@body-bg:               #fff;

//** 标题/输入内容/文本Navbar当前状态/重要信息文字/切换标签栏
@font-color-primary:            #333;
//** tab文字/文本/正文二级文本状态
@font-color-normal:            #666;
//** 用户表单/正文三级文本/表单箭头颜色
@font-color-sm:            #999;
//** #cccccc  用户表单右侧输入/说明文字
@font-color-sm-x:            #ccc;

@font-color-sm-xx:            #e6e6e6;
//** Global text color on `<body>`.
@text-color:            @font-color-primary;

//border 边框颜色
@border-color:            #e6e6e6;





//== Typography
//
//## Font, line-height, and color for body text, headings, and more.

@font-family-sans-serif:  "PingFangSC-Regular", "sans-serif";
@font-family-base:        @font-family-sans-serif;
//** 基本单位所以之后涉及到长宽字体大小用 16*@px 的方式为佳,但是感觉也不会有需要变化的时候真的需要变的还是一个正则也就把px 都替换为 @px了
@px:                       1px;
@font-size-base:           14*@px;

@font-size-h1:            18*@px;
@font-size-h2:            16px;
@font-size-h3:            14px; 
@font-size-h4:            13px;
@font-size-h5:            12px;
@font-size-h6:            10px;

//** Unit-less `line-height` for use in components like buttons.
@line-height-base:        1.428571429; // 20/14
//** Computed "line-height" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.
@line-height-computed:    floor((@font-size-base * @line-height-base)); // ~20px


//== Components
//
//## Define common padding and border radius sizes and more. 
// 左右间距12  主间距为6的倍数
// radius 2的倍数
// 
@padding-base:              12px;
@padding-small:             6px;
@padding-large:             18px;

@space-3:                   3px;
@space-6:                   6px;
@space-9:                   9px;
@space-12:                  12px;
@space-18:                  18px;
@space-24:                  24px;
@space-30:                  30px;

@border-radius-base:        8px;
@border-radius-large:       12px;
@border-radius-small:       4px;

```

## 工具类

```less
.clearfix {
  .clearfix();
}

.pull-right {
  float: right !important;
}

.pull-left {
  float: left !important;
}

// Display flex
// -------------------------
.flex {
  display: flex !important;
}

// Toggling content
// -------------------------

// Note: Deprecated .hide in favor of .hidden or .sr-only (as appropriate) in v3.0.1
.hide {
  display: none !important;
}

.show {
  display: block !important;
}

.invisible {
  visibility: hidden;
}

// Hide from screenreaders and browsers
//
// Credit: HTML5 Boilerplate

.hidden {
  display: none !important;
  visibility: hidden !important;
}

// For Affix plugin
// -------------------------

.affix {
  position: fixed;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}
h1,
h2,
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

h1,
.h1 {
  font-size: @font-size-h1;
}
h2,
.h2 {
  font-size: @font-size-h2;
}
h3,
.h3 {
  font-size: @font-size-h3;
}
h4,
.h4 {
  font-size: @font-size-h4;
}
h5,
.h5 {
  font-size: @font-size-h5;
}
h6,
.h6 {
  font-size: @font-size-h6;
}

// Body text
// -------------------------

p {
  margin: 0 0;
}
//b brand
.fc-b,
.font-color-b {
  color: @brand-primary;
}
.fc-3,
.font-color-3 {
  color: @font-color-3;
}

.fc-6,
.font-color-6 {
  color: @font-color-6;
}
.fc-9,
.font-color-9 {
  color: @font-color-9;
}
.fc-c,
.font-color-c {
  color: @font-color-c;
}

// Alignment
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}

// Transformation
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
``` -->
