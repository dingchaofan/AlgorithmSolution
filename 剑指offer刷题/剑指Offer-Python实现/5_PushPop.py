# 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

# -*- coding:utf-8 -*-
stack1 = []
stack2 = []
class Solution:
    def push(self, node):
        # write code here
        stack1.append(node)
    def pop(self):
        # return xx
        if(len(stack2)==0):
            while(len(stack1)>0):
                stack2.append(stack1.pop())
        return stack2.pop()