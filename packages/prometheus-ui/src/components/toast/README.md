# toast

反馈与提示，用于各类数据交互场景，如请求过程中的 loading，操作成功，警告等

## DOM

<q-demo>
  <div class="pro-popup-demo q-popup-demo--active">
    <div class="pro-toast__container">
      <span style="display: flex; flex-direction: column;">
        <div class="pro-toast">
          <div class="pro-toast__content">验车成功，准备入库</div>
        </div>
        <div class="pro-toast q-toast--withicon">
          <div class="pro-toast__content">
            <i class="pro-toast__icon iconfont icon-selectDownRadio"></i>
            验车成功，准备入库
          </div>
        </div>
        <div class="pro-toast q-toast--withicon">
          <div class="pro-toast__content">
            <i class="pro-toast__icon iconfont icon-closePop"></i>
            验车失败，请尽快联系厂商。
          </div>
        </div>
      </span>
    </div>
  </div>
</q-demo>

# code

```html
<q-demo>
  <div class="pro-popup-demo q-popup-demo--active">
    <div class="pro-toast__container">
      <span>
        <div class="pro-toast">
          <div class="pro-toast__content">验车成功，准备入库</div>
        </div>

        <div class="pro-toast q-toast--withicon">
          <div class="pro-toast__content">
            <i class="pro-toast__icon iconfont icon-selectDownRadio"></i>
            验车成功，准备入库
          </div>
        </div>

        <div class="pro-toast q-toast--withicon">
          <div class="pro-toast__content">
            <i class="pro-toast__icon iconfont icon-closePop"></i>
            验车失败，请尽快联系厂商。
          </div>
        </div>
      </span>
    </div>
  </div>
</q-demo>
```
