# navBar

导航栏，分为左右中三部分，支持自定义。

## 1. DOM结构

- pro-navbar: 导航栏
- pro-navbar__left: 导航栏左侧
- pro-navbar__title: 导航栏中部
- pro-navbar__right: 导航栏右侧

## 2. 样式

- pro-navbar: 主题色背景导航栏
- pro-navbar--default: default白色背景导航栏

<q-demo>
  <div class="pro-navbar">
    <div class="pro-navbar__left">
      <i class="iconfont icon-navBack" style="font-size: 20px"></i>
    </div>
    <div class="pro-navbar__title">首页</div>
    <div class="pro-navbar__right">保存</div>
  </div>
  <br />
  <div class="pro-navbar pro-navbar--default">
    <div class="pro-navbar__left">
      <i class="iconfont icon-navBack" style="font-size: 20px"></i>
    </div>
    <div class="pro-navbar__title">首页</div>
    <div class="pro-navbar__right">保存</div>
  </div>
  <br />
  <div class="pro-navbar pro-navbar--default">
    <div class="pro-searchbar pro-searchbar--focus">
      <div class="pro-searchbar__input-wrap">
        <div class="pro-searchbar__synthetic">
          <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 20px"></i>
          <span class="pro-searchbar__placeholder">搜索</span>
        </div>
        <input class="pro-searchbar__input" type="text" />
      </div>
    </div>
  </div>
  <br />
  <div class="pro-navbar pro-navbar--default">
    <div class="pro-searchbar pro-searchbar--focus">
      <div class="pro-searchbar__input-wrap">
        <div class="pro-searchbar__synthetic">
          <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 20px"></i>
          <span class="pro-searchbar__placeholder">搜索</span>
        </div>
        <input class="pro-searchbar__input" type="text" />
        <div class="pro-searchbar__clear ">
          <i class=" pro-searchbar__clear__icon icon icon-delete_fill" style="font-size: 20px"></i>
        </div>
      </div>
      <div class="pro-searchbar__cancel">取消</div>
    </div>
  </div>
</q-demo>

```html
<q-demo>
  <div class="pro-navbar">
    <div class="pro-navbar__left">
      <i class="iconfont icon-navBack" style="font-size: 20px"></i>
    </div>
    <div class="pro-navbar__title">首页</div>
    <div class="pro-navbar__right">保存</div>
  </div>
  <br />
  <div class="pro-navbar pro-navbar--default">
    <div class="pro-navbar__left">
      <i class="iconfont icon-navBack" style="font-size: 20px"></i>
    </div>
    <div class="pro-navbar__title">首页</div>
    <div class="pro-navbar__right">保存</div>
  </div>
  <br />
  <div class="pro-navbar pro-navbar--default">
    <div class="pro-searchbar pro-searchbar--focus">
      <div class="pro-searchbar__input-wrap">
        <div class="pro-searchbar__synthetic">
          <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 20px"></i>
          <span class="pro-searchbar__placeholder">搜索</span>
        </div>
        <input class="pro-searchbar__input" type="text" />
      </div>
    </div>
  </div>
  <br />
  <div class="pro-navbar pro-navbar--default">
    <div class="pro-searchbar pro-searchbar--focus">
      <div class="pro-searchbar__input-wrap">
        <div class="pro-searchbar__synthetic">
          <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 20px"></i>
          <span class="pro-searchbar__placeholder">搜索</span>
        </div>
        <input class="pro-searchbar__input" type="text" />
        <div class="pro-searchbar__clear ">
          <i class=" pro-searchbar__clear__icon icon icon-delete_fill" style="font-size: 20px"></i>
        </div>
      </div>
      <div class="pro-searchbar__cancel">取消</div>
    </div>
  </div>
</q-demo>
```
