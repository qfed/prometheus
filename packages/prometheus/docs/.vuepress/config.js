const glob = require("glob");
const path = require("path");
const { WebsiteRootAPI } = require("../../config");
const getPort = require("../../lib/get-port");
const host =
  process.env.NODE_ENV === "dev"
    ? "http://localhost:5000"
    : "https://qfed.github.io/prometheus";
module.exports = {
  head: [["link", { rel: "icon", href: `/logo.ico` }]],
  title: "Prometheus",
  description: "React Componet for Prometheus-UI",
  base: `/`,
  port: getPort(3002),
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/components/" },
      { text: "设计规范", link: `${host}/ui` }
    ],
    sidebar: {
      "/components/": genSidebar()
      // '/components/': ['','/components/demo/README.md']
    }
  }
};
/**
 * nav 如果对应目录默认显示README.md,所以sidebar要过滤掉README.md
 * @param {glob} pattern
 */
function genSidebar(pattern = "../components/!(README).md") {
  pattern = path.join(__dirname, pattern);

  let filePaths = glob.sync(pattern);
  let arr = [""];

  arr.push(
    ...filePaths.map(fileName => {
      return `${path.parse(fileName).name}`;
    })
  );
  return arr;
}
