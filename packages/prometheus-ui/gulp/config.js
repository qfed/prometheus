const path = require('path')

function isProd() {
  return process.env.NODE_ENV === 'production'
}
module.exports = {
  styles: {
    src: 'src/index.scss',
    dest() {
      return isProd() ? 'dist/css' : 'build/css'
    },
    options: {
      pxtorem: {
        rootValue: 75,
        propList: [
          '*',
          '!letter-spacing',
          '!border',
          '!border-top',
          '!border-left',
          '!border-right',
          '!border-bottom'
        ],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      },
      pxtowhatever: {
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
        minPixelValue: 0
      },
      autoprefixer: {
        browsers: ['> 1%', 'ios 6', 'android 4']
        // cascade: true
      }
    },
    isProd
  },
  q: {
    defaultDemo: '_demo',
    qrcPath: '.qsrc.json'
  }
}
