const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const getHtmlPlugins = require('./config/getHtmlPlugins')
const { componentsMatch, resolve } = require('./config')
const createVariants = require('parallel-webpack').createVariants
const HtmlWebpackPlugin = require('html-webpack-plugin')
const entryArray = glob.sync(componentsMatch).map(filePath => {
  const key = path.parse(filePath).name
  const value = `./src/components/${key}/demo`
  return JSON.parse(`{"${key}":"${value}"}`)
})
const pxtowhatever = require('pxtowhatever')
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
const baseOptions = {
  mode: 'development',
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, '..', 'build')
  },
  module: {
    rules: [
      // {
      // test: /\.jsx?$/,
      // exclude: /(node_modules|bower_components)/,
      // use: [
      // {
      // loader: 'babel-loader'
      // }
      // ]
      // },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
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
          }
        ]
      },
      {
        test: /\.(less|css)$/,
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
              plugins: [autoprefixer()]
            }
          },
          {
            loader: 'less-loader' // compiles Less to CSS
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
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(['build']),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: path.resolve(__dirname, './vendor/vendor-manifest.json')
    }),
    new CopyWebpackPlugin([{ from: 'webpack/vendor/dll.vendor.js' }]),
    // ...getHtmlPlugins(componentsMatch)
  ]
}
// This object defines the potential option variants
// the key of the object is used as the option name, its value must be an array
// which contains all potential values of your build.
var variants = {
  entry: entryArray
}
const getHtmlPlugin = function(entry) {
  const name = Object.keys(entry)[0]
  return new HtmlWebpackPlugin({
    filename: `${name}/${name}.html`,
    template: 'webpack/template/demo.ejs',
    favicon: 'webpack/template/favicon.ico',
    inject: false,
    title: name,
    data: { name, path: `${name}/${name}` }
  })
}
function createConfig(options) {
  const { entry, plugins } = options
  const res = { ...options, entry, plugins: [ ...plugins, getHtmlPlugin(entry) ] }
  return res
}
module.exports = createVariants(baseOptions, variants, createConfig)
// 只是加快了打包的速度但是 webpack dev-server 不成
