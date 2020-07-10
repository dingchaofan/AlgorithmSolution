# 19. 顺时针打印矩阵

# 题目描述
# 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 
# 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

# -*- coding:utf-8 -*-
class Solution:
    # matrix类型为二维列表，需要返回列表
    def printMatrix(self, matrix):
        # write code here
        result = []
        while (matrix != [[]]):
            result = result.append(matrix.pop(0))
            matrix = self.rotateMatrix(matrix)
        return result
    
    # 矩阵逆时针旋转90度
    def rotateMatrix(self, matrix): 
        matrix = self.transMatrix(matrix)
        matrix = self.reverseMatrix(matrix)
        return matrix
    
    # 上下翻转矩阵 只接受Array作为参数
    def reverseMatrix(self, matrix):
        row = len(matrix)
        # [5] [[5]] [[5,6]]
        if (row <= 1): 
            return matrix # [[5]] [[5,6]]
        
        # 初始化res
        res = []
        for index in range(row):
            res[index] = []

        for (let indexI = 0; indexI < (matrix.length / 2); indexI++) {
            res[indexI] = matrix[row - 1 - indexI]
            res[row - 1 - indexI] = matrix[indexI]
        }
        return res
    }
