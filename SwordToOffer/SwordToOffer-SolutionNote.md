[TOC]

[剑指Offer系列刷题笔记汇总](https://blog.csdn.net/c406495762/article/details/79247243)
[剑指Offer_编程题_牛客网](https://www.nowcoder.com/ta/coding-interviews)


## 数组(11道)
### 1.二维数组的查找

**题目描述**
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
* * *
**思路**
数组是有序的，每行递增，每列递增，所以可以取右上角或者左下角，如果从左下角开始查找，当要查找数字比左下角数字大时，右移；要查找数字比左下角数字小时，上移。同理当从右上角开始查找时，当要查找数字比右上角数字大时，下移；要查找数字比右上角数字小时，左移。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
# 从右上角开始查找
class Solution:
    # array 二维列表
    def Find(self, target, array):
        # write code here
        rows = len(array)
        cols = len(array[0])        
        temp_rows = 0
        temp_cols = cols-1
        while(temp_rows<=rows-1 and temp_cols>=0):
            if(array[temp_rows][temp_cols] == target):
                return True
            elif(array[temp_rows][temp_cols]<target):
                temp_rows+=1
            elif(array[temp_rows][temp_cols]>target):
                temp_cols-=1
        return False
```
```

# -*- coding:utf-8 -*-
# 从左下角开始查找
class Solution:
    # array 二维列表
    def Find(self, target, array):
        # write code here
        left = 0
        right = len(array[0])-1
        top = 0
        bottom = len(array)-1
         
        while(top<=bottom and left<=right):
            select_num = array[bottom][left]
            if(select_num == target):
                return True
            elif(target > select_num):
                left+=1
                continue
            elif(target < select_num):
                bottom-=1
                continue
        return False
```

### 6. 旋转数组的最小数字
**题目描述**
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
* * *
**思路**
思路一：
在两段范围内都是非降序，当不符合这个规律时，就找到了最小数字
原数组是非递减排序的，旋转后，后面的数组整体小于前面的数组。暴力解，遍历数组，当找到第i块大于第i+1块的，返回i+1的元素，时间复杂度：O(n)，空间复杂度：O(1)
思路二：
二分法查找，这里需要注意的是当rotateArray[mid] = rotateArray[right]的时候，说明数组中存在着相等的数值，可能是这样的形式[2,2,2,2,1,2]所以应该选择的right应该递减1作为下次寻找的上界，而不是让mid=right。时间复杂度：O(logn)，空间复杂度：O(1)
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def minNumberInRotateArray(self, rotateArray):
        # write code here
        # 原数组是非递减排序的，旋转后，后面的数组整体小于前面的数组，在两段范围内都是非降序
        
        lenth = len(rotateArray)
        if(lenth == 0):
            return 0
        else:
            # 1.暴力解，遍历数组
            #min = rotateArray[0]
            #for i in range(lenth):
            #    if(min > rotateArray[i]):
            #        min = rotateArray[i]
            #return min
            
            # 2.python的min()函数
            # return min(rotateArray)
            
            # 3.python的sort()函数和min()函数
            #rotateArray.sort()
            #return rotateArray[0]
            
            # 4.当找到第i块大于第i+1块的，返回i+1的元素
            #for i in range(lenth):
                #if(rotateArray[i]>rotateArray[i+1]):
                    #return rotateArray[i+1]
            #return rotateArray[0]
            
            # 以上四种方法的时间复杂度：O(n) 空间复杂度：O(1)
            
            # 5. 二分法查找
            #当*mid == *high的时候，说明数组中存在着相等的数 值，可能是这样的形式 【2,2,2,2,1,2】所以应该选择的high应该递减1作为下次寻找的上界。
            left = 0
            right = lenth - 1
            while left < right:
                mid = (left + right)/2
                if rotateArray[mid] < rotateArray[right]:
                    right = mid
                elif rotateArray[mid] > rotateArray[right]:
                    left = mid+1
                else:
                    right -= 1
            return rotateArray[left]
            #  二分法时间复杂度O(logn)
```

### 13. 调整数组顺序使奇数位于偶数前面
**题目描述**
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
* * *
**思路**
思路1：
开辟新的数组，遍历原数组将奇数偶数分别放在新的空间里，最后合并。时间复杂度O(n),开辟了额外的数组空间,空间复杂度O(n)。
思路2：
用while来遍历，遇到偶数删除这个偶数，并将其向数组的末尾插入。时间复杂度O(n),没有开辟额外的数组空间，空间复杂度O(1)。勘误：实际上pop(index)的时间复杂度是O(n)，删除元素时后面的元素往前移动，总的时间复杂度接近O(n^2)
* * *
**代码实现**
思路1：暴力解
```
class Solution:
    def reOrderArray(self, array):
        # write code here
        # 暴力解，时间复杂度O(n),开辟了额外的数组空间
        odd = []
        even = []
        for i in array:
            if i%2 == 1:
                odd.append(i)
            else:
                even.append(i)
        array = odd + even
        return array
```
思路2：将偶数尾插入数组
```
# -*- coding:utf-8 -*-
class Solution:
    def reOrderArray(self, array):
        # write code here
        # 时间复杂度O(n)，没有额外的数组空间。。
        # 实际上pop(index)的时间复杂度是O(n)，删除元素时后面的元素往前移动，总的时间复杂度接近O(n^2)

        lenth = len(array)
        move = 0
        index = 0
        while(lenth - move - index > 0):
            if array[index]%2 == 0:
                temp = array.pop(index)
                array.append(temp)
                move += 1
                index -= 1
            index += 1
        return array
```
### 28. 数组中出现次数超过一半的数字
**题目描述**
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
* * *
**思路**
思路1：
遍历数组，用字典dict存储数组中某个数字出现的次数，当这个数字出现的次数大于数组长度的一半时，返回这个数字。时间复杂度为O(n)，空间复杂度O(1)~O(n)，开辟了字典dict，最优为1最差为n。
思路2：
对数组进行排序，如果数组中有一个数字出现的次数超过数组长度的一半，那么这个数字一定在数组的中间。python的sort()函数的时间复杂度最差是O(nlogn)<O(n)，所以这种方法的时间复杂度是O(nlogn)，空间复杂度O(1)。
[Timsort原理介绍](https://blog.csdn.net/yangzhongblog/article/details/8184707)
思路3：
数组中有一个数字出现的次数超过数组长度的一半，也就是说它出现的次数比其他所有数字出现次数的和还要多。因此我们可以考虑在遍历数组的时候保存两个值：一个是数组的一个数字，一个是次数。当我们遍历到下一个数字的时候，如果下一个数字和我们之前保存的数字相同，则次数加1；如果下一个数字和我们之前保存的数字不同，则次数减1。如果次数为零，我们需要保存下一个数字，并把次数设为1。由于我们要找的数字出现的次数比其他所有数字出现的次数之和还要多，那么要找的数字肯定是最后一次把次数设为1时对应的数字。时间复杂度是O(n)，空间复杂度O(1)。

* * *
**代码实现**
思路1：遍历数组，用字典dict存储次数。时间复杂度为O(n)，空间复杂度O(1)~O(n)
```
# -*- coding:utf-8 -*-
class Solution:
    def MoreThanHalfNum_Solution(self, numbers):
        # write code here
        length = len(numbers)
        if (length == 0):
            return 0
        elif(length == 1):
            return numbers[0]
        else:
            dict = {}
            for i in range(length):
                if(numbers[i] in dict):
                    dict[numbers[i]] += 1
                    if(dict[numbers[i]] > length/2):
                        return numbers[i]
                else:
                    dict[numbers[i]] = 1
            return 0
```
思路2：先排序，再判断中间的那个数。时间复杂度是O(n)，空间复杂度O(1)
```
# -*- coding:utf-8 -*-
class Solution:
    def MoreThanHalfNum_Solution(self, numbers):
        # write code here
        length = len(numbers)
        if (length == 0):
            return 0
        elif(length == 1):
            return numbers[0]
        else:
            numbers.sort()
            num = numbers[int(length/2)]
            if(numbers.count(num) > len(numbers)/2):
                return num
            return 0
```
思路3：遍历数组的时候保存两个值：一个是数组的一个数字，一个是次数。时间复杂度是O(n)，空间复杂度O(1)
```
# -*- coding:utf-8 -*-
class Solution:
    def MoreThanHalfNum_Solution(self, numbers):
        # write code here
        length = len(numbers)
        if (length == 0):
            return 0
        elif(length == 1):
            return numbers[0]
        else:
            # 初始化
            num = numbers[0]
            count = 1
            for i in range(1,length):
                if(count == 0):
                    num = numbers[i]
                    count = 1
                elif(numbers[i] == num):
                    count += 1
                else:
                    count -= 1
            if(numbers.count(num) > len(numbers)/2):
                return num
            return 0
```
关于时间复杂度的参考：
[python sort函数内部实现原理](https://www.cnblogs.com/clement-jiao/p/9243066.html)
[python基本数据类型的时间复杂度](https://www.jianshu.com/p/a8fa3d31aa40)
[python count实现可见 列表及操作count部分](https://www.kancloud.cn/lanyulei/python/357697)

### 30. 连续子数组的最大和
**题目描述**
HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)
* * *
**思路**
从前往后遍历，最大的连续子序列的和是由当前元素和之前的最大连续子序列的和叠加在一起形成的。如果之前的最大连续子序列的和大于零，我们可以继续累加，如果小于零，则需要舍去之前的子序列，重新从当前的数字开始累加。时间复杂度为O(n)
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def FindGreatestSumOfSubArray(self, array):
        # write code here
        length = len(array)
        if(length == 0):
            return 0
        else:
            max_num = array[0]
            temp_sum = array[0]
            for i in range(1,length):
                if temp_sum <= 0:
                    temp_sum = array[i]
                else:
                    temp_sum += array[i]
                if temp_sum > max_num:
                    max_num = temp_sum
            return max_num
```

### 32. 把数组排成最小的数
**题目描述**
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
* * *
**思路**
将数组中的数字连接起来，排成一个最小的数字。将'大数'往后放'小数'往前放，如何定义'大数'和'小数'？比如说有两个数a和b，如果ab>ba则a是'大数'b是'小数'，要排成ba。
于是，这道题目变成了一个排序问题，将能把组合出来的数字变大的数字往后排。我们这里需要自己定义一个比大小的比较方法。用冒泡排序，可以解决此题。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def PrintMinNumber(self, numbers):
        # write code here
        length = len(numbers)
        if (length == 0):
            return ''
        str_num = [str(i) for i in numbers]
        for i in range(length-1):
            for j in range(length - i - 1):
                if int(str_num[j]+str_num[j+1]) > int(str_num[j+1]+str_num[j]):
                    str_num[j], str_num[j+1] = str_num[j+1], str_num[j] # Python 交换两个数不用中间变量
        num = ''.join(i for i in str_num)
        #等价于
        #num = ''
        #for i in str_num:
            #num += i
        return int(num)
```

### 35. 数组中的逆序对 ***这道题挺难的
**题目描述**
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007
* * *
**思路**
思路一：
暴力解，两个循环，时间复杂度$O(N^2)$，但是会超出运行时间，导致失败。
思路二：
分治的思想，将数组不断一分为二，直到数组中只有两个元素，统计逆序对个数。然后对相邻的两个子数组进行合并，由于已经统计了这两对子数组内部的逆序对，因此需要把这两对子数组进行排序，避免在之后的统计过程中重复统计。在合并的时候也要计算组间的逆序对个数。
逆序对的总数 = 左边数组中的逆序对的数量 + 右边数组中逆序对的数量 + 左右结合成新的顺序数组时中出现的逆序对的数量
整个过程是一个归并排序的算法。
归并排序的性能不受输入数据的影响，时间复杂度始终都是$O(nlogn)$。代价是需要额外的内存空间。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def InversePairs(self, data):
        # write code here
        # 思路一：暴力解，两个循环
        # 运行超时，暴力解不行哦
        length = len(data)
        if(length == 0):
            return 0
        else:
            num = 0
            for i in range(length-1):
                point = data[i]
                for j in range(i,length):
                    if(data[i]>data[j]):
                        num += 1
            return num%1000000007
```
归并排序的题解：
```
# -*- coding:utf-8 -*-
class Solution:
    def InversePairs(self, data):
        # write code here
        num, new_list = self.mergeSort(data)
        return num%1000000007
    
    def mergeSort(self, data):
        # 逆序对个数
        InversePairsNum = 0
        # 归并过程
        def merge(left,right):
            # 合并时发现的逆序对个数
            InversePairsNum = 0
            result = [] # 保存归并后的结果
            i = j = 0
            while(i<len(left) and j<len(right)):
                if left[i] <= right[j]:
                    result.append(left[i])
                    i += 1
                else:
                    result.append(right[j])
                    j += 1
                    # 当右边的元素被插入时，证明这个元素比左边的剩下的所有元素都小
                    # 可以组成len(left)-i个逆序对
                    InversePairsNum = InversePairsNum + (len(left)-i)
            result = result + left[i:] + right[j:] # 剩余的元素直接添加到末尾,大概率是空的
            return InversePairsNum, result
        # 
        if len(data) <= 1:
            return 0, data
        else:
            mid = len(data)//2 # //是向下取整
            num_left, left = self.mergeSort(data[:mid])
            num_right, right = self.mergeSort(data[mid:])
            num_merge, new_list = merge(left, right)
            InversePairsNum = num_left + num_right + num_merge
            return InversePairsNum, new_list
```
可以参考归并排序
归并排序 Python 代码实现如下：
```
def mergeSort(nums):
    # 归并过程
    def merge(left, right):
        result = []  # 保存归并后的结果
        i = j = 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1
        result = result + left[i:] + right[j:] # 剩余的元素直接添加到末尾
        return result
    # 递归过程
    if len(nums) <= 1:
        return nums
    mid = len(nums) // 2
    left = mergeSort(nums[:mid])
    right = mergeSort(nums[mid:])
    return merge(left, right)
```
参考文献：
[Python实现十大经典排序算法](https://www.jianshu.com/p/bbbab7fa77a2)

### 37. 数字在排序数组中出现的次数
**题目描述**
统计一个数字在排序数组中出现的次数。
* * *
**思路**
思路一：
暴力解，遍历数组并对比，一个循环，时间复杂度为$O(N)$
思路二：
由于数组是一个排序过的数组，所以可以用二分查找法，定位k的第一次出现位置和最后一次出现位置，时间复杂度为$O(logN)$

* * *
**代码实现**
暴力解，遍历数组
```
# -*- coding:utf-8 -*-
class Solution:
    def GetNumberOfK(self, data, k):
        # write code here
        count = 0
        for i in range(len(data)):
            if(data[i] == k):
                count += 1
        return count
        # 或者就直接用python的count函数
        # return data.count(k)
```
二分查找法：
```
# -*- coding:utf-8 -*-
class Solution:
    def GetNumberOfK(self, data, k):
        # write code here
        def getFirst(data,k):
            left = 0
            right = len(data)-1
            while(right >= left):
                if(data[left] == k):
                    return left
                mid = (right+left)//2
                if(data[mid] > k):
                    right = mid - 1
                elif(data[mid] < k):
                    left = mid + 1
                else:
                    if(data[mid] == k and data[mid-1]!=k):
                        return mid
                    right = mid - 1
            return -1
        
        def getLast(data,k):
            left = 0
            right = len(data)-1
            while(right >= left):
                if(data[right] == k):
                    return right
                mid = (right+left)//2
                if(data[mid] > k):
                    right = mid - 1
                elif(data[mid] < k):
                    left = mid + 1
                else:
                    if(data[mid] == k and data[mid+1]!=k):
                        return mid
                    left = mid + 1
            return -1       
        
        num = 0
        if data:
            first = getFirst(data,k)
            print(first)
            last = getLast(data,k)
            print(last)
            if(first > -1 and last > -1):
                num = last - first + 1
                return num
        return num 
```
python二分查找法
```
def BinarySearch(array,t):
    low = 0
    height = len(array)-1
    while low <= height:
        mid = (low+height)//2
        if array[mid] < t:
            low = mid + 1

        elif array[mid] > t:
            height = mid - 1

        else:
            return array[mid]

    return -1
```
[python二分查找法](https://www.cnblogs.com/yupeng/p/3418293.html)

### 40. 数组中只出现一次的数字
**题目描述**
一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
* * *
**思路**
思路一：
遍历数组，对每个元素直接利用python数组的count函数，因为count()也是$O(N)$，等价于遍历数组再计数，所以时间复杂度为$O(N^2)$，
思路二：
利用字典保存元素出现次数，最后选出字典中value为1的key返回。时间复杂度为$O(2N)$
思路二的优化：
由于一个整型数组里除了两个数字之外，其他的数字都出现了两次。当字典中有某个key时，删除这个key，否则这个key的value为1插入字典，时间复杂度为$O(N)$

思路三：
看题解都是用位运算来做的，我觉得这个方法效率比优化后的思路二低一些，时间复杂度介于$O(2N)$到$O(3N)$之间
位运算，异或思路，反正我是想不到...看了题解和评论才弄懂是怎么一回事。
按位与&，0&1=0 0&0=0 1&0=0 1&1=1
异或^，对位相加，但不进位 1^0=1 1^1=0 0^0=0 0^1=1

一个数与自己异或为0，一个数与0异或为自己

由于其它数字两两相同，所以所有数相互异或则得到这两个不同数的异或结果。
异或的结果有一位为1，这两个不相同的数在该位一个为0，一个为1。按照这个将数组分为两组，一组在该位为1，一组在该位为0，这两个不同数字分别在这两组内。
将两组内的数凉凉异或，因为相同的数会抵消掉，得到的结果就是这两个不同的数。

* * *
**代码实现**
思路一：python数组的count函数
```
# -*- coding:utf-8 -*-
class Solution:
    # 返回[a,b] 其中ab是出现一次的两个数字
    def FindNumsAppearOnce(self, array):
        # write code here
        nums = []
        for i in range(len(array)):
            if array.count(array[i]) == 1:
                nums.append(array[i])
        return nums
```
思路二：利用字典保存元素出现次数，只输出次数为1的元素
```
# -*- coding:utf-8 -*-
class Solution:
    # 返回[a,b] 其中ab是出现一次的两个数字
    def FindNumsAppearOnce(self, array):
        # write code here
        nums_dict = {}
        for i in range(len(array)):
            try:
                nums_dict[array[i]] += 1
            except KeyError:
                nums_dict[array[i]] = 1
        nums = []
        for num in nums_dict:
            if(nums_dict[num] == 1):
                nums.append(num)
        return nums
```
思路二的优化：再审审题，发现数组中其他的元素出现次数不是1就是2，所以可以继续优化
```
# -*- coding:utf-8 -*-
class Solution:
    # 返回[a,b] 其中ab是出现一次的两个数字
    def FindNumsAppearOnce(self, array):
        # write code here
        nums_dict = {}
        for i in range(len(array)):
            try:
                del nums_dict[array[i]]
            except KeyError:
                nums_dict[array[i]] = 1
        return nums_dict.keys()
```
思路三：位运算，异或法
```
# -*- coding:utf-8 -*-
class Solution:
    def FindNumsAppearOnce(self, array):
        # write code here
        
        # 将组内元素异或，返回异或后的结果
        def XORarray(array):
            result = 0
            for i in range(len(array)):
                result ^= array[i]
            return result
        # 从低到高找到第一位为1的数
        # 与1(01)按位与&，0&1=0 0&0=0 1&0=0 1&1=1
        # 如果结果是0,则与2(10)按位与,直到找到让结果是1的theNum
        def getFirstBitIs1(num):
            theNum = 0
            while num&theNum == 0:
                theNum += 1
            return theNum
            
        num = XORarray(array)
        firstBitNum = getFirstBitIs1(num)
        result = [0,0]
        # 分组进行异或
        for i in range(len(array)):
            if array[i]&firstBitNum == 0:
                result[0] ^= array[i]
            else:
                result[1] ^= array[i]
        return result
```


### 50. 数组中重复的数字
**题目描述**
在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
* * *
**思路**
思路一：
开辟一个新的数组空间，将遍历过的数插入新的数组中，如果遇到重复的，就返回True。增加了额外的空间，时间复杂度为O(N)，空间复杂度为O(N)。
思路二：
利用长度为n的数组里的所有数字都在0到n-1的范围内这一个条件，数组中的每一个数字值小于数组长度，如果数组中无任何重复的数字，则数组从小到大排序后理应满足第i个位置对应的元素值是i。
遍历数组，判断当前位的值和下标是否相等：
若相等，则遍历下一位；
若不等，则将当前位置i上的元素和a[i]位置上的元素比较：若它们相等，则找到了第一个相同的元素，程序结束可以返回；若不等，则将它们两交换。换完之后a[i]位置上的值和它的下标a[i]是对应的，但i位置上的元素和下标并不一定对应；重复判断位置i上的元素和a[i]位置上的元素比较的操作，直到当前位置i的值也为i，将i向后移一位，再重复位置i上的元素和a[i]位置上的元素的比较，直到遍历完成或者找到重复数字。
时间复杂度为O(n)，空间复杂度为O(1)

举例说明：{2,3,1,0,2,5,3}
0(索引值)和2(索引值位置的元素)不相等，并且2(索引值位置的元素)和1(以该索引值位置的元素2为索引值的位置的元素)不相等，则交换位置，数组变为：{1,3,2,0,2,5,3}；
0(索引值)和1(索引值位置的元素)仍然不相等，并且1(索引值位置的元素)和3(以该索引值位置的元素1为索引值的位置的元素)不相等，则交换位置，数组变为：{3,1,2,0,2,5,3}；
0(索引值)和3(索引值位置的元素)仍然不相等，并且3(索引值位置的元素)和0(以该索引值位置的元素3为索引值的位置的元素)不相等，则交换位置，数组变为：{0,1,2,3,2,5,3}；
0(索引值)和0(索引值位置的元素)相等，遍历下一个元素；
1(索引值)和1(索引值位置的元素)相等，遍历下一个元素；
2(索引值)和2(索引值位置的元素)相等，遍历下一个元素；
3(索引值)和3(索引值位置的元素)相等，遍历下一个元素；
4(索引值)和2(索引值位置的元素)不相等，但是2(索引值位置的元素)和2(以该索引值位置的元素2为索引值的位置的元素)相等，则找到了第一个重复的元素。

* * *
**代码实现**
思路一：开辟新的空间
```
# -*- coding:utf-8 -*-
class Solution:
    # 这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    # 函数返回True/False
    def duplicate(self, numbers, duplication):
        # write code here
        nums = []
        for i in numbers:
            if i not in nums:
                nums.append(i)
            else:
                duplication[0] = i
                return True
        return False
```
思路二：不开辟新的空间
```
# -*- coding:utf-8 -*-
class Solution:
    # 这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    # 函数返回True/False
    def duplicate(self, numbers, duplication):
        # write code here
        length = len(numbers)
        if length == 0:
            return False
        index = 0
        while(index < length):
            if(numbers[index] == index):
                index += 1
            else:
                index_num = numbers[index]
                if(index_num == numbers[index_num]):
                    duplication[0] = index_num
                    return True
                else:
                    temp = numbers[index]
                    numbers[index] = numbers[index_num]
                    numbers[index_num] = temp
        return False
```

### 51. 构建乘积数组
**题目描述**
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]A[1]...A[i-1]A[i+1]...A[n-1]。不能使用除法。
* * *
**思路**
思路一：
两重循环，在遍历数组A的时候，A[i]赋值为1，计算B[i]。时间复杂度为$O(N^2)$
思路二：
时间复杂度为$O(N)$
可以把B[i]=A[0]A[1]....A[i-1]A[i+1]....A[n-1]。看成A[0]A[1].....A[i-1]和A[i+1].....A[n-2]A[n-1]两部分的乘积。
即通过A[i]项将B[i]分为两部分的乘积。效果如下图所示：
![86ef01a3437a287e328b9ca9daa75023.png](en-resource://database/604:1)
第一个for循环用来计算上图1范围的数，第二个for循环用来计算上图2范围的数。

* * *
**代码实现**
思路一：
```
 -*- coding:utf-8 -*-
class Solution:
    def multiply(self, A):
        # write code here
        length = len(A)
        B = []
        if(length == 0):
            return B
        for i in range(length):
            temp = A[i]
            A[i] = 1
            Bi = 1
            for j in A:
                Bi *= j
            B.append(Bi)
            A[i] = temp
        return B
```
思路二：
```
# -*- coding:utf-8 -*-
class Solution:
    def multiply(self, A):
        # write code here
        length = len(A)
        if(length == 0):
            return []
        import copy   
        B = copy.copy(A)
        B[0] = 1
        # 计算下三角连乘
        for i in range(1,length):
            B[i] =  B[i-1] * A[i-1]
        # 计算下三角连乘
        temp = 1
        for j in range(length-2,-1,-1):
            temp *= A[j+1]
            B[j] *= temp
        return B
```
## 字符串(8道)
### 2. 替换空格
**题目描述**
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
* * *
**思路**
直接用python的replace()函数
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    # s 源字符串
    def replaceSpace(self, s):
        # write code here
        return s.replace(' ', '%20')
```

### 27. 字符串的排列
**题目描述**
输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
* * *
**思路**
递归法，问题转换为先固定第一个字符，求剩余字符的排列；求剩余字符排列时跟原问题一样。
遍历字符串，固定可能出现在第一个位置的字符，作为第一个字符，后面剩下的字符串的组合用递归使用本函数的方式得到。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def Permutation(self, ss):
        # write code here
        length = len(ss)
        if length <= 1:
            return ss
        lists = []
        for i in range(length):
            first_str = ss[i]
            # 这里的ss[:i]+ss[i+1:] 刚好把ss[i]扣出来
            for temp_sub_list in self.Permutation(ss[:i]+ss[i+1:]):
                temp = first_str + temp_sub_list
                if temp not in lists:
                    lists.append(temp)
        return lists
```

### 34. 第一个只出现一次的字符
**题目描述**
在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
* * *
**思路**
建立一个哈希表，第一次扫描的时候，统计每个字符的出现次数。第二次扫描的时候，如果该字符出现的次数为1，则返回这个字符的位置。时间复杂度为$O(2n)$
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def FirstNotRepeatingChar(self, s):
        # write code here
        length = len(s)
        if length == 0:
            return -1
        str_hash = {}
        for i in range(length):
            if s[i] in str_hash:
                str_hash[s[i]] += 1
            else:
                str_hash[s[i]] = 1
        for i in range(length):
            if str_hash[s[i]] == 1:
                return i
        return -1
```

### 43. 左旋转字符串
**题目描述**
汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
* * *
**思路**
思路一：
循环左移，对于空字符串或者位移次数为0时，直接返回原字符串即可，位移次数n的有效位移次数应该是n%len(s)，剩下的用字符串的切片即可。但是这种方法引入了新的空间，用了切片就是引入了新的字符串空间。
思路二：
灵活利用字符串翻转
原理：$YX = (X^TY^T)^T$
利用list的翻转，没有引入新的字符串或者数组空间。
* * *
**代码实现**
思路一：
```
# -*- coding:utf-8 -*-
class Solution:
    def LeftRotateString(self, s, n):
        # write code here
        length = len(s)
        if n == 0 or length <= 1:
            return s
        else:
            n = n % length
            return s[n:] + s[:n]
```
思路二：
```
# -*- coding:utf-8 -*-
class Solution:
    def LeftRotateString(self, s, n):
        # write code here
        
        length = len(s)
        if n == 0 or length <= 1:
            return s
        else:
            s = list(s)
            n = n % length
            self.string_reverse(s,0,n-1)
            self.string_reverse(s,n,length-1)
            self.string_reverse(s,0,length-1)
            return "".join(s)
        
    def string_reverse(self,string,start,end):
            while(start<end):
                temp = string[start]
                string[start] = string[end]
                string[end] = temp
                start+=1
                end-=1
```

### 44. 翻转单词顺序序列
**题目描述**
牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？
* * *
**思路**
以空格为分界符，切分字符串可以得到一个字符串数组，对数字逆序遍历进行拼接。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def ReverseSentence(self, s):
        # write code here
        str_lists = s.split(' ')
        if len(str_lists) <= 1:
            return s
        else:
            return ' '.join(str_lists[::-1])
```

### 49. 把字符串转换成整数
**题目描述**
将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。
输入描述:输入一个字符串,包括数字字母符号,可以为空
输出描述:如果是合法的数值表达则返回该数字，否则返回0
* * *
**思路**
这道题需要考虑全面，对特殊情况经行处理，要判断的边界条件非常多，主要有：空字符串空字符、正负号、输入值的合法性(不能是字母标点)等。python不需要对溢出进行处理，源码会自行转换。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    def StrToInt(self, s):
        # write code here
        length = len(s)
        if length == 0:
            return 0
        else:
            # 转换成数字的结果
            result = 0
            nums = {'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'0':0}
            # 数字开始的索引值
            start_index = 0
            # 判断正负号的标志
            flag = 1
            if s[0] == '+':
                flag = 1
                start_index = 1
            elif s[0] == '-':
                flag = -1
                start_index = 1
            for str in s[start_index:]:
                if str not in nums:
                    return 0
                else:
                    result = result*10 + nums[str]
            return result*flag
```

### 52. 正则表达式匹配
**题目描述**
请实现一个函数用来匹配包括'.'和'\*'的正则表达式。模式中的字符'.'表示任意一个字符，而'\*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab\*ac\*a"匹配，但是与"aa.a"和"ab\*a"均不匹配
* * *
**思路**
看了@zxlly要offer的代码，才搞懂这道题的思路

这道题边界情况也有点多，首先判断s和pattern的长度，分出了四种情况，其中
1.如果s与pattern都为空，则True；
2.如果s不为空，而pattern为空，则False；
3.如果s为空，而pattern不为空，判断pattern是否是a*...这种情况，\*可以代表0次，这样一来可以将pattern往后移两位再进行match递归；
4.如果s、pattern不为空，又可以分为两种情况：
    4.1.如果pattern的第二个字符不为\*时，如果s[0]与pattern[0]能匹配上就将s和pattern都往后移1位再进行match，否则不匹配为False；
    4.2.如果pattern的第二个字符为\*时，如果s[0]与pattern[0]匹配不上，则将pattern后移2位再进行match；如果s[0]与pattern[0]能匹配上，会出现三种情况，分别是pattern[1] = '\*'的\*代表的三种情况0、1或多个，分别对应pattern后移2位s不变、pattern后移2位，s后移1位、pattern不变s后移1位，这三种情况都有可能出现所以用or或运算连接三种情况的递归。

讲的比较麻烦，直接看代码吧。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    # s, pattern都是字符串
    def match(self, s, pattern):
        # write code here
        len_s = len(s)
        len_pattern = len(pattern)
        # 如果s与pattern都为空，则True
        if len_s == 0 and len_pattern == 0:
            return True
        # 如果s不为空，而pattern为空，则False
        elif len_s != 0 and len_pattern == 0:
            return False
        # 如果s为空，而pattern不为空，则需要判断
        elif len_s == 0 and len_pattern != 0:
            # pattern中的第二个字符为*，则pattern后移两位继续比较
            if len_pattern > 1 and pattern[1] == '*':
                return self.match(s, pattern[2:])
            else:
                return False
        # 如果s不为空，pattern也不为空，则需要判断
        else:
            # pattern的第二个字符为*的情况
            if len_pattern > 1 and pattern[1] == '*':
                # s与pattern的第一个元素不同，则s不变，pattern后移两位，相当于pattern前两位当成空
                if s[0] != pattern[0] and pattern[0] != '.':
                    return self.match(s, pattern[2:])
                # 如果s[0]与pattern[0]相同，且pattern[1]为*
                else:
                    # 会有三种情况
                    # pattern后移2个，s不变；相当于把pattern前两位当成空，匹配后面的，把*当做0次
                    F1 = self.match(s, pattern[2:])
                    # pattern后移2个，s后移1个；相当于pattern前两位与s[0]匹配，把*当做1次
                    F2 = self.match(s[1:], pattern[2:])
                    # pattern不变，s后移1个；相当于pattern前两位，与s中的多位进行匹配，把*当做多次
                    F3 = self.match(s[1:], pattern)
                    # 有一个为真就能返回真值
                    return F1 or F2 or F3
            # pattern的第二个字符不为*的情况
            else:
                # s和pattern的第一个字符匹配上了，都往后移1位
                if s[0] == pattern[0] or pattern[0] == '.':
                    return self.match(s[1:],pattern[1:])
                else:
                    return False  
```

### 53. 表示数值的字符串
**题目描述**
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
* * *
**思路**
在遍历的时候判断异常情况，参考@networkcpx的高赞答案
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
class Solution:
    # s字符串
    def isNumeric(self, s):
        # write code here
        # 标记符号、小数点、e是否出现过
        sign = False
        decimal = False
        hasE = False
        for i in range(len(s)):
            if (s[i] == 'e' or s[i] == 'E'):
                # e后面一定要接数字
                if (i == len(s)-1):
                    return False
                # 不能同时存在两个e
                if (hasE == True):
                    return False
                hasE = True
            elif (s[i] == '+' or s[i] == '-'):
                # 第二次出现+-符号，则必须紧接在e之后
                if (sign and s[i-1] != 'e' and s[i-1] != 'E'):
                    return False
                # 第一次出现+-符号，且不是在字符串开头，则也必须紧接在e之后
                elif (sign == False and i > 0 and s[i-1] != 'e' and s[i-1] != 'E'):
                    return False
                sign = True
            elif (s[i] == '.'):
                # e后面不能接小数点，小数点不能出现两次
                if (hasE or decimal):
                    return False
                decimal = True
            # 非法字符
            elif(s[i] < '0' or s[i] > '9'):
                return False
        return True
```

## 链表(8道)
### 3. 从尾到头打印链表
**题目描述**
输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
* * *
**思路**
用python实现链表翻转输出，根据ListNode的定义，这是个单项的链表，只能从前往后遍历，先进后出思想，可以用栈，但python可以直接用插入首位的方法来做。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # 返回从尾部到头部的列表值序列，例如[1,2,3]
    def printListFromTailToHead(self, listNode):
        # write code here
        ArrayList = []
        node = listNode
        while(node):
            ArrayList.insert(0,node.val)
            node = node.next;
        return ArrayList
```

### 14. 链表中倒数第k个结点
**题目描述**
输入一个链表，输出该链表中倒数第k个结点。
* * *
**思路**
定义两个指针。第一个指针从链表的头指针开始遍历向前走k-1步，第二个指针保持不动；从第k步开始，第二个指针也开始从链表的头指针开始遍历。由于两个指针的距离保持在k-1，当第一个（走在前面的）指针到达链表的尾结点时，第二个指针（走在后面的）指针正好是倒数第k个结点。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def FindKthToTail(self, head, k):
        # write code here.
        if head==None or k<=0:
            return None
        node1 = head
        node2 = head
        num = 0
        while(node1.next!=None):
            node1 = node1.next
            if(num>=k-1):
                node2 = node2.next
            num+=1
        if(num>=k-1):
            return node2
        return None
```

### 15. 反转链表
**题目描述**
* * *
输入一个链表，反转链表后，输出新链表的表头。
**思路**
* * *
使用三个指针，分别指向当前遍历到的结点、它的前一个结点以及后一个结点。当前节点不为空时进行遍历：
当前节点的next = 前一个节点lastNode（进行前后翻转）
前一个节点(lastNode) = 当前节点（往后走一格）
当前节点 = 当前节点的next（往后走一格）
到最后当前节点为空，链表的首节点为lastNode
**代码实现**
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    # 返回ListNode
    def ReverseList(self, pHead):
        # write code here
        if not pHead or not pHead.next:
            return pHead
        lastNode = None
        while pHead:
            temp  = pHead.next
            pHead.next = lastNode 
            lastNode = pHead
            pHead = temp
        return lastNode
```

### 16. 合并两个排序的链表
**题目描述**
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
* * *
**思路**
先判断输入的链表是否为空的指针。如果第一个链表为空，则直接返回第二个链表；如果第二个链表为空，则直接返回第一个链表。如果两个链表都是空链表，合并的结果是得到一个空链表。在python中可以用or来简化这一操作，直接初始化个空节点，当两个链表有为空的时候，thisNode.next = pHead1 or pHead2即可。
两个链表都是排序好的，我们只需要从头遍历两个链表，判断在当前节点时，哪个链表中的值小，就复制哪个链表到结果链表中，再将指针往后移动，判断下个节点。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    # 返回合并后列表
    def Merge(self, pHead1, pHead2):
        # write code here
        result = thisNode = ListNode(0)
        while pHead1 and pHead2:
            if pHead1.val > pHead2.val:
                thisNode.next = pHead2
                pHead2 = pHead2.next
            else:
                thisNode.next = pHead1
                pHead1 = pHead1.next
            thisNode = thisNode.next
        thisNode.next = pHead1 or pHead2
        return result.next
```

### 25. 复杂链表的复制
**题目描述**
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
* * *
**思路**
注意本题的要点在于，输出结果中不要返回参数中的节点引用，所以不能直接将参数节点返回结果，而是要通过遍历的方式建立拥有新的节点的新链表。
解题思路：
1、遍历链表，复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
2、重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
3、拆分链表，将链表拆分为原链表和复制后的链表
思路图如下所示：
![b65dcbe96f63a1bbc5e90d05a90b3185.png](en-resource://database/607:1)
![630961800375adfb289c7342630b82af.png](en-resource://database/605:1)
![a7ac4fadca297083976adea63f87c9de.png](en-resource://database/606:1)
代码也分3步来解决这个问题。分别是：(要注意节点的next为空的情况)
第1次遍历，复制节点
第2次遍历，复制random指针
第3次遍历，拆分链表
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
# class RandomListNode:
#     def __init__(self, x):
#         self.label = x
#         self.next = None
#         self.random = None
class Solution:
    # 返回 RandomListNode
    def Clone(self, pHead):
        # write code here
        if not pHead:
            return pHead
        # 第1次遍历，复制节点
        head = pHead # 把参数复制到head中，免得后续操作影响pHead
        while(head):
            newNode = RandomListNode(head.label)
            newNode.next = head.next
            head.next = newNode
            head = newNode.next
        # 第2次遍历，复制random指针
        head = pHead
        while(head):
            newNode = head.next
            if head.random:
                newNode.random = head.random.next
            head = newNode.next
        # 第3次遍历，拆分链表
        head = pHead
        newHead = head.next # newHead是新链表的表头指针，先固定下来
        while(head):
            newNode = head.next
            head.next = newNode.next
            head = newNode.next
            if(head == None):
                newNode.next = None
            else:
                newNode.next = head.next
        return newHead
```

### 36. 两个链表的第一个公共结点
**题目描述**
输入两个链表，找出它们的第一个公共结点。
* * *
**思路**
两个链表有交叉的部分，则交叉部分为公共节点，由于链表的每个节点只有唯一的一个next，所以，链表交叉后，之后的节点全部是公共节点，不会再有分叉了。
思路一：
将两个链表合并，形成pHead1+pHead2和pHead2+pHead1两个链表，这两个链表长度相等，后面的几个节点必定是相同的公共节点，分别对两个链表进行遍历，并比较当前节点，如果相等则说明这个是公共节点，返回即可得第一个公共节点。
思路二：
还有一种思路是获取链表的长度，将长的链表长出来的部分删(遍历)掉，然后再跟短链表一起遍历。由于没有给定求链表长度的函数，所以要自定义一个。
* * *
**代码实现**
思路一：
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def FindFirstCommonNode(self, pHead1, pHead2):
        # write code here
        if pHead1 == None or pHead2 == None:
            return None
        else:
            node1, node2 = pHead1, pHead2
            while(node1 != node2):
                # 相当于遍历pHead1+pHead2
                if(node1 != None):
                    node1 = node1.next
                else:
                    node1 = pHead2
                # 相当于遍历pHead2+pHead1
                if(node2 != None):
                    node2 = node2.next
                else:
                    node2 = pHead1
            return node1 # 返回node2也可以
```
思路二：
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def FindFirstCommonNode(self, pHead1, pHead2):
        # write code here
        # 获取链表长度
        def getLenth(pHead):
            if pHead == None:
                return 0
            lenth = 0
            while(pHead.next != None):
                pHead = pHead.next
                lenth += 1
            return lenth
        
        if pHead1 == None or pHead2 == None:
            return None
        else:
            node1, node2 = pHead1, pHead2
            len1 = getLenth(node1)
            len2 = getLenth(node2)
            longer,shoter,lenDif = None,None,0
            if len1>len2:
                longer,shoter,lenDif = node1,node2,len1-len2
            else:
                longer,shoter,lenDif = node2,node1,len2-len1
            # 长的链表长出来的部分删(遍历)掉
            for i in range(lenDif):
                longer = longer.next
            # 两个等长的链表一起遍历
            while(longer != shoter):
                longer = longer.next
                shoter = shoter.next
            return longer # 返回shoter也可以
```

### 55. 链表中环的入口结点
**题目描述**
给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
* * *
**思路**
链表有环的意思就是，最后一个节点的next指向了前面的某个节点，链表没有None的链表尾部出口。
思路一：
引入辅助空间，用一个列表保存已经遍历过的节点，如果再次出现，则说明这个节点就是链表环的入口节点。
思路二：
设：链表长度为N，链表环长度为m
1.用两个指针来遍历这个链表，一个每次走一步，一个每次走两步，两个指针会在链表环中的节点相遇。
2.然后继续遍历其中的一个，步长为1，可以计算出链表环中节点的个数m。
3.重新遍历链表，一个指针从头结点0开始(距链表环入口节点N-m)，另一个节点从节点m开始(距链表环入口节点也是N-m)，两个节点会在链表环入口节点处相遇，于是得到链表环入口节点。
* * *
**代码实现**
思路一：
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def EntryNodeOfLoop(self, pHead):
        # write code here
        hashList= []
        headNode = pHead
        while headNode:
            if(headNode == None):
                return None
            if(headNode in hashList):
                return headNode
            else:
                hashList.append(headNode)
            headNode = headNode.next
```
思路二：
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def EntryNodeOfLoop(self, pHead):
        # write code here
        if not pHead or not pHead.next or not pHead.next.next:
            return None
        # 用两个指针来遍历这个链表，一个每次走一步，一个每次走两步，两个指针会在链表环中的节点相遇。
        headSlow = pHead
        headFast = pHead.next
        while (headSlow != headFast):
            # 如果没有链表环，则会返回None
            if headSlow.next == None or headFast.next.next == None:
                return None 
            headSlow = headSlow.next
            headFast = headFast.next.next
        # 此时headSlow = headFast 在环中某节点相遇
        # 继续遍历其中的一个，步长为1，遍历headFast
        count = 1
        headFast = headFast.next
        while(headSlow != headFast):
            headFast = headFast.next
            count += 1
        # count为链表环中节点的个数
        
        # 重新遍历链表，一个指针从头结点0开始(距链表环节点N-m)，另一个节点从节点m开始(距链表环入口节点是N-m)
        # 两个节点会在链表环入口节点处相遇，于是得到链表环入口节点。
        headSlow = pHead
        headFast = pHead
        for i in range(count):
            headFast = headFast.next
        while(headSlow != headFast):
            headSlow = headSlow.next
            headFast = headFast.next
        return headSlow
```

### 56. 删除链表中重复的结点
**题目描述**
在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
* * *
**思路**
在遍历的时候，记录上一个不重复的节点pPre，当前节点pThis，下个节点pNext。在遍历pThis的时候如果当前节点pThis的值跟后面的几个节点数值相同，需要找到下个不同的节点，删除重复节点，更新pPre和pThis；如果前节点pThis的值跟后面的节点数值不同，直接更新pPre和pThis。
如果pHead就是重复的，需要更新pHead。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def deleteDuplication(self, pHead):
        # write code here
        if pHead == None or pHead.next == None:
            return pHead
        pPre = None
        pThis = pHead
        pNext = None
        while(pThis):
            if(pThis.next and pThis.next.val == pThis.val):
                pNext = pThis.next
                while(pNext.next and pNext.next.val == pThis.val):
                    pNext = pNext.next
                if(pThis == pHead):
                    pHead = pNext.next
                else:
                    pPre.next = pNext.next
                pThis = pNext.next
            else:
                pPre = pThis
                pThis = pThis.next
        return pHead
```
## 二叉树(12道)
### 4. 重建二叉树
**题目描述**
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
* * *
**思路**
前序遍历：根结点 ---> 左子树 ---> 右子树
中序遍历：左子树---> 根结点 ---> 右子树
后序遍历：左子树 ---> 右子树 ---> 根结点
已知中序遍历和前序(或者后序)遍历可以确定一棵唯一的二叉树，已知前序遍历和后序遍历不能确定一棵唯一的二叉树。
本题可用递归的思想，已知前序遍历和中序遍历，前序遍历的第一个节点必为根节点，这个节点可以将中序遍历划分成左子树和右子树。

思想如下：
      a、根据前序遍历结果，第一个元素为二叉树的根结点；
      b、观察中序遍历结果，根结点左侧的为左子树，若左子树根结点前（后）再无任何元素，则左（右）子树的左分支为空；根结点右侧的为右子树，若右子树根结点前（后）再无任何元素，则左（右）子树的左分支为空；
      c、上面的过程是递归的。先找到当前树的根结点，然后划分为左右子树，再进入左子树重复上面的过程，最后进入右子树重复上面的过程，最终还原一棵树。
* * *
**代码实现**
```
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    # 返回构造的TreeNode根节点
    def reConstructBinaryTree(self, pre, tin):
        # write code here
        if(len(pre) == 0):
            return None
        elif(len(pre) == 1):
            return TreeNode(pre[0])
        else:
            root = TreeNode(pre[0])
            index = tin.index(pre[0])
            root.left = self.reConstructBinaryTree(pre[1:index+1],tin[0:index])
            root.right = self.reConstructBinaryTree(pre[index+1:],tin[index+1:])
        return root
```

### 17. 树的子结构
**题目描述**
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
* * *
**思路**
我们约定空树不是任意一个树的子结构，所以只有当A、B均不为空时才判断B树是否为A的子树、子结构。
如果B是A的子结构，则B的根节点一定在A中出现，首先在A中找到B的根节点所在，然后判断A树中这个节点下是否出现B的结构。
* * *
**python代码实现**
```
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def HasSubtree(self, pRoot1, pRoot2):
        # write code here
        if(pRoot1 and pRoot2):
            return self.isSubtree(pRoot1,pRoot2) or self.HasSubtree(pRoot1.left,pRoot2) or self.HasSubtree(pRoot1.right,pRoot2)
        else:
            return False
            
    def isSubtree(self, pRoot1, pRoot2):
        if(not pRoot2):
            return True
        elif(not pRoot1 or pRoot1.val != pRoot2.val):
            return False
        else:
            return self.isSubtree(pRoot1.left,pRoot2.left) and self.isSubtree(pRoot1.right,pRoot2.right)
```

### 18. 二叉树的镜像
**题目描述**
操作给定的二叉树，将其变换为源二叉树的镜像。
* * *
**思路**
根据源二叉树镜像的定义，交换每个节点的左子树和右子树
* * *
**python代码实现**
```
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    # 返回镜像树的根节点
    def Mirror(self, root):
        # write code here
        if (root == None or (root.left == None and root.right == None)):
            return root
        else:
            temp = root.left
            root.left = root.right
            root.right = temp
        if(root.left):
            self.Mirror(root.left)
        if(root.right):
            self.Mirror(root.right)
```

### 22. 从上往下打印二叉树
**题目描述**
* * *
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
**思路**
* * *
二叉树的层次遍历。
使用队列，在逐层遍历的时候访问每一层从左往右的节点都放到一个队列中，先入先出，队列的初始节点是根节点。
**python代码实现**
```Python
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    # 返回从上到下每个节点值列表，例：[1,2,3]
    def PrintFromTopToBottom(self, root):
        # write code here
        if(not root):
            return []
        result = []
        queue = [root]
        while(len(queue)):
            node = queue.pop(0)
            result.append(node.val)
            if(node.left):
                queue.append(node.left)
            if(node.right):
                queue.append(node.right)
        return result
```
### 24. 二叉树中和为某一值的路径
**题目描述**
输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
* * *
**思路**
相当于是遍历二叉树中的每条路径，匹配符合节点值之和为x的路径。
**思路一:使用递归**
使用递归的思路，用递归匹配符合题目的路径
当节点为空时，return []
当节点不为空，左右子节点为空且节点值为目标值时，return [root.val]
不满足以上条件时，用递归寻找左子树和右子树中符合条件的路径，在最后和root进行拼接。
**思路二:不使用递归**
利用额外的空间来储存已经遍历过的节点，stack为待访问的节点队栈，result为返回的结果列表。将每条路径的节点值保存到path列表中，通过sum(path)验证是否符合条件。

* * *
**python代码实现**
**思路一:使用递归**
```Python
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    # 返回二维列表，内部每个列表表示找到的路径
    def FindPath(self, root, expectNumber):
        # write code here
        if (root==None):
            return []
        if (root.left==None) and (root.right==None) and (expectNumber==root.val):
            return [[root.val]]
        res = []
        left = self.FindPath(root.left,expectNumber - root.val)
        right = self.FindPath(root.right,expectNumber - root.val)
        for i in left+right:
            tempPath = [root.val]+i
            res.append(tempPath)
        return res
```
**思路二:不使用递归**
```python
class Solution:
    # 返回二维列表，内部每个列表表示找到的路径
    def FindPath(self, root, expectNumber):
        # write code here
        # write code here
        if (root==None):
            return []
        result = []
        stack = []
        stack.append((root,[root.val]))
        
        while(stack):
            node, path = stack.pop()
            if (node.left==None) and (node.right==None) and (expectNumber==sum(path)):
                result.append(path)
            if (node.left != None):
                stack.append((node.left,path+[node.left.val]))
            if (node.right != None):
                stack.append((node.right,path+[node.right.val])) 
        result.sort(key= lambda i:len(i),reverse=True)
        return result
```

**JavaScript代码实现**
**思路一:使用递归**
```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    if(root===null){
        return []
    }
    if(root.left===null&&root.right===null&&root.val===expectNumber){
        return [[root.val]]
    }
    var res=[]
    var left=FindPath(root.left,expectNumber - root.val)
    var right=FindPath(root.right,expectNumber - root.val)
    var listL = left.concat(right)
    for(i=0;i<listL.length;i++){
        var temp_path = [root.val].concat(listL[i])
        res.push(temp_path)
    }
    return res
}
```
**思路二:不使用递归**
```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    if(root==null){
        return []
    }
    var res= []
    var stack = []
    stack.push([root,[root.val]])
    
    while(stack.length > 0){
        var temp = stack.pop()
        var node = temp[0]
        var path = temp[1]
        var sum = eval(path.join('+'))
        if(node.left==null&&node.right==null&&sum==expectNumber){
            res.push(path)
        }
        if(node.left!=null){
            let tempNode = [node.left,path.concat(node.left.val)]
            stack.push(tempNode)
        }
        if(node.right!=null){
            let tempNode = [node.right,path.concat(node.right.val)]
            stack.push(tempNode)
        }
    }
    return res.reverse()
}
```

### 38. 二叉树的深度
**题目描述**
输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
* * *
**思路**
二叉树的遍历，可以使用深度优先或者广度优先
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js
// 深度优先搜索 DFS
function TreeDepth(pRoot)
{
    // write code here
    if(pRoot == null){
        return 0
    }
    var left = TreeDepth(pRoot.left)
    var right = TreeDepth(pRoot.right)
    if(left>right){
        return left+1
    }
    else{
        return right+1
    }
}
// 广度优先搜索 BFS
function TreeDepth_2(pRoot)
{
    // write code here
    if(pRoot == null){
        return 0
    }
    var queue = []
    var depth = 0
    
    queue.push(pRoot)
    while (queue.length>0) {
        const queueLength = queue.length
        depth+=1
        for (let index = 0; index < queueLength; index++) {
            const element = queue[index];
            if(element.left != null){
                queue.push(element.left)
            }
            if(element.right != null){
                queue.push(element.right)
            }
        }
        // 删除从0开始，长度为queueLength的所有元素
        queue.splice(0,queueLength)
    }
    return depth
}
```


### 39. 平衡二叉树
**题目描述**
输入一棵二叉树，判断该二叉树是否是平衡二叉树。

在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
* * *
**思路**
平衡二叉树的定义是：树中任意一个结点下左右两个子树的高度差不超过 1。
方法一：
对每个节点使用TreeDepth()，获取子树的深度，检查每个节点的左右子树是否平衡，这种方法从上到下会重复遍历多次，效率较低。
方法二：
使用后序遍历，在遍历每个节点时，已经遍历了这个节点的左右子树。如果左右子树是平衡的，则记录这个节点的深度，如果左右子树不平衡，返回false。这个方法从下到上只遍历一次，效率较高。
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js
/ 对每个节点使用TreeDepth()，获取子树的深度，会重复遍历多次
function IsBalanced_Solution(pRoot)
{
    if (pRoot == null) {
        return true
    }
    var left = TreeDepth(pRoot.left)
    var right = TreeDepth(pRoot.right)
    
    if(Math.abs(left-right)>1){
        return false
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
// 深度优先搜索 DFS 返回树的深度
function TreeDepth(pRoot)
{
    // write code here
    if(pRoot == null){
        return 0
    }
    var left = TreeDepth(pRoot.left)
    var right = TreeDepth(pRoot.right)
    if(left>right){
        return left+1
    }
    else{
        return right+1
    }
}


// 只遍历一次
// 使用后序遍历，在遍历每个节点时，已经遍历了这个节点的左右子树。
//  如果左右子树是平衡的，则记录这个节点的深度，如果左右子树不平衡，返回false
function IsBalanced_Solution_2(pRoot)
{
    if (pRoot == null) {
        return true
    }
    var res = IsBalanced(pRoot)
    // return !(res === false) 
    return res
}
function IsBalanced(node)
{
    if(node == null){
        return 0
    }
    let left =  IsBalanced(node.left)
    let right =  IsBalanced(node.right)
    if(left===false || right===false){
        return false
    }
    if(Math.abs(left-right)>1){
        return false
    }
    else{
        return Math.max(left,right)+1
    }
}
```

### 57. 二叉树的下一个结点
**题目描述**
给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
* * *
**思路**
中序遍历的规则是：左->根->右
画个图我们可以发现这道题的规律：
1. 如果当前节点有右子树，则此节点的下个节点是右子树的最左边节点
2. 如果当前节点没有右子树：
    1.如果当前节点是父节点的左子节点，那么下个节点就是父节点；
    2.如果节点是其父节点的右子节点，就一直往上找，找到使此节点的祖宗节点是一个节点的左子节点，如果存在这样的节点，那么就返回这个节点，如果不存在，则说明此时遍历的接点是整个树的最右节点，返回null
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js
function GetNext(pNode)
{
    // write code here
    if(pNode == null){
        return null
    }
    // 1. 如果当前节点有右子树，则此节点的下个节点是右子树的最左边节点
    if(pNode.right != null){
        let node = pNode.right
        while(node.left != null){
            node = node.left
        }
        return node
    }
    // 2. 如果当前节点没有右子树：
    while(pNode.next!=null){
        // 1.如果当前节点是其父节点的左子节点，那么下个节点就是父节点；
        if (pNode.next.left == pNode) {
            // 如果存在这样的节点，那么就返回这个节点
            return pNode.next
        }
        // 2.如果节点是其父节点的右子节点，就一直往上找，找到使此节点的祖宗节点是一个节点的左子节点
        pNode = pNode.next
    }
    // 如果不存在，则说明此时遍历的接点是整个树的最右节点，返回null
    return null
}
```
### 58. 对称的二叉树
**题目描述**
请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
* * *
**思路**
递归：
1.只要pRoot.left和pRoot.right是否对称即可
2.左右节点的值相等且对称子树left.left，right.right ;left.rigth,right.left也对称

* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js
function isSymmetrical(pRoot)
{
    // write code here
    if(pRoot == null){
        return true
    }
    return checkSymmetrical(pRoot.left,pRoot.right)
}
function checkSymmetrical(left,right){
    if (left == null && right == null){
        return true
    }
    else if((left==null&&right!=null)||(left!=null&&right==null)||(left.val!=right.val)){
        return false
    }
    else{
        return checkSymmetrical(left.left,right.right)&&checkSymmetrical(right.left,left.right)
    }
}
```

### 59. 按之字顺序打印二叉树
**题目描述**
请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
* * *
**思路**
层序遍历，每一层判断是否要将这层的节点逆序输出，将结果放在一个数组中输出。
层序遍历是用到一个队列数组，输出结果又是一个数组，所以用到两个数组。
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if(pRoot==null){
        return []
    }
    let result = []
    let queue = []
    let isReverse = false
    queue.push(pRoot)
    
    while(queue.length>0){
        let len = queue.length
        let tempArray = []
        for(let i=0; i<len; i++){
            let tempNode = queue[i]
            tempArray.push(tempNode.val)
            if(tempNode.left!=null){
                queue.push(tempNode.left)
            }
            if(tempNode.right!=null){
                queue.push(tempNode.right)
            }
        }
        queue.splice(0,len)
        if(isReverse){
            tempArray.reverse()
        }
        isReverse = !isReverse
        result.push(tempArray)
    }
    
    return result
}
```

### 60. 把二叉树打印成多行
**题目描述**
从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
* * *
**思路**
二叉树的层序遍历
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    # 返回二维列表[[1,2],[4,5]]
    def Print(self, pRoot):
        # write code here
        res = []
        queue = []
        if(pRoot == None):
            return []
        queue.append(pRoot)
        while(len(queue)>0):
            temp = []
            qlen = len(queue)
            for i in range(0,qlen):
                node = queue.pop(0)
                temp.append(node.val)
                if(node.left != None):
                    queue.append(node.left)
                if(node.right != None):
                    queue.append(node.right)
            res.append(temp)
        return res
```
**JavaScript代码实现**
```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    let res = []
    let queue = []
    if(pRoot == null){
        return res
    }
    queue.push(pRoot)
    while(queue.length>0){
        let len = queue.length
        let temp = []
        for(let i=0;i<len;i++){
           temp.push(queue[i].val)
           if(queue[i].left !== null){
               queue.push(queue[i].left)
           }
            if(queue[i].right !== null){
               queue.push(queue[i].right)
           }
        }
        res.push(temp)
        queue.splice(0,len)
    }
    return res
}
```

### 61. 序列化二叉树
**题目描述**
请实现两个函数，分别用来序列化和反序列化二叉树

二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。
二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
例如，我们可以把一个只有根节点为1的二叉树序列化为"1,"，然后通过自己的函数来解析回这个二叉树
* * *
**思路**
使用前序遍历做，空节点可以用#表示，所以单独使用前序遍历的结果也可以唯一的构建一棵二叉树。
序列化的时候使用递归做，需要在序列化的函数内部包装一个函数，防止在递归时影响返回的结果。
反序列化的时候也可以使用递归。
可以画个图理解一下递归的流程。
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def Serialize(self, root):
        # write code here
        res =[]
        def innerFunction(root,res):
            if(root == None):
                res.append('#')
            else:
                res.append(root.val)
                innerFunction(root.left,res)
                innerFunction(root.right,res)
        innerFunction(root,res)
        return res
    def Deserialize(self, s):
        # write code here
        if(len(s)<1):
            return None
        node = None
        num = s.pop(0)
        if(num != '#'):
            node = TreeNode(num)
            node.left = self.Deserialize(s)
            node.right = self.Deserialize(s)
        return node
```
**JavaScript代码实现**
```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// function Serialize(pRoot)
// {
//     // write code here
//     // 这样的情况会导致在调用递归时影响res的值，所以要么把res的定义提出去，要么再套一个函数
//     let res= []
//     if(pRoot == null){
//         res.push('#')
//     }
//     else{
//         res.push(pRoot.val)
//         Serialize(pRoot.left)
//         Serialize(pRoot.right)
//     }
//     return res
// }

function Serialize(pRoot)
{
    // write code here
    let res = []
    function innerFunction(pRoot){
        if(pRoot == null){
            res.push('#')
        }
        else{
            res.push(pRoot.val)
            innerFunction(pRoot.left)
            innerFunction(pRoot.right)
        }
    }
    innerFunction(pRoot)
    return res
}
function Deserialize(s)
{
    // write code here
    if(s.length<1){
        return null
    }
    let node = null
    let num = s.shift()
    if(typeof num == 'number'){
        node = new TreeNode(num)
        node.left = Deserialize(s)
        node.right = Deserialize(s)
    }
    return node
}
```

## 二叉搜索树（3道）
### 23. 二叉搜索树的后序遍历序列
**题目描述**
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同
* * *
**思路**
二叉搜索树：节点的左子树上的节点都比节点值小，节点的右子树上的节点都比节点值大。
中序遍历二叉搜索树会得到一个递增序列。

本题采用递归的思路，首先根据最后一位是根节点，小于根节点的左子树，大于根节点的是右子树，对左右子树进行递归判断是否是二叉搜索树，递归出口是节点没有左右子树时返回true。
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
class Solution:
    def VerifySquenceOfBST(self, sequence):
        # write code here
        length = len(sequence)
        if(length<=0):
            return False
        if(length==1):
            return True
        i = 0
        root = sequence[-1]
        while(sequence[i]<root):
            i += 1
        sepIndex = i
        for j in range(i,length):
            if(sequence[j]<root):
                return False
        leftSquence = sequence[0:sepIndex]
        rightSquence = sequence[sepIndex:-2]
        left,right = True, True
        if(len(leftSquence)>0):
            left = self.VerifySquenceOfBST(leftSquence) 
        if(len(rightSquence)<0):
            rigth = self.VerifySquenceOfBST(rightSquence) 
        return left and right
```
**JavaScript代码实现**
```js
function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length <= 0){
        return false
    }
    if(sequence.length == 1){
        return true
    }
    let length = sequence.length
    let root = sequence[length-1]
    let i = 0
    while(sequence[i]<root){
        i += 1 
    }
    let sepIndex = i
    for(let j = i; j<length; j++){
        if(sequence[j]<root){
            return false
        }
    }
    let leftSquence = sequence.slice(0,sepIndex-1)
    let rightSquence = sequence.slice(sepIndex+1,length-1)
    let left = true
    let right = true
    if(leftSquence.length>0){
        left = VerifySquenceOfBST(leftSquence)
    }    
    if(rightSquence.length>0){
        right = VerifySquenceOfBST(rightSquence)
    }  
    return left && right
}
```
### 26. 二叉搜索树与双向链表
**题目描述**
* * *
**思路**
根据二叉搜索树的特点：左结点的值<根结点的值<右结点的值，使用中序遍历。
使用递归分别遍历左右子树，将返回值定为最左节点或者是最右节点，对于不同的情况对链表进行连接，得到一个确定的链表，然后返回我们预定的最左节点或最右节点。
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def Convert(self, pRootOfTree):
        # write code here
        if(pRootOfTree == None):
            return pRootOfTree
        lastNode = self.BSTtoBiChainTable(pRootOfTree)
        while(lastNode != None and lastNode.left != None):
            lastNode = lastNode.left
        return lastNode

    def BSTtoBiChainTable(self, pRoot):
        if(pRoot == None):
            return None
        if(pRoot.left == None and pRoot.right == None):
            return pRoot
        
        left = self.BSTtoBiChainTable(pRoot.left)
        if(left != None):
            left.right = pRoot
            pRoot.left = left
        right = self.BSTtoBiChainTable(pRoot.right)
        last = right
        if(right != None):
            while(right.left != None):
                right = right.left
            pRoot.right = right
            right.left = pRoot
        else:
            return pRoot
        return last
```
**JavaScript代码实现**
```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree == null){
        return pRootOfTree
    }
    let lastNode = BSTtoBiChainTable(pRootOfTree)
    while(lastNode!=null && lastNode.left!=null){
        lastNode = lastNode.left
    }
    return lastNode
}

// BST的中序遍历 返回双向链表
function BSTtoBiChainTable(pRoot){
    if(pRoot == null){
        return null
    }
    if(pRoot.left == null && pRoot.right == null){
        return pRoot
    }

    // 遍历左子树
    let left = null 
    if(pRoot.left != null){
        left = BSTtoBiChainTable(pRoot.left)
    }
    // 连接左子树链表与根节点
    if(left != null){
        left.right = pRoot
        pRoot.left = left
    }
    
    // 遍历右子树
    let right = null 
    if(pRoot.right != null){
        right = BSTtoBiChainTable(pRoot.right)
    }
    let last = right
    // 连接右子树链表与根节点
    if(right != null){
        while(right.left != null){
            right = right.left
        }
        right.left = pRoot
        pRoot.right = right
    }
    else{
        return pRoot
    }
    return last
}
```

### 62. 二叉搜索树的第k个节点
**题目描述**
给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。
* * *
**思路**
使用中序遍历，返回一个节点值由小到大的节点数组
中序遍历的两种思路
方法一：递归
方法二：使用栈
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    # 返回对应节点TreeNode
    def KthNode(self, pRoot, k):
        # write code here
        res = self.BSTtoNodeList(pRoot)
        if(k>0 and k<=len(res)):
            return res[k-1]
        return None
    # 方法一 中序遍历 递归
    def BSTtoNodeList(self, pRoot):
        if(pRoot == None):
            return []
        if(pRoot.left == None and pRoot.right == None):
            return [pRoot]
        left = self.BSTtoNodeList(pRoot.left)
        right = self.BSTtoNodeList(pRoot.right)
        res = left+[pRoot]+right
        return res
    # 方法二 栈
    def BSTtoNodeList(self, pRoot):
        res = []
        stack = []
        nowNode = pRoot
        while(nowNode or len(stack)>0):
            while(nowNode):
                stack.append(nowNode)
                nowNode = nowNode.left
            nowNode = stack.pop()
            res.append(nowNode)
            nowNode = nowNode.right
        return res   
```
**JavaScript代码实现**
```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    let arr = BSTtoSquence(pRoot)
    if (k > 0 && k <= arr.length) {
        return arr[k - 1]
    }
    return null
}
// 用栈 返回从大到小的节点数组
function BSTtoSquence(pRoot){
    let res = [],
        stack = [],
        tempNode = pRoot
    while(tempNode || stack.length>0){
        while(tempNode){
            stack.push(tempNode)
            tempNode = tempNode.left
        }
        tempNode = stack.pop()
        res.push(tempNode)
        tempNode=tempNode.right
    }
    return res
}
// BST的中序遍历 返回从大到小的中序遍历节点数组
function BSTtoSquence(pRoot){
    
    if(pRoot == null){
        return []
    }
    if(pRoot.left == null && pRoot.right == null){
        return [pRoot]
    }
    // 递归左子树
    let left = BSTtoSquence(pRoot.left)
    // 递归右子树
    let right = BSTtoSquence(pRoot.right)
    // 中序遍历连接
    let res = left.concat(pRoot).concat(right)
    return res
}
```


## 递归（4道）
### 尾调用和尾递归
函数调用会在内存中形成一个调用记录，又称调用帧，保存调用位置和内部变量等信息，函数内调用函数又会引入新的调用帧，所有的调用帧形成了一个调用栈。
由于尾调用是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为外层函数的调用位置和内部变量等信息不会再用到了，直接用内层函数的调用帧取代外层函数即可。
只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则无法进行尾调用化。
尾用自身称之为尾递归。
尾递归可以进行递归优化。
### 7. 斐波那契数列
**题目描述**
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。n<=39
* * *
**思路**
斐波那契数列，典型的递归应用
递归是可以优化的，优化方法有尾递归优化和使用额外空间。
方法一：
递归 F(n) = F(n-2) + F(n-1)
方法二：
尾递归优化，将上次递归的结果传参给下次递归。
方法三：
额外空间，空间换时间
* * *
**python代码实现**
```python
#    使用递归
    def Fibonacci_1(self, n):
        # write code here
        if(n<1):
            return 0
        if(n == 1 or n == 2):
            return 1
        return self.Fibonacci_1(n-1)+self.Fibonacci_1(n-2)
    
    # 优化递归
    def Fibonacci_2(self, n):
        # write code here
        if(n<1):
            return 0
        a, b = 0, 1
        i = 1
        while i<n:
            a,b = b,a+b
            i += 1
        return b
    
    # 尾递归优化 效果同上种方法
    def Fibonacci_3(self, n, acc, cal):
        # write code here
        if(n<1):
            return 0
        if(n == 1):
            return acc
        if(n == 2):
            return cal
        return self.Fibonacci_3(n-1,cal,acc+cal)
    
    # 使用额外空间
    def Fibonacci_4(self,n):
        if(n<1):
            return 0
        res = [1,1]
        while len(res)<n:
            res.append(res[len(res)-2]+res[len(res)-1])
        return res[n-1]
```
**javascript代码实现**
```js
// 递归
function Fibonacci(n)
{
    // write code here
    if(n<1){
        return 0
    }
    if(n == 1 || n == 2){
        return 1
    }
    return Fibonacci(n-2) + Fibonacci(n-1)
}
// 尾递归优化
function Fibonacci_2(n, acc, cal){
    if (n<1) {
        return 0
    }
    if (n==1) {
        return acc
    }
    if (n==2) {
        return cal
    }   
    return Fibonacci_2(n-1, cal, acc+cal)
}
// 使用额外空间
function Fibonacci_3(n){
    if(n<1){
        return 0
    }
    let a = 0
    let b = 1
    let index = 1
    while (index<n) {
        let temp = a
        a = b
        b = a + temp
        index += 1
    }
    return b
}
```
### 8. 跳台阶
**题目描述**
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
* * *
**思路**
可以将其转化为一个递归问题，跳n级台阶可能性可以分为两种情况，一是最后一步跳1阶，二是最后一步跳2阶，所以f(n) = f(n-1)+f(n-2)，相当于是个斐波那契问题了，但是这个问题的递归出口不一样，n<3时，f(n) = n。
对递归的优化方法一般有尾递归优化和使用额外空间进行优化。
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
思路一：使用递归
```js
function jumpFloor(number)
{
    // write code here
    // 递归出口
    if(number<3){
        return number
    }
    return jumpFloor(number-1) + jumpFloor(number-2)
}
```
思路二：使用额外空间优化递归
```js
function jumpFloor(number)
{
    // write code here
    // 递归出口
    if(number<3){
        return number
    }
    // 使用额外空间优化递归
    let a = 1
    let b = 2
    let index = 3
    while(index <= number){
        let temp = a
        a = b
        b = a+temp
        index += 1
    }
    return b
}
```
思路三：尾递归优化
```js
function jumpFloor(number)
{
    // write code here
    return jump(number,1,2)
}

function jump(n,a,b){
    if(n<1){
        return 0
    }
    if(n==1){
        return a
    }
    if(n==2){
        return b
    }
    return jump(n-1,b,a+b)
}
```

### 9. 变态跳台阶
**题目描述**
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
* * *
**思路**
找规律，
所要求的序列为：1,2,4,8,16,……
归纳发现`F(n)=2^(n-1)`

还发现一种骚操作，位运算
结果是2进制每位的值
结果是1<<(n-1)
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
class Solution:
    def jumpFloorII(self, number):
        # write code here
        return 2**(number-1)

# -*- coding:utf-8 -*-
class Solution:
    def jumpFloorII(self, number):
        # write code here
        return 1<<(number-1)
```
**JavaScript代码实现**
```js

function jumpFloorII(number)
{
    // write code here
    if(number<=2){
        return number
    }
    return 2**(number-1)
}

function jumpFloorII(number)
{
    // write code here
    return 1<<(number-1) 
}
```
### 10. 矩形覆盖
**题目描述**
我们可以用2乘1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2乘1的小矩形无重叠地覆盖一个2乘n的大矩形，总共有多少种方法？
* * *
**思路**
竖排1个矩形，还剩F(n-1)；
横排2个矩形，还剩F(n-2)；
结果是F(n)=F(n-1)+F(n-2)
直接这么写会复杂度过高，无法通过
需要优化递归
使用额外空间 或者 尾递归
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
# 使用额外空间
class Solution:
    def rectCover(self, number):
        # write code here
        if(number<=2):
            return number
        a = 1
        b = 2 
        for i in range(3,number+1):
            temp = b
            b = a + b
            a = temp
        return b


# -*- coding:utf-8 -*-
# 尾递归
class Solution:
    def rectCover(self, number):
        # write code here
        return self.tailRectCover(number, 1, 2)
    def tailRectCover(self, number, a, b):
        if(number<1):
            return 0
        if(number == 1):
            return a
        if(number == 2):
            return b
        return self.tailRectCover(number-1, b, a+b)
```
**JavaScript代码实现**
```js
// 直接递归
function rectCover(number)
{
    // write code here
    if(number<=2){
        return number
    }
    return rectCover(number-2) + rectCover(number-1)
}
// 额外空间
function rectCover(number)
{
    // write code here
    if(number<=2){
        return number
    }
    let a = 1
    let b = 2
    while(number>2){
        let temp = b
        b = a + b
        a = temp
        number-=1
    }
    return b
}
// 尾递归
function rectCover(number)
{
    // write code here
    return tailRectCover(number,1,2)
    
}
function tailRectCover(number,a,b){
    if(number < 1){
        return 0
    }
    if(number == 1){
        return a
    }
    if(number == 2){
        return b
    }
    return tailRectCover(number-1,b,a+b)
}
```
## 栈（3道）
### 5. 用两个栈实现队列
**题目描述**
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
* * *
**思路**
栈先进后出，队列先进先出
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
stack1 = []
stack2 = []
class Solution:
    def push(self, node):
        # write code here
        stack1.append(node)
    def pop(self):
        # return xx
        if(len(stack2)==0):
            while(len(stack1)>0):
                stack2.append(stack1.pop())
        return stack2.pop()
```
**JavaScript代码实现**
```js
const stack1 = []
const stack2 = []
function push(node) {
    // write code here
    stack1.push(node)
}
function pop() {
    // write code here
    if (stack2.length === 0) {
        while (stack1.length > 0) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}
```

### 20. 包含min函数的栈
**题目描述**
定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。
* * *
**思路**
用两个数组/栈模拟这个栈数据结构，将最小数放在min栈中，min始终指向min栈的栈顶。
注意：pop的时候会改变栈中数据，有可能min的结果也会改变，所以pop的元素等于min栈顶元素时，min也要出栈。
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
class Solution:
    def __init__(self):
        self.dataStack = []
        self.minStack = []
    def push(self, node):
        # write code here
        self.dataStack.append(node)
        if(len(self.minStack)==0):
            self.minStack.append(node)
        else:
            if node <= self.minStack[-1]:
                self.minStack.append(node)
    def pop(self):
        # write code here
        if(len(self.dataStack)==0):
            return None
        res = self.dataStack.pop()
        if(res == self.minStack[-1]):
            self.minStack.pop()
        return res
    def top(self):
        # write code here
        if(len(self.dataStack)==0):
            return None
        return self.dataStack[-1]
    def min(self):
        # write code here
        if(len(self.minStack)==0):
            return None
        return self.minStack[-1]
```
**JavaScript代码实现**
```js
const dataStack = []
const minStack = []
function push(node)
{
    // write code here
    dataStack.push(node)
    if(minStack.length === 0){
        minStack.push(node)
    }
    else{
        if(node <= minStack[minStack.length-1]){
            minStack.push(node)
        }
    }  
}
function pop()
{
    // write code here
    if(dataStack.length === 0){
        return null
    }
    let res = dataStack.pop()
    if(res === minStack[minStack.length-1]){
        minStack.pop()
    }
    return res
}
function top()
{
    // write code here
    if(dataStack.length === 0 ){
        return null
    }
    return dataStack[dataStack.length-1]
}
function min()
{
    // write code here
    if(minStack.length === 0){
        return null
    }
    return minStack[minStack.length-1]
}
```
### 21. 栈的压入、弹出序列
**题目描述**
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
* * *
**思路**
使用一个临时栈，模拟压入弹出序列的进出栈操作，当push序列完成后，如果临时栈为空，则证明进出序列可能是操作了同一个栈。
* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
class Solution:
    def IsPopOrder(self, pushV, popV):
        # write code here
        if(len(pushV) != len(popV) and len(pushV) == 0):
            return False
        tempStack = []
        for i in pushV:
            tempStack.append(i)
            while tempStack and tempStack[-1] == popV[0]:
                tempStack.pop()
                popV.pop(0)
        if(tempStack):
            return False
        return True
```
**JavaScript代码实现**
```js
function IsPopOrder(pushV, popV) 
{
    // write code here
    if (pushV.length == 0 || pushV.length != popV.length) {
        return false
    }
    let tempStack = []
    for (let i of pushV) {
        tempStack.push(i)
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] == popV[0]) {
            tempStack.pop()
            popV.shift()
        }
    }
    if (tempStack.length == 0) {
        return true
    }
    return false
}
```
## 其他（15道）
### 11. 二进制中1的个数
**题目描述**

输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。

* * *
**思路**

[机器数、真值、原码、反码、补码](https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html)

如果一个整数不为0，那么这个整数至少有一位是1。如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响。

举个例子：一个二进制数1100，从右边数起第三位是处于最右边的一个1。减去1后，第三位变成0，它后面的两位0变成了1，而前面的1保持不变，因此得到的结果是1011.我们发现减1的结果是把最右边的一个1开始的所有位都取反了。这个时候如果我们再把原来的整数和减去1之后的结果做与运算，从原来整数最右边一个1那一位开始所有位都会变成0。如1100&1011=1000.也就是说，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。

在Python中，由于负数使用补码表示的，对于负数，最高位为1，而负数在计算机是以补码存在的，往右移，符号位不变，符号位1往右移，最终可能会出现全1的情况，导致死循环。与0xffffffff相与，就可以消除负数的影响。
[剑指offer：二进制中1的个数（Python）& 0xffffffff](https://blog.csdn.net/qq_34872215/article/details/88936030?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-8.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-8.nonecase)

Python里的数是无所谓Overflow的，即没有位数限制，因此也就无所谓补码，因为补码都是相对于位数来说的，32位补码和16位补码，肯定是不一样的。但是这样就导致了一个问题，就是无法直接得到32位二进制补码。
* * *
**Python代码实现**

```python
class Solution:
    def NumberOf1(self, n):
        # write code here
        count = 0
        if(n<0):
            n = n&0xffffffff
        while (n):
            count += 1
            n = n & (n-1)
        return count
```
**JavaScript代码实现**
```js
function NumberOf1(n)
{
    // write code here
    let count = 0
    while(n){
        count += 1
        n = n&(n-1)
    }
    return count
}
```
### 12. 数值的整数次方
**题目描述**
给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

保证base和exponent不同时为0
* * *
**思路**
快速幂算法 https://blog.csdn.net/qq_19782019/article/details/85621386
A^B = (A^2)^(B/2) 令指数折半变小，底数成倍变大，可以加快运算效率

power%2==1可以用更快的“位运算”来代替，power&1 = 1
对于power=power/2来说，也可以用更快的“位运算”进行替代 power = power >> 1 （是向下取整的）

* * *
**Python代码实现**
```python
# -*- coding:utf-8 -*-
class Solution:
    def Power(self, base, exponent):
        # write code here
        baseFlag = 1 # 底数正负号
        exponentFlag = 1 # 指数正负号
        res = 1 # 结果
        if(exponent < 0):
            exponentFlag = -1
            exponent = exponent * -1
        if(base < 0):
            base = -1 * base 
            if(exponent&1 != 0):
                baseFlag = -1 
                
        while exponent > 0:
            if(exponent&1 == 0):
                exponent = exponent>>1
                base = base**2
            else:
                exponent = exponent>>1
                res = res * base
                base = base**2
        if(exponentFlag == -1):
            res = 1 / res
        if(baseFlag == -1):
            res = res * -1
        return res
```
**JavaScript代码实现**
```js
function Power(base, exponent)
{
    // write code here
    let res = 1
    let baseFlag = 1 // 底数正负号
    let exponentFlag = 1 // 指数正负号
    if(exponent < 0){
        exponentFlag = -1
        exponent = -1*exponent
    }
    if(base < 0){
        base = -1 * base
        // exponent%2等价于exponent&1
        if(exponent&1 != 0){
            baseFlag = -1
        }
    } 
    while(exponent > 0){
        // 如果指数是偶数
        // exponent%2等价于exponent&1
        if(exponent&1 == 0){
            // exponent/2 等价于exponent>>1
            exponent = exponent>>1
            base = base**2
        }
        // 如果指数是奇数 
        else{
            // (exponent - 1)/2 等价于exponent>>1 （向下取整）
            exponent = exponent>>1 
            res = res * base
            base = base**2
        }
    }
    if(exponentFlag == -1){
        res = 1/res
    }
    return baseFlag*res
}
```
### 19. 顺时针打印矩阵
**题目描述**

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

* * *
**思路**
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js

```
### 0. Title
**题目描述**
* * *
**思路**
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js

```
### 0. Title
**题目描述**
* * *
**思路**
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js

```

## 题解笔记模板
### 0. Title
**题目描述**
* * *
**思路**
* * *
**Python代码实现**
```python

```
**JavaScript代码实现**
```js

```

