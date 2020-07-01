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
        