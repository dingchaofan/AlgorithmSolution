// 26. 二叉搜索树与双向链表

// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree == null){
        return pRootOfTree
    }
    let lastNode = BSTtoBiChainTable(pRootOfTree)
    while(lastNode!=null && lastNode.left!=null){
        lastNode = lastNode.left
    }
    return lastNode
}

// BST的中序遍历 返回双向链表
function BSTtoBiChainTable(pRoot){
    if(pRoot == null){
        return null
    }
    if(pRoot.left == null && pRoot.right == null){
        return pRoot
    }

    // 遍历左子树
    let left = null 
    if(pRoot.left != null){
        left = BSTtoBiChainTable(pRoot.left)
    }
    // 连接左子树链表与根节点
    if(left != null){
        left.right = pRoot
        pRoot.left = left
    }
    
    // 遍历右子树
    let right = null 
    if(pRoot.right != null){
        right = BSTtoBiChainTable(pRoot.right)
    }
    let last = right
    // 连接右子树链表与根节点
    if(right != null){
        while(right.left != null){
            right = right.left
        }
        right.left = pRoot
        pRoot.right = right
    }
    else{
        return pRoot
    }
    return last
}


// BST的中序遍历 返回中序遍历的序列
function BSTtoSquence(pRoot){
    if(pRoot == null){
        return []
    }
    if(pRoot.left == null && pRoot.right == null){
        return [pRoot.val]
    }
    let left = []
    let right = []

    // 递归左子树
    if(pRoot.left != null){
        left = BSTtoSquence(pRoot.left)
    }
    // 递归右子树
    if(pRoot.right != null){
        right = BSTtoSquence(pRoot.right)
    }
    let res = left.concat(pRoot.val).concat(right)
    return res
}

// 测试用例
let A1 = new TreeNode(1)
let A2 = new TreeNode(2)
let A3 = new TreeNode(3)
let A4 = new TreeNode(4)
let A5 = new TreeNode(5)
let A6 = new TreeNode(6)

A3.left = A2
A3.right = A5
A2.left = A1
A5.right = A6
// A5.left = A4

let ans = Convert(A3)
console.log(ans)