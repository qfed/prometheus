# special-page

异常页面，例如异常反馈页和结果页。

## 1. DOM结构

- q-page：结果页
- q-page__wrap：页面内容
- q-page__wrap__img：页面图标
- q-page__wrap__text：非结果页的标题
- q-page__wrap__title：结果页的主标题
- q-page__wrap__sub-title：结果页的副标题
- q-page__bottom：页面底部

## 2. 样式

- q-page--result：结果页

### 异常反馈

<q-demo>
  <div class='pro-page q-page--network'>
    <div class="pro-page__wrap">
      <img class="pro-page__wrap__img" src='http://img002.qufenqi.com/products/d2/cf/d2cf5bb206a138affc4ad9faca22180d.png' />
      <div class="pro-page__wrap__text">找不到网络</div>
    </div>
  </div>
</q-demo>

```html
<q-demo>
  <div class='pro-page q-page--network'>
    <div class="pro-page__wrap">
      <img class="pro-page__wrap__img" src='http://img002.qufenqi.com/products/d2/cf/d2cf5bb206a138affc4ad9faca22180d.png' />
      <div class="pro-page__wrap__text">找不到网络</div>
    </div>
  </div>
</q-demo>
```

### 结果页

<q-demo>
  <div class="pro-page q-page--result">
    <div class="pro-page__wrap">
      <i class="iconfont icon-success q-page__wrap__img"></i>
      <div class="pro-page__wrap__title">操作成功</div>
      <div class="pro-page__wrap__sub-title">内容详情可折行，建议不超过两行</div>
      <div class="pro-bottom-group q-page__bottom">
        <div class="pro-btn q-btn--default q-bottom-group__item q-bottom--half">重置</div>
        <div class="pro-btn q-bottom-group__main q-btn--primary q-bottom-group__item q-bottom--half">确定</div>
      </div>
    </div>
  </div>
</q-demo>

```html
<q-demo>
  <div class="pro-page q-page--result">
    <div class="pro-page__wrap">
      <i class="iconfont icon-success q-page__wrap__img"></i>
      <div class="pro-page__wrap__title">操作成功</div>
      <div class="pro-page__wrap__sub-title">内容详情可折行，建议不超过两行</div>
      <div class="pro-bottom-group q-page__bottom">
        <div class="pro-btn q-btn--default q-bottom-group__item q-bottom--half">重置</div>
        <div class="pro-btn q-bottom-group__main q-btn--primary q-bottom-group__item q-bottom--half">确定</div>
      </div>
    </div>
  </div>
</q-demo>
```