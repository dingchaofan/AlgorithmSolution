// 1.转驼峰
// 操作字符数组
function tranformStr2(str) {
    var strArr = str.split('');
    for (var i = 1; i < strArr.length; i++) {
        if (strArr[i] == '-') {
            //删除'-'
            strArr.splice(i, 1);
            //转大写
            if (i < strArr.length) {
                strArr[i] = strArr[i].toUpperCase();
            }
        }
    }
    return strArr.join('');
}
// 1.转驼峰
// 操作字符串数组
function tranformStr1(str) {
    var strArr = str.split('-');
    for (var i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join('');
}

// 2. 深拷贝
// 1. JOSN.stringify()/JSON.parse()  
// 缺点：拷贝对象包含 正则表达式，函数，或者undefined等值会失败
let obj = { a: 1, b: { x: 3 } }
JSON.parse(JSON.stringify(obj))
// 2. 递归拷贝
function deepClone(obj) {
    let copy = obj instanceof Array ? [] : {}
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
        }
    }
    return copy
}
// 深拷贝
function deepCopy(obj) {
    let resObj = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj == 'object') {
        for (const key in obj) {
            let element = obj[key]
            if (element == obj) { // 跳出循环引用
                continue;
            }
            if (obj.hasOwnProperty(key)) {
                if (element && typeof element == 'object') {
                    resObj[key] = Array.isArray(element) ? [] : {}
                    // resObj[key] = (element.constructor == Array) ? [] : {}
                    resObj[key] = deepCopy(obj[key]) // arguments.callee(element, resObj[key])
                }
                else {
                    resObj[key] = element
                }
            }
        }
    }
    return resObj;
}
// 两栏布局，左边固定，右边自适应，左右不重叠
.left{
    float:left;
    width:300px;
    margin-right: 10px;
    background: red;
}
.right{
    overflow: hidden; /* 创建BFC */
    background: yellow;
}

// 4. 节流函数
// 思路：在规定时间内只触发一次
function throttle(fn, delay) {
    // 利用闭包保存时间
    let prev = Date.now()
    return function () {
        let context = this
        let arg = arguments
        let now = Date.now()
        if (now - prev >= delay) {
            fn.apply(context, arg)
            prev = Date.now()
        }
    }
}
function fn() {
    console.log('节流')
}
addEventListener('scroll', throttle(fn, 1000))

// 5. 防抖函数
// 思路:在规定时间内未触发第二次，则执行
function debounce(fn, delay) {
    // 利用闭包保存定时器
    let timer = null
    return function () {
        let context = this
        let arg = arguments
        // 在规定时间内再次触发会先清除定时器后再重设定时器
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, arg)
        }, delay)
    }
}
function fn() {
    console.log('防抖')
}
addEventListener('scroll', debounce(fn, 1000))


// 6. 去重
// set
let arr = [1, 1, 2, 3, 4, 5, 5, 6]
let arr2 = [...new Set(arr)]
// reducer
let arr = [1, 1, 2, 3, 4, 5, 5, 6]
let arr2 = arr.reduce(function (ar, cur) {
    if (!ar.includes(cur)) {
        ar.push(cur)
    }
    return ar
}, [])