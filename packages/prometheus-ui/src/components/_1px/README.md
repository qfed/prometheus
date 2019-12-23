# demo

## 字体大小

> 大白的默认字体大小为`14px`,六种字体大小 h1-h6,提供俩种封装 h*(标签 h1,h2,h3...) 和 .h*（class .h1,.h2,.h3...）

- h* 和 .h* 都会限定文字大小
- h\*(标签)会根据设计加上 margin,font-weight

<q-demo>
   <h1>h1 18px 用于titlebar标题文案字体大小</h1>
   <div class="h2">h2 16px 用于重点突出二级信息/城市选择</div>
   <h3>h3 14px 用于列表/表单/正文/Navbar等</h3>
   <div class="h4">h4 13px 用于车标题/导航下拉等字体大小</div>
   <h5>h5 12px 用于车信息辅助文字/订单id、时间 卡片状态/说明文案等</h5>
   <div class="h6">h6 10px 用于标签文字大小</div>
   <p>normal 14px 默认正文大小</p>
</q-demo>

```html
   <h1>h1 18px 用于titlebar标题文案字体大小</h1>
   <div class="h2">h2 16px 用于重点突出二级信息/城市选择</div>
   <h3>h3 14px 用于列表/表单/正文/Navbar等</h3>
   <div class="h4">h4 13px 用于车标题/导航下拉等字体大小</div>
   <h5>h5 12px 用于车信息辅助文字/订单id、时间 卡片状态/说明文案等</h5>
   <div class="h6">h6 10px 用于标签文字大小</div>
   <p>normal 14px 默认正文大小</p>
```

## API

| Option | Description     |  Type  | Default Value |
| ------ | --------------- | ------ | ------------- |
| height | height of x'x'x | number | 2             |
