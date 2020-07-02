# 包含min函数的栈

# 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
# 注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。

# 注意：pop的时候会改变栈中数据，有可能min的结果也会改变

# -*- coding:utf-8 -*-
class Solution:
    def __init__(self):
        self.dataStack = []
        self.minStack = []
    def push(self, node):
        # write code here
        self.dataStack.append(node)
        if(len(self.minStack)==0):
            self.minStack.append(node)
        else:
            if node <= self.minStack[-1]:
                self.minStack.append(node)
    def pop(self):
        # write code here
        if(len(self.dataStack)==0):
            return None
        res = self.dataStack.pop()
        if(res == self.minStack[-1]):
            self.minStack.pop()
        return res
    def top(self):
        # write code here
        if(len(self.dataStack)==0):
            return None
        return self.dataStack[-1]
    def min(self):
        # write code here
        if(len(self.minStack)==0):
            return None
        return self.minStack[-1]