// 用深度优先输出包括 body 在内的所有 DOM 节点
function dfc(root){
    if(root==null)
        return [];
    var result = [];//存放遍历结果的数组
    var nodeStack = [];//暂存元素的栈
    nodeStack.push(root);
    while(nodeStack.length>0){
        let n = nodeStack.pop();
        result.push(n);
        let children = n.children;
        //要从左到右遍历，所以要反向进栈
        for(let i=children.length-1;i>=0;i--){
            nodeStack.push(children[i]);
            }
        }
    return result;
}
dfc(document.body);

// 用广度优先输出包括 body 在内的所有 DOM 节点
function bfc(root){
    if(root==null)
        return [];
    var result = [];//存放遍历结果的数组
    var nodeQueue = [];//暂存元素的队列
    nodeQueue .push(root);
    while(nodeQueue.length>0){
        let n = nodeQueue.shift();
        result.push(n);
        let children = n.children;
        for(let i=0;i<children.length;i++){
            nodeQueue.push(children[i]);
        }
    }
    return result;
} 
bfc(document.body);