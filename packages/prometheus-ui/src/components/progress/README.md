# progress

进度条，包含两种形式

- 外部操控进度的进度条
- 自动上涨的进度条

> 默认颜色 <q-color color="#93A7FF"/>`#93A7FF`  
> 成功颜色 <q-color color="#13BF63"/>`#13BF63`  
> 进度通过 `style="width: 25%;"`控制

## DEMO

<q-demo>
  <div calss="pro-progress">
    <h3 class="pro-progress__tip text-right">1/4</h3>
    <div class="pro-progress__outer">
      <div class="pro-progress__bar" style="width: 25%;"></div>
    </div>
  </div>
  <div class="pro-progress pro-progress--success">
    <h3 class="pro-progress__tip text-right">完成</h3>
    <div class="pro-progress__outer">
      <div class="pro-progress__bar" style="width: 100%;"></div>
    </div>
  </div>
  <div class="pro-progress">
    <h3 class="pro-progress__tip text-right">3/4</h3>
    <div class="pro-progress__outer">
      <div class="pro-progress__bar" style="width: 75%;"></div>
    </div>
  </div>
</q-demo>

```html
<q-demo>
  <div calss="pro-progress">
    <h3 class="pro-progress__tip text-right">1/4</h3>
    <div class="pro-progress__outer">
      <div class="pro-progress__bar" style="width: 25%;"></div>
    </div>
  </div>
  <div class="pro-progress pro-progress--success">
    <h3 class="pro-progress__tip text-right">完成</h3>
    <div class="pro-progress__outer">
      <div class="pro-progress__bar" style="width: 100%;"></div>
    </div>
  </div>
  <div class="pro-progress">
    <h3 class="pro-progress__tip text-right">3/4</h3>
    <div class="pro-progress__outer">
      <div class="pro-progress__bar" style="width: 75%;"></div>
    </div>
  </div>
</q-demo>
```
