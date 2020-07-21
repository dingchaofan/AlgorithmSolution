// 41. 和为S的连续正数序列

// 题目描述
// 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
// 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,
// 他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的
// 找出所有和为S的连续正数序列? Good Luck!

// 输出描述:
// 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序


function FindContinuousSequence(sum)
{
    // write code here
    // 滑动窗口
    let low = 1 
    let high = 2
    let temp = 0
    let res = []
    while(low < sum/2){
        temp = (low+high)*(high-low+1)/2
        if(temp < sum){
            high += 1
        }
        else if(temp === sum){
            let tempList = []
            for(let i = low; i<=high;i++){
                tempList.push(i)
            }
            res.push(tempList)
            low += 1
        }
        else{
            low += 1
        }
    }
    return res
}