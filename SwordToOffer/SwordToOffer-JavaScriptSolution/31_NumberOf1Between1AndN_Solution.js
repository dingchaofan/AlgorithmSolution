// 31 整数中1出现的次数（从1到n整数中1出现的次数）

// 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
// 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
// 但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,
// 可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。


function NumberOf1Between1AndN_Solution(n) {
    // write code here
    if (n < 0) {
        return 0
    }
    let high = 0 // 高位
    let cur = 0  // 当前位的数值
    let low = 0  // 低位
    let count = 0// 计数
    let i = 1    // 位数 个十百千
    while (i <= n) { // 位数小于等于n时 进入循环
        high = parseInt(n / i) // 高位数等于n/i 将i位数放在高位数的末位
        low = n % i // 低位数等于n%i 表示i位数后面的数
        cur = high % 10 // i位数的值，高位对10取余即可
        // 判断i位数cur的值 
        // 当cur为0时i位数为1出现high//10*i次
        // 当cur为1时i位数为1出现high//10*i + low +1次
        // 当cur为>1时i位数为1出现(high//10+i)*i次
        // if(cur == 0){
        //     count += parseInt(high/10)*i
        // }
        // else if(cur == 1){
        //     count += parseInt(high/10)*i + low +1
        // }
        // else{
        //     count += parseInt(high/10)*i+i
        // }
        // cur为>1和=0可以合并写为 (high+8)//10*i 
        // 因为>1时high+8会进1位 等价于 (high//10+i)*i 而0+8不会进位
        // 等价于上面的三个if...else判断
        count += parseInt((high + 8) / 10) * i + ((cur == 1) ? (low + 1) : 0)
        i = i * 10 // 位数 个十百千进位
    }
    return count
}