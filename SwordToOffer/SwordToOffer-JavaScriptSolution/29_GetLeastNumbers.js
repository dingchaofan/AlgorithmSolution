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