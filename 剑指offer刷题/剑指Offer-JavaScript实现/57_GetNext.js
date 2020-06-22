/* 
57. 二叉树的下一个结点
题目描述
给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
1. 如果当前节点有右子树，则此节点的下个节点是右子树的最左边节点
2. 如果当前节点没有右子树：
    1.如果当前节点是父节点的左子节点，那么下个节点就是父节点；
    2.如果节点是其父节点的右子节点，就一直往上找，找到使此节点的祖宗节点是一个节点的左子节点，如果存在这样的节点，那么就返回这个节点，如果不存在，则说明此时遍历的接点是整个树的最右节点，返回null
*/

function GetNext(pNode)
{
    // write code here
    if(pNode == null){
        return null
    }
    // 1. 如果当前节点有右子树，则此节点的下个节点是右子树的最左边节点
    if(pNode.right != null){
        let node = pNode.right
        while(node.left != null){
            node = node.left
        }
        return node
    }
    // 2. 如果当前节点没有右子树：
    while(pNode.next!=null){
        // 1.如果当前节点是其父节点的左子节点，那么下个节点就是父节点；
        if (pNode.next.left == pNode) {
            // 如果存在这样的节点，那么就返回这个节点
            return pNode.next
        }
        // 2.如果节点是其父节点的右子节点，就一直往上找，找到使此节点的祖宗节点是一个节点的左子节点
        pNode = pNode.next
    }
    // 如果不存在，则说明此时遍历的接点是整个树的最右节点，返回null
    return null
}