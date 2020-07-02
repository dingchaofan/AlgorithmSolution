# 26. 二叉搜索树与双向链表

# 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def Convert(self, pRootOfTree):
        # write code here
        if(pRootOfTree == None):
            return pRootOfTree
        lastNode = self.BSTtoBiChainTable(pRootOfTree)
        while(lastNode != None and lastNode.left != None):
            lastNode = lastNode.left
        return lastNode

    def BSTtoBiChainTable(self, pRoot):
        if(pRoot == None):
            return None
        if(pRoot.left == None and pRoot.right == None):
            return pRoot
        
        left = self.BSTtoBiChainTable(pRoot.left)
        if(left != None):
            left.right = pRoot
            pRoot.left = left
        right = self.BSTtoBiChainTable(pRoot.right)
        last = right
        if(right != None):
            while(right.left != None):
                right = right.left
            pRoot.right = right
            right.left = pRoot
        else:
            return pRoot
        return last

