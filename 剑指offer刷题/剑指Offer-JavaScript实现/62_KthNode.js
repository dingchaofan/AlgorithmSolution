// 62. 二叉搜索树的第k个结点
// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    let arr = BSTtoSquence(pRoot)
    if (k > 0 && k <= arr.length) {
        return arr[k - 1]
    }
    return null

}

// 用栈 返回从大到小的节点数组
function BSTtoSquence(pRoot){
    let res = [],
        stack = [],
        tempNode = pRoot
    while(tempNode || stack.length>0){
        while(tempNode){
            stack.push(tempNode)
            tempNode = tempNode.left
        }
        tempNode = stack.pop()
        res.push(tempNode)
        tempNode=tempNode.right
    }
    return res
}

// BST的中序遍历 返回从大到小的中序遍历节点数组
function BSTtoSquence(pRoot){
    
    if(pRoot == null){
        return []
    }
    if(pRoot.left == null && pRoot.right == null){
        return [pRoot]
    }
    // 递归左子树
    let left = BSTtoSquence(pRoot.left)
    // 递归右子树
    let right = BSTtoSquence(pRoot.right)
    // 中序遍历连接
    let res = left.concat(pRoot).concat(right)
    return res
}