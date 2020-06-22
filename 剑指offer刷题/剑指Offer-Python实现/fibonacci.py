# -*- coding:utf-8 -*-
class Solution:
    
#    使用递归
    def Fibonacci_1(self, n):
        # write code here
        if(n<1):
            return 0
        if(n == 1 or n == 2):
            return 1
        return self.Fibonacci_1(n-1)+self.Fibonacci_1(n-2)
    
    # 优化递归
    def Fibonacci_2(self, n):
        # write code here
        if(n<1):
            return 0
        a, b = 0, 1
        i = 1
        while i<n:
            a,b = b,a+b
            i += 1
        return b
    
    # 尾递归优化 效果同上种方法
    def Fibonacci_3(self, n, acc, cal):
        # write code here
        if(n<1):
            return 0
        if(n == 1):
            return acc
        if(n == 2):
            return cal
        return self.Fibonacci_3(n-1,cal,acc+cal)
    
    # 使用额外空间
    def Fibonacci_4(self,n):
        if(n<1):
            return 0
        res = [1,1]
        while len(res)<n:
            res.append(res[len(res)-2]+res[len(res)-1])
        return res[n-1]
        
    
if __name__=='__main__':
    solution = Solution()
    for i in range(7):
        ans = solution.Fibonacci_4(i)
        print('ans=',ans)