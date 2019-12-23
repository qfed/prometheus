# prometheus

## lerna

- 安装依赖 `$ lerna bootstrap`;
- 开发 `$ lerna link --force-local` 将 packages 间的依赖链接到本地。（比如 prometheus 依赖 prometheus-ui ,链接到本地之后在 prometheus-ui 的修改直接作用到 prometheus 中忽略版本;