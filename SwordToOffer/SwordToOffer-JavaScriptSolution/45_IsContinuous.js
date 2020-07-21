// 45. 扑克牌顺子

// **题目描述**
// LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
// 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！
// “红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成
// 任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。
// LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，
// 否则就输出false。为了方便起见,你可以认为大小王是0。

function IsContinuous(numbers) {
    // write code here
    // 满足以下条件：
    // 1. 数字个数为5
    // 2. 数字为0到13之间
    // 3. 没有相同数字(0除外)
    // 4. 最大与最小数字之差小于5
    if (numbers.length !== 5) {
        return false
    }
    let numbersSet = {}
    let [maxNum, minNum] = [-1, 14]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > 13 || element < 0) {
            return false
        }
        if (element in numbersSet) {
            if (element !== 0) {
                return false
            }
            numbersSet[element] += 1
        }
        numbersSet[element] = 1
        if (element < minNum && element != 0) {
            minNum = element
        }
        if (element > maxNum && element != 0) {
            maxNum = element
        }
    }
    if (maxNum - minNum >= 5) {
        return false
    }
    return true
}