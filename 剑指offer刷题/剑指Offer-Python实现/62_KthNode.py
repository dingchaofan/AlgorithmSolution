# 62. 二叉搜索树的第k个结点
# 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。


# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    # 返回对应节点TreeNode
    def KthNode(self, pRoot, k):
        # write code here
        res = self.BSTtoNodeList(pRoot)
        if(k>0 and k<=len(res)):
            return res[k-1]
        return None
    # 方法一 中序遍历 递归
    def BSTtoNodeList(self, pRoot):
        if(pRoot == None):
            return []
        if(pRoot.left == None and pRoot.right == None):
            return [pRoot]
        left = self.BSTtoNodeList(pRoot.left)
        right = self.BSTtoNodeList(pRoot.right)
        res = left+[pRoot]+right
        return res
    # 方法二 栈
    def BSTtoNodeList(self, pRoot):
        res = []
        stack = []
        nowNode = pRoot
        while(nowNode or len(stack)>0):
            while(nowNode):
                stack.append(nowNode)
                nowNode = nowNode.left
            nowNode = stack.pop()
            res.append(nowNode)
            nowNode = nowNode.right
        return res        