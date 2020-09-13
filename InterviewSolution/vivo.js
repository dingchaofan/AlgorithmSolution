// 1. 游戏地图可达

let n = parseInt(readline())
let position = readline().split(' ')
let start = [parseInt(position[0]),parseInt(position[1])]
let end = [parseInt(position[2]),parseInt(position[3])]
let map = []
for(let i = 0; i<n; i++){
    let line = readline().split('')
    map.push(line)
}

// 2. 回文字符串
let input = readline()
function isReverseStr(input){
    let str = input.split('').reverse()
    str = str.join('')
    if(input == str){
        return input
    }
    else{
        for (let index = 0; index < input.length; index++) {
            let arr1 = input.slice(0,index)
            let arr2 = input.slice(index+1)
            let delStr = arr1+arr2
            let str = delStr.split('').reverse().join('')
            if(delStr == str){
                return delStr
            }
        }
        return 'false'
    }
}

// 3. 编译顺序

function compileSeq( input ) {
    // write code here
    let arr = input.split(',').map((item)=>{
        return parseInt(item)
    })
    let len = arr.length
    let res = []
    while(res.length<len) {
        let firstkey = arr.indexOf(-1)
        if(firstkey != -1){
            res.push(firstkey)
            arr[firstkey] = -2
            for (let index = 0; index < arr.length; index++) {
                if(arr[index] == firstkey){
                    arr[index] = -1
                }
            }
        }
    }
    return res.join(',')
}
module.exports = {
    compileSeq : compileSeq
};


