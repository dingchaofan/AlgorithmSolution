/*
39. 平衡二叉树

题目描述
输入一棵二叉树，判断该二叉树是否是平衡二叉树。

在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
*/

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 对每个节点使用TreeDepth()，获取子树的深度，会重复遍历多次
function IsBalanced_Solution(pRoot)
{
    if (pRoot == null) {
        return true
    }
    var left = TreeDepth(pRoot.left)
    var right = TreeDepth(pRoot.right)
    
    if(Math.abs(left-right)>1){
        return false
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
// 深度优先搜索 DFS 返回树的深度
function TreeDepth(pRoot)
{
    // write code here
    if(pRoot == null){
        return 0
    }
    var left = TreeDepth(pRoot.left)
    var right = TreeDepth(pRoot.right)
    if(left>right){
        return left+1
    }
    else{
        return right+1
    }
}


// 只遍历一次
// 使用后序遍历，在遍历每个节点时，已经遍历了这个节点的左右子树。
//  如果左右子树是平衡的，则记录这个节点的深度，如果左右子树不平衡，返回false
function IsBalanced_Solution_2(pRoot)
{
    if (pRoot == null) {
        return true
    }
    var res = IsBalanced(pRoot)
    // return !(res === false) 
    return res
}
function IsBalanced(node)
{
    if(node == null){
        return 0
    }
    let left =  IsBalanced(node.left)
    let right =  IsBalanced(node.right)

    if(left===false || right===false){
        return false
    }
    if(Math.abs(left-right)>1){
        return false
    }
    else{
        return Math.max(left,right)+1
    }
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

let ans = IsBalanced_Solution_2(A1)
console.log(ans)