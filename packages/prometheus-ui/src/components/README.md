# 开发组件（战斗人员必读)

在 components 目录下每一个目录为一个组件，并且我们可以单独调试每一个组件

## 起步

首先全局安装 [qs](https://www.npmjs.com/package/quickly-switch) `$ npm install quickly-switch -g`

运行`$ qs --init`初始化 qs 配置

```bash
➜  q-ui git:(doc) ✗ qs --init
? What's your root src/components
? What's your defaultDemo _demo
{
 "root": "src/components",
 "defaultDemo": "_demo"
}
➜  q-ui git:(doc) ✗ qs
❤️ For more info use help: qs -h
_1px
_demo
_type
actionSheet
button
checkbox
dialog
input
list
navBar
popover
progress
radio
searchBar
steps
switch
tab
tag
toast
```

## 以\_demo 为模板创建新的组件

- `$ qs -n <name>`

## 切换到另一个组件下

- `$ qs -s <name>`

## 启动

- `$ npm run dev`

## 战斗人员脚本

- 发布 `$ npm run publish -- -m "message"`
- 更多信息 `$ npm run publish -- -h`
  
```bash
选项：
  --version      显示版本号                                               [布尔]
  --type, -t     major:0,minor:1,patch:2 default patch:2      [数字] [默认值: 2]
  --message, -m  publist message                    [字符串] [默认值: "publish"]
  -h, --help     显示帮助信息                                             [布尔]
```  

## 编写 DEMO

> 每个组件的目录下都有一个 README.md,这个 README.md 文件最终就会转为 `q-ui` 站点中对应组件的文档，具体写法参考 `_demo`下的 README.md

### 在本地预览站点

当编写文档的时候我们可以通过下面的命令，预览文档最终呈现在站点中的样子

- npm run doc:dev // 启动 vuepress，打开指定链接

## 目录结构简介

- 以`_`开头的将被视为私有目录，不会被打包到最终的 q-ui 中,其下面的 README.md 文件也不会自动 copy 到 `docs/components` 下
- 非`_`开头的目录(即组件）将被打包到 q-ui 中，其下面的 README.md 文件会自动 copy 到 `docs/components` 下,组件目录下面的 README.md 就是之后程序在站点中的文档现在我在`_demo`组件下写了一个 README.md 的模板,但是其名字会改为其父目录的名字比如：`src/components/button/README.md`--> `docs/components/button.md`
- `_import-part.html`模板页默认引入部分包含一些`样式` 和 `zepto`,之前的模板页没有`<script src="https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>`大家手动修改一下

```html
<html lang="en">
  <!-- ****省略***** -->
   <script src="https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>
  <script src="index.js"></script>
</body>
</html>
```

- `.qrc.json` qs `--init` 存储当前 module
