const path = require('path')
const config = require('../../config')

const env = process.env.NODE_ENV

module.exports = {
  ...config,
  componentsMatch: 'src/components/!(*.*|util|base)',
  resolve: {
    alias: {
      // base: path.resolve('src', 'base')
      // qui: path.join(__dirname, '..', '..', '..', 'q-ui', 'src')
    },
    extensions: ['.ts', '.tsx', '.less', '.js', '.json']
  },
  mode: env,
  output: {
    filename: `prometheus${env === 'production' ? '.min' : ''}.js`,
    path: path.resolve(__dirname, '..', '..', 'dist', 'umd')
  },
  devtool: env === 'production' ? 'none' : 'source-map',
  isProd() {
    const env = process.env.NODE_ENV
    // if (!env) throw new Error('env must be set')
    return env === 'production'
  }
}
