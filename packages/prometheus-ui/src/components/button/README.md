# button 

## 1. 样式 

- pro-btn: 设置按钮布局，文字居中、行高和字体大小等
- pro-btn--primary:设置主操作按钮背景色和文字颜色，用lighten设置点击时按钮背景颜色 
- pro-btn--default:设置次操作按钮背景颜色和文字颜色，用lighten设置点击时按钮背景颜色 -
- pro-btn--disabled:设置按钮失效时的样式，透明度设置为50%，点击时背景色和阴影效果不改变

<template>
  <q-demo>
    <div class="component-demo__title">ButtonDemo</div>
    <!-- 大按钮 -->
  <div>
    <div class="pro-btn pro-btn--primary">主要操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--press">主要操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--disabled">主要操作按钮Disabled</div>
    <br />
    <div class="pro-btn pro-btn--bottom">置底操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--bottom pro-btn--press">置底操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--bottom pro-btn--disabled">置底操作按钮Disabled</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--more-content">
      <div class="pro-btn__content">
        <div class="content_text">按钮主标题Normal</div>
        <div class="content_sub-text">按钮副标题文本Normal</div>
      </div>
    </div>
    <br />
    <div class="pro-btn pro-btn--alarm">警告类操作Normal</div>
    <br />
    <div class="pro-btn pro-btn--alarm pro-btn--press">警告类操作Press</div>
    <br />
    <div class="pro-btn pro-btn--alarm pro-btn--disabled">警告类操作Disabled</div>
    <br />
    <div class="pro-btn pro-btn--default">辅助操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--press">辅助操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--disabled">辅助操作按钮Disable</div>
    <br />
  </div>
  <!-- 短按钮 -->
  <div>
    <div class="pro-btn pro-btn--primary pro-btn--medium">短按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--medium pro-btn--press">短按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--medium pro-btn--disabled">短按钮Disable</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--medium pro-btn--more-content">
      <div class="pro-btn__content">
        <div class="content_text">按钮主标题Normal</div>
        <div class="content_sub-text">按钮副标题文本Normal</div>
      </div>
    </div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--medium">短按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--medium pro-btn--press">短按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--medium pro-btn--disabled">短按钮Disable</div>
    <br />
    <div style="display:flex">
      <div class="pro-btn pro-btn--primary pro-btn--small">按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--small pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--small pro-btn--disabled">按钮</div>
    </div>
    <br />
    <div style="display:flex">
      <div class="pro-btn pro-btn--default pro-btn--small">按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--small pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--small pro-btn--disabled">按钮</div>
    </div>
    <br />
    <div style="display:flex">
      <div class="pro-btn pro-btn--primary pro-btn--mini">迷你按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--mini pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--disabled pro-btn--mini">按钮</div>
    </div>
    <br />
    <div style="display:flex">
      <div class="pro-btn pro-btn--default pro-btn--mini">迷你按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--mini pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--mini pro-btn--disabled">按钮</div>
    </div>
    <br />
  </div>

  <!-- 置底按钮 -->
  <div>
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--small">主要操作</div>
    </div>
    <br />
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-btn--bottom-group pro-btn--disabled pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--small">主要操作</div>
    </div>
    <br />
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--medium">主要操作</div>
    </div>
    <br />
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-btn--bottom-group pro-btn--disabled pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--small">主要操作</div>
    </div>
    <br />
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--large">主要操作</div>
    </div>
    <br />
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-btn--bottom-group pro-btn--disabled pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--large">主要操作</div>
    </div>
    <br />
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item pro-bottom--third">次要操作</div>
      <div class="pro-btn pro-btn--bottom-group pro-bottom-group__item pro-bottom-group__main pro-bottom--third">主要操作</div>
    </div>
    <br />
    <div class="pro-bottom-group">
      <div class="pro-btn pro-btn--default pro-bottom-group__item pro-bottom--half">重置</div>
      <div class="pro-btn pro-bottom-group__main pro-btn--primary pro-bottom-group__item pro-bottom--half">确定</div>
    </div>
    <br />
  </div>

  <div>
    <!-- 胶囊按钮 shape='pill' -->
    <div class="pro-btn pro-btn--primary pro-btn--pill">主要操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--pill pro-btn--press">主要操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--pill pro-btn--disabled">主要操作按钮Disable</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--more-content pro-btn--pill">
      <div class="pro-btn__content">
        <div class="content_text">按钮主标题Normal</div>
        <div class="content_sub-text">按钮副标题文本Normal</div>
      </div>
    </div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--pill">辅助操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--pill pro-btn--press">辅助操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--pill pro-btn--disabled">辅助操作按钮Disable</div>
    <br />
  </div>
  </q-demo>
</template>

```html
<q-demo>
    <div class="component-demo__title">ButtonDemo</div>
    <!-- 大按钮 -->
  <div>
    <div class="pro-btn pro-btn--primary">主要操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--press">主要操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--disabled">主要操作按钮Disabled</div>
    <br />

    <div class="pro-btn pro-btn--bottom">置底操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--bottom pro-btn--press">置底操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--bottom pro-btn--disabled">置底操作按钮Disabled</div>
    <br />

    <div class="pro-btn pro-btn--default pro-btn--more-content">
      <div class="pro-btn__content">
        <div class="content_text">按钮主标题Normal</div>
        <div class="content_sub-text">按钮副标题文本Normal</div>
      </div>
    </div>
    <br />

    <div class="pro-btn pro-btn--alarm">警告类操作Normal</div>
    <br />
    <div class="pro-btn pro-btn--alarm pro-btn--press">警告类操作Press</div>
    <br />
    <div class="pro-btn pro-btn--alarm pro-btn--disabled">警告类操作Disabled</div>
    <br />

    <div class="pro-btn pro-btn--default">辅助操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--press">辅助操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--disabled">辅助操作按钮Disable</div>
    <br />
  </div>

  <!-- 短按钮 -->
  <div>
    <div class="pro-btn pro-btn--primary pro-btn--medium">短按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--medium pro-btn--press">短按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--medium pro-btn--disabled">短按钮Disable</div>
    <br />

    <div class="pro-btn pro-btn--default pro-btn--medium pro-btn--more-content">
      <div class="pro-btn__content">
        <div class="content_text">按钮主标题Normal</div>
        <div class="content_sub-text">按钮副标题文本Normal</div>
      </div>
    </div>
    <br />

    <div class="pro-btn pro-btn--default pro-btn--medium">短按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--medium pro-btn--press">短按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--medium pro-btn--disabled">短按钮Disable</div>
    <br />

    <div style="display:flex">
      <div class="pro-btn pro-btn--primary pro-btn--small">按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--small pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--small pro-btn--disabled">按钮</div>
    </div>
    <br />
    <div style="display:flex">
      <div class="pro-btn pro-btn--default pro-btn--small">按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--small pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--small pro-btn--disabled">按钮</div>
    </div>
    <br />

    <div style="display:flex">
      <div class="pro-btn pro-btn--primary pro-btn--mini">迷你按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--mini pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--primary pro-btn--disabled pro-btn--mini">按钮</div>
    </div>
    <br />
    <div style="display:flex">
      <div class="pro-btn pro-btn--default pro-btn--mini">迷你按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--mini pro-btn--press">按钮</div>
      <div class="pro-btn pro-btn--default pro-btn--mini pro-btn--disabled">按钮</div>
    </div>
    <br />
  </div>

  <!-- 置底按钮 -->
  <div>
    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--small">主要操作</div>
    </div>
    <br />

    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-btn--bottom-group pro-btn--disabled pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--small">主要操作</div>
    </div>
    <br />

    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--medium">主要操作</div>
    </div>
    <br />

    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-btn--bottom-group pro-btn--disabled pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--small">主要操作</div>
    </div>
    <br />

    <div class="pro-bottom-group">
        <div class="pro-btn pro-bottom-group__item">
          <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
          <div class="pro-bottom-group__item__text">操作</div>
        </div>
        <div class="pro-btn pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--large">主要操作</div>
      </div>
      <br />

    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item">
        <div style='width: 22px; height: 22px; background-color: #eee; margin: 7px auto 0;'></div>
        <div class="pro-bottom-group__item__text">操作</div>
      </div>
      <div class="pro-btn pro-btn--bottom-group pro-btn--disabled pro-bottom-group__item pro-bottom-group__main pro-bottom-group__main--large">主要操作</div>
    </div>
    <br />

    <div class="pro-bottom-group">
      <div class="pro-btn pro-bottom-group__item pro-bottom--third">次要操作</div>
      <div class="pro-btn pro-btn--bottom-group pro-bottom-group__item pro-bottom-group__main pro-bottom--third">主要操作</div>
    </div>
    <br />

    <div class="pro-bottom-group">
      <div class="pro-btn pro-btn--default pro-bottom-group__item pro-bottom--half">重置</div>
      <div class="pro-btn pro-bottom-group__main pro-btn--primary pro-bottom-group__item pro-bottom--half">确定</div>
    </div>
    <br />
  </div>

  <div>
    <!-- 胶囊按钮 shape='pill' -->
    <div class="pro-btn pro-btn--primary pro-btn--pill">主要操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--pill pro-btn--press">主要操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--primary pro-btn--pill pro-btn--disabled">主要操作按钮Disable</div>
    <br />

    <div class="pro-btn pro-btn--default pro-btn--more-content pro-btn--pill">
      <div class="pro-btn__content">
        <div class="content_text">按钮主标题Normal</div>
        <div class="content_sub-text">按钮副标题文本Normal</div>
      </div>
    </div>
    <br />

    <div class="pro-btn pro-btn--default pro-btn--pill">辅助操作按钮Normal</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--pill pro-btn--press">辅助操作按钮Press</div>
    <br />
    <div class="pro-btn pro-btn--default pro-btn--pill pro-btn--disabled">辅助操作按钮Disable</div>
    <br />
  </div>
  </q-demo>
```