// 1.  
function array2tree(array) {
    let obj = []
    for (let i = 0; i < array.length; i++) {
        let node = array[i]
        if (node.parentId) {
            for (let j = 0; j < array.length; j++) {
                let innerNode = array[j]
                if (innerNode.id == node.parentId) {
                    if (!innerNode.hasOwnProperty(children)) {
                        innerNode.children = []
                    }
                    innerNode.children.push(node)
                }
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (!array[i].parentId) {
            obj.push(array[i])
        }
    }
    return obj
}