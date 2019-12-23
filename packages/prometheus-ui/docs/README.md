---
home: true
heroImage: /theme.jpeg
actionText: Get Started →
actionLink: /components/
sidebar: auto
footer: MIT Licensed | Copyright © 2018-present
---
# [prometheus-ui](http://qui.qufenqi.com)

prometheus-ui 是一个样式库就像 bootstrap or we-ui 一样，只不过 q-ui 是一个高度定制的我们自己的样式库，当我们日常开发的时候只需要要将 q-ui 的 code copy 下来直接使用，它就会跟我们的设计一模一样无需更改，并且还会有人统一维护这个样式库比如当某些样式出了问题只需上报给维护者，而无需个人修改。

现在我们日常开发中都会基于 react angular vue 之类的框架开发并不直接操作 DOM，所以我们要对 q-ui 进行二次封装，此时要做的事就是用对应的框架渲染出指定的 DOM 结构

- `q-ui`规划了样式

```less
.q-button {
  font-size: 16px;
  &--default {
    color: red;
  }
  &--brand {
    color: blue;
  }
}
```

- `q-ui`的产出为 DOM

```html
<button class="q-button q-button--default"></button>
<button class="q-button q-button--brand"></button>
```

- `q-ui`的结合应用框架的二次封装

```jsx
class Button extends React.Component {
  render() {
    /** */
    return <button class="q-button q-button--default" />
  }
}
```

## 开发与起步

> 着手开发请阅读 src 和 componets 下的 README 和[q-ui 站点](http://qui.qufenqi.com)这三个都要读哦！

## [BEM](http://getbem.com/naming/) 样式规范

> There are only two hard problems in Computer Science: cache invalidation and naming things — Phil Karlton

BEM 能带给我们什么？大体可以分为下面三点

- **统一的样式风格** ：在一个项目的开发中统一风格比技术更加重要，试想一下当大家都用同一种方式书写样式，你看别人的 code 和看自己的 code 基本都是一样的，拥有极小切换成本是多么美妙的一件事，毕竟这行最痛苦的就是看别人风格迥异的 code

- **减少命名思考的时间提高效率**：起名字一定是每个程序员都绕不过去的坎，熟练使用 BEM 规范可以节省很多时间

- **BEM 自身的优势**:具体参见下文我从网上厚颜无耻一字不改扒下来的文章[原文链接](https://segmentfault.com/a/1190000000391762)

`Block__Element--Modify`

```css
.block 代表了更高级别的抽象或组件。
.block__element 代表.block的后代，用于形成一个完整的.block的整体。
.block--modifier代表.block的不同状态或不同版本。
```

之所以使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定，如：

```css
.site-search {
} /* 块 */
.site-search__field {
} /* 元素 */
.site-search--full {
} /* 修饰符 */
```

BEM 的关键是光凭名字就可以告诉其他开发者某个标记是用来干什么的。通过浏览 HTML 代码中的 class 属性，你就能够明白模块之间是如何关联的：有一些仅仅是组件，有一些则是这些组件的子孙或者是元素,还有一些是组件的其他形态或者是修饰符。我们用一个类比/模型来思考一下下面的这些元素是怎么关联的：

```css
.person {
}
.person__hand {
}
.person--female {
}
.person--female__hand {
}
.person__hand--left {
}
```

顶级块是‘person’，它拥有一些元素，如‘hand’。一个人也会有其他形态，比如女性，这种形态进而也会拥有它自己的元素。下面我们把他们写成‘常规’CSS:

```css
.person {
}
.hand {
}
.female {
}
.female-hand {
}
.left-hand {
}
```

这些‘常规’CSS 都是有意义的，但是它们之间却有些脱节。就拿`.female`来说，是指女性人类还是某种雌性的动物？还有`.hand`，是在说一只钟表的指针（译注：英文中 hand 有指针的意思）？还是一只正在玩纸牌的手？使用 BEM 我们可以获得更多的描述和更加清晰的结构，单单通过我们代码中的命名就能知道元素之间的关联。BEM 真是强大。

再来看一个之前用‘常规’方式命名的`.site-search`的例子：

```html
<form class="site-search  full">
  <input type="text" class="field">
  <input type="Submit" value ="Search" class="button">
</form>
```

这些 CSS 类名真是太不精确了，并不能告诉我们足够的信息。尽管我们可以用它们来完成工作，但它们确实非常含糊不清。用 BEM 记号法就会是下面这个样子：

```html
<form class="site-search  site-search--full">
  <input type="text" class="site-search__field">
  <input type="Submit" value ="Search" class="site-search__button">
</form>
```

我们能清晰地看到有个叫`.site-search`的块，他内部是一个叫`.site-search__field`的元素。并且`.site-search`还有另外一种形态叫`.site-search--full`。

我们再来举个例子……

如果你熟悉 OOCSS（面向对象 CSS），那么你对 media 对象一定也不陌生。用 BEM 的方式，media 对象就会是下面这个样子：

```css
.media {
}
.media__img {
}
.media__img--rev {
}
.media__body {
}
```

从这种 CSS 的写法上我们就已经知道`.media__img` 和`.media__body`一定是位于`.media`内部的，而且`.media__img--rev`是`.media__img`的另一种形态。仅仅通过 CSS 选择器的名字我们就能获取到以上全部信息。

BEM 的另外一个好处是针对下面这种情况：

```html
<div class="media">
  <img src="logo.png" alt="Foo Corp logo" class="img-rev">
  <div class="body">
    <h3 class="alpha">Welcome to Foo Corp</h3>
    <p class="lede">Foo Corp is the best, seriously!</p>
  </div>
</div>
```

光从上面的代码来看，我们根本不明白`.media`和`.alpha`两个 class 彼此之间是如何相互关联的？同样我们也无从知晓`.body`和`.lede`之间，或者`.img-rev`
和`.media`之间各是什么关系？从这段 HTML（除非你对那个 media 对象非常了解）中我们也不知道这个组件是由什么组成的和它还有什么其他的形态。如果我们用 BEM 方式重写这段代码：

```html
<div class="media">
  <img src="logo.png" alt="Foo Corp logo" class="media__img--rev">
  <div class="media__body">
    <h3 class="alpha">Welcome to Foo Corp</h3>
    <p class="lede">Foo Corp is the best, seriously!</p>
  </div>
</div>
```

我们立马就能明白`.media`是一个块，`.media__img--rev`是一个加了修饰符的`.media__img`的变体，它是属于`.media`的元素。而`.media__body`是一个尚未被改变过的也是属于`.media`的元素。所有以上这些信息都通过它们的 class 名称就能明白，由此看来 BEM 确实非常实用。

## q-ui 的样式书写方式

q-ui 的组件样式书写方式基本可以总结为一句话， 严格执行`q-`为前缀的 BEM 规则

### 关于以后项目的中样式书写（终极目的是 **开发只关注业务不写任何样式** ）

实际上当我们的 q-ui  足够大足够强的时候，平时开发新的页面的时候只需要排列组合现有组件而不需要自己写任何样式，当然这需要一个过程需要大家共同的 努力 ，在一个网站的开发中我们平时基本都是围绕  字体，颜色，间距来工作 ，这三点的变数比较多 q-ui 的组件很难面面俱到，可是我们的终极目的是 **开发只关注业务不写任何样式** ，所以我们针对字体 字体颜色提供了  几个公共工具类`.h1-.h6`, `.fc-3 ,.fc-6, .fc-9` 等[详见站点](http://qui.qufenqi.com/guide/)
当我们的组件不满足需求的时候以组合的方式嵌入组件中（不光是  组件也可以嵌入自己写的某些结构中）

### 举个栗子

 我们有 q-panle 组件 但是这个组件 header 是黑 body 是灰的，而此时你有个需求要求 header 是  金灿灿的（大白主题色），而我们的目标是不写样式所以怎么办呢 ，组合  工具类

```html
<div class="q-panle q-panle-default">
 <div class="q-panle__header"></div>
 <div class="q-panle__body"></div>
</div>
```

 解决问题并且不需要自己写任何额外的样式

```html
<div class="q-panle q-panle-default">
 <div class="q-panle__header fc-b"></div>
 <div class="q-panle__body"></div>
</div>
```

## 其他总结

- 前端开发基本围绕三点 字体，颜色，间距 所以在工作要对当前项目的字体大小有几种，主题颜色，间距规范有个大体掌控

- 减少样式继承深度一般不大于 3 多组合少继承(个人感悟我接触的所有 CSS 方法论都会降低我们所写出来的具体元素的特殊性，其最终结果基本都是多组合少继承，或许目前的 css 世界降低特殊性只有这一招)

- 写样式不要依赖具体的 DOM 结构,这样之后如果对这个样式扩展的时候就会产生问题，比如最末端的 a 标签不能满足新的需求要为 a 加成包裹 `<div> <a></a></div>`，这样就无法低成本的扩展，如果是一个长期运行的项目你兴许需要一顿操作才会不影响现有项目的稳定性。

```less
.drop-down > ul > li > a {
  color: red;
}
```

- 上诉所有样式推荐规则都不是绝对的，做规则的主人，你掌控规则，而不是规则掌控你

## eslint & code format

VSCode 有一个叫 Prettier - Code formatter 的插件 里面有一个参数 Prettier.eslintIntegration 开启的话可以根据 ESLint 的配置 来格式代码
但是有的时候也会有支持的问题，如果某个规则无法自动支持，简单阅读一下规则如果无关紧要就把对应规则注释掉。

## 命令

```bash
$ npm run build //编译less产出css
$ npm run build:prod //编译less产出压缩css
$ npm start // 启动browsersync 调试指定组件
$ gulp q -n <name> // new
$ gulp q -b <name> // switch 如果name 不存在 则新建
$ gulp q -d <name> // delete
```

## 开始写一个组件

**我们要对项目的默认行高，字体大小 ，间距规范有一个清楚的认识，不要完全照搬设计图，因为 sketch 在呈现设计图的时候无法为我们清晰的展现出所有这些信息,我们要准守设计规范以尽量少的修饰完成组件开发，有任何疑问要及时沟通。**

**q-ui 的样式是 BEM 规范，一开始接触 BEM 可能会对一个组件如何规划有些迷惑，接下来我将介绍如何从现有的前端框架 copy 样式结构化为己用，我们以 ant design bootstrap we-ui 为例子 copy 一个 tab 组件**

![](/bem/tab.png)

### we-ui

we-ui 直接就是使用 BEM 命名方式我们基本是可以直接 copy 只是把前缀改为我们自己的前缀 `q-`

```html
<!-- 这一版是weui 原版  weui-tab 和 weui-tabbar 并没有强行限制从属关系,这样也是为了避免出现block__element__element -->
<!-- (其实也不是不可以只是能短点更好) 的情况weui-tab__weui-tabbar__item weui-tab__weui-tabbar__label -->
<div class="weui-tab">
            <div class="weui-tab__panel">

            </div>
            <div class="weui-tabbar">
                <!-- weui-bar__item_on 这个显然是个modify 看来weui 将 -- 简化为 _ -->
                <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                    <p class="weui-tabbar__label">微信</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <p class="weui-tabbar__label">通讯录</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <p class="weui-tabbar__label">发现</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <img src="./images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">我</p>
                </a>
            </div>
        </div>
```

```less
.weui-tab {
  &__panel {
  }
}
.weui-tabbar {
  &__item {
  }
  &__label {
  }
}
```

```html
<!-- 当把 tab 和 tab-bar 的从属关系强行限定之后可以下面的方式组织结构 -->
      <div class="weui-tab">
            <div class="weui-tab__panel">

            </div>
            <div class="weui-tab__tab-bar">
                <a href="javascript:;" class="weui-tabbar-item weui-bar-item_on">
                    <!-- 注意这里并没有叫 weui-tab__tabbar__label weui-tab__tabbar__item  -->
                    <!-- 当出现 block__element__element 的时候多数情况就应该考虑将element 拆分为单独设置为一个block -->
                    <p class="weui-tabbar-label">微信</p>
                </a>
                <a href="javascript:;" class="weui-tabbar-item">
                    <p class="weui-tabbar-label">通讯录</p>
                </a>
                <a href="javascript:;" class="weui-tabbar-item">
                    <p class="weui-tabbar-label">发现</p>
                </a>
                <a href="javascript:;" class="weui-tabbar-item">
                    <img src="./images/icon_tab__tab-bar.png" alt="" class="weui-tab__tab-bar__icon">
                    <p class="weui-tab-bar-label">我</p>
                </a>
            </div>
        </div>
```

```less
.weui-tab {
  &__panel {
  }
  &__tab-bar {

    }
  }
}
```

### ant design

虽然表面上看 ant design 没有使用 BEM 规范，但是其编写样式的理念基本可以简单的拆分为 BEM
不过 ant design 比较复杂为了兼容各种情况 DOM 结构比较复杂当我们写的时候完全可以根据需求简化

```html
<!-- 上面说过 we-ui 的tab 和 tabbar 没有强行限定从属关系，而ant design 中显然强行限定了从属关系 -->
<div class="am-tabs am-tabs-horizontal am-tabs-top">
    <div class="am-tabs-tab-bar-wrap">
      <div>
        <div >
          <div class="am-tabs-default-bar am-tabs-default-bar-animated am-tabs-default-bar-top">
            <div class="am-tabs-default-bar-content">
              <div class="am-tabs-default-bar-tab am-tabs-default-bar-tab-active" style="width: 33.3333%;">First Tab</div>
              <div class="am-tabs-default-bar-tab" style="width: 33.3333%;">Second Tab</div>
              <div class="am-tabs-default-bar-tab" style="width: 33.3333%;">Third Tab</div>
              <div class="am-tabs-default-bar-underline" style="width: 33.3333%; left: 0%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="am-tabs-content-wrap am-tabs-content-wrap-animated" style="touch-action: pan-x pan-y; transform: translate3d(0%, 0px, 1px);">
      <div class="am-tabs-pane-wrap am-tabs-pane-wrap-active">
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: rgb(255, 255, 255);">Content of first tab</div>
      </div>
      <div class="am-tabs-pane-wrap am-tabs-pane-wrap-inactive">
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: rgb(255, 255, 255);">Content of second tab</div>
      </div>
      <div class="am-tabs-pane-wrap am-tabs-pane-wrap-inactive"></div>
    </div>
</div>
```

- block`am-tabs`
- element `am-tabs-tab-bar-wrap` `am-tabs-pane-wrap` `am-tabs-default-bar` `am-tabs-default-bar-content` `am-tabs-default-bar-tab`
- modify `am-tabs-horizontal` `am-tabs-top` `am-tabs-pane-wrap-inactive`

### bootstrap

bootstrap 中 DOM 结构比较简单

- block `nav`
- element li 我们只需要给 li 加一个 class 就 ok 了
- modify `nav-tabs`

```html
<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages</a></li>
</ul>
<!-- 简单改造一下 -->
<ul class="nav nav-tabs">
  <li role="presentation" class="nav__item nav__item--active"><a href="#">Home</a></li>
  <li role="presentation" class="nav__item"><a href="#">Profile</a></li>
  <li role="presentation"class="nav__item"><a href="#">Messages</a></li>
</ul>
```