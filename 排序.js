// JavaScript实现经典排序算法
// sort
// 参考博客：https://juejin.im/post/5caafbca6fb9a05e5e75f631

// 交换元素的三种方法
if (false) {
    /** 1.使用中间变量 **/
    var temp = arr[j + 1];
    arr[j + 1] = arr[j]
    arr[j] = temp
    /** 2.适用纯数字的数组排序 **/
    arr[j] = arr[j] + arr[j + 1]
    arr[j + 1] = arr[j] - arr[j + 1]
    arr[j] -= arr[j + 1]
    /** 3.使用es6解构赋值 **/
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
}

// 冒泡排序
// 交换排序，相邻比较，两层循环，数组小时性能好
// 平均复杂度O(n^2) 最坏O(n^2) 最好O(n) 空间复杂度O(1)
// 排序方式In-place 稳定
function bubbleSort(array) {
    let len = array.length
    for (let index = 0; index < len; index++) {
        for (let j = 0; j < len - 1 - index; j++) {
            if (array[j] > array[j + 1]) { // 相邻元素两两对比
                // 元素交换

                // let temp = array[j]
                // array[j] = array[j+1]
                // array[j+1] = temp

                /** 3.使用es6解构赋值 **/
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}



// 快速排序
// 递归分治法，选择一个基准元素，根据基准元素对数组分区
// 每个分区快排递归，直到无法分区，最后数组拼接完成排序
// 平均复杂度O(nlogn) 最坏O(n^2) 最好O(nlogn) 空间复杂度O(logn)
// 排序方式In-place 不稳定
function quickSort(array) {
    //array.length<=1,则直接返回arr
    if (array.length <= 1) { return array }
    // array的元素个数/2，再下去整，将值保存在pivotIndex中
    var pivotIndex = array.length >> 1
    // 将array中pivotIndex位置的元素，保存在变量pivot中
    var pivot = array[pivotIndex];
    //声明空数组left和right
    var left = [];
    var right = [];
    for (let index = 0; index < array.length; index++) { // 遍历元素
        if (index !== pivotIndex) {
            if (array[index] <= pivot) {
                left.push(array[index])
            }
            else {
                right.push(array[index])
            }
        }
    }
    // 链接多个数组到 left 从小到大
    return quickSort(left).concat(pivot, quickSort(right));
}



// 选择排序
// 两次循环，外循环遍历数组，内循环起始是外循环起始+1，内循环寻找最小数，和外循环交换。
// 最稳定，无论什么数据进去都是O(n²)的时间复杂度，不需要额外空间
// 平均复杂度O(n²) 最坏O(n²) 最好O(n²) 空间复杂度O(1)
// 排序方式In-place 稳定
function selectionSort(array) {
    let len = array.length
    let minIndex, temp
    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i + 1; j < array.length; j++){ 
            if(array[j] < array[minIndex]){ //寻找最小的数
                minIndex = j                //将最小数的索引保存
            }   
        }
        // 将最小数交换到本次遍历的最前面
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array
}

// 插入排序
// 构建有序序列，对未排序元素，在已排序序列中扫描，找到对应位置插入
// 在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
// 平均复杂度O(n²) 最坏O(n²) 最好O(n) 空间复杂度O(1)
// 排序方式In-place 稳定
function selectionSort(array) {
    // 从1位置开始遍历array中每个元素，
    for (let i = 1; i < array.length; i++) { // 如果当前元素<前一个元素
        if(array[i] < array[i-1]){ 
            let temp = array[i]   // 将当前元素值临时保存在temp中
            let tempIndex = i-1   // 将已排序的长度i-1赋值给tempIndex
            // 对已排序的数组进行从后往前遍历 直到找到大于temp的数或遍历完毕
            while(tempIndex >= 0 && temp < array[tempIndex]){
                // 已排序元素逐步向后挪位，为最新元素提供插入空间
                array[tempIndex+1] = array[tempIndex] 
                tempIndex -= 1
            }
            array[tempIndex+1] = temp
        }
    }
    return array
}
