const shell = require('shelljs')
shell.config.silent = true
const getPort = (port = 3000) => {
  let isPortSelected = false
  while (!isPortSelected) {
    if (shell.exec(`lsof -i:${port}`).stdout) {
      port++
    } else {
      isPortSelected = true
    }
  }
  return port
}

// let port = getPort(3000)
// console.log(selectedPort)
module.exports = getPort
