const glob = require('glob')
const path = require('path')
const getPort = require('../../lib/get-port')
module.exports = {
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: `../css/index.css`
      }
    ],
    ['link', { rel: 'icon', href: `/logo.ico` }],
    ['script', { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.js' }]
  ],
  title: 'Prometheus',
  description: 'CSS Framework',
  // dest:`../q-website/www`,
  base: `/`,
  port: getPort(3002),
  evergreen:true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '设计', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'q-react', link: '/react' },
      { text: 'gitlab', link: '/q-ui' }
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
