# switch

> 默认颜色 <q-color color="#4dd865"/>`#4dd865`  
> 其他颜色(请用 class 或 style 覆盖.q-switch\_\_v-checkbox 的 background)

## Dom 结构

- pro-switch 是 switch 的包裹容器定位与布局
- pro-switch\_\_v-checkbox::before 负责外边框
- pro-switch\_\_v-checkbox::after 负责内容区域选中填充色

## 样式

### 默认颜色

<q-demo>
  <label class="pro-switch">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch pro-switch--checked">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>

```html
<q-demo>
  <label class="pro-switch">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch pro-switch--checked">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>
```

### 默认禁用状态

<q-demo>
  <label class="pro-switch  pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch  pro-switch--checked pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>

```html
<q-demo>
  <label class="pro-switch  pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch  pro-switch--checked pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>
```

### 其他颜色举例

<q-demo>
  <label class="pro-switch pro-switch--warn ">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch pro-switch--warn pro-switch--checked">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>

```html
<q-demo>
  <label class="pro-switch pro-switch--warn ">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch pro-switch--warn pro-switch--checked">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>
```

### 其他颜色禁用状态举例

<q-demo>
  <label class="pro-switch pro-switch--warn pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch pro-switch--warn pro-switch--checked pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>

```html
<q-demo>
  <label class="pro-switch pro-switch--warn pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
  <label class="pro-switch pro-switch--warn pro-switch--checked pro-switch--disabled">
    <div class="pro-switch__v-checkbox"></div>
  </label>
</q-demo>
```
