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
            let element = obj[i]
            if (element && typeof element == 'object') {
                copy[key] = Array.isArray(element) ? [] : {}
                // resObj[key] = (element.constructor == Array) ? [] : {}
                copy[key] = deepCopy(obj[key]) 
                // arguments.callee(element, resObj[key])
            }
            else {
                copy[key] = element
            }
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
// 直接在原数组上操作 不用额外空间 复杂度是O(n)
function getArr3(arr) {
    let point = 1
    for (let index = 1; index < arr.length; index++) {
        let cur = arr[point]
        if(arr.indexOf(cur)<point){
            arr.push(arr.splice(point,1)[0])
        }
        else{
            point+=1
        }
    }
    return arr.slice(0,point)
}


// 随机生成100个数，其中随机取10个升序排列
let arr = []
while (arr.length < 100) {
    arr.push(Math.floor(Math.random() * 100 + 1))
}
let sortArr = []
sortArr.push(arr[Math.floor(Math.random() * 100)])
while (sortArr.length < 10) {
    let tempNum = arr[Math.floor(Math.random() * 100)]
    if (sortArr.indexOf(tempNum) == -1) {
        if (tempNum >= sortArr[sortArr.length - 1]) {
            sortArr.push(tempNum)
            continue
        }
        else if (tempNum <= sortArr[0]) {
            sortArr.unshift(tempNum)
            continue
        }
        else {
            for (let index = sortArr.length - 2; index >= 1; index--) {
                const element = sortArr[index];
                if (tempNum <= element && tempNum >= sortArr[index - 1]) {
                    sortArr.splice(index, 0, tempNum)
                    break
                }
            }
        }
    }
}
console.log(sortArr)

// add(1)(2)(3)(5,6).sumOf() 累加器
// https://blog.csdn.net/weixin_38641550/article/details/81565223
function add() {
    let x = Array.from(arguments)
    var sum = x.reduce((a,b)=>{
        return a+b
    },0);
    var tmp = function (y) {
      sum = sum + y;
      return tmp;
    };
    tmp.sumOf = function () {
      return sum;
    };
    return tmp;
}
console.log(add(1)(2)(3)(5,6).sumOf())

