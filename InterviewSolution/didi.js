// 1. D星群岛
// 无向图的连通情况

let T = readInt()
for (let i = 0; i < T; i++) {
    let input = read_line().split(' ')
    let n = parseInt(input[0])
    let m = parseInt(input[1])
    let k = parseInt(input[2])

    let bridgePlan = []
    for (let index = 0; index < m; index++) {
        let bridge = read_line().split(' ')
        let land1 = parseInt(bridge[0])
        let land2 = parseInt(bridge[1])
        let cost = parseInt(bridge[2])
        if(cost <= k){
            bridgePlan.push([land1,land2])
        }
    }
    if(bridgePlan.length <= 0){
        console.log('No')
        break
    }
    let res = [].concat(bridgePlan[0])
    bridgePlan.shift()
    for (let index = 0; index < bridgePlan.length; index++) {
        let templine = bridgePlan[index]
        if(res.indexOf(templine[0]) != -1 || res.indexOf(templine[1])){
            res = res.concat(templine)
            res = Array.from(new Set(res))
        }
    }
    

    if(res.length == n){
        console.log('Yes')
        break
    }
    else{
        console.log('No')
        break
    }
}


// 2. 毕业旅行
// 带权图的最短路径

let nm = read_line().split(' ')
let n = parseInt(nm[0])
let m = parseInt(nm[1])
let arr = []
for(let i = 0; i<m; i++){
    let input = read_line().split(' ')
    let u = parseInt(input[0])
    let v = parseInt(input[1])
    let time = parseInt(input[2])
    arr.push([u,v,time])
}
let ses = read_line().split(' ')
let s = parseInt(ses[0])
let e = parseInt(ses[1])
let start = parseInt(ses[2])