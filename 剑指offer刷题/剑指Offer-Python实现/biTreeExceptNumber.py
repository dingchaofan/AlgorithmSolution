# -*- coding: utf-8 -*-
"""
Created on Thu May 21 12:05:08 2020

@author: tonitoni
"""

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
 
class Solution:
    # 返回二维列表，内部每个列表表示找到的路径
    def __init__(self):
        pass

    def FindPath(self, root, expectNumber):
        # write code here
        if root==None:
            return []
        if root.left==None and root.right==None and expectNumber == root.val:
            return [[root.val]]
        res = []
        left = self.FindPath(root.left, expectNumber-root.val)
        right = self.FindPath(root.right, expectNumber-root.val)
        for i in left+right:
            tempPath = [root.val]+i
            res.append(tempPath)
        return res
    
    def FindPath1(self, root, expectNumber):
        # write code here
        if (root==None):
            return []
        result = []
        stack = []
        stack.append((root,[root.val]))
        
        while(stack):
            node, path = stack.pop()
            print(node,path)
            if (node.left==None) and (node.right==None) and (expectNumber==sum(path)):
                result.append(path)
            if (node.left != None):
                stack.append((node.left,path+[node.left.val]))
            if (node.right != None):
                stack.append((node.right,path+[node.right.val]))    
        
        return result
    
if __name__=='__main__':
    A1 = TreeNode(1)
    A2 = TreeNode(2)
    A3 = TreeNode(3)
    A4 = TreeNode(4)
    A5 = TreeNode(5)
    A6 = TreeNode(6)
 
    A1.left=A2
    A1.right=A3
    A2.left=A4
    A2.right=A5
    A4.left=A6
 
    solution=Solution()
    ans=solution.FindPath1(A1,8)
    print('ans=',ans)
