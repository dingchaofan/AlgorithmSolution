// 包含minStack函数的栈

// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的minStack函数（时间复杂度应为O（1））。
// 注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。

// 注意：pop的时候会改变栈中数据，有可能min的结果也会改变

const dataStack = []
const minStack = []
function push(node)
{
    // write code here
    dataStack.push(node)
    if(minStack.length === 0){
        minStack.push(node)
    }
    else{
        if(node <= minStack[minStack.length-1]){
            minStack.push(node)
        }
    }  
}
function pop()
{
    // write code here
    if(dataStack.length === 0){
        return null
    }
    let res = dataStack.pop()
    if(res === minStack[minStack.length-1]){
        minStack.pop()
    }
    return res
}
function top()
{
    // write code here
    if(dataStack.length === 0 ){
        return null
    }
    return dataStack[dataStack.length-1]
}
function min()
{
    // write code here
    if(minStack.length === 0){
        return null
    }
    return minStack[minStack.length-1]
}