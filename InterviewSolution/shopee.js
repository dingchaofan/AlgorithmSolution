// 9.02 shopee笔试

// 1. 判断一串数字是不是靓号
// 靓号条件：1.至少存在连续4个相同数字；2.至少存在4个连续递增为1的数字

// var numStr = readline();

// function isNiceNum(numStr){
//     // code
//     if(numStr.length !== 11){
//         return 'N'
//     }
//     let reg1 = new RegExp("(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){3}\d");
//     let reg2 = new RegExp("([\d])\1{3,}");
//     if(reg1.test(numStr) || reg2.test(numStr)){
//         return 'Y'
//     }
//     else{
//         return 'N'
//     }
// }
// console.log(isNiceNum(numStr))


var numStr = readline();

function isNiceNum(numStr){
    // code
    if(numStr.length !== 11){
        return 'N'
    }
    for (let index = 0; index < numStr.length-3; index++) {
        const element = numStr[index];
        if(element === numStr[index+1] && element === numStr[index+2] && element === numStr[index+3]){
            return 'Y'
        }
        // numStr是string, numStr[index+1]-1是int 用===不行 要用== 类型转换
        else if(element == numStr[index+1]-1 && element == numStr[index+2]-2 && element == numStr[index+3]-3){
            return 'Y'
        }
        else{
            return 'N'
        }
    }
}
console.log(isNiceNum(numStr))


//2. 路径属性返回 不存在的返回unknown
var propPath = readline();
var data={
    company:{
        name:"Shopee",
        location:{
            country:"China",
            city:"SZ",
        }
    },
    industry:"e-commerce"
}

function getProp(propPath){
    // code
    let path = propPath.split('.')
    let temp = data
    for (let index = 0; index < path.length; index++) {
        const element = path[index];
        if(temp.hasOwnProperty(element)){
            temp = temp[element]
        }
        else{
            return 'unknown'
        }
    }
    return temp
}
var ret = getProp(propPath)
console.log(ret)

// 3. 求笛卡尔积
// x = ['a1','a2'] y=['b1',b2]
// x*b = [['a1','b1'],['a1','b2'],['a2','b1'],['a2','b2']]
/**
 * 
 * @param xSet string字符串一维数组 
 * @param ySet string字符串一维数组 
 * @return string字符串二维数组
 */
function getCartesian( xSet ,  ySet ) {
    // write code here
    let res = []
    for (let index = 0; index < xSet.length; index++) {
        let itema = xSet[index];
        for (let indexj = 0; indexj < ySet.length; indexj++) {
            let itemb = ySet[indexj];
            res.push([itema,itemb])
        }
    }
    return res
}
module.exports = {
    getCartesian : getCartesian
};