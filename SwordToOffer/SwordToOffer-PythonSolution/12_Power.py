# 12 数值的整数次方

# 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

# 保证base和exponent不同时为0

# 快速幂算法 https://blog.csdn.net/qq_19782019/article/details/85621386

# power%2==1可以用更快的“位运算”来代替，power&1 == 1
# 对于power=power/2来说，也可以用更快的“位运算”进行替代 power = power >> 1 向下取整


# -*- coding:utf-8 -*-
class Solution:
    def Power(self, base, exponent):
        # write code here
        baseFlag = 1 # 底数正负号
        exponentFlag = 1 # 指数正负号
        res = 1 # 结果
        if(exponent < 0):
            exponentFlag = -1
            exponent = exponent * -1
        if(base < 0):
            base = -1 * base 
            if(exponent&1 != 0):
                baseFlag = -1 
                
        while exponent > 0:
            if(exponent&1 == 0):
                exponent = exponent>>1
                base = base<<1
            else:
                exponent = (exponent-1)/2
                res = res * base
                base = base ** 2
        if(exponentFlag == -1):
            res = 1 / res
        if(baseFlag == -1):
            res = res * -1
        return res
 

if __name__=='__main__':
    solution = Solution()
    ans = solution.Power(0,4)
    print('ans=',ans)