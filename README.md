# es6-killer
use es-check to check ecmascript2015 for project, don't allow es6 to destory your project

# 全局扫描
在package.json里修改文件
```json
    "scripts": {
		"es-check": "node node_modules/es6-killer/index.js"
	},
```
然后npm run es-check

# commit扫描
在package.json里修改文件，当然你需要安装husky与lint-staged
```json
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	},
	"lint-staged": {
		"*.js": "node node_modules/es6-killer/index.js"
	},
```
use 'git commit' ,husky will tell you the files with problems

# 文件黑名单配置，需要被es-check忽略的文件
根目录添加.checkignore,不可使用'./'写法，允许'/'或者'文件夹名开头',eg:/www/js/gallery,不添加该文件默认忽略node_modules