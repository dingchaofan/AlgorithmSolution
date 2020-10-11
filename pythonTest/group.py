# -*- coding: utf-8 -*-

import csv

# 测试数据
input = [
    [1],
    [4, 2],
    [1, 3],
    [3, 5],
    [2, 6],
    [6, 7, 8],
    # [2,5]
]

# 根据已有数据 生成分组group的二维数组
def genGroup(input):
    # 分组二维数组
    group = []
    # 遍历输入数据
    for input_arr in input:
        # 需要合并的group的index，一维数组
        merge_index = []
        # 如果group长度为1 直接插入数据作为group
        if (len(group) == 0):
            group.append(input_arr)
        else:
            for group_index in range(len(group)):
                group_arr = group[group_index]
                # 判断遍历到的数据input_arr是否是新的group 默认是True
                flag = True
                for num in input_arr:
                    # input_arr中存在元素是在group_arr中
                    if (num in group_arr):
                        # input_arr插入到group_arr中
                        group_arr.extend(input_arr)
                        # 数组去重
                        group_arr = list(set(group_arr))
                        # 添加需要合并的group的index
                        merge_index.append(group_index)
                        flag = False
                        break
            if (flag):
                group.append(input_arr)
            # 合并同类group
            if (len(merge_index) > 0):
                for mergeindex in range(len(merge_index) - 1, 0, -1):
                    group[merge_index[0]].extend(
                        group[merge_index[mergeindex]])
                    group.pop(merge_index[mergeindex])
                group[merge_index[0]] = list(set(group[merge_index[0]]))
    return group

# 生成分组的id list
def genGroupId(input, group):
    res = [0] * len(input)
    # 第二次遍历 对输入数据进行分组
    for input_index in range(len(input)):
        input_arr = input[input_index]
        for group_index in range(len(group)):
            group_arr = group[group_index]
            for num in input_arr:
                if (num in group_arr):
                    res[input_index] = group_index + 1
                    break
    return res
    
# 测试数据测试
# group = genGroup(input)
# res = genGroupId(input,group)
# print(res)

# 读csv
with open('关联号.csv') as csvFile:
    readcsv = csv.reader(csvFile)
    originData = []
    rows= []
    for row in readcsv:
        if(len(row) >= 2 and row[0]!=''):
            input_arr = row[0].split(',')
            originData.append(row)
            rows.append(input_arr)
inputs = rows[1:]
group = genGroup(inputs)
res = genGroupId(inputs,group)
res.insert(0,'groupId')

# 修改结果 二维数组
for index in range(len(originData)):
    originData[index][1] = res[index]

# 结果写入csv
with open("结果.csv","w") as csvFile: 
    writer = csv.writer(csvFile)
    for index in range(len(res)):
        writer.writerow(originData[index])