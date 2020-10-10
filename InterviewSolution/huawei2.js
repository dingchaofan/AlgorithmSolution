// 1. 螺旋排序
// 输入
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 输出
// 1 2 3
// 8 9 4
// 7 6 5

let inputnum = readline().split(' ')
let m = parseInt(inputnum[0])
let n = parseInt(inputnum[1])
let inputarr = []
let numberSort = []
for (let lineindex = 0; lineindex < m; lineindex++) {
    let lineinput = readline().split(' ')
    lineinput.forEach(element => {
        return parseInt(element)
    });
    inputarr.push(lineinput)
    numberSort = numberSort.concat(lineinput)
}
numberSort = numberSort.sort((a,b)=>{
    return a-b
})
let res = writeArr(inputarr,numberSort)
for (let index = 0; index < inputarr.length; index++) {
    console.log(res[index].join(' '))
}

function writeArr(inputarr,numberSort){
    if(inputarr.lenght <= 1){
        return numberSort
    }
    let resArr = inputarr.slice(0)
    let top = 0
    let bottom = inputarr.length - 1
    let left = 0
    let right = inputarr[0].length - 1
    while(left<right && top<bottom){
        for (let j = left; j < right; j++) {
            resArr[top][j] = numberSort.shift()
        }
        for (let i = top; i < bottom; i++) {
            resArr[i][right] = numberSort.shift()
        }
        for (let j = right; j > left; j--) {
            resArr[bottom][j] = numberSort.shift()
        }
        for (let i = bottom; i > top; i--) {
            resArr[i][left] = numberSort.shift()
        }
        top += 1
        bottom -= 1
        left += 1
        right -= 1
    }
    if(left == right && top != bottom){
        for (let i = top; i <= bottom; i++) {
            resArr[i][left] = numberSort.shift()
        }
    }
    else if(left != right && top == bottom){
        for (let j = left; j <= right; j++) {
            resArr[top][j] = numberSort.shift()
        }
    }
    else if(left == right && top == bottom){
        resArr[left][top] = numberSort.shift()
    }
    return resArr
}

// 2. 零件加工
let E = parseInt(readline())
let N = parseInt(readline())
let inputarr = []
for (let lineindex = 0; lineindex < N; lineindex++) {
    let lineinput = readline().split(' ')
    lineinput = lineinput.map(element => {
        return parseInt(element)
    });
    let endtime = lineinput[2]+lineinput[3]
    lineinput.push(endtime)
    if(endtime<=E){
        inputarr.push(lineinput)
    }
}
let res = []
let endtime = 0
// 生成全排列组合


// 3 最少道路
// 输入
// 3 3
// 1 2
// 2 3
// 1 3
// 输出
// 2

let inputnum = readline().split(' ')
let n = parseInt(inputnum[0])
let m = parseInt(inputnum[1])
let inputarr = []
for (let lineindex = 0; lineindex < m; lineindex++) {
    let lineinput = readline().split(' ')
    lineinput.forEach(element => {
        return parseInt(element)
    });
    inputarr.push(lineinput)
}

