// 48. 不用加减乘除做加法
// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

function Add(num1, num2)
{
    // write code here
    while(num2){
        // 异或，求各位和，不算进位
        let sum = num1 ^ num2 
        // 与操作之后左移一位，计算出进位
        let carry = (num1 & num2) << 1
        num1 = sum
        num2 = carry
    }
    // 不再进位时，可以返回
    return num1
}