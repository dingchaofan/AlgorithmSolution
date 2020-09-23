// 1. 铁丝
let T = parseInt(readline())
for (let index = 0; index < T; index++) {
    let n = parseInt(readline())
    let a = readline().split(' ')
    let lengthObj = {}
    for (let i = 0; i < a.length; i++) {
        a[i] = parseInt(a[i])
        if(lengthObj.hasOwnProperty(a[i])){
            lengthObj[a[i]] += 1
        }
        else{
            lengthObj[a[i]] = 1
        }
    }
    let zheng = 0 // 正方形
    let chang = 0 // 长方形
    for(let [key,value] of Object.entries(lengthObj)){
        if(value >= 4){
            let num = Math.floor(value/4)
            zheng += num
            let remain = value-(4*num)
            lengthObj[key] = remain
        }
    }
    let stack = []
    for(let [key,value] of Object.entries(lengthObj)){
        if(value >=2){
            let num = Math.floor(value/2)
            stack.push(key)
            let remain = value-(2*num)
            lengthObj[key] = remain
        }
    }
    chang = Math.floor(stack.length/2)
    console.log(zheng+' '+chang)
}

// 2. 判断是否偶序列
let T = parseInt(readline())
for(let index = 0; index<T; index++){
    let n = parseInt(readline())
    let a = readline().split(' ')

    let ji = 0 // 下标是奇数
    let ou = 0 // 下标是偶数
    for (let i = 0; i < a.length; i++) {
        a[i] = parseInt(a[i])
        // 下标是偶数
        if((i+1)%2 == 0){
            if(a[i] % 2 != 0){
                ou++
            }
        }
        else{
            if(a[i]%2 == 0){
                ji++
            }
        }
    }
    if(ji == ou){
        console.log(ji)
    }
    else{
        console.log(-1)
    }
}