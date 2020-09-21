// 1. 洗牌魔术

let input1 = readline().split(' ')
let input2 = readline().split(' ')
let N = parseInt(input1[0])
let M = parseInt(input1[1])
let Arr = input2.map((item) => {
    return parseInt(item)
})

function sortCards(arr1, arr2) {
    let num = arr1.length + arr2.length
    let res = []
    for (let index = 0; index < num; index++) {
        if (index % 2 == 0 && arr2.length > 0) {
            res.push(arr2.shift())
        }
        else {
            res.push(arr1.shift())
        }
    }
    return res
}

for (let index = 0; index < M; index++) {
    let splitNum = Math.floor(N / 2)
    let arr1 = Arr.slice(0, splitNum)
    let arr2 = Arr.slice(splitNum)
    Arr = sortCards(arr1, arr2)
}
console.log(Arr.join(' '))



// 3. 撕纸条

let T = parseInt(readline())

function isTrue(s1, s2, s3, K) {
    let stack = []

}

for (let index = 0; index < T; index++) {
    let arr = readline().split(' ')
    let s1 = arr[0]
    let s2 = arr[1]
    let s3 = arr[2]
    let K = parseInt(arr[3])

    let res = isTrue(s1, s2, s3, K)
    console.log(res)

}


// 猿辅导一面
// 1.
window.test = '456'
const obj = {
    test: "123",
    getTest: function () {
        return function () {
            return this.test
        }
    }
}
console.log(obj.getTest()()) // 456
// obj.getTest()执行完变成一个函数，这个函数其实this指向的是window
window.test = '456'
const obj = {
    test: "123",
    getTest: function () {
        let newThis = this
        return function () {
            return newThis.test
        }
    }
}
console.log(obj.getTest()()) // 123

// 2.
var obj = {
    test: '123',
    f1: () => {
        console.log(this.test)
    },
    f2: function () {
        console.log(this.test)
    },
}
obj.f1() // undefined 箭头函数的this 取到的是他上一层的this
obj.f2() // 123
new obj.f1() // throw error
new obj.f2() // undefined

// 3.
const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    reject(2)
}))
setTimeout(() => console.log(3), 0)
fn()
    .catch(err => console.log(err))
    .then(res => console.log(4))
console.log(5)

// 下面两种方式区别
p1.then(res).catch(rej)
p2.then(res, rej)


// 4、数组去重
// 输入：[1,2,3,4,4]
// 输出：[1,2,3,4]
// 不能使用额外的辅助数组或者set，要求空间复杂度为O(1)，时间复杂度低一些
// [3,3,3,3,2,1]
// [1,2,3,4,5,6,3,3,3]    不需要考虑超过6之后的元素
// const arr = [3,3,3,3,2,1]
const arr = [1,2,5,2,1,4,3,4,5,6,3,3,3]
// 1.使用ES6的Set
function getArr(arr) {
    const res = [...new Set(arr)]
    // 等价于下面这个
    // const res = Array.from(new Set(arr))
    return res
}
// 遍历 不存在则插入结果数组
function getArr2(arr) {
    return arr.reduce((res, item) => {
        if (!res.includes(item)) {
            res.push(item)
        }
        return res
    }, [])
}
// 直接在原数组上操作
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
console.log(getArr3(arr))