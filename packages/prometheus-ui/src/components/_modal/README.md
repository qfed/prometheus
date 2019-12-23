# modal

基础模态框 Modal 组件，基于父窗体弹出子窗体显示信息

## 1. DOM 结构

- mask: 覆盖在父窗体上的遮罩层，可选是否显示
- wrap: 子窗体 Modal
- document: Modal 文字部分
- title: Modal 标题
- content: Modal 内容
- icon: 关闭 Modal 图标

## 2. 样式

- q-modal: 撑满浏览器的宽高
- q-modal\_\_mask: 高度 100%，设置 z-index 为相对大的数值使其覆盖在父窗体之上
- q-modal\_\_wrap: 相对于 q-modal 居中，即全屏居中，宽度占 72%，高度占 53.7%
- q-modal**document: 白色背景，圆角边框，宽高占父元素 q-modal**wrap 的 100%
- q-modal**document**title: 文字居中
- q-modal**document**content: 文字居中，高度 75%，overflow 设置为 auto
- q-modal**wrap**icon: 图标居中

### 隐藏（默认）modal
```html
<q-demo>
  <div class="q-modal">
    <div class="q-modal__mask"></div>
    <div class="q-modal__wrap">
      <div class="q-modal__document">
        <div class="q-modal__document__title">使用规则</div>
        <div class="q-modal__document__content">我是文案描述</div>
      </div>
      <div class="q-modal__wrap__icon">
        <i class="icon icon-guanbi"></i>
      </div>
    </div>
  </div>
</q-demo>
```

### 显示modal
```html
<q-demo>
  <div class="q-modal q-modal--show">
    <div class="q-modal__mask"></div>
    <div class="q-modal__wrap">
      <div class="q-modal__document">
        <div class="q-modal__document__title">使用规则</div>
        <div class="q-modal__document__content">我是文案描述</div>
      </div>
      <div class="q-modal__wrap__icon">
        <i class="icon icon-guanbi"></i>
      </div>
    </div>
  </div>
</q-demo>
```

<template>
  <q-demo>
    <div id='show-modal-btn' class="q-btn q-btn--default">Show Modal</div>
  </q-demo>
  <div class="q-modal">
    <div class="q-modal__mask"></div>
    <div class="q-modal__wrap">
      <div class="q-modal__document">
        <div class="q-modal__document__title">使用规则</div>
        <div class="q-modal__document__content">我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述我是文案描述</div>
      </div>
      <div class="q-modal__wrap__icon">
        <i class="icon icon-guanbi"></i>
      </div>
    </div>
  </div>
</template>


## API

| Option | Description     |  Type  | Default Value |
| ------ | --------------- | ------ | ------------- |
| height | height of x'x'x | number | 2             |

<script>
  $('body').on('click', '#show-modal-btn', function() {
    $('.q-modal').addClass('q-modal--show')
  });
  $('body').on('click', '.q-modal__wrap__icon', function() {
    $('.q-modal').removeClass('q-modal--show')
  });
</script>