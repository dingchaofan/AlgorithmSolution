# -*- coding: utf-8 -*-
"""
Created on Tue May 12 11:07:39 2020

@author: tonitoni
"""

import sys

try:
    L = []
    while True:
        line = input().strip()
        if line == '':
            break
        line = list(line.split())
        L.append(line)
except:
    pass
n = int(L[0][0])
nums = L[1:]
nums = [int(i) for i in nums[0]]
#n = 3
#nums = [1,2,3]

def hanmingDistance(x,y):
    z = x^y
    distance = 0
    while z != 0:
        if z&1 == 1:
            distance += 1
        z = z >> 1
    return distance

def maxhmd(k,nums):
    maxDistance = 0
    n = len(nums)
    for i in range(n):
        for j in range(i+1,n):
            tempDistance = hanmingDistance(nums[i],nums[j])
            if tempDistance > maxDistance:
                maxDistance = tempDistance
    return maxDistance

maxDistance = maxhmd(n,nums)
print(maxDistance)