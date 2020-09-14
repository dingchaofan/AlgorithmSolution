// 1. 时间戳转时间 YYYY-MM-DD:hh:mm:ss
function format(timer) {
    let time = new Date(timer)
    let YYYY = time.getUTCFullYear().toString()
    let MM = ('0'+((time.getUTCMonth() + 1).toString()))
    let DD = ('0'+time.getUTCDate().toString())
    let hh = ('0'+time.getUTCHours().toString())
    let mm = ('0'+time.getUTCMinutes().toString())
    let ss = ('0'+time.getUTCSeconds().toString())
    MM = MM.slice(MM.length-2)
    DD = DD.slice(DD.length-2)
    hh = hh.slice(hh.length-2)
    mm = mm.slice(mm.length-2)
    ss = ss.slice(ss.length-2)
    return YYYY+'-'+MM+'-'+DD+':'+hh+':'+mm+':'+ss
}
//只需编写函数主体即可
//以下代码做输入输出使用
// print(format(readline()*1))


// 2. 数组中第K大元素
// 3,2,3,1,2,4,5,5,6 4
// 4
function test(input){
    let arr = input.split(' ')[0]
    let k = parseInt(input.split(' ')[1])
    arr = arr.split(',').map((item)=>{
        return parseInt(item)
    })
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 -i; j++) {
            if(arr[j] < arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr[k-1]
}
//编写上方主体函数即可
//以下代码获取输入勿动
// print(test(readline()));

// 3. 数组中出现次数从大到小输出

function getSort(array) {
    let arr = array.map((item)=>{
        return parseInt(item)
    });
    let obj = {}
    obj = arr.reduce(function(timeobj,num){
        if(num in timeobj){
            timeobj[num]++
        }
        else{
            timeobj[num] = 1
        }
        return timeobj
    },{})
    let res = []
    while(Object.keys(obj).length>0){
        let max = 0
        let temp = ''
        for (let key in obj) {
            let times = obj[key]
            if(times>max){
                max = times
                temp = key
            }
        }
        res.push(temp)
        delete obj[temp]
    }
    return res.join(',')
}
//编写上方主体函数即可
//以下代码获取输入勿动
// let pass = readline();
// pass = pass.slice(1,pass.length-1)
// print(getSort(pass.split(',')))
console.log(getSort(['0','1','1','2']))