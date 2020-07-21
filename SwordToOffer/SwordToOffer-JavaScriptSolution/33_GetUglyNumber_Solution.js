// 33. 丑数

// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上
// 我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

function GetUglyNumber_Solution(index) {
    // write code here
    if (index <= 6) {
        return index
    }
    let res = [1, 2, 3, 4, 5, 6]
    let [t2, t3, t5] = [3, 2, 1]
    for (let i = 6; i < index; i++) {
        res.push(Math.min(res[t2] * 2, res[t3] * 3, res[t5] * 5))
        while (res[t2] * 2 <= res[i]) {
            t2++
        }
        while (res[t3] * 3 <= res[i]) {
            t3++
        }
        while (res[t5] * 5 <= res[i]) {
            t5++
        }
    }
    return res[index - 1]
}