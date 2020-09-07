# -*- coding: utf-8 -*-
#counter = 100          # 整型变量
#miles   = 1000.0       # 浮点型变量
#name    = "runoob"     # 字符串
# 
#print (counter)
#print (miles)
#print (name)
 
#def add(a,b):
#    while(True):
#        sum = a ^ b
#        temp = (a & b) << 1
#        a = sum
#        b = temp
#        if(temp == 0):
#            return sum


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
m = int(L[0][1])
score = L[1:]

def bestNum(studentnum,subjectnum,score):
    bestnum = 0
    bestStudents = []
    for i in range(subjectnum):
        thisSubScore = [int(tem[i]) for tem in score]
        bestScore = max(thisSubScore)
        for stuNum in range(len(thisSubScore)):
            if thisSubScore[stuNum] == bestScore:
                bestStudent = stuNum
                if bestStudent in bestStudents:
                    pass
                else:
                    bestStudents.append(bestStudent)
            
    return len(bestStudents)

num = bestNum(n,m,score)
print(num)
#    for i in range(subjectnum):
#        thisSubjectScore = for i in range()

# 添加字符或者复制之前添加的字符串 返回最小的操作步数
num = 9
str = 'ababababc'
num = 12
str = 'abcdefabcdef'
num = 4
str = 'aaaa'
def minStep(num,str):
    # 当字符串长度小于3时 直接返回字符串长度做为步数
    if(num<=3):
        return num
    step = 1
    minStep = num
    # 遍历字符串到字符串长度的一半
    for i in range(1,len(str)//2+1):
        step = i
        # 子串*2
        subStr = str[0:i]+str[0:i]
        # 判断 子串*2 是否还在原字符串中
        if(str[0:2*i] == subStr):
            # 复制粘贴操作算1步
            step = i + 1
            # 加上剩余的步数
            step = (num-2*i) + step
        else:
            # 子串*2 不原字符串中 步数为字符串长度
            step = num
        # 保存最小步数
        if(step<minStep):
            minStep = step
    return minStep

# 线性魔塔杀怪 从中间往两边杀 a是耗血 b是回血
n = 2
a = [6, 5, 8, 9]
b = [1, 20, 1, 0] 

def killMoster(n,a,b):
    aleft = a[:n]
    aright = a[n:]
    bleft = b[:n]
    bright = b[n:]

    initBlood = 1
    restBlood = initBlood
    while(len(aleft)>0 and len(aright)>0):
        # 决定杀怪方向
        if(bleft[-1]-aleft[-1] > bright[-1]-aright[-1]):
            # 杀负向轴的怪
            restBlood = restBlood - aleft[-1]
            # 开挂锁血 回血到1
            if(restBlood<=0):
                # 回的血量
                addBlood = 1 - restBlood
                # 初始的血量应该高点
                initBlood += addBlood
                # 回血到1
                restBlood = 1
            restBlood = restBlood + bleft[-1]
            aleft = aleft[:-1]
            bleft = bleft[:-1]
        else:
            # 杀正向轴的怪
            restBlood = restBlood - aright[0]
            # 开挂锁血 回血到1
            if(restBlood<=0):
                # 回的血量
                addBlood = 1 - restBlood
                # 初始的血量应该高点
                initBlood += addBlood
                # 回血到1
                restBlood = 1
            restBlood = restBlood + bright[0]
            aright = aright[1:]
            bright = bright[1:]
        while(len(aleft)>0):
            # 杀负向轴的怪
            restBlood = restBlood - aleft[-1]
            # 开挂锁血 回血到1
            if(restBlood<=0):
                # 回的血量
                addBlood = 1 - restBlood
                # 初始的血量应该高点
                initBlood += addBlood
                # 回血到1
                restBlood = 1
            restBlood = restBlood + bleft[-1]
            aleft = aleft[:-1]
            bleft = bleft[:-1]
        while(len(aright)>0):
            # 杀正向轴的怪
            restBlood = restBlood - aright[0]
            # 开挂锁血 回血到1
            if(restBlood<=0):
                # 回的血量
                addBlood = 1 - restBlood
                # 初始的血量应该高点
                initBlood += addBlood
                # 回血到1
                restBlood = 1
            restBlood = restBlood + bright[0]
            aright = aright[1:]
            bright = bright[1:]
    return initBlood  