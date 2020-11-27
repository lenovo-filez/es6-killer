# es6-killer
use es-check to check ecmascript2015 for project, don't allow es6 to destory your project

# 全局扫描
npm run es-check

# commit扫描
use 'git commit' ,husky will tell you the files with problems

# 文件黑名单配置，需要被es-check忽略的文件
根目录添加.checkignore,不可使用'./'写法，允许'/'或者'文件夹名开头',eg:/www/js/gallery