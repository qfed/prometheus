# popover

气泡菜单，提供气泡包裹，内部内容请执行构造

## 基本样式

通过设置 className 配置 popover 箭头的位置
其他相关样式均可传入 className 进行覆盖

##  样式展示

<template>
  <q-demo style="height: 800px; position:relative; background-color: rgba(0,0,0,0.5)">
  <div class="pro-popover with-icon">
    <div class="pro-popover__content">
      <div class="pro-popover__arrow pro-popover__arrow--top-center"></div>
      <div class="pro-popover__item">
        <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
        <span class="pro-popover__item__content">
          功能文案1
        </span>
      </div>
      <div class="pro-popover__item">
        <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
        <span class="pro-popover__item__content">
          功能文案2
        </span>
      </div>
      <div class="pro-popover__item">
        <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
        <span class="pro-popover__item__content">
          功能文案3
        </span>
      </div>
      <div class="pro-popover__item">
        <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
        <span class="pro-popover__item__content">
          功能文案4
        </span>
      </div>
    </div>
  </div>
  <div class="pro-popover no-icon" style="left: 200px">
    <div class="pro-popover__content">
      <div class="pro-popover__arrow pro-popover__arrow--bottom-center"></div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案1
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案2
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案3
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案4
        </span>
      </div>
    </div>
  </div>
  <div class="pro-popover no-icon" style="top: 300px;">
    <div class="pro-popover__content">
      <div class="pro-popover__arrow pro-popover__arrow--top-right"></div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案1
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案2
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案3
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案4
        </span>
      </div>
    </div>
  </div>
  <div class="pro-popover no-icon" style="left: 200px; top: 300px;">
    <div class="pro-popover__content">
      <div class="pro-popover__arrow pro-popover__arrow--bottom-right"></div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案1
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案2
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案3
        </span>
      </div>
      <div class="pro-popover__item">
        <span class="pro-popover__item__content">
          功能文案4
        </span>
      </div>
    </div>
  </div>
</q-demo>
</template>

```html
<div class="pro-popover with-icon">
  <div class="pro-popover__content">
    <div class="pro-popover__arrow pro-popover__arrow--top-center"></div>
    <div class="pro-popover__item">
      <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
      <span class="pro-popover__item__content">
        功能文案1
      </span>
    </div>
    <div class="pro-popover__item">
      <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
      <span class="pro-popover__item__content">
        功能文案2
      </span>
    </div>
    <div class="pro-popover__item">
      <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
      <span class="pro-popover__item__content">
        功能文案3
      </span>
    </div>
    <div class="pro-popover__item">
      <i class="pro-popover__icon iconfont icon-slide" style="font-size: 22px"></i>
      <span class="pro-popover__item__content">
        功能文案4
      </span>
    </div>
  </div>
</div>

<div class="pro-popover no-icon" style="left: 200px">
  <div class="pro-popover__content">
    <div class="pro-popover__arrow pro-popover__arrow--bottom-center"></div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案1
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案2
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案3
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案4
      </span>
    </div>
  </div>
</div>

<div class="pro-popover no-icon" style="top: 500px;">
  <div class="pro-popover__content">
    <div class="pro-popover__arrow pro-popover__arrow--top-right"></div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案1
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案2
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案3
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案4
      </span>
    </div>
  </div>
</div>

<div class="pro-popover no-icon" style="left: 200px; top: 500px;">
  <div class="pro-popover__content">
    <div class="pro-popover__arrow pro-popover__arrow--bottom-right"></div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案1
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案2
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案3
      </span>
    </div>
    <div class="pro-popover__item">
      <span class="pro-popover__item__content">
        功能文案4
      </span>
    </div>
  </div>
</div>
```
