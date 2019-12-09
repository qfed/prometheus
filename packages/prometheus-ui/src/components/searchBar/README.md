# search-bar

> 一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

## 规则

- 应该在 placeholder 里提供提示文字，提醒用户输入相关内容，比如：搜索。
- 用户输入实时会触发更新
- 可以通过取消按钮让 searchbar 失去焦点
- 可以通过清除按钮清除输入内容
- 开启模糊搜索时会自动匹配与记忆用户每次输入内容,最多匹配五个

## DOM

- pro-searchbar 是 searchbar 的包裹容器定位与布局
- pro-searchbar\_\_synthetic 输入图标与 placeholder 的包裹区域，里面 i 标签对应图标内容，placeholder 对应提示内容
- pro-searchbar\_\_input 输入内容区域
- pro-searchbar\_\_cancel 取消输入按钮，input 获取焦点时出现
- pro-searchbar\_\_clear 清除内容区域按钮，input 获取焦点时出现
- pro-search-list 模糊搜索区域
- pro-search-list\_\_item 模糊搜索项

## 样式

<q-demo>
  <h1>普通状态</h1>
  <div class="pro-searchbar">
    <div class="pro-searchbar__input-wrap">
      <div class="pro-searchbar__synthetic">
        <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 17px"></i>
        <span class="pro-searchbar__placeholder">搜索</span>
      </div>
      <input class="pro-searchbar__input" type="text" />
    </div>
    <div class="pro-searchbar__cancel">取消</div>
  </div>
  <h1>获取焦点之后的状态</h1>
  <div class="pro-searchbar pro-searchbar--focus">
    <div class="pro-searchbar__input-wrap">
      <div class="pro-searchbar__synthetic">
        <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 17px"></i>
        <span class="pro-searchbar__placeholder">搜索</span>
      </div>
      <input class="pro-searchbar__input" type="text" />
      <div class="pro-searchbar__clear ">
        <i class=" pro-searchbar__clear__icon icon icon-delete_fill" style="font-size: 17px"></i>
      </div>
    </div>
    <div class="pro-searchbar__cancel">取消</div>
  </div>
  <h1>显示搜索结果状态</h1>
  <div class="pro-searchbar pro-searchbar--focus">
    <div class="pro-searchbar__input-wrap">
      <div class="pro-searchbar__synthetic">
        <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 17px"></i>
      </div>
      <input
        class="pro-searchbar__input"
        type="text"
        value="fruit"
      />
      <div class="pro-searchbar__clear ">
        <i class="pro-searchbar__clear__icon iconfont icon-failure" style="font-size: 17px"></i>
      </div>
    </div>
    <div class="pro-searchbar__cancel">取消</div>
  </div>
  <div class="pro-search-list">
    <div class="pro-search-list__item">apple</div>
    <div class="pro-search-list__item">banana</div>
    <div class="pro-search-list__item">coco</div>
    <div class="pro-search-list__item">pineapple</div>
  </div>
</q-demo>

```html
<q-demo>
  <h1>普通状态</h1>
  <div class="pro-searchbar">
    <div class="pro-searchbar__input-wrap">
      <div class="pro-searchbar__synthetic">
        <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 17px"></i>
        <span class="pro-searchbar__placeholder">搜索</span>
      </div>
      <input class="pro-searchbar__input" type="text" />
    </div>
    <div class="pro-searchbar__cancel">取消</div>
  </div>
  <h1>获取焦点之后的状态</h1>
  <div class="pro-searchbar pro-searchbar--focus">
    <div class="pro-searchbar__input-wrap">
      <div class="pro-searchbar__synthetic">
        <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 17px"></i>
        <span class="pro-searchbar__placeholder">搜索</span>
      </div>
      <input class="pro-searchbar__input" type="text" />
      <div class="pro-searchbar__clear ">
        <i class=" pro-searchbar__clear__icon icon icon-delete_fill" style="font-size: 17px"></i>
      </div>
    </div>
    <div class="pro-searchbar__cancel">取消</div>
  </div>
  <h1>显示搜索结果状态</h1>
  <div class="pro-searchbar pro-searchbar--focus">
    <div class="pro-searchbar__input-wrap">
      <div class="pro-searchbar__synthetic">
        <i class="pro-searchbar__synthetic__icon iconfont icon-navSearch" style="font-size: 17px"></i>
      </div>
      <input
        class="pro-searchbar__input"
        type="text"
        value="fruit"
      />
      <div class="pro-searchbar__clear ">
        <i class="pro-searchbar__clear__icon iconfont icon-failure" style="font-size: 17px"></i>
      </div>
    </div>
    <div class="pro-searchbar__cancel">取消</div>
  </div>
  <div class="pro-search-list">
    <div class="pro-search-list__item">apple</div>
    <div class="pro-search-list__item">banana</div>
    <div class="pro-search-list__item">coco</div>
    <div class="pro-search-list__item">pineapple</div>
  </div>
</q-demo>
```
