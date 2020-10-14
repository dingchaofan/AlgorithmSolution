// 三数相加
let nums = [-1,0,1,2,-1,-4]
var threeSum = function(nums) {
    let res = []
    sortedNums = nums.sort((a,b)=>{return a-b})
    for (let index = 0; index < sortedNums.length; index++) {
        if(sortedNums[index] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(index > 0 && sortedNums[index] == sortedNums[index-1]) continue; // 去重

        let left = index+1
        let right = sortedNums.length-1
        while (left<right) {
            let sum = sortedNums[index] + sortedNums[left] + sortedNums[right]
            if(sum == 0){
                res.push([sortedNums[index], sortedNums[left], sortedNums[right]]) 
                while (left < right && sortedNums[left] == sortedNums[left+1]){
                    left++; // 去重
                }
                while (left < right && sortedNums[right] == sortedNums[right-1]){
                    right--; // 去重
                }
                left++
                right--
            }
            else if(sum>0){
                right--
            }
            else if(sum<0){
                left++
            }
        }
    }
    return res
};
