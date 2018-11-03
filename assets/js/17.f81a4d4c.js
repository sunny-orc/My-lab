(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{161:function(n,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[n._v("#")]),n._v(" JavaScript")]),n._v(" "),t("h2",{attrs:{id:"async和await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async和await","aria-hidden":"true"}},[n._v("#")]),n._v(" async和await")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var a = 0\nvar b = async () => {\n  a = a + await 10\n  console.log('2', a) // -> '2' 10\n  a = (await 10) + a\n  console.log('3', a) // -> '3' 20\n}\nb()\na++\nconsole.log('1', a) // -> '1' 1\n")])])]),t("p",[n._v("对于以上代码你可能会有疑惑，这里说明下原理")]),n._v(" "),t("ul",[t("li",[n._v("首先函数 "),t("code",[n._v("b")]),n._v(" 先执行，在执行到 "),t("code",[n._v("await 10")]),n._v(" 之前变量 "),t("code",[n._v("a")]),n._v(" 还是 0，因为在 "),t("code",[n._v("await")]),n._v(" 内部实现了 "),t("code",[n._v("generators")]),n._v(" ，"),t("code",[n._v("generators")]),n._v(" 会保留堆栈中东西，所以这时候 "),t("code",[n._v("a = 0")]),n._v(" 被保存了下来")]),n._v(" "),t("li",[n._v("因为 "),t("code",[n._v("await")]),n._v(" 是异步操作，所以会先执行 "),t("code",[n._v("console.log('1', a)")])]),n._v(" "),t("li",[n._v("这时候同步代码执行完毕，开始执行异步代码，将保存下来的值拿出来使用，这时候 "),t("code",[n._v("a = 10")])]),n._v(" "),t("li",[n._v("然后后面就是常规执行代码了")])]),n._v(" "),t("h2",{attrs:{id:"proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy","aria-hidden":"true"}},[n._v("#")]),n._v(" Proxy")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 用proxy实现数据绑定和监听\nlet onWatch = (obj, setBind, getLogger) => {\n    let handler = {\n        get(target, property, receiver) {\n            getLogger(target, property);\n            return Reflect.get(target, property, receiver);\n        },\n        set(target, property, value, receiver) {\n            setBind(value);\n            return Reflect.set(target, property, value);\n        }\n    }\n    return new Proxy(obj, handler);\n}\nlet obj = { a: 1 };\nlet value;\nlet p = onWatch(obj, (v) => {\n    value = v;\n}, (target, property) => {\n    console.log(`Get '${property}' = ${target[property]}`);\n});\np.a = 2; // bind 'value' to '2'\np.a // -> Get 'a' = 2\n")])])]),t("h2",{attrs:{id:"_0-1-0-2-0-3-的处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-0-2-0-3-的处理","aria-hidden":"true"}},[n._v("#")]),n._v(" 0.1 +  0.2 != 0.3 的处理")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("parseFloat((0.1 + 0.2).toFixed(10))\n")])])]),t("h2",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式","aria-hidden":"true"}},[n._v("#")]),n._v(" 正则表达式")]),n._v(" "),t("ul",[t("li",[n._v("元字符")])]),n._v(" "),t("p",[n._v(". 匹配任意字符除了换行符和回车符")]),n._v(" "),t("p",[n._v("[] 匹配方括号内的任意字符，比如[0-9]可以用来匹配任意数字")]),n._v(" "),t("p",[n._v("^ ^9 这样使用匹配以9开头。[**^**9]这样使用代表匹配方括号内除了9的字符")]),n._v(" "),t("p",[n._v("{1, 2} 匹配1到2位字符")]),n._v(" "),t("p",[n._v("(yck) 只匹配和yck相同字符串")]),n._v(" "),t("p",[n._v("| 匹配|前后任意字符")]),n._v(" "),t("p",[n._v("\\ 转义")]),n._v(" "),t("p",[n._v("***** 只匹配出现-1次以上* 前的字符")]),n._v(" "),t("p",[t("strong",[n._v("+")]),n._v(" 只匹配出现0次以上+前的字符")]),n._v(" "),t("p",[n._v("? ？之前字符可选")]),n._v(" "),t("ul",[t("li",[n._v("修饰符")])]),n._v(" "),t("p",[n._v("i 忽略大小写")]),n._v(" "),t("p",[n._v("g 全局搜索")]),n._v(" "),t("p",[n._v("m 多行")]),n._v(" "),t("ul",[t("li",[n._v("字符简写")])]),n._v(" "),t("p",[n._v("\\w 匹配字母数字或下划线")]),n._v(" "),t("p",[n._v("\\W 和上面相反")]),n._v(" "),t("p",[n._v("\\s 匹配任意的空白符")]),n._v(" "),t("p",[n._v("\\S 和上面相反")]),n._v(" "),t("p",[n._v("\\d 匹配数字")]),n._v(" "),t("p",[n._v("\\D 和上面相反")]),n._v(" "),t("p",[n._v("\\b 匹配单词的开始或结束")]),n._v(" "),t("p",[n._v("\\B 和上面相反")]),n._v(" "),t("h2",{attrs:{id:"数组去重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组去重","aria-hidden":"true"}},[n._v("#")]),n._v(" 数组去重")]),n._v(" "),t("p",[n._v("方法一：排序后去重，支持自定义规则如何视为相同元素，如字母大小写视为一致")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var array = [1, 1, '1'];\n\nfunction unique(array, iteratee) {\n    var res = [];\n    var sortedArray = array.concat().sort();\n    var seen;\n    for (var i = 0, len = sortedArray.length; i < len; i++) {\n    \tvar value = sortedArray[i];\n    \tvar computed = iteratee ? iteratee(value);\n        // 如果是第一个元素或者相邻的元素不相同\n        if (!i || seen !== computed) {\n            res.push(value);\n        }\n        seen = value;\n    }\n    return res;\n}\n\nconsole.log(unique(array, function(item) {\n    return typeof item == 'string' ? item.toLowerCase() : item;\n}));\n")])])]),t("p",[n._v("方法二：用filter简化外层循环")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var array = [1, 2, 1, 1, '1'];\n\nfunction unique(array) {\n    return array.concat().sort().filter(function (item, index, array) {\n\t\treturn !index || item !== array[index - 1];\n\t});\n}\n\nconsole.log(unique(array));\n")])])]),t("p",[n._v("方法三：用Object键值对实现")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var array = [1, 2, 1, 1, '1'];\n\nfunction unique(array) {\n    var obj = {};\n    return array.filter(function (item, index, array) {\n        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true);\n    });\n}\n\nconsole.log(unique(array));\n")])])]),t("p",[n._v("方法四：es6 set")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var array = [1, 2, 1];\n\nvar unique = (array) => [...new Set(array)];\n\nunique(array);\n")])])]),t("h2",{attrs:{id:"类型判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型判断","aria-hidden":"true"}},[n._v("#")]),n._v(" 类型判断")]),n._v(" "),t("p",[t("strong",[n._v("最常见使用的是typeof")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("typeof")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("Undefined")]),n._v(" "),t("td",[n._v("undefined")])]),n._v(" "),t("tr",[t("td",[t("strong",[n._v("Null")])]),n._v(" "),t("td",[t("strong",[n._v("object")])])]),n._v(" "),t("tr",[t("td",[n._v("Boolean")]),n._v(" "),t("td",[n._v("boolean")])]),n._v(" "),t("tr",[t("td",[n._v("Number")]),n._v(" "),t("td",[n._v("number")])]),n._v(" "),t("tr",[t("td",[n._v("String")]),n._v(" "),t("td",[n._v("string")])]),n._v(" "),t("tr",[t("td",[n._v("Symbol")]),n._v(" "),t("td",[n._v("symbol")])]),n._v(" "),t("tr",[t("td",[n._v("宿主对象（由JS环境提供）")]),n._v(" "),t("td",[n._v("Implementation-dependent")])]),n._v(" "),t("tr",[t("td",[n._v("函数对象")]),n._v(" "),t("td",[n._v("function")])]),n._v(" "),t("tr",[t("td",[n._v("Object(任何其他对象)")]),n._v(" "),t("td",[n._v("object")])])])]),n._v(" "),t("p",[n._v("显然，typeof对object的检测是不精确的，Object还有很多细分类型，如Date，Function，Array，RegExp，Error等，对于这些返回的都是object")]),n._v(" "),t("p",[n._v("为了解决上面的问题，可以采用"),t("strong",[n._v("Object.propotype.toString")]),n._v("，toString方法被调用的时候，会执行下面的步骤：")]),n._v(" "),t("ol",[t("li",[n._v("如果this值是undefined，就返回[object Undefined]")]),n._v(" "),t("li",[n._v("如果this值是null，就返回[object Null]")]),n._v(" "),t("li",[n._v("让O成为ToObject(this)的结果")]),n._v(" "),t("li",[n._v("让class成为O的内部属性[[class]]的值")]),n._v(" "),t("li",[n._v('最后返回由"[object" 和class和"]"三部分组成的字符串')])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 写个demo\nconsole.log(Object.prototype.toString.call(undefined)) // [object Undefined]\nconsole.log(Object.prototype.toString.call(null)) // [object Null]\n\nvar date = new Date()\nconsole.log(Object.prototype.toString.call(date)) // [object Date]\n")])])]),t("p",[n._v("除了以上例子之外，Object.prototype.toString实际可以判断至少12中类型（14种）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var number = 1; // [object Number]\nvar string = '123'; // [object String]\nvar boolean = true; // [object Boolean]\nvar und = undefined; // [object Undefined]\nvar nul = null; // [object Null]\nvar obj = { a: 1 }; // [object Object]\nvar array = [1, 2, 3]; // [object Array]\nvar date = new Date(); // [object Date]\nvar error = new Error(); // [object Error]\nvar reg = new RegExp(); // [object RegExp]\nvar func = function a(){} // [object Function]\nObject.prototype.toString.call(Math) // [object Math]\nObject.prototype.toString.call(JSON) // [object JSON]\nObject.prototype.toString.call(arguments) // [object Arguments]\n")])])]),t("p",[n._v("基于上述typeof 和 Object.prototype.toString可以封装一个判断类型函数，当为基础类型，使用typeof，引用类型使用toString，同时，在es6中，null和undefined会被Object.prototype.toString 识别为[object Object]，需要兼容这种情况")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var class2type = {};\n\n// 生成class2type映射\n\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \").map((item, index) => {\n    class2type[\"[object \" + item + \"]\"] = item.toLowerCase();\n});\n\nfunction type(obj) {\n    if (obj == null) {\n        return obj + '';\n    }\n    return typeof obj === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj;\n}\n")])])]),t("p",[t("strong",[n._v("plainObject")]),n._v('：翻译成中文，称为“纯粹的对象”，就是该对象是通过"{}"或"new Object"创建的，该对象含有零个或者多个键值对。plainObject的目的使用来区别别的js对象如null，数组，宿主对象（documents）等。以jquery为例')]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("$.isPlainObject({}) // true\n$.isPlainObject(new Object) // true\n$.isPlainObject(Object.create(null)) // true\n$.isPlainObject(Object.assign({ a: 1 }, { b: 2 })) // true\n$.isPlainObject(new Person('xx')) // false\n$.isPlainObject(Object.create({})) // false\n")])])]),t("p",[n._v("因此除了{}和new Object创建的对象外，没有原型的对象也是一个纯粹的对象")]),n._v(" "),t("p",[n._v("jquery3.0中的源码")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('var class2type = {};\n\n// 相当于 Object.prototype.toString\nvar toString = class2type.toString;\n\n// 相当于 Object.prototype.hasOwnProperty\nvar hasOwn = class2type.hasOwnProperty;\n\nfunction isPlainObject(obj) {\n    var proto, Ctor;\n\n    // 排除掉明显不是obj的以及一些宿主对象如Window\n    if (!obj || toString.call(obj) !== "[object Object]") {\n        return false;\n    }\n\n    /**\n     * getPrototypeOf es5 方法，获取 obj 的原型\n     * 以 new Object 创建的对象为例的话\n     * obj.__proto__ === Object.prototype\n     */\n    proto = Object.getPrototypeOf(obj);\n\n    // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true\n    if (!proto) {\n        return true;\n    }\n\n    /**\n     * 以下判断通过 new Object 方式创建的对象\n     * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor\n     * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数\n     */\n    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;\n\n    // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数\n    return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);\n}\n')])])]),t("p",[n._v("注意：判断Ctor构造函数是不是Object构造函数，用的是hasOwn.toString.call(Ctor)，并不是Object.prototype.toString，可测试")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("console.log(hasOwn.toString.call(Ctor)); // function Object() { [native code] }\nconsole.log(Object.prototype.toString.call(Ctor)); // [object Function]\n")])])]),t("p",[n._v("发现返回值并不一样，因为hasOwn.toString调用的其实是Function.prototype.toString，已经覆盖了Object继承来的toString。该方法返回的包括function关键字，形参列表，大括号，以及函数体中的内容")]),n._v(" "),t("p",[t("strong",[n._v("EmptyObject")]),n._v("：判断对象是否是空对象，只要遍历对象，有属性，即为非空")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function isEmptyObject(obj) {\n    var name;\n    \n    for (name in obj) {\n        return false;\n    }\n    \n    return true;\n}\n")])])]),t("p",[t("strong",[n._v("Window对象")]),n._v("：判断window对象，只需判断该对象中是否有指向自身的window属性")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function isWindow(obj) {\n    return obj != null && obj === obj.window;\n}\n")])])]),t("p",[t("strong",[n._v("isArrayLike")]),n._v("：该函数判断类数组对象和数组，都会返回true")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function isArrayLike(obj) {\n    // obj 必须有length属性\n    var length = !!obj && \"length\" in obj && obj.length;\n    var typeRes = type(obj); // 返回类型\n    \n    // 排除函数和window对象\n    if (typeRes === 'function' || isWindow(obj)) return false;\n    \n    return typeRes === 'array' || length === 0 || type length === 'number' && length > 0 && (length - 1) in obj;\n}\n")])])]),t("p",[n._v("看最后的return，可以看出需要满足的情况包括：")]),n._v(" "),t("ol",[t("li",[n._v("是数组")]),n._v(" "),t("li",[n._v("长度为0，以arguments为例")]),n._v(" "),t("li",[n._v("length属性大于0的数字类型，并且obj[length -1]必须存在")])]),n._v(" "),t("p",[t("strong",[n._v("isElement")]),n._v("：判断是不是DOM元素")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function isElement(obj) {\n    return !!(obj && obj.nodeType === 1);\n}\n")])])]),t("h2",{attrs:{id:"数组的浅拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组的浅拷贝","aria-hidden":"true"}},[n._v("#")]),n._v(" 数组的浅拷贝")]),n._v(" "),t("p",[n._v("concat和slice是浅拷贝")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var shallowCopy = function(obj) {\n    if (typeof obj !== 'object') return;\n    // 根据obj的类型判断是新建一个数组还是对象\n    var newObj = obj instanceof Array ? [] : {};\n    // 遍历obj，并且判断是obj的属性才拷贝\n    for (var key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            newObj[key] = obj[key];\n        }\n    }\n    return newObj;\n}\n")])])]),t("h2",{attrs:{id:"数组的深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组的深拷贝","aria-hidden":"true"}},[n._v("#")]),n._v(" 数组的深拷贝")]),n._v(" "),t("p",[n._v("简单粗暴的方式")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var new_arr = JSON.parse(JSON.stringify(arr));\nconsole.log(new_arr);\n")])])]),t("p",[n._v("但是该方法不能拷贝函数")]),n._v(" "),t("p",[n._v("实现深拷贝，只需在浅拷贝的基础上，如果是对象，就递归调用深拷贝函数就可以")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var deepClone = function (obj) {\n    if (typeof obj !== 'object') return;\n    var newObj = obj instanceof Array ? [] : {};\n    for (var key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];\n        }\n    }\n    return newObj;\n}\n")])])]),t("h2",{attrs:{id:"数组扁平化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组扁平化","aria-hidden":"true"}},[n._v("#")]),n._v(" 数组扁平化")]),n._v(" "),t("p",[n._v("用reduce实现")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var arr = [1, [2, [3, 4]]];\n\nfunction flatten(arr) {\n    return arr.reduce(function(prev, next) {\n        return prev.concat(Array.isArray(next) ? flatten(next) : next);\n    });\n}\n\nconsole.log(flatten(arr));\n")])])]),t("h2",{attrs:{id:"判断两个对象相等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断两个对象相等","aria-hidden":"true"}},[n._v("#")]),n._v(" 判断两个对象相等")]),n._v(" "),t("p",[n._v("这里相等的范畴，不仅包括===的形式，还包括：")]),n._v(" "),t("ol",[t("li",[n._v("NaN 和NaN相等")]),n._v(" "),t("li",[n._v("[1]和[1]相等")]),n._v(" "),t("li",[n._v("{value: 1}和{value: 1}相等")]),n._v(" "),t("li",[n._v("1和new Number(1)相等")]),n._v(" "),t("li",[n._v("'xx'和new String('xx')相等")]),n._v(" "),t("li",[n._v("true和new Boolean(true)相等")])]),n._v(" "),t("p",[t("strong",[n._v("判断NaN相等")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function eq(a, b) {\n    if (a !== a) return b !== b;\n}\n\nconsole.log(eq(NaN, NaN));\n")])])]),t("p",[t("strong",[n._v("String对象")])]),n._v(" "),t("p",[n._v("Object.prototype.toString方法判断结果却是一致的，如下")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var toString = Object.prototype.toString;\ntoString.call('xx'); // \"[object String]\"\ntoString.call(new String('xx')); // \"[object String]\"\n")])])]),t("p",[n._v("但是同样还是不能比较字符串和字符串包装对象是相等的，可以利用隐式类型转换")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("console.log('xx' + '' === new String('xx') + ''); // true\n")])])]),t("p",[n._v("因此，先比较a和b的Object.prototype.toString的结果是否一致，如果都是\"[object String]\"，再使用'' + a === ' ' + b进行判断")]),n._v(" "),t("p",[t("strong",[n._v("更多对象")])]),n._v(" "),t("p",[n._v("通过String对象的比较抛砖引玉，相同的思路，利用隐式类型转换，可以比较Boolean、Date、RegExp对象")]),n._v(" "),t("p",[t("strong",[n._v("Boolean")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var a = true;\nvar b = new Boolean(true);\n\nconsole.log(+a === +b); // true\n")])])]),t("p",[t("strong",[n._v("Date")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var a = new Date(2018, 7, 21);\nvar b = new Date(2018, 7, 21);\n\nconsole.log(+a === +b); // true\n")])])]),t("p",[t("strong",[n._v("RegExp")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var a = /a/i;\nvar b = new RegExp(/a/i);\n\nconsole.log(+a === +b); // true\n")])])]),t("p",[n._v("Number 会比较特殊些，存在Number(NaN)，永远和NaN都不等，需要加上之前的NaN相等的比较方式")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var a = Number(NaN);\nvar b = Number(NaN);\n\nfunction eq() {\n\t// 判断Number(NaN) Object(NaN)等情况\n\tif (+a !== +a) return +b !== !b;\n\t\n\t// 排除NaN情况的正常比较\n\t...\n}\n\nconsole.log(eq(a, b)); // true\n")])])]),t("p",[t("strong",[n._v("简版deepEq函数")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var toString = Object.prototype.toString;\n\nfunction deepEq(a, b) {\n    var className = toString.call(a);\n    if (className !== toString.call(b)) return false;\n    \n    switch(className) {\n        case '[object RegExp]':\n        case '[object String]':\n        \treturn '' + a === '' + b;\n        case '[object Number]':\n        \tif (+a !== +a) return +b !== +b;\n        \treturn +a === 0 ? 1 / +a === 1 / +b : +a === +b; // 判断+0 和-0，规定二者不等\n        case '[object Date]':\n        case '[object Boolean]':\n        \treturn +a === +b;\n    }\n    \n    // 其他判断\n}\n")])])]),t("h2",{attrs:{id:"函数柯里化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数柯里化","aria-hidden":"true"}},[n._v("#")]),n._v(" 函数柯里化")]),n._v(" "),t("p",[n._v("第一版")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var curry = function (fn) {\n    var args = [].slice.call(arguments, 1);\n    return function () {\n        var newArgs = args.concat([].slice.call(arguments));\n        return fn.apply(this, newArgs);\n    }\n}\n\n// 使用\nfunction add(a, b) {\n    return a + b;\n}\n\nvar addCurry = curry(add, 1, 2);\naddCurry() // 3\n// 或者\nvar addCurry = curry(add, 1);\naddCurry(2) // 3\n// 或者\nvar addCurry = curry(add);\naddCurry(1, 2); // 3\n")])])]),t("p",[n._v("第二版，实现合并数组")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function sub_curry(fn) {\n    var args = [].slice.call(arguments, 1);\n    return function () {\n        return fn.apply(this, args.concat([].slice.call(arguments)));\n    };\n}\nfunction curry(fn, length) {\n\tlength = length || fn.length;\n\tvar slice = Array.prototype.slice;\n\treturn function () {\n        if (arguments.length < length) {\n            var combined = [fn].concat(slice.call(arguments));\n            return curry(sub_curry.apply(this, combined), length - arguments.length);\n        } else {\n            return fn.apply(this, arguments);\n        }\n\t}\n}\n\n// 测试\nvar fn = curry(function (a, b, c) {\n    return [a, b, c];\n});\n\nfn("a", "b", "c") // ["a", "b", "c"]\nfn("a")("b")("c") // ["a", "b", "c"]\n')])])]),t("h2",{attrs:{id:"偏函数-局部应用（partial-application）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#偏函数-局部应用（partial-application）","aria-hidden":"true"}},[n._v("#")]),n._v(" 偏函数/局部应用（Partial application）")]),n._v(" "),t("p",[n._v("与柯里化联系")]),n._v(" "),t("p",[n._v("柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个n元函数转换成n个一元函数")]),n._v(" "),t("p",[n._v("局部应用是固定一个函数的一个或者多个参数，也就是将一个n元函数转换成一个n-x元函数")]),n._v(" "),t("p",[t("strong",[n._v("简单的局部应用")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function partial(fn) {\n    var args = [].slice.call(arguments, 1);\n    return function () {\n        var newArgs = args.concat([].slice.call(arguments));\n        return fn.apply(this, newArgs);\n    }\n}\n\n// demo\nfunction add(a, b) {\n    return a + b + this.value;\n}\n\n// var addOne = add.bind(null, 1);\nvar addOne = partial(add, 1);\nvar value = 1;\nvar obj = {\n    value: 2,\n    addOne: addOne\n}\nobj.addOne(2);\n// 使用bind时，结果为4\n// 使用partial时，结果为5\n")])])]),t("h2",{attrs:{id:"函数组合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数组合","aria-hidden":"true"}},[n._v("#")]),n._v(" 函数组合")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function compose() {\n    var args = arguments;\n    var start = args.length - 1;\n    return function () {\n        var i = start;\n        var result = args[start].apply(this, arguments);\n        while (i--) result = args[i].call(this, result);\n        return result;\n    }\n}\n")])])]),t("p",[n._v("结合柯里化（curry）和函数组合（compose）：")]),n._v(" "),t("p",[t("strong",[n._v("pointfree")]),n._v("指的是函数无须提及将要操作的数据是什么样的。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 需求：输入 'kevin daisy kelly'，返回'K.D.K'\n// 非pointfree，因为提到了数据name\nvar initials = function (name) {\n    return name.split(' ').map(compose(toUpperCase, head)).join('. ');\n}\n\n// pointfree\n// 先定义基本运算\nvar split = curry(function(separator, str) { return str.split(separator) })\nvar head = function (str) { return str.slice(0, 1) }\nvar toUpperCase = function (str) { return str.toUpperCase() }\nvar join = curry(function(separator, arr) { return arr.join(separator) })\nvar map = curry(function(fn, arr) { return arr.map(fn) })\n\nvar initials = compose(join('.'), map(compose(toUpperCase, head)), split(' '));\ninitials(\"kevin daisy kelly\");\n")])])]),t("blockquote",[t("p",[n._v("pointfree的本质就是使用一些通用的函数，组合出各种复杂运算。上层运算不要直接操作数据，而是通过底层函数去处理。即不使用所要处理的值，只合成运算过程。")])]),n._v(" "),t("h2",{attrs:{id:"函数记忆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数记忆","aria-hidden":"true"}},[n._v("#")]),n._v(" 函数记忆")]),n._v(" "),t("p",[n._v("实现原理只用把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据")]),n._v(" "),t("p",[n._v("第一版，来自《Javascript权威指南》")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function memorize(f) {\n    var cache = {};\n    return function () {\n        var key = arguments.length + Array.prototype.join.call(arguments, \",\");\n        if (key in cache) {\n            return cache[key];\n        } else {\n            return cache[key] = f.apply(this, arguments);\n        }\n    }\n}\n\n// demo\nvar add = function(a, b, c) {\n    return a + b + c;\n}\nvar memorizeAdd = memorize(add);\nconsole.time('use memorize');\nfor(var i = 0; i < 100000; i++) {\n    memorizeAdd(1, 2, 3)\n}\nconsole.timeEnd('use memorize');\n\nconsole.time('not use memorize')\nfor(var i = 0; i < 100000; i++) {\n    add(1, 2, 3)\n}\nconsole.timeEnd('not use memorize')\n")])])]),t("p",[n._v("很不幸上面的方法，有函数记忆消耗60ms，没有才1.3ms左右！")]),n._v(" "),t("p",[n._v("但是以上的方法是有问题的，当参数是对象的时候，就会自动调用toString方法转换成[Object object]，再拼接字符串作为key值，因此，以下")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var propValue = function(obj){\n    return obj.value\n}\n\nvar memoizedAdd = memoize(propValue)\n\nconsole.log(memoizedAdd({value: 1})) // 1\nconsole.log(memoizedAdd({value: 2})) // 1\n")])])]),t("p",[n._v("返回的值是一致的。")]),n._v(" "),t("p",[n._v("第二版，来自underscore实现")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var memorize = function (func, hasher) {\n    var memorize = function (key) {\n        var cache = memorize.cache;\n        var address = '' + (hasher ? hasher.apply(this, arguments) : key);\n        if (!cache[address]) {\n            cache[address] = func.apply(this, arguments);\n        }\n        return cache[address];\n    }\n    memorize.cache = {};\n    return memorize;\n}\n")])])]),t("p",[n._v("如果该函数是单参数，不传入hasher也是可以的，因为address只取了第一个实参。若要支持多参数，就必须要传入hasher函数，具体实现可以使用JSON.stringify，demo如下")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var memorizeAdd = memorize(add, function() {\n    var args = Array.prototype.slice.call(arguments);\n    return JSON.stringify(args);\n});\n\nconsole.log(memorizeAdd(1, 2, 3)) // 6\nconsole.log(memorizeAdd(1, 2, 4)) // 7\n")])])]),t("h2",{attrs:{id:"递归"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归","aria-hidden":"true"}},[n._v("#")]),n._v(" 递归")]),n._v(" "),t("p",[n._v("当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。对于阶乘函数执行来说，js会不断的创建执行上下文压入执行上下文栈，这就必须要用"),t("strong",[n._v("尾调用")]),n._v("。尾调用是指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数。")]),n._v(" "),t("p",[t("strong",[n._v("对于为什么必须要用尾调用，可以这么理解")]),n._v("。如果函数最后执行的单纯的一个函数调用，相当于对于本函数来说已经完成了自己的任务了，就可以释放了。那个函数想怎么样就怎样，不关我的事。但是如果还有别的操作，就必须等待对方的返回值，计算完后，才能释放，只有若干个的递归还吃得消，若是成千的递归，那性能可想而知。")]),n._v(" "),t("h2",{attrs:{id:"构造函数（constructor）、实例原型（prototype）、实例之间的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数（constructor）、实例原型（prototype）、实例之间的关系","aria-hidden":"true"}},[n._v("#")]),n._v(" 构造函数（constructor）、实例原型（prototype）、实例之间的关系")]),n._v(" "),t("p",[n._v("例如")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person() {}\nvar person = new Person();\nperson.name = 'xx';\nconsole.log(person.name);\n")])])]),t("p",[n._v("Person就是"),t("strong",[n._v("构造函数")]),n._v("，使用new创建了一个实例对象person")]),n._v(" "),t("p",[t("strong",[n._v("__ proto __")]),n._v("：每一个js对象（除了null）都具有这个属性，指向该对象的原型")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person() {}\nvar person = new Person();\nconsole.log(person.__proto__ === Person.prototype); // true\n")])])]),t("p",[t("strong",[n._v("constructor")]),n._v("：每个原型都有一个constructor属性指向关联的构造函数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person() {}\n\nvar person = new Person();\nconsole.log(Person === Person.prototype.constructor); // true\nconsole.log(person.constructor === Person) // true\n\n// 这里需要注意的，当获取person.constructor时，其实person中并没有constructor属性，当不能读取到constructor属性时，会从person的原型也就是Person.prototype中获取，正好原型中有该属性\n")])])]),t("p",[n._v("综上描述，可以得出")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person() {}\nvar person = new Person();\n\nconsole.log(person.__proto__ === Person.prototype) // true\nconsole.log(Person.prototype.constructor === Person) // true\nconsole.log(Object.getPrototypeOf(person) === Person.prototype) // true es5获取对象的原型\n")])])]),t("p",[t("strong",[n._v("Object.prototype的原型是什么？")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("console.log(Object.prototype.__proto__ === null) // true\n")])])]),t("h2",{attrs:{id:"参数按值传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数按值传递","aria-hidden":"true"}},[n._v("#")]),n._v(" 参数按值传递")]),n._v(" "),t("p",[n._v("ECMAScript中规定，所有函数的参数都是按值传递，可以理解为把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。")]),n._v(" "),t("p",[n._v("但是，同样存在困惑，如下例子")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var obj = {\n    value: 1\n};\nfunction foo (o) {\n    o.value = 2;\n    console.log(o.value); // 2\n}\nfoo(obj);\nconsole.log(obj.value); // 2\n")])])]),t("p",[n._v("不是说是按值传递吗？为什么这里看着就像引用传递呢？同样在看一个例子")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var obj = {\n    value: 1\n};\nfunction foo(o) {\n    o = 2;\n    console.log(o); // 2\n}\nfoo(obj);\nconsole.log(obj.value); // 1\n")])])]),t("p",[n._v("怎么上例中又不发生改变呢？")]),n._v(" "),t("blockquote",[t("p",[n._v("其实，在传递方式，还有一种叫做共享传递。即在传递对象的时候，传递对象的引用的副本，其实还是按值传递")])]),n._v(" "),t("p",[t("strong",[n._v("注意：按引用传递传递对象的引用，而按共享传递是传递对象的引用的副本")])]),n._v(" "),t("p",[n._v("所以，不难理解，当修改o.value，可以通过引用找到原值，但是直接修改o，并不会修改原值。")]),n._v(" "),t("h2",{attrs:{id:"创建对象的多种方式及优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建对象的多种方式及优缺点","aria-hidden":"true"}},[n._v("#")]),n._v(" 创建对象的多种方式及优缺点")]),n._v(" "),t("p",[t("strong",[n._v("工厂模式")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function createPerson(name) {\n    var o = new Object();\n    o.name = name;\n    o.getName = function() {\n        console.log(this.name);\n    }\n    return o;\n}\nvar person1 = createPerson('xx');\nconsole.log(person1 instanceof createPerson); // false\nconsole.log(person1 instanceof Object); // true\n")])])]),t("p",[n._v("缺点：对象无法识别，因为所有的实例都指向一个原型")]),n._v(" "),t("p",[t("strong",[n._v("构造函数模式")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name) {\n    this.name = name;\n    this.getName = function () {\n        console.log(this.name);\n    }\n}\n\nvar person2 = new Person('xx');\nconsole.log(person2 instanceof Person); // true\nconsole.log(person2 instanceof Object); // true\n")])])]),t("p",[n._v("优点：实例可以识别为一个特定的类型")]),n._v(" "),t("p",[n._v("缺点：每次创建实例时，每个方法都要被创建一次")]),n._v(" "),t("p",[t("strong",[n._v("构造函数模式优化")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name) {\n    this.name = name;\n    this.getName = getName;\n}\nfunction getName () {\n    console.log(this.name);\n}\n\nvar person3 = new Person('xx');\n")])])]),t("p",[n._v("优点：解决了每个方法都要被重新创建的问题")]),n._v(" "),t("p",[n._v("缺点：这个不算是封装")]),n._v(" "),t("p",[t("strong",[n._v("原型模式")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name) {}\nPerson.prototype.name = 'xx';\nPerson.prototype.getName = function () {\n    console.log(this.name);\n}\n\nvar person4 = new Person();\n")])])]),t("p",[n._v("优点：解决方法不会重新创建")]),n._v(" "),t("p",[n._v("缺点：1.所有的属性和方法都共享 2.不能初始化参数")]),n._v(" "),t("p",[t("strong",[n._v("组合模式")])]),n._v(" "),t("p",[n._v("构造函数模式与原型模式双剑合璧")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name) {\n    this.name = name;\n}\nPerson.prototype = {\n    constructor: Person,\n    getName: function () {\n        console.log(this.name);\n    }\n}\n\nvar person5 = new Person();\n")])])]),t("p",[n._v("优点：该共享的共享，该私有的私有")]),n._v(" "),t("p",[n._v("缺点：希望全都都写在一起，即更好的封装性")]),n._v(" "),t("p",[t("strong",[n._v("动态原型模式")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name) {\n    this.name = name;\n    if (typeof this.getName != \"function\") {\n        Person.prototype.getName = function () {\n            console.log(this.name);\n        }\n    }\n}\n\nvar person6 = new Person('xx');\n")])])]),t("p",[n._v("但是用这个方式时，"),t("strong",[n._v("不能用对象字面量重新原型")])]),n._v(" "),t("p",[n._v("如下解释：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name) {\n    this.name = name;\n    if (typeof this.getName != \"function\") {\n        Person.prototype = {\n            constructor: Person,\n            getName: function () {\n                console.log(this.name);\n            }\n        }\n    }\n}\n\nvar person1 = new Person('kevin');\nvar person2 = new Person('daisy');\n\n// 报错 并没有该方法\nperson1.getName();\n\n// 注释掉上面的代码，这句是可以执行的。\nperson2.getName();\n")])])]),t("p",[n._v("原因很简单，new的具体实现步骤为：")]),n._v(" "),t("ul",[t("li",[n._v("首先创建一个对象")]),n._v(" "),t("li",[n._v("然后将对象的原型指向Person.prototype")]),n._v(" "),t("li",[n._v("然后Person.apply(obj)")]),n._v(" "),t("li",[n._v("返回这个对象")])]),n._v(" "),t("p",[n._v("在执行obj.Person方法时，person1的prototype属性指向了员原来实例的原型，这里使用字面量方式直接覆盖Person.prototype，并不会更改实例的原型的值，person1依然指向原来的原型，而不是Person.prototype，而之前的原型是没有getName方法的，所以就报错了。")]),n._v(" "),t("p",[t("strong",[n._v("寄生构造函数模式")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person (name) {\n    var o = new Object();\n    o.name = name;\n    o.getName = function () {\n        console.log(this.name);\n    }\n    return o;\n}\n\nvar person7 = new Person('xx')\nconsole.log(person7 instanceof Person); // false\nconsole.log(person7 instanceof Object); // true\n")])])]),t("p",[n._v("这种写法有一个好处，比如想给特殊数组创建方法，又不想直接修改Array构造函数，可以这样写：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function SpecialArray() {\n    var values = new Array();\n    for (var i = 0, len = arguments.length; i < len; i++) {\n        values.push(arguments[i]);\n    }\n\n    values.toPipedString = function () {\n        return this.join(\"|\");\n    };\n    return values;\n}\n\nvar colors = new SpecialArray('red', 'blue', 'green');\nvar colors2 = SpecialArray('red', 'blue', 'green');\n\nconsole.log(colors);\nconsole.log(colors.toPipedString); // red|blue|green\n\nconsole.log(colors2);\nconsole.log(colors2.toPipedString); // red|blue|green\n")])])]),t("p",[n._v("其实，寄生构造函数模式和工厂模式在创建对象的时候，就多使用了new，实际两者的结果是一样的")]),n._v(" "),t("p",[t("strong",[n._v("稳妥构造函数模式")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function person(name) {\n\tvar o = new Object();\n\to.sayName = function () {\n        console.log(name);\n\t};\n\treturn o;\n}\n\nvar person9 = person('xx');\nperson9.sayName(); // xx\nperson9.name = 'xx2';\nperson9.sayName(); // xx\nconsole.log(person9.name); //xx2\n")])])]),t("h2",{attrs:{id:"继承的多种方式和优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承的多种方式和优缺点","aria-hidden":"true"}},[n._v("#")]),n._v(" 继承的多种方式和优缺点")]),n._v(" "),t("p",[t("strong",[n._v("原型链继承")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Parent () {\n    this.name = 'xx';\n}\nParent.prototype.getName = function () {\n    console.log(this.name);\n}\nfunction Child() {}\nChild.prototype = new Parent();\nvar child1 = new Child();\nconsole.log(child1.getName()); // xx\n")])])]),t("p",[n._v("问题：")]),n._v(" "),t("ol",[t("li",[n._v("引用类型的属性被所有实例共享")]),n._v(" "),t("li",[n._v("在创建Child的实例时，不能向Parent传参")])]),n._v(" "),t("p",[t("strong",[n._v("借用构造函数(经典继承)")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Parent() {\n    this.names = ['xl', 'cora'];\n}\nfunction Child() {\n    Parent.call(this);\n}\nvar child1 = new Child();\nchild1.names.push('cain');\nconsole.log(child1.names); // ['xl', 'cora', 'cain']\nvar child2 = new Child();\nconsole.log(child2.names); // ['xl', 'cora']\n")])])]),t("p",[n._v("优点：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("避免了引用类型的属性被所有实例共享")])]),n._v(" "),t("li",[t("p",[n._v("可以在Child中向Parent传参")]),n._v(" "),t("p",[n._v("举个例子")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Parent (name) {\n    this.name = name;\n}\n\nfunction Child (name) {\n    Parent.call(this, name);\n}\n\nvar child1 = new Child('kevin');\n\nconsole.log(child1.name); // kevin\n\nvar child2 = new Child('daisy');\n\nconsole.log(child2.name); // daisy\n")])])])])]),n._v(" "),t("p",[n._v("缺点：")]),n._v(" "),t("p",[n._v("方法都在构造函数中定义，每次创建实例都会创建一遍方法。")]),n._v(" "),t("p",[t("strong",[n._v("组合继承")])]),n._v(" "),t("p",[n._v("原型链继承和经典继承双剑合璧")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Parent(name) {\n    this.name = name;\n    this.colors = ['red', 'blue', 'green'];\n}\nParent.prototype.getName = function (){\n    console.log(this.name);\n}\nfunction Child(name, age) {\n    Parent.call(this, name);\n    this.age = age;\n}\nChild.prototype = new Parent();\nChild.prototype.constructor = Child;\n\nvar child1 = new Child('kevin', '18');\n\nchild1.colors.push('black');\n\nconsole.log(child1.name); // kevin\nconsole.log(child1.age); // 18\nconsole.log(child1.colors); // [\"red\", \"blue\", \"green\", \"black\"]\n\nvar child2 = new Child('daisy', '20');\n\nconsole.log(child2.name); // daisy\nconsole.log(child2.age); // 20\nconsole.log(child2.colors); // [\"red\", \"blue\", \"green\"]\n")])])]),t("p",[n._v("优点： 融合原型链继承和构造函数的优点，是Javacript中最常用的继承模式。")]),n._v(" "),t("p",[t("strong",[n._v("原型式继承")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function createObj(o) {\n    function F(){}\n    F.prototype = o;\n    return new F();\n}\n")])])]),t("p",[n._v("Object.create的模拟实现，将传入的对象作为创建的对象的原型")]),n._v(" "),t("p",[n._v("缺点：包含引用类型的属性值始终都会共享响应的值跟原型链继承一样")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var person = {\n    name: 'xl',\n    friends: ['cora'],\n}\nvar person1 = createObj(person);\nvar person2 = createObj(person);\nperson1.name = 'person1';\nconsole.log(person2.name); // \n")])])])])}],!1,null,null,null);r.options.__file="Damn-hole-of-javascript.md";e.default=r.exports}}]);