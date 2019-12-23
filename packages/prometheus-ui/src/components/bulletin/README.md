# bulletin

公告栏，在页面顶部的公告、更新通知。支持自定义样式、图标、关闭按钮，通知可滚动显示。

## 1. DOM结构

- q-bulletin：通告栏
- pro-bulletin__icon：通告栏图标
- q-bulletin__content：通告栏文字容器
- q-bulletin__content__animation：通告栏文字滚动部- 
- q-bulletin__close：通告栏关闭按钮

## 2. 样式

- q-bulletin--center：通告栏内容居中
- q-bulletin--scroll：文字内容滚动

<q-demo>
  <div class="pro-bulletin q-bulletin--center">
    <div>
      <div class="pro-bulletin__content">
        <span>有20条内容更新啦</span>
      </div>
    </div>
  </div>

  <div class="pro-bulletin q-bulletin--center">
    <div>
      <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span>321店庆狂降1000万!</span>
      </div>
    </div>
  </div>

  <div class="pro-bulletin q-bulletin--yellow">
    <div>
      <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span>有20条内容更新啦</span>
      </div>
    </div>
    <span class="pro-bulletin__close">关闭</span>
  </div>

  <div class="pro-bulletin q-bulletin--yellow">
    <div>
    <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span>有20条内容更新啦</span>
      </div>
    </div>
    <div class="pro-bulletin__close">
      <i class="iconfont icon-closePop" style="color: #CCC; font-size: 16px"></i>
    </div>
  </div>

  <div class="pro-bulletin q-bulletin--yellow q-bulletin--scroll">
    <div>
      <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span class="pro-bulletin__content__animation">有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！</span>
      </div>
    </div>
    <div class="pro-bulletin__close">
      <i class="iconfont icon-closePop" style="color: #CCC; font-size: 16px"></i>
    </div>
  </div>
</q-demo>

```html
<q-demo>
  <div class="pro-bulletin q-bulletin--center">
    <div>
      <div class="pro-bulletin__content">
        <span>有20条内容更新啦</span>
      </div>
    </div>
  </div>

  <div class="pro-bulletin q-bulletin--center">
    <div>
      <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span>321店庆狂降1000万!</span>
      </div>
    </div>
  </div>

  <div class="pro-bulletin q-bulletin--yellow">
    <div>
      <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span>有20条内容更新啦</span>
      </div>
    </div>
    <span class="pro-bulletin__close">关闭</span>
  </div>

  <div class="pro-bulletin q-bulletin--yellow">
    <div>
    <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span>有20条内容更新啦</span>
      </div>
    </div>
    <div class="pro-bulletin__close">
      <i class="iconfont icon-closePop" style="color: #CCC; font-size: 16px"></i>
    </div>
  </div>

  <div class="pro-bulletin q-bulletin--yellow q-bulletin--scroll">
    <div>
      <i class="iconfont icon-prompt pro-bulletin__icon"></i>
      <div class="pro-bulletin__content">
        <span class="pro-bulletin__content__animation">有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！有20条内容更新啦！</span>
      </div>
    </div>
    <div class="pro-bulletin__close">
      <i class="iconfont icon-closePop" style="color: #CCC; font-size: 16px"></i>
    </div>
  </div>
</q-demo>
```
