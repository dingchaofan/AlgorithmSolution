// 1. 有传送门的房间 是跳跃游戏一和跳跃游戏二结合
// 处理输入
let input='', line;
while((line = read_line()) != ''){
  input += line;
}
// 处理输出
const result = Solution(JSON.parse(input));
print(result);


// 算法部分
function isFin(S){
    let len = 1
    let index = 0
    while(len < S.length){
        if(S[index] == 0 && len == index + 1){
            return false
        }
        len = Math.max(S[index]+index+1,len)
        index++
    }
    return true
}
function Solution(S) {
    if(!isFin(S)){
        return 'Infinity'
    }
    if (S.length == 1) {
        return 0
    }
    if (S[0] >= S.length - 1) {
        return 1
    }
    let step = 0
    let tempIndex = 0
    let maxLen = tempIndex + S[tempIndex]
    for (let i = 0; i < S.length;) {
        tempIndex = i
        for (let j = i + 1; j <= i + S[i]; j++) {
            if(j+S[j] > maxLen){
                tempIndex = j
                maxLen = tempIndex + S[tempIndex]
            }
        }
        step++
        i = tempIndex
        if(maxLen >= S.length - 1){
            return ++step
        }
    }
    return step
}
// 2. 有精度乘法
// 处理输入
const input = read_line()
const [a, b] = input.split(' ')

// 处理输出
const result = Solution(+a, +b)
print(result)

// 算法部分
function Solution(a, b) {
    let strA = a.toString()
    let strB = b.toString()
    let anum = strA.split('.')
    let bnum = strB.split('.')
    let alittlenum = 0
    let blittlenum = 0
    // 小数
    if (anum.length > 1) {
        alittlenum = anum[1].length
    }
    if (anum.length > 1) {
        blittlenum = bnum[1].length
    }
    let littlenum = alittlenum + blittlenum
    let res = (a * Math.pow(10, littlenum)) * (b * Math.pow(10, littlenum)) / Math.pow(10, littlenum)
    return res
}