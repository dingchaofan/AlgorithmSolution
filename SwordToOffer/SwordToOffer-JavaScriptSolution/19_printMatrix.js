// 19. 顺时针打印矩阵

// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

// 输出矩阵第一行后翻倒矩阵(Aij=Bji) 再输出第一行 

function printMatrix(matrix) {
    // write code here
    let result = []
    while (matrix == true) {
        console.log(matrix)
        console.log(result)
        result = result.concat(matrix.shift())
        matrix = rotateMatrix(matrix)
    }
    return result
}

// 矩阵逆时针旋转90度
function rotateMatrix(matrix) {
    matrix = transMatrix(matrix)
    matrix = reverseMatrix(matrix)
    return matrix
}
// 上下翻转矩阵 只接受Array作为参数
function reverseMatrix(matrix) {

    // if(typeof matrix == "number"){
    //     return [].push([].push(matrix))
    // }
    let row = matrix.length
    // [5] [[5]] [[5,6]]
    if (row <= 1) {
        // [5]
        // if (typeof(matrix[0]) == "number") {
        //     return [].push(matrix)
        // }
        // [[5]]
        return matrix // [[5]] [[5,6]]
    }
    // 初始化res
    let res = []
    for (let indexI = 0; indexI < matrix.length; indexI++) {
        res[indexI] = []
    }

    for (let indexI = 0; indexI < (matrix.length / 2); indexI++) {
        res[indexI] = matrix[row - 1 - indexI]
        res[row - 1 - indexI] = matrix[indexI]
    }
    return res
}
// 主对角线翻转矩阵 矩阵转置 只接受Array作为参数
function transMatrix(matrix) {
    let row = matrix.length
    let res = []
    // [[10,11]] [11] [[11]]
    if (row <= 1) {
        // [11]
        // if (typeof(matrix[0]) == "number") {
        //     return [].push(matrix) // [[11]]
        // }
        // [[10,11]] [[11]]
        if(matrix[0] instanceof Array){
            // [[11]]
            if(matrix[0].length <= 1){
                return matrix // [[11]]
            }
            // [[10,11]]
            for (let indexI = 0; indexI < matrix[0].length; indexI++) {
                res[indexI] = []
                res[indexI][0] = matrix[0][indexI]
            }
            // console.log(res)
            return res
        }
    }
    if(row > 1){
        for (let indexI = 0; indexI < matrix[0].length; indexI++) {
            res[indexI] = []
        }
        for (let indexI = 0; indexI < matrix.length; indexI++) {
            for (let indexJ = 0; indexJ < matrix[indexI].length; indexJ++) {
                res[indexJ][indexI] = matrix[indexI][indexJ]
            }
        }
    }
    return res
}

let a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// a = [[6,7],[8,9]]
// alert(a)
console.log(a)
b = printMatrix(a)
console.log(b)