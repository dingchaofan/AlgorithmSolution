# -*- coding: utf-8 -*-

# 获取字符串的所有子串
def maxNum(str):
    length = len(str)
    maxNum = 1
    for templen in range(2,length+1):
        for index in range(0,length):
            if(templen+index <= length):
                subStr = str[index:index+templen]
                Enum = 0
                Fnum = 0
                for i in subStr:
                    if(i=='E'):
                        Enum+=1
                    if(i=='F'):
                        Fnum+=1
                if(abs(Enum-Fnum) > maxNum):
                    maxNum = abs(Enum-Fnum)
    return maxNum
           

inputstr = "EFFEF"
print(maxNum(inputstr))