# dialog

## 对话框

<template>
  <q-demo>
    <div style="background-color: rgba(0, 0, 0, 0.6);display: flex;justify-content: center;padding: 15px">
      <div class="pro-dialog">
        <div class="pro-dialog__hd">
          <div class="pro-dialog__hd__close"></div>
          <div class="pro-dialog__hd__title">标题单行</div>
        </div>
        <div class="pro-dialog__bd">
          <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
        </div>
        <div class="pro-dialog__ft">
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
            >取消</a
          >
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
            >确定</a
          >
        </div>
      </div>
    </div>
  </q-demo>
</template>


```html  
    <div class="pro-dialog">
      <div class="pro-dialog__hd">
        <div class="pro-dialog__hd__image"></div>
        <div class="pro-dialog__hd__close"></div>
        <div class="pro-dialog__hd__title">标题单行</div>
      </div>
      <div class="pro-dialog__bd">
        <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
      </div>
      <div class="pro-dialog__ft">
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
          >取消</a
        >
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
          >确定</a
        >
      </div>
    </div>
```

## 带图标对话框

<template>
  <q-demo>
    <div style="background-color: rgba(0, 0, 0, 0.6);display: flex;justify-content: center;padding: 15px">
      <div class="pro-dialog">
        <div class="pro-dialog__hd">
          <div class="pro-dialog__hd__image q-dialog__hd__image--icon">
            <img class="imgicon" src="http://img003.qufenqi.com/products/2a/23/2a239eb4107034457211bada876b98c3.jpeg" />
          </div>
          <div class="pro-dialog__hd__close"></div>
          <div class="pro-dialog__hd__title">标题单行</div>
        </div>
        <div class="pro-dialog__bd">
          <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
        </div>
        <div class="pro-dialog__ft">
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
            >取消</a
          >
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
            >确定</a
          >
        </div>
      </div>
    </div>
  </q-demo>
</template>


```html
    <div class="pro-dialog">
      <div class="pro-dialog__hd">
        <div class="pro-dialog__hd__image q-dialog__hd__image--icon">
          <img src="http://img003.qufenqi.com/products/2a/23/2a239eb4107034457211bada876b98c3.jpeg" />
        </div>
        <div class="pro-dialog__hd__close"></div>
        <div class="pro-dialog__hd__title">标题单行</div>
      </div>
      <div class="pro-dialog__bd">
        <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
      </div>
      <div class="pro-dialog__ft">
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
          >取消</a
        >
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
          >确定</a
        >
      </div>
    </div>
```

## 带图片对话框

<template>
  <q-demo>
    <div style="background-color: rgba(0, 0, 0, 0.6);display: flex;justify-content: center;padding: 15px">
      <div class="pro-dialog">
        <div class="pro-dialog__hd">
          <div class="pro-dialog__hd__image q-dialog__hd__image--image">
            <img src="http://img003.qufenqi.com/products/2a/23/2a239eb4107034457211bada876b98c3.jpeg" />
          </div>
          <div class="pro-dialog__hd__close"></div>
          <div class="pro-dialog__hd__title">标题单行</div>
        </div>
        <div class="pro-dialog__bd">
          <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
        </div>
        <div class="pro-dialog__ft">
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
            >取消</a
          >
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
            >确定</a
          >
        </div>
      </div>
    </div>
  </q-demo>
</template>


```html
    <div class="pro-dialog">
      <div class="pro-dialog__hd">
        <div class="pro-dialog__hd__image q-dialog__hd__image--image">
          <img src="http://img003.qufenqi.com/products/2a/23/2a239eb4107034457211bada876b98c3.jpeg" />
        </div>
        <div class="pro-dialog__hd__close"></div>
        <div class="pro-dialog__hd__title">标题单行</div>
      </div>
      <div class="pro-dialog__bd">
        <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
      </div>
      <div class="pro-dialog__ft">
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
          >取消</a
        >
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
          >确定</a
        >
      </div>
    </div>
```

## 大图片对话框

<template>
  <q-demo>
    <div style="background-color: rgba(0, 0, 0, 0.6);display: flex;justify-content: center;padding: 15px">
      <div class="pro-dialog">
        <div class="pro-dialog__hd">
          <div class="pro-dialog__hd__image q-dialog__hd__image--bigImage">
            <img src="//img003.qufenqi.com/products/a1/1c/a11ccda06f1057df669c307d109f167b.png" />
          </div>
          <div class="pro-dialog__hd__close"></div>
          <div class="pro-dialog__hd__title">标题单行</div>
        </div>
        <div class="pro-dialog__bd">
          <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
        </div>
        <div class="pro-dialog__ft">
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
            >取消</a
          >
          <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
            >确定</a
          >
        </div>
      </div>
    </div>
  </q-demo>
</template>


```html
    <div class="pro-dialog">
      <div class="pro-dialog__hd">
        <div class="pro-dialog__hd__image q-dialog__hd__image--bigImage">
          <img src="//img003.qufenqi.com/products/a1/1c/a11ccda06f1057df669c307d109f167b.png" />
        </div>
        <div class="pro-dialog__hd__close"></div>
        <div class="pro-dialog__hd__title">标题单行</div>
      </div>
      <div class="pro-dialog__bd">
        <div class="pro-dialog__bd__content">告知当前状态，信息和解决方案，不要超过两行</div>
      </div>
      <div class="pro-dialog__ft">
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--default"
          >取消</a
        >
        <a href="javascript:;" class="pro-dialog__btn q-dialog__btn--primary"
          >确定</a
        >
      </div>
    </div>
```