// 63. 数据流中的中位数    

// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
// 那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中
// 读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平
// 均值。我们使用Insert()方法读取数据流，使用GetMedian()方法
// 获取当前读取数据的中位数。

let arr = []
function Insert(num) {
    // write code here
    if (arr.length === 0) {
        arr.push(num)
    }
    else {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] > num) {
                arr.splice(index, 0, num)
                return;
            }
        }
        arr.push(num)
    }
}
function GetMedian() {
    // write code here
    let len = arr.length
    if (len === 0) {
        return 0
    }
    if (len % 2 === 0) {
        return (arr[len / 2] + arr[len / 2 - 1]) / 2
    }
    else {
        return arr[(len - 1) / 2]
    }
}