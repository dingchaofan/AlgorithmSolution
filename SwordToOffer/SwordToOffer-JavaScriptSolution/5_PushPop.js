// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 栈先进后出，队列先进先出
const stack1 = []
const stack2 = []

function push(node) {
    // write code here
    stack1.push(node)
}

function pop() {
    // write code here
    if (stack2.length === 0) {
        while (stack1.length > 0) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}