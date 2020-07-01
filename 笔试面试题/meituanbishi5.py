# -*- coding: utf-8 -*-
"""
Created on Tue May 12 11:27:16 2020

@author: tonitoni
"""

#相似
#时间限制：C/C++语言 1000MS；其他语言 3000MS
#内存限制：C/C++语言 65536KB；其他语言 589824KB
#题目描述：
#两个数是相似的，当且仅当他们位与起来不为0。例如，3和5是相似的，因为3的二进制为011,5的二进制为101,他们位与起来为001不为0。
#
#现在，给出序列a1,a2…an我们希望你找出，对于任意的i∈[1,n]，是否存在j∈[1,n]，使得ai,aj不相似。
#
#输入
#输入第一行包括一个整数n，代表序列a的长度
#
#接下来一行n个数，空格隔开，代表序列a
#
#1<=n<=100000,1<=ai<=106
#
#输出
#输出n个数。
#
#如果对于i个数，存在j∈[1,n]，使得ai,aj不相似，输出1,否则输出-1
#
#
#样例输入
#4
#3 5 6 1
#样例输出
#-1 -1 1 1
#
#提示
#样例解释：
#唯一一对不相似的数是6和1,故6和1的答案为1,其余为-1。
#规则
#请尽量在全场考试结束10分钟前调试程序，否则由于密集排队提交，可能查询不到编译结果
#点击“调试”亦可保存代码
#编程题可以使用本地编译器，此页面不记录跳出次数

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
#n = 4
#nums = [3,5,6,1]

def numLike(x,y):
    z = x&y
    if z == 0:
        return 1
    else:
        return -1

def numsLike(k,nums):
    numLikeOutput = [-1]*k
    n = len(nums)
    for i in range(n):
        if numLikeOutput == 1:
            continue
        for j in range(0,n):
            if i == j:
                continue
            else:
                tempNumLike = numLike(nums[i],nums[j])
                if tempNumLike == 1:
                    numLikeOutput[i] = 1
                    numLikeOutput[j] = 1
                    break              
    return numLikeOutput

numsLikeRes = numsLike(n,nums)
#print(numsLikeRes)
numsLikeRes = [str(i) for i in numsLikeRes]
numsLikeRes = " ".join(numsLikeRes)
print(numsLikeRes)

