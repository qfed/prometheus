const glob = require('glob')
const path = require('path')
const { WebsiteRootAPI } = require('../../config')
const getPort = require('../../lib/get-port')
module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/logo.ico` }],
    // [
    //   'link',
    //   {
    //     rel: 'stylesheet',
    //     href: `http://qui.qufenqi.com/css/index.css`
    //   }
    // ]
    // ['srcipt', { src: 'https://cdn.bootcss.com/react/15.6.2/react.js' }],
  ],
  title: 'Prometheus',
  description: 'React Componet for Prometheus-UI',
  // dest: WebsiteRootAPI,
  base: `/react/`,
  port: getPort(3002),
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: '全局样式', link: 'http://qui.qufenqi.com/guide' },
      { text: 'q-ui', link: 'http://qui.qufenqi.com' },
      { text: 'gitlab', link: 'https://git.qufenqi.com/fe/q-react' },
      { text: '工具', link: '/tools/' }
    ],
    sidebar: {
      '/components/': genSidebar()
      // '/components/': ['','/components/demo/README.md']
    }
  }
}
/**
 * nav 如果对应目录默认显示README.md,所以sidebar要过滤掉README.md
 * @param {glob} pattern 
 */
function genSidebar(pattern = '../components/!(README).md') {
  pattern = path.join(__dirname, pattern)

  let filePaths = glob.sync(pattern)
  let arr = ['']
 
  arr.push(
    ...filePaths.map(fileName => {
      return `${path.parse(fileName).name}`
    })
  )
  return arr
}
