function sum1(value){
    function sumOf(interValue){
        return sum(value+interValue)
    }
    sumOf.value = value
    return sumOf
}

function getArr3(arr) {
    let point = 1
    for (let index = 1; index < arr.length; index++) {
        let cur = arr[point]
        if(arr.indexOf(cur)<point){
            arr.push(arr.splice(point,1)[0])
        }
        else{
            point+=1
        }
    }
    return arr.slice(0,point)
}
console.log(getArr3([3,3,3,3,2,1]))