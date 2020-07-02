/* 
7. 斐波那契数列
题目描述
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
n<=39 
*/

// 递归
function Fibonacci(n)
{
    // write code here
    if(n<1){
        return 0
    }
    if(n == 1 || n == 2){
        return 1
    }
    return Fibonacci(n-2) + Fibonacci(n-1)
}
// 尾递归优化
function Fibonacci_2(n, acc, cal){
    if (n<1) {
        return 0
    }
    if (n==1) {
        return acc
    }
    if (n==2) {
        return cal
    }   
    return Fibonacci_2(n-1, cal, acc+cal)
}
// 使用额外空间
function Fibonacci_3(n){
    if(n<1){
        return 0
    }
    let a = 0
    let b = 1
    let index = 1
    while (index<n) {
        let temp = a
        a = b
        b = a + temp
        index += 1
    }
    return b
}

// 测试用例
var ans = Fibonacci(9)
console.log(ans)

for (let index = 0; index < 10; index++) {
    const element = Fibonacci(index);
    console.log(index,element)  
}

var ans = Fibonacci_3(89)
console.log(ans)
