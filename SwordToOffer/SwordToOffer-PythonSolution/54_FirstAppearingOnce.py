# 54. 字符流中第一个不重复的字符

# 请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
# 输出描述:
# 如果当前字符流没有存在出现一次的字符，返回#字符。


# -*- coding:utf-8 -*-
class Solution:
    def __init__(self):
        self.s = ''
        self.count = {}
    # 返回对应char
    def FirstAppearingOnce(self):
        # write code here
        for i in range(len(self.s)):
            if self.count[self.s[i]] == 1:
                return self.s[i]
        return '#'
    def Insert(self, char):
        # write code here
        self.s += char
        if char in self.count:
            self.count[char] += 1
        else:
            self.count[char] = 1
