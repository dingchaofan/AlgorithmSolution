# 31 整数中1出现的次数（从1到n整数中1出现的次数）

# 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
# 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
# 但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,
# 可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

# -*- coding:utf-8 -*-
class Solution:
    def NumberOf1Between1AndN_Solution(self, n):
        # write code here
        count = 0
        i = 1
        while i <= n:
            high = n // i
            low = n % i
            cur = high % 10
            count += (high+8)//10*i + ((low+1) if (cur == 1) else 0)
            i *= 10
        return count
