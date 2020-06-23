# 10. 矩形覆盖
# 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

# 直接递归 复杂度过高 内存溢出
# -*- coding:utf-8 -*-
class Solution:
    def rectCover(self, number):
        # write code here
        if(number<=2):
            return number
        return self.rectCover(number-1) + self.rectCover(number-2)

# 尾递归
# -*- coding:utf-8 -*-
class Solution:
    def rectCover(self, number):
        # write code here
        return self.tailRectCover(number, 1, 2)
    def tailRectCover(self, number, a, b):
        if(number<1):
            return 0
        if(number == 1):
            return a
        if(number == 2):
            return b
        return self.tailRectCover(number-1, b, a+b)


# 使用额外空间
# -*- coding:utf-8 -*-
class Solution:
    def rectCover(self, number):
        # write code here
        if(number<=2):
            return number
        a = 1
        b = 2 
        for i in range(3,number+1):
            temp = b
            b = a + b
            a = temp
        return b
