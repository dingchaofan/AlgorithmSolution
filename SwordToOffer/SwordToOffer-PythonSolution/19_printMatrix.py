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
        while (matrix):
            result.extend(matrix.pop(0))
            matrix = self.rotateMatrix(matrix)
        return result
    
    # 矩阵逆时针旋转90度
    def rotateMatrix(self, matrix): 
        matrix = self.transMatrix(matrix)
        matrix = self.reverseMatrix(matrix)
        return matrix
    
    # 上下翻转矩阵 只接受Array作为参数 上下翻转只需要交换每一行的list
    def reverseMatrix(self, matrix):
        row = len(matrix)
        # [5] [[5]] [[5,6]]
        for i in range(row >> 1):
            matrix[i], matrix[row-1-i] = matrix[row-1-i], matrix[i]
        return matrix

    # 主对角线翻转矩阵 矩阵转置 只接受Array作为参数
    def transMatrix(self,matrix):
        # matrix_T=list(map(list,zip(*matrix)))
        row = len(matrix)
        column = len(matrix[0])
        matrix_T = [[matrix[j][i] for j in range(row) ] for i in range(column)]  
        return matrix_T

if __name__=='__main__':
    solution = Solution()
    a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
    ans = solution.printMatrix(a)
    print('ans=',ans)