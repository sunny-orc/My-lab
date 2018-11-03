(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{177:function(e,a,r){"use strict";r.r(a);var s=r(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"webpack源码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack源码","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack源码")]),e._v(" "),r("ol",[r("li",[e._v("从核心入手，Tapable - (get)")]),e._v(" "),r("li",[e._v("接下来详细阅读compiler，compilation两个继承类 - (get)")]),e._v(" "),r("li",[e._v("学习如何编写plugin - (get)")]),e._v(" "),r("li",[e._v("学习如何编写loader")]),e._v(" "),r("li",[e._v("学习HMR原理")]),e._v(" "),r("li",[e._v("理解bundle，如何生成chunks，需要理解AST、acorn  - (get)")]),e._v(" "),r("li",[e._v("理解plugin执行原理  - (get)")]),e._v(" "),r("li",[e._v("理解loader执行原理 - (get)")]),e._v(" "),r("li",[e._v("loader-runner运行机制")]),e._v(" "),r("li",[e._v("理解resolver是如何实现的，即如何查找对应文件所在的全路径")]),e._v(" "),r("li",[e._v("对感兴趣的插件，loader学习源码")]),e._v(" "),r("li",[e._v("动手写几个插件，loader")]),e._v(" "),r("li",[e._v("webpack更新速度惊人，跟着作者的步伐，尽量也能在源码中找到你的代码段")])]),e._v(" "),r("h2",{attrs:{id:"webpack-源码调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack-源码调试","aria-hidden":"true"}},[e._v("#")]),e._v(" Webpack 源码调试")]),e._v(" "),r("p",[e._v("全局安装node-nightly")]),e._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[e._v("npm install "),r("span",{attrs:{class:"token operator"}},[e._v("--")]),e._v("global node"),r("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("nightly\n")])])]),r("p",[e._v("安装完成后，执行")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("node-nightly\n")])])]),r("p",[e._v("此时会下载nightly cli包，安装完成后才可以使用")]),e._v(" "),r("p",[e._v("接下来运行以下命令，Chrome Devtools会在chrome://inspect内产生可以断点调试的inspect链接")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("node-nightly --inspect-brk ./node_modules/webpack/bin/webpack.js\n")])])]),r("p",[e._v("--inspect-brk 标记会自动给脚本第一句打断点，可以在源代码中设置断点调试")]),e._v(" "),r("h2",{attrs:{id:"webpack-4源码中的代码段理解图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack-4源码中的代码段理解图","aria-hidden":"true"}},[e._v("#")]),e._v(" Webpack 4源码中的代码段理解图")]),e._v(" "),r("h3",{attrs:{id:"compiler、compilation、hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compiler、compilation、hook","aria-hidden":"true"}},[e._v("#")]),e._v(" compiler、compilation、hook")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpackprocess1.png",alt:"webpack执行过程1"}})]),e._v(" "),r("p",[e._v("webpack.js 在最开始会new Compiler实例，创建compiler实例的hook，理解后面参数的含义，参数为hook执行call/callAsync/promise时，绑定的钩子的执行函数的参数，一一对应。也就是这里定义了几个变量，tap绑定的函数就可以传入几个参数")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpackprocess2.png",alt:"webpack执行过程2"}})]),e._v(" "),r("p",[e._v("this.hooks.compilation.call(compilation, params)中的两个参数即为传入钩子函数的参数值")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpackprocess3.png",alt:"webpack执行过程3"}})]),e._v(" "),r("p",[e._v("该代码段为Tapable的Hook.js，实际无论是compiler，compilation，resolver都是继承于Tapable，也就是都会执行这些方法，this.hooks.compilation.call即调用的就是"),r("code",[e._v('this.call = this._call = this.createCompileDelegate("call", "sync")')])]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpackprocess4.png",alt:"webpack执行过程4"}})]),e._v(" "),r("p",[e._v("Hook总共有10种类型，分为异步和同步两大类；异步包括并发执行和串行执行")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpackprocess5.png",alt:"webpack执行过程5"}})]),e._v(" "),r("p",[e._v("create的返回值为函数方法，this.call(params)的执行方法")]),e._v(" "),r("h3",{attrs:{id:"module-rules加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#module-rules加载","aria-hidden":"true"}},[e._v("#")]),e._v(" module.rules加载")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('// webpack.js compiler创建后都做了以下的事情 \n// 创建compiler实例\ncompiler = new Compiler()\n// 创建WebpackOptionsApply实例，挂在默认plugin hook\ncompiler.options = new WebpackOptionsApply().process(options, compiler)\n\t// WebpackOptionsApply.js 挂在各种plugin\n    new EntryOptionPlugin().apply(compiler)\n    \t// EntryOptionPlugin.js 判断entry参数类型 挂不同类型plugin\n        const SingleEntryPlugin = require()\n        const MultiEntryPlugin = require()\n        const DynamicEntryPlugin = require()\n        \t// 以SingleEntryPlugin.js为例\n            compiler.hooks.make.tapAsync(\n            \t"SingleEntryPlugin", (compilation, callback) => {\n                \t…\n                    compilation.addEntry(context, dep, name, callback)\n                }\n\t\t\t)\n')])])]),r("h4",{attrs:{id:"hook执行顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hook执行顺序","aria-hidden":"true"}},[e._v("#")]),e._v(" hook执行顺序")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/hooks-chain-tip.png",alt:"hooks"}})]),e._v(" "),r("blockquote",[r("p",[e._v("environment->afterEnvironment->beforeRun->run->beforeCompile->compile->make->...->buildModule（"),r("code",[e._v("compilation")]),e._v("）->failModule or successModule("),r("code",[e._v("compilation")]),e._v(")->finishModules（"),r("code",[e._v("compilation")]),e._v("）->seal（"),r("code",[e._v("compilation")]),e._v("）->afterCompile")]),e._v(" "),r("p",[e._v("hook执行顺序，make开始执行compilation 入口addEntry接口")])]),e._v(" "),r("h4",{attrs:{id:"compilation-js方法执行顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compilation-js方法执行顺序","aria-hidden":"true"}},[e._v("#")]),e._v(" compilation.js方法执行顺序")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/compilation-run-tip.png",alt:"compilation.js"}})]),e._v(" "),r("blockquote",[r("p",[e._v("addEntry->_addModuleChain->addModule[判断moduleResult.build === true]->buildModule->（"),r("code",[e._v("NormalModule.js")]),e._v("）build->（"),r("code",[e._v("NormalModule.js")]),e._v("）doBuild->（"),r("code",[e._v("loader-runner.js")]),e._v("）runLoaders（该方法会把上一个loader的结果或资源文件传入进去，并且该函数内还有一些方法，可以是loader改变为异步调用方式，或者获取query参数）->iteratePitchingLoaders(loader-runner.js)->processModuleDependencies->addModuleDependencies->addModule[判断moduleResult.build === true]->回到执行buildModule")]),e._v(" "),r("p",[e._v("_addModuleChain和addModuleDependencies方法中 都调用了addModule函数生成新的moduleResult，若moduleResult.build === true,则会执行buildModule")])]),e._v(" "),r("h4",{attrs:{id:"addmodule-module-cachegroup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#addmodule-module-cachegroup","aria-hidden":"true"}},[e._v("#")]),e._v(" addModule(module, cacheGroup)")]),e._v(" "),r("p",[r("em",[e._v("每次module的变化是怎么发生的？")])]),e._v(" "),r("blockquote",[r("p",[e._v("entry进入，通过create创建module，先去查找ruleSet规则是否有匹配，有则拼接链接，没有则不变；传入到runLoaders中获取处理后的_source、_ast，parser.parse处理_source、_ast返回还存在依赖的dependencies数组，将dependencies数组传入addModuleDependencies遍历，创建新的module。直到没有依赖的module，停止遍历，生成最终的bundle对象")])]),e._v(" "),r("p",[r("em",[e._v("执行style-loader，css-loader 为什么要遍历5遍？")])]),e._v(" "),r("p",[e._v("第一次module.request /Users/admin/repo/resourcecode/learning-webpack/src")]),e._v(" "),r("p",[e._v("第二次module.request /Users/admin/repo/resourcecode/learning-webpack/node_modules/style-loader/index.js!/Users/admin/repo/resourcecode/learning-webpack/node_modules/css-loader/index.js!/Users/admin/repo/resourcecode/learning-webpack/src/index.css")]),e._v(" "),r("p",[e._v("第三次module.request /Users/admin/repo/resourcecode/learning-webpack/node_modules/css-loader/index.js!/Users/admin/repo/resourcecode/learning-webpack/src/index.css")]),e._v(" "),r("p",[e._v("第四次module.request /Users/admin/repo/resourcecode/learning-webpack/node_modules/css-loader/lib/css-base.js")]),e._v(" "),r("p",[e._v("第五次module.request /Users/admin/repo/resourcecode/learning-webpack/node_modules/style-loader/lib/urls.js")]),e._v(" "),r("p",[e._v("图解(只包含前两次)")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run1.png",alt:"webpack-run1"}})]),e._v(" "),r("p",[e._v("执行第一次create，此时dependencies[0].request = './src/index.js'")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run2.png",alt:"webpack-run2"}})]),e._v(" "),r("p",[e._v("ruleSet.exec() 解析路径是否有loader拦截")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run3.png",alt:"webpack-run3"}})]),e._v(" "),r("p",[e._v("第一次解析只有返回默认的result")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run4.png",alt:"webpack-run4"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run5.png",alt:"webpack-run5"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run6.png",alt:"webpack-run6"}})]),e._v(" "),r("p",[e._v("runLoaders解析index.js内容")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run7.png",alt:"webpack-run7"}})]),e._v(" "),r("p",[e._v("parser.parse 生成ast树，解析树，将依赖对象存储在dependencies中")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run8.png",alt:"webpack-run8"}})]),e._v(" "),r("p",[e._v("processModuleDependencies将dependencies中的依赖模块传入addModuleDependencies中，执行下一次的create")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run9.png",alt:"webpack-run9"}})]),e._v(" "),r("p",[e._v("第二次create，传入的dependencies已经变为index.css")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run10.png",alt:"webpack-run10"}})]),e._v(" "),r("p",[e._v("index.css被loader拦截，存在style-loader，css-loader两个拦截loader")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run11.png",alt:"webpack-run11"}})]),e._v(" "),r("p",[e._v("此时request已经改为/Users/admin/repo/resourcecode/learning-webpack/node_modules/style-loader/index.js!/Users/admin/repo/resourcecode/learning-webpack/node_modules/css-loader/index.js!/Users/admin/repo/resourcecode/learning-webpack/src/index.css")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run12.png",alt:"webpack-run12"}})]),e._v(" "),r("p",[e._v("runLoaders执行返回style-loader的代码段，赋给_source")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run13.png",alt:"webpack-run13"}})]),e._v(" "),r("p",[e._v("经过parser.parse解析后，又多了好几个依赖")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://reyshieh.com/assets/webpack-run14.png",alt:"webpack-run14"}})]),e._v(" "),r("p",[e._v("将依赖传给addModuleDependencies，进行接下来的create")]),e._v(" "),r("blockquote",[r("p",[e._v("经过图解，可以明白，第一次执行index.js，当解析源码遇到import 'index.css'，loader拦截，有两个style-loader和css-loader两个拦截加载器，接下来就是这两个拦截器的处理，但都是返回js代码，并解析；直到没有依赖结束，生成最终bundle。")])]),e._v(" "),r("h4",{attrs:{id:"build-dobuild-runloaders执行函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-dobuild-runloaders执行函数","aria-hidden":"true"}},[e._v("#")]),e._v(" build->doBuild->runLoaders执行函数")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("build(options, compilation, resolver, fs, callback_build)\n初始化_source _ast _buildHash为null\n\tdoBuild(options, compilation, resolver, fs, callback_doBuild)\n\t执行runLoaders 返回\tresult{resourceBuffer,result.result[0] => source,sourceMap,extraInfo}\n\t\t\t执行createSource(source, resourceBuffer, sourceMap) 返回this._source\n\t\t\t赋值this._ast = extraInfo.webpackAST or null\n\t\t\t执行callback_doBuild\n\t\t\t\tthis.parser.parse(this._ast || this._source.source(), …)\n\t\t\t\t执行callback_build\n")])])]),r("h4",{attrs:{id:"理解-loader-runner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#理解-loader-runner","aria-hidden":"true"}},[e._v("#")]),e._v(" 理解 loader-runner")]),e._v(" "),r("blockquote",[r("p",[e._v("传入resource，context，loaders，readResource，实现同步/异步loader解析")]),e._v(" "),r("p",[e._v("在loader中设置raw(true/false[default])，可以实现资源以Buffer or String形式传递")]),e._v(" "),r("p",[e._v("在loader中设置pitch，并在pitch中return返回值，可以跳过接下来会调用的loader，pitch调用方式从左到右，loader实际执行方式从右到左")])]),e._v(" "),r("p",[e._v("同步loader")]),e._v(" "),r("p",[e._v("异步loader")]),e._v(" "),r("p",[e._v("Raw loader处理结果方式String or Buffer")]),e._v(" "),r("p",[e._v("pitch")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("loader总是从右到左被调用，如果前一个loader的结果不关注，想忽略该结果。可以使用pitch方法，该方法从左往右调用\n要在你的loader中实现pitch接口，如style-loader\n\nmodule.exports.pitch = function (request) {\n\tif (this.cacheable) this.cacheable();\n\n\tvar options = loaderUtils.getOptions(this) || {};\n\n\tvalidateOptions(require('./options.json'), options, 'Style Loader')\n\t...\n}\n\n若在pitch中return结果，将提前终止loader的遍历\n例如\nuse: [\n  'a-loader',\n  'b-loader',\n  'c-loader'\n]\n\n正常情况\n|- a-loader `pitch`\n  |- b-loader `pitch`\n    |- c-loader `pitch`\n      |- requested module is picked up as a dependency\n    |- c-loader normal execution\n  |- b-loader normal execution\n|- a-loader normal execution\n\n若a-loader在pitch中return\n|- a-loader `pitch`\n  |- b-loader `pitch` returns a module\n|- a-loader normal execution\n")])])]),r("p",[e._v("!!、！含义")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("所有普通 loader 可以通过在请求中加上 ! 前缀来忽略（覆盖）。\n所有普通和前置 loader 可以通过在请求中加上 -! 前缀来忽略（覆盖）。\n所有普通，后置和前置 loader 可以通过在请求中加上 !! 前缀来忽略（覆盖）。\n不应该使用行内 loader 和 ! 前缀，因为它们是非标准的。它们可在由 loader 生成的代码中使用。\n")])])])])}],!1,null,null,null);t.options.__file="webpack-source-learning.md";a.default=t.exports}}]);