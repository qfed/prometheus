---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->

# 全局样式

---

## 图标

> 图标的默认大小为 `24*24`现在提供 `.x16,.x24,.x28,.x30,.x36,.x48`来调整图标大小，也就是在 icon 所在 div 加上 class 就 ok 了

<q-demo>
<div class="q-icon-Backlog"></div>
<div class="q-icon-Backlog1"></div>
<div class="q-icon-Backlog2"></div>
<div class="q-icon-Brain"></div>
<div class="q-icon-Brain1"></div>
<div class="q-icon-Customer"></div>
<div class="q-icon-Customer1"></div>
<div class="q-icon-download"></div>
<div class="q-icon-home"></div>
<div class="q-icon-home1"></div>
<div class="q-icon-mail"></div>
<div class="q-icon-my"></div>
<div class="q-icon-my1"></div>
<div class="q-icon-p"></div>
<div class="q-icon-p1"></div>
<div class="q-icon-Profit"></div>
<div class="q-icon-Profit1"></div>
<div class="q-icon-Set"></div>
<div class="q-icon-Set1"></div>
<div class="q-icon-code"></div>
<div class="q-icon-delete"></div>
<div class="q-icon-drop-down"></div>
<div class="q-icon-edit"></div>
<div class="q-icon-fee"></div>
<div class="q-icon-history"></div>
<div class="q-icon-light"></div>
<div class="q-icon-More"></div>
<div class="q-icon-refres-index-b"></div>
<div class="q-icon-replace"></div>
<div class="q-icon-Return"></div>
<div class="q-icon-rotate"></div>
<div class="q-icon-scan"></div>
<div class="q-icon-search"></div>
<div class="q-icon-Setup"></div>
<div class="q-icon-trans"></div>
<div class="q-icon-"></div>
<div class="q-icon-alert-index-o"></div>
<div class="q-icon-category"></div>
<div class="q-icon-Choice"></div>
<div class="q-icon-close"></div>
<div class="q-icon-eye-index-c"></div>
<div class="q-icon-eye-index-o"></div>
<div class="q-icon-pic"></div>
<div class="q-icon-r"></div>
<div class="q-icon-Scavenging"></div>
<div class="q-icon-Select"></div>
<div class="q-icon-sle-d"></div>
<div class="q-icon-store"></div>
<div class="q-icon-switch"></div>
<div class="q-icon-w"></div>
<div class="q-icon-rectangle2"></div>
</q-demo>

```html
   <!-- 内容太多简单放几个例子 -->
   <div class="q-icon-Choice"></div>
   <div class="q-icon-close"></div>
   <div class="q-icon-eye-index-c"></div>
   <div class="q-icon-eye-index-o"></div>
```

## 字体大小

> 大白的默认字体大小为`14px`,六种字体大小 h1-h6,提供俩种封装 h*(标签 h1,h2,h3...) 和 .h*（class .h1,.h2,.h3...）

- h* 和 .h* 都会限定文字大小
- h\*(标签)会根据设计加上 margin,font-weight

<q-demo>
   <h1>h1 18px 用于titlebar标题文案字体大小</h1>
   <div class="h2">h2 16px 用于重点突出二级信息/城市选择</div>
   <h3>h3 14px 用于列表/表单/正文/Navbar等</h3>
   <div class="h4">h4 13px 用于车标题/导航下拉等字体大小</div>
   <h5>h5 12px 用于车信息辅助文字/订单id、时间 卡片状态/说明文案等</h5>
   <div class="h6">h6 10px 用于标签文字大小</div>
   <p>normal 14px 默认正文大小</p>
 </q-demo>

```html
   <h1>h1 18px 用于titlebar标题文案字体大小</h1>
   <div class="h2">h2 16px 用于重点突出二级信息/城市选择</div>
   <h3>h3 14px 用于列表/表单/正文/Navbar等</h3>
   <div class="h4">h4 13px 用于车标题/导航下拉等字体大小</div>
   <h5>h5 12px 用于车信息辅助文字/订单id、时间 卡片状态/说明文案等</h5>
   <div class="h6">h6 10px 用于标签文字大小</div>
   <p>normal 14px 默认正文大小</p>
```

## 默认行高

> 大白的默认行高是`20/14`,所以两行默认大小的文字之间的空隙为`6px`

<q-demo>
<p>第一行</p>
<p>第二行与第一行之间默认间隙6px</p>
</q-demo>

```html
<p>第一行</p>
<p>第二行与第一行之间默认间隙6px</p>
```

## 字体颜色

- `#33333 .fc-3` 标题/输入内容/文本 Navbar 当前状态/重要信息文字/切换标签栏
- `#666666 .fc-6` tab 文字/文本/正文二级文本状态
- `#999999 .fc-9` 用户表单/正文三级文本/表单箭头颜色
- `#cccccc .fc-c` 用户表单右侧输入/说明文字
- `#FA6C41 .fc-b` 主题颜色

<q-demo>
  <div class="color-wrap">
  <div style="background: #333">#333333</div>
  <div style="background: #666">#666666</div>
  <div style="background: #999">#999999</div>
  <div style="background: #ccc">#cccccc</div>
  <div style="background: #FA6C41"> #FA6C41</div>

  </div>
</q-demo>

<q-demo>
  <p class="fc-3">#333333 .fc-3 标题/输入内容/文本Navbar当前状态/重要信息文字/切换标签栏</p>
  <p class="fc-6">#666666 .fc-6 tab文字/文本/正文二级文本状态</p>
  <p class="fc-9">#999999 .fc-9 用户表单/正文三级文本/表单箭头颜色</p>
  <p class="fc-c">#cccccc .fc-c 用户表单右侧输入/说明文字</p>
  <p class="fc-b">.fc-b 主题颜色</p>
</q-demo>

```html
  <p class="fc-3">#333333 .fc-3 标题/输入内容/文本Navbar当前状态/重要信息文字/切换标签栏</p>
  <p class="fc-6">#666666 .fc-6 tab文字/文本/正文二级文本状态</p>
  <p class="fc-9">#999999 .fc-9 用户表单/正文三级文本/表单箭头颜色</p>
  <p class="fc-c">#cccccc .fc-c 用户表单右侧输入/说明文字</p>
  <p class="fc-b">#FA6C41 .fc-b 主题颜色</p>
```

## 主体色

- #2E2E4D 为导航栏背景色
- #FA6C41 为中端主色/按钮可点颜色/突出重要文字色(如金额等)
- #FA6C41-#FAA264 渐变色主要用于底部按钮高亮状态
- #B7B7C7 用户表单标题色
- #F0F0FA 背景色
- #D8D8D8 分割线颜色

<q-demo>
  <div class="color-wrap">
  <div style="background: #2E2E4D">#2E2E4D</div>
  <div style="background: #FA6C41">#FA6C41</div>
  <div style="background-image: linear-gradient(45deg,#ffaa00,#ffd5">#ffaa00,#ffd500</div>
  <div style="background: #B7B7C7">#B7B7C7</div>
  <div style="background: #F0F0FA">#F0F0FA</div>
  <div style="background: #D8D8D8">#D8D8D8</div>
  </div>
</q-demo>

```html
    <div style="background: #2E2E4D">#2E2E4D</div>
    <div style="background: #FA6C41">#FA6C41</div>
    <div style="background-image: linear-gradient(45deg,#ffaa00,#ffd500)">#ffa#ffd500</div>
    <div style="background: #B7B7C7">#B7B7C7</div>
    <div style="background: #F0F0FA">#F0F0FA</div>
    <div style="background: #D8D8D8">#D8D8D8</div>
```

## 间距与圆角

- 左右间距为 12 主间距为 6 的倍数
- 圆角为 2 的倍数

```less
@padding-base: 12px;
@padding-small: 6px;
@padding-large: 18px;

@space-3: 3px;
@space-6: 6px;
@space-9: 9px;
@space-12: 12px;
@space-18: 18px;
@space-24: 24px;
@space-30: 30px;

@border-radius-base: 8px;
@border-radius-large: 12px;
@border-radius-small: 4px;
```
