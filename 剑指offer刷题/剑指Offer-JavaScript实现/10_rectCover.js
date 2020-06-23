// 10. 矩形覆盖
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 直接递归
function rectCover(number)
{
    // write code here
    if(number<=2){
        return number
    }
    return rectCover(number-2) + rectCover(number-1)
}

// 额外空间
function rectCover(number)
{
    // write code here
    if(number<=2){
        return number
    }
    let a = 1
    let b = 2
    while(number>2){
        let temp = b
        b = a + b
        a = temp
        number-=1
    }
    return b
}

// 尾递归
function rectCover(number)
{
    // write code here
    return tailRectCover(number,1,2)
    
}
function tailRectCover(number,a,b){
    if(number < 1){
        return 0
    }
    if(number == 1){
        return a
    }
    if(number == 2){
        return b
    }
    return tailRectCover(number-1,b,a+b)
}