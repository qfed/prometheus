# action-sheet
弹出底部弹窗

## DOM

<template>
  <q-demo>
    <div style="background-color: rgba(0, 0, 0, 0.6);display: flex;justify-content: center;padding: 15px">
      <div class="pro-action-sheet">
        <div class="pro-action-sheet__hd">
          <div class="pro-action-sheet__hd__title">标题单行</div>
          <div class="pro-action-sheet__hd__close"></div>
        </div>
        <div class="pro-action-sheet__bd">
          <div class="pro-action-sheet__bd__item">操作一</div>
          <div class="pro-action-sheet__bd__item">操作二</div>
          <div class="pro-action-sheet__bd__item">操作三</div>
        </div>
        <div class="pro-action-sheet__ft">
          <a href="javascript:;" class="pro-action-sheet__btn q-action-sheet__btn--default">取消</a>
        </div>
      </div>
    </div>
  </q-demo>
</template>

```html
    <div class="pro-action-sheet">
      <div class="pro-action-sheet__hd">
        <div class="pro-action-sheet__hd__title">标题单行</div>
        <div class="pro-action-sheet__hd__close">*</div>
      </div>
      <div class="pro-action-sheet__bd">
        <div class="pro-action-sheet__bd__item">操作一</div>
        <div class="pro-action-sheet__bd__item">操作二</div>
        <div class="pro-action-sheet__bd__item">操作三</div>
      </div>
      <div class="pro-action-sheet__ft">
        <a href="javascript:;" class="pro-action-sheet__btn q-action-sheet__btn--default">取消</a>
      </div>
    </div>
```