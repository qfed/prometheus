# {{name|pascal}} 模板

## 字体大小

> 大白的默认字体大小为`14px`,六种字体大小 h1-h6,提供俩种封装 h*(标签 h1,h2,h3...) 和 .h*（class .h1,.h2,.h3...）

- **下面用`<q-demo>*****</q-demo>`包裹HTML代码是必须的**
<template>
  <q-demo>
    <h1>h1 18px 用于titlebar标题文案字体大小</h1>
    <div class="h2">h2 16px 用于重点突出二级信息/城市选择</div>
    <h3>h3 14px 用于列表/表单/正文/Navbar等</h3>
    <div class="h4">h4 13px 用于车标题/导航下拉等字体大小</div>
    <h5>h5 12px 用于车信息辅助文字/订单id、时间 卡片状态/说明文案等</h5>
    <div class="h6">h6 10px 用于标签文字大小</div>
    <p>normal 14px 默认正文大小</p>
  </q-demo>
</template>

## code 
- template 和 q-demo 实际上是不应该展示到这里的，但是这样比较省事就留下了
- template 标签没什么涵义但是加上template 标签之后并且将当前语言设置为vue 就可以使用vscode 格式化功能，并且有vue 的语法高亮，格式化功能还是很有用的不然粘贴到markdown 中的html 片段可能会因为
对齐的原因导致vuepress 渲染失败
```html
<template>
  <q-demo>
    <h1>h1 18px 用于titlebar标题文案字体大小</h1>
    <div class="h2">h2 16px 用于重点突出二级信息/城市选择</div>
    <h3>h3 14px 用于列表/表单/正文/Navbar等</h3>
    <div class="h4">h4 13px 用于车标题/导航下拉等字体大小</div>
    <h5>h5 12px 用于车信息辅助文字/订单id、时间 卡片状态/说明文案等</h5>
    <div class="h6">h6 10px 用于标签文字大小</div>
    <p>normal 14px 默认正文大小</p>
  </q-demo>
</template>
```

## script

有的时候为了展示样式可能要写一些脚本直接在markdown文档中添加script 标签即可（代码基本就是重index.js里面copy过来）

 <script>
// 全局默认引入了jQuery 可以直接使用
// 事件应该通过委托的方式注册因为代码执行到这里的时候DOM结构还没有生成
$("body").on("click", "#test", function() {
  alert("test");
});
</script>