// js查找算法 searh
// https://www.cnblogs.com/zhuochong/p/11641247.html

// 测试数据
var arr = [1,3,4,5,2,4,2]

// 顺序查找
// 复杂度分析：　
// 　　查找成功时的平均查找长度为：（假设每个数据元素的概率相等） ASL = 1/n(1+2+3+…+n) = (n+1)/2 ;
// 　　当查找不成功时，需要n+1次比较，时间复杂度为O(n);
// 　　所以，顺序查找的时间复杂度为O(n)。
function SequenceSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}
// console.log(SequenceSearch(arr,2))

// 二分查找
// 复杂度分析：最坏情况下，关键词比较次数为log2(n+1)，且期望时间复杂度为O(log2n)；
// 对已排序的数组进行折半查找
function binarySearch(arr, value) {
    data = [...arr]
    // 对无序数组进行排序
    data.sort((a,b)=>{return a-b})

    var end = data.length - 1;
    var start = 0;
    if(value > data[end] || value < data[start]){
        return -1
    }
    while (start <= end) {
        let cut = Math.floor((end + start) / 2);
        if (data[cut] == value) {
            return cut;
        }
        if (data[cut] > value) {
            end = cut - 1;
        } else {
            start = cut + 1;
        }
    }
    return -1
}
// console.log(binarySearch(arr,0))