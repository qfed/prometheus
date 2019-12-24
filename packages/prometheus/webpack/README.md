# webpack

```bash
webpack
├── README.md
├── config
│   ├── getHtmlPlugins.js
│   └── index.js
├── template
│   ├── _layout.ejs
│   ├── demo.ejs
│   └── favicon.ico
├── vendor
│   ├── dll.vendor.js
│   └── vendor-manifest.json
├── webpack.dev.js # 开发调试配置，最终生成react-demo 也是通过此配置
├── webpack.parallel.js # 目前无用
├── webpack.prod.js # 打包配置
└── webpack.vendor.js # vendor 打包配置，为了提升开发模式打包速度
```