var {spawn ,execSync,spawnSync }= require('child_process');
var ls = spawnSync('git', ['lg'], {
    stdio: 'inherit'
});

// ls.on('close', function(code){
//     console.log('child exists with code: ' + code);
// });

// const shell = require('shelljs')

// shell.exec('git lg')

// const { execSync } = require("child_process")

// execSync('git lg')