const run = require('parallel-webpack').run
const configPath = require.resolve('../webpack/webpack.parallel.js')

run(configPath, {
  watch: false,
  maxRetries: 1,
  stats: true, // defaults to false
  maxConcurrentWorkers: 2 // use 2 workers
})
// 目前没用使用
