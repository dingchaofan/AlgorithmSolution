# 23.二叉搜索树的后序遍历序列

# 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

# -*- coding:utf-8 -*-
class Solution:
    def VerifySquenceOfBST(self, sequence):
        # write code here
        length = len(sequence)
        if(length<=0):
            return False
        if(length==1):
            return True
        i = 0
        root = sequence[-1]
        while(sequence[i]<root):
            i += 1
        sepIndex = i
        for j in range(i,length):
            if(sequence[j]<root):
                return False
        leftSquence = sequence[0:sepIndex]
        rightSquence = sequence[sepIndex:-2]
        left,right = True, True
        if(len(leftSquence)>0):
            left = self.VerifySquenceOfBST(leftSquence) 
        if(len(rightSquence)<0):
            rigth = self.VerifySquenceOfBST(rightSquence) 
        return left and right