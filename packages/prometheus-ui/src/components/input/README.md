# input

基础输入框组件，特殊的list item ，建议配合 list 容器使用

## 1. DOM 结构

1. **q-input：input内容输入**

    - pro-input__label：前缀label（可配图标）
    - pro-input__content：输入框部分（带有清除按钮或右箭头）

2. **q-input--textarea: 段落输入**

    - pro-input__textarea：段落内容
    - pro-input__words：段落字数统计

## 2. 样式（共8种，持续更新~）

<template>
  <q-demo class="q-demo--radio">
  <div class="pro-list">
    <div class="pro-list__hd">1. 默认单项输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content">
          <input class="pro-input__content-input" type="text" placeholder="请输入内容" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">2. 输入文字居右</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content">
          <input class="pro-input__content-input pro-input__content-input--right" type="text" placeholder="请输入内容" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">3. 暗提示</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__content">
          <input class="pro-input__content-input" type="text" placeholder="暗提示" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">4. 多行折行显示</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content">
          <textarea class="pro-input__content-textarea" placeholder="详细信息文案内容过多的情况下可折行显示"></textarea>
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">5. 验证码输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">验证码</div>
        <div class="pro-input__content pro-input__content--code">
          <input class="pro-input__content-input" type="text" placeholder="请输入验证码" />
          <span class="pro-input__content-code">发送验证码</span>
        </div>
      </div>
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">验证码</div>
        <div class="pro-input__content pro-input__content--code">
          <input class="pro-input__content-input" type="text" placeholder="请输入验证码" />
          <span class="pro-input__content-code pro-input__content-code--disabled">55s后重发</span>
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">6. 带图标的label</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label pro-input__label--pic">
          <span class="pro-input__label-pic" style="background-image: url(//img002.qufenqi.com/products/6b/63/6b63320f90b4d53f34adf66a4621f1ac.png)"></span>
          单项输入
        </div>
        <div class="pro-input__content">
          <input class="pro-input__content-input" type="text" placeholder="请输入内容" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">7. 选择输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content pro-input__content--select">
          <input class="pro-input__content-input pro-input__content-input--right" type="text" disabled placeholder="请选择" />
          <i class="pro-input__arrow iconfont icon-arrowRight" style="font-size: 18px"></i>
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">8. 段落输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-input--textarea">
        <textarea class="pro-input__textarea"
          placeholder="请输入内容描述"
        ></textarea>
        <div class="pro-input__words">
            <span class="pro-input__words-tip" style="display: none">当前输入字数超限</span>
          0/200
        </div>
      </div>
    </div>
  </div>
</q-demo>
</template>

```html
<q-demo class="q-demo--radio">
  <div class="pro-list">
    <div class="pro-list__hd">1. 默认单项输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content">
          <input class="pro-input__content-input" type="text" placeholder="请输入内容" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">2. 输入文字居右</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content">
          <input class="pro-input__content-input pro-input__content-input--right" type="text" placeholder="请输入内容" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">3. 暗提示</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__content">
          <input class="pro-input__content-input" type="text" placeholder="暗提示" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">4. 多行折行显示</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content">
          <textarea class="pro-input__content-textarea" placeholder="详细信息文案内容过多的情况下可折行显示"></textarea>
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">5. 验证码输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">验证码</div>
        <div class="pro-input__content pro-input__content--code">
          <input class="pro-input__content-input" type="text" placeholder="请输入验证码" />
          <span class="pro-input__content-code">发送验证码</span>
        </div>
      </div>
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">验证码</div>
        <div class="pro-input__content pro-input__content--code">
          <input class="pro-input__content-input" type="text" placeholder="请输入验证码" />
          <span class="pro-input__content-code pro-input__content-code--disabled">55s后重发</span>
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">6. 带图标的label</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label pro-input__label--pic">
          <span class="pro-input__label-pic" style="background-image: url(//img002.qufenqi.com/products/6b/63/6b63320f90b4d53f34adf66a4621f1ac.png)"></span>
          单项输入
        </div>
        <div class="pro-input__content">
          <input class="pro-input__content-input" type="text" placeholder="请输入内容" />
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">7. 选择输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-list-line">
        <div class="pro-input__label">单项输入</div>
        <div class="pro-input__content pro-input__content--select">
          <input class="pro-input__content-input pro-input__content-input--right" type="text" disabled placeholder="请选择" />
          <i class="pro-input__arrow iconfont icon-arrowRight" style="font-size: 18px"></i>
        </div>
      </div>
    </div>
  </div>

  <div class="pro-list">
    <div class="pro-list__hd">8. 段落输入</div>
    <div class="pro-list__bd">
      <div class="pro-input pro-input--textarea">
        <textarea class="pro-input__textarea"
          placeholder="请输入内容描述"
        ></textarea>
        <div class="pro-input__words">
            <span class="pro-input__words-tip" style="display: none">当前输入字数超限</span>
          0/200
        </div>
      </div>
    </div>
  </div>
</q-demo>
```
