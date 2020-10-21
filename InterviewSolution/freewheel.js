/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 对输入集合做hash join，输出关联后的下标的二元组集合
 * @param setA int整型一维数组 输入集合1
 * @param setB int整型一维数组 输入集合2
 * @return int整型二维数组
 */
let setA = [1,2,3,3,4,5]
let setB = [1,3,5,6,7]
function hashJoin( setA ,  setB ) {
    // write code here
    let shortSet,langSet 
    let hash = {}
    let res = []
    if(setA.length > setB.length){
        shortSet = setB
        langSet = setA
    }
    else{
        shortSet = setA
        langSet = setB
    }
    for (let index = 0; index < shortSet.length; index++) {
        const element = shortSet[index];
        if(hash[element]){
            hash[element].push(index)
        }
        else{
            hash[element] = []
            hash[element].push(index)
        }
    }
    for (let index = 0; index < langSet.length; index++) {
        const element = langSet[index];
        if(hash[element]){
            for (let i = 0; i < hash[element].length; i++) {
                hash[element][i]
                let tempres = [index,hash[element][i]]
                res.push(tempres)
            }
        }
    }
    return res    
}

function sortMergeJoin( setA ,  setB ) {
    // write code here
    let setAll = {}
    let res = []
    for (let i = 0; i < setA.length; i++) {
        let ele = setA[i]
        if(setAll[ele]){
            if(setAll[ele]['A']){
                setAll[ele]['A'].push(i)
            }
            else{
                setAll[ele]['A'] = []
                setAll[ele]['A'].push(i)
            }
        }
        else{
            setAll[ele] = {}
            setAll[ele]['A'] = [i] 
        }
    }
    for (let j = 0; j < setB.length; j++) {
        let ele = setB[j]
        if(setAll[ele]){
            if(setAll[ele]['B']){
                setAll[ele]['B'].push(j)
            }
            else{
                setAll[ele]['B'] = []
                setAll[ele]['B'].push(j)
            }
        }
        else{
            setAll[ele] = {}
            setAll[ele]['B'] = [j]
        }
    }
    for (let items of Object.values(setAll)) {
        if(items['A'] && items['B']){
            for (let i = 0; i < items['A'].length; i++) {
                for (let j = 0; j < items['B'].length; j++) {
                    let tempRes = [items['A'][i],items['B'][j]]
                    res.push(tempRes)
                }
            }
        }
    }
    return res
}
console.log(sortMergeJoin( setA ,  setB ))
