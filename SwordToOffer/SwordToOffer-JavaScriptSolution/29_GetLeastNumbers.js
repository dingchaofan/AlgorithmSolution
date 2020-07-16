// 29.最小的K个数

// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if(k>input.length){
        return []
    }
    let sortedList = quickSort(input)
    return sortedList.slice(0,k)
}

function quickSort(array){
    if (array.length <= 1) { return array }
    let pivotIndex = array.length>>1
    let pivot = array[pivotIndex]
    let left = []
    let right = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (index !== pivotIndex) {
            if(element<pivot){
                left.push(element)
            }
            else{
                right.push(element)
            }
        }
    }
    return quickSort(left).concat(pivot,quickSort(right))
}

function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array
}

function selectSort(array){
    let minIndex
    for (let i = 0; i < array.length; i++) {
        minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[minIndex]){
                minIndex = j
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array
}

function insertSort(array){
    for (let i = 1; i < array.length; i++) {
        if(array[i] < array[i-1]){
            let temp = array[i]
            let tempIndex = i-1
            while(tempIndex>=0 && temp<array[tempIndex]){
                array[tempIndex+1] = array[tempIndex]
                tempIndex -= 1
            }
            array[tempIndex+1] = temp
        }
    }
    return array
}