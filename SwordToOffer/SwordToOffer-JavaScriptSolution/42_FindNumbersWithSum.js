// 42. 和为S的两个数字
// 题目描述
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
// 输出描述:
// 对应每个测试案例，输出两个数，小的先输出。

function FindNumbersWithSum(array, sum) {
    // write code 
    let [low, high] = [0, array.length - 1]
    while (low < high) {
        if (array[low] + array[high] == sum) {
            return [array[low], array[high]]
        }
        else if (array[low] + array[high] > sum) {
            high -= 1
        }
        else {
            low += 1
        }
    }
    return []
}