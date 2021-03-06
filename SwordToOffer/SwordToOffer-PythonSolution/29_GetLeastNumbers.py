# 29.最小的K个数

# 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

# -*- coding:utf-8 -*-
class Solution:
    def GetLeastNumbers_Solution(self, tinput, k):
        # write code here
        if(k > len(tinput)):
            return []
        sortedList = self.bubbleSort(tinput)
        return sortedList[0:k]

    def bubbleSort(self, array):
        length = len(array)
        for i in range(length):
            for j in range(length-i-1):
                if(array[j] > array[j+1]):
                    array[j], array[j+1] = array[j+1], array[j]
        return array
