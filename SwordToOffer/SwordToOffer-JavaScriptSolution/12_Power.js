// 12 数值的整数次方

// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

// 保证base和exponent不同时为0

// 快速幂算法 https://blog.csdn.net/qq_19782019/article/details/85621386

// power%2==1可以用更快的“位运算”来代替，power&1 = 1
// 对于power=power/2来说，也可以用更快的“位运算”进行替代 power = power >> 1 向下取整

function Power(base, exponent)
{
    // write code here
    let res = 1
    let baseFlag = 1 // 底数正负号
    let exponentFlag = 1 // 指数正负号
    if(exponent < 0){
        exponentFlag = -1
        exponent = -1*exponent
    }
    if(base < 0){
        base = -1 * base
        // exponent%2等价于exponent&1
        if(exponent&1 != 0){
            baseFlag = -1
        }
    } 
    while(exponent > 0){
        // 如果指数是偶数
        // exponent%2等价于exponent&1
        if(exponent&1 == 0){
            // exponent/2 等价于exponent>>1
            exponent = exponent>>1
            base = base**2
        }
        // 如果指数是奇数 
        else{
            // (exponent - 1)/2 等价于exponent>>1 （向下取整）
            exponent = exponent>>1 
            res = res * base
            base = base**2
        }
    }
    if(exponentFlag == -1){
        res = 1/res
    }
    return baseFlag*res
}

Power(2, 3)