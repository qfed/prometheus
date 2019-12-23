const fs = require('fs-extra')

fs.emptyDirSync('./dist/es/')

fs.copySync('./src/', './dist/es/')

fs.removeSync('./dist/es/README.md')
