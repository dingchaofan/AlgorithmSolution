// 23.二叉搜索树的后序遍历序列

// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

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