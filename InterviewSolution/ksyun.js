// 子树的权重
// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 首先按照从上到下、从左到右的顺序输入一棵满二叉树中每一个结点对应的权重，例如输入1、1、2表示二叉树的根结点的权重为1，它的左、右两个子节点的权重分别为1和2。

// 然后判断该满二叉树中是否存在这样的非叶子结点：它的左子树上所有结点的权重之和等于右子树上所有结点的权重之和。

// 现在给你一棵满二叉树的所有结点的权重，请编写一个程序，寻找是否存在满足要求的非叶子结点，如果存在输出“Yes”，否则输出“No”。

// 输入描述
// 多组输入。

// 第1行输入一个正整数T表示测试数据的数量。(T<=100)

// 接下来T行对应T组输入，每组输入数据占一行，该行包含n个正整数（n满足2^k-1），两两之间用空格隔开，1<n<=1000。

// 输出描述
// 对于每组输入数据，如果能够找到满足要求的非叶子结点（左子树上所有结点的权重之和等于右子树上所有结点的权重之和），输出“Yes”，否则输出“No”。


// 样例输入
// 3
// 1 2 2 1 2 1 2
// 1 2 2 1 3 2 2
// 1 2 2 1 2 1 3
// 样例输出
// Yes
// Yes
// No

let T = readInt()
for(let index = 0; index<T; index++){
    let inputstr = read_line().split(' ')
    let copyinput = [...inputstr]
    print(isEq(copyinput))
    // print(inputstr)
}
function isEq(input) {
    let num = input.length
    if(num==1){
        return 'No'
    }
    let maxHeight = Math.log2(num+1)
    let left = 0
    let right = 0
    input.shift()
    for(let i = 2;i<=maxHeight; i++){
        let nums = 2**(i-1)
        for(let k = 1; k<=nums; k++){
            let shiftnum = parseInt(input.shift())
            if(k<=nums/2){
                left+= shiftnum
            }
            else{
                right+= shiftnum
            }
        }
    }
    if(left == right){
        return 'Yes'
    }
    else{
        return 'No'
    }
}
// ac 9%