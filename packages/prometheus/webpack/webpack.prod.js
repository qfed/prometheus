const path = require('path')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const autoprefixer = require('autoprefixer')
const { resolve, output, devtool } = require('./config')
const { green, blue } = require('chalk')
const env = process.env.NODE_ENV

const pxtowhatever = require('pxtowhatever')
console.info(blue('NODE_ENV'), '=', green(env))

const pxtoremSettings = remUnit =>
  pxtowhatever({
    unit: '/75rem',
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

module.exports = {
  entry: './src',
  mode: env,
  performance: {
    hints: false
  },
  output: {
    filename: output.filename,
    path: output.path,
    library: 'pro',
    libraryTarget: 'umd'
  },
  context: path.resolve(__dirname, '..'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
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
              plugins: [autoprefixer(), pxtoremSettings()]
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
            loader: 'css-loader?minimize' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer(), pxtoremSettings()]
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
  resolve,
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  // plugins: [new CleanWebpackPlugin([outputPath])],
  devtool
}
