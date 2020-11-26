const { exec } = require('child_process')
const path = require('path')
// 忽略的黑名单
// 黑名单写法：不可使用'./'写法，允许'/'或者'文件夹名开头'
const blackList = [
  '/index.js',
  '/node_modules',
  '/build',
  '/www/mobile',
  '/www/resource/pdfPlugin',
  '/www/js/gallery',
  '/www/js/module/Upload',
  '/www/js/link_share/link_mobile',
  '/www/js/link_approval/link_mobile'
]

const ignoreNames = blackList.join(',')
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