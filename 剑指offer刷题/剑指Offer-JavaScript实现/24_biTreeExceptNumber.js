/* 
24. 二叉树中和为某一值的路径
**题目描述**
输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
* * *
**思路**
相当于是遍历二叉树中的每条路径，匹配符合节点值之和为x的路径。
**思路一:使用递归**
使用递归的思路，用递归匹配符合题目的路径
当节点为空时，return []
当节点不为空，左右子节点为空且节点值为目标值时，return [root.val]
不满足以上条件时，用递归寻找左子树和右子树中符合条件的路径，在最后和root进行拼接。
**思路二:不使用递归**
利用额外的空间来储存已经遍历过的节点，stack为待访问的节点栈，result为返回的结果列表。将每条路径的节点值保存到path列表中，通过sum(path)验证是否符合条件。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// 思路一
function FindPath(root, expectNumber) {
    // write code here
    if (root == null) {
        return []
    }
    if (root.left == null && root.right == null && root.val == expectNumber) {
        return [[root.val]]
    }
    var left = FindPath(root.left, expectNumber - root.val)
    var right = FindPath(root.right, expectNumber - root.val)
    var listL = left.concat(right)
    var res = []
    for (let index = 0; index < listL.length; index++) {
        let element = [root.val].concat(listL[index]);
        res.push(element)
    }
    return res
}

//  思路二
function FindPath1(root, expectNumber) {
    // write code here
    if (root == null) {
        return []
    }
    var res = []
    var stack = []
    // var stackNode = [root,[root.val]]
    stack.push([root, [root.val]])

    while (stack.length > 0) {
        var temp = stack.pop()
        var node = temp[0]
        var path = temp[1]
        let sum = 0
        // for(let i = 0;i<path.length;i++){
        //   sum = sum + path[i]
        // }
        sum = eval(path.join('+'))
        if ((node.left == null) && (node.right == null) && (expectNumber == sum)) {
            res.push(path)
        }
        if (node.left != null) {
            let tempNode = [node.left, path.concat(node.left.val)]
            stack.push(tempNode)
        }
        if (node.right != null) {
            let tempNode = [node.right, path.concat(node.right.val)]
            stack.push(tempNode)
        }
    }
    return res
}


// 测试用例
let A1 = new TreeNode(1)
let A2 = new TreeNode(2)
let A3 = new TreeNode(3)
let A4 = new TreeNode(4)
let A5 = new TreeNode(5)
let A6 = new TreeNode(6)

A1.left = A2
A1.right = A3
A2.left = A4
A2.right = A5
A4.left = A6

let ans = FindPath1(A1, 8)
console.log(ans)