// 华为面试

// 一面 最大和的子序列
let input  = [6,-1,5,4,-7]

function maxSubString(arr){
    let res = arr[0]
    for (let i = 0; i < arr.length; i++) {
        for (let sublen = i+1; sublen <= arr.length; sublen++){
            let subStr = arr.slice(i,sublen)
            let tempsum = subStr.reduce((sum,item)=>{return sum+item},0)
            if(tempsum>res){
                res = tempsum
            }
        }
    }
    return res
}

// 二面 输入数字，返回,分割的钱的字符串，保留两位小数
let input = 0.1
// 1100000  ==>1,100,000.00
// 1100000  ==>1,100,000.00
function genFormatStr(value){
    let oriNum = value.toFixed(2).split('.')
    let oriStr = oriNum[0].split('')
    let res = []
    let time = 0
    for (let index = oriStr.length-1; index >= 0; index--) {
        let cur = oriStr[index]
        if(time != 3){
            res.push(cur)
            time += 1
        }
        else{
            time = 1
            res.push(',')
            res.push(cur)
        }
    }
    let littlePart = oriNum[1]+'00'
    res = res.reverse().join('')+'.'+littlePart.slice(0,2)
    return res
}
console.log(genFormatStr(input))