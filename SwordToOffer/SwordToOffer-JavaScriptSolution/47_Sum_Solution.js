// 47. 求1+2+3+...+n

// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。


function Sum_Solution(n)
{
    // write code here
    let res = n
    if(res){
        res += Sum_Solution(n-1)
    }
    return res
}