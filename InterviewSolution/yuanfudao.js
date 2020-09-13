// 1. 洗牌魔术

let input1 = readline().split(' ')
let input2 = readline().split(' ')
let N = parseInt(input1[0])
let M = parseInt(input1[1])
let Arr = input2.map((item)=>{
    return parseInt(item)
})

function sortCards(arr1,arr2) {
    let num = arr1.length + arr2.length
    let res = [] 
    for (let index = 0; index < num; index++) {
        if(index%2 == 0 && arr2.length>0){
            res.push(arr2.shift())
        }
        else{
            res.push(arr1.shift())
        }
    }
    return res
}

for (let index = 0; index < M; index++) {
    let splitNum = Math.floor(N/2)
    let arr1 = Arr.slice(0,splitNum)
    let arr2 = Arr.slice(splitNum)
    Arr = sortCards(arr1,arr2)
}
console.log(Arr.join(' '))



// 3. 撕纸条

let T = parseInt(readline())

function isTrue(s1,s2,s3,K){
    let stack = []

}

for (let index = 0; index < T; index++) {
    let arr = readline().split(' ')
    let s1 = arr[0]
    let s2 = arr[1]
    let s3 = arr[2]
    let K = parseInt(arr[3])
    
    let res = isTrue(s1,s2,s3,K)
    console.log(res)
    
}