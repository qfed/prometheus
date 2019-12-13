const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const pxtowhatever = require('pxtowhatever')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const getHtmlPlugins = require('./config/getHtmlPlugins')
const { WebsiteRootDEMO } = require('../config')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const pxtoremSettings = remUnit =>
  pxtowhatever({
    unit: '/2px',
    propList: [
      '*',
      '!letter-spacing',
      '!border',
      '!border-top',
      '!border-left',
      '!border-right',
      '!border-bottom'
    ],
    minPixelValue: 1
  })

const { componentsMatch, resolve, isProd } = require('./config/index')
const entryArray = glob.sync(componentsMatch).map(filePath => {
  const key = path.parse(filePath).name
  const value = `./src/components/${key}/demo`
  return `"${key}":"${value}"`
})
const entryStr = '{' + entryArray.reduce((x, y) => `${x},${y}`) + '}' //eslint-disable-line
// console.dir(entryStr)
module.exports = {
  entry: JSON.parse(entryStr),
  mode: 'development',
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(WebsiteRootDEMO),
    publicPath: isProd() ? '/react-demo/' : '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          // 'cache-loader',
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              // transpileOnly: false
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader?minimize',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [pxtoremSettings()]
            }
          },

          {
            loader: 'sass-loader'
            // options: {
            //   data: '$brand-primary: #000;',
            // },
          }
        ]
      },

      {
        test: /\.(less|css)$/,
        include: [/node_modules/, path.resolve(__dirname, '..', 'src')],
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [pxtoremSettings()]
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                // 'brand-primary': '#4167b1' // 全局主色
                // 'brand-primary': 'green'
              }
              // javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(art|ejs)$/,
        loader: 'art-template-loader',
        options: {
          compileDebug: true
        }
      }
    ]
  },
  context: path.resolve(__dirname, '..'),
  resolve,
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build']),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: path.resolve(__dirname, './vendor/vendor-manifest.json')
    }),
    new CopyWebpackPlugin([{ from: 'webpack/vendor/dll.vendor.js' }]),
    ...getHtmlPlugins(componentsMatch),
    new HardSourceWebpackPlugin()
  ],
  stats: {
    timings: true,
    publicPath: false,
    modules: false,
    chunks: false
  }
}
