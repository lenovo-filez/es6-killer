const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
let ignoreNames = 'node_modules'
if(fs.existsSync('.checkignore')) {
    ignoreNames = fs.readFileSync('.checkignore').toString().split('\r\n').join(',')
}
const checkFilesArr = process.argv.slice(2).map(item => {
  return path.resolve(__dirname , item)
})
const checkFiles = checkFilesArr.join(' ') || './**/*.js'
exec(`node node_modules/es-check/index.js es5 --not="${ignoreNames}" ${checkFiles}`, function (err, stdout, stderr) {
  if(err) {
    console.log(stderr)
    console.log(stdout)
    process.exit(err.code)
  } else {
    console.log(stderr)
    process.exit(0) 
  }
})