/* 
38. 二叉树的深度
题目描述
输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 深度优先搜索 DFS
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
// 广度优先搜索 BFS
function TreeDepth_2(pRoot)
{
    // write code here
    if(pRoot == null){
        return 0
    }
    var queue = []
    var depth = 0
    
    queue.push(pRoot)

    while (queue.length>0) {
        const queueLength = queue.length
        depth+=1
        for (let index = 0; index < queueLength; index++) {
            const element = queue[index];
            if(element.left != null){
                queue.push(element.left)
            }
            if(element.right != null){
                queue.push(element.right)
            }
        }
        // 删除从0开始，长度为queueLength的所有元素
        queue.splice(0,queueLength)
    }
    return depth
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

let ans = TreeDepth_2(A1)
console.log(ans)