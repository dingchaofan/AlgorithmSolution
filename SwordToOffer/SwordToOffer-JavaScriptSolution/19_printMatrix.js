// 19. 顺时针打印矩阵

// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

// 输出矩阵第一行后翻倒矩阵(Aij=Bji) 再输出第一行 

function printMatrix(matrix) {
    // write code here
    let result = []
    result = result.concat(matrix.shift())
    while (matrix != false) {
        matrix = rotateMatrix(matrix)
        result = result.concat(matrix.shift())
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
    let row = matrix.length
    for (let i = 0; i < row>>1; i++) {
        let temp= matrix[row-1-i]
        matrix[row-1-i] = matrix[i]
        matrix[i] = temp
    }
    return matrix
}
// 主对角线翻转矩阵 矩阵转置 只接受Array作为参数
function transMatrix(matrix) {
    let row = matrix.length
    let colunm = matrix[0].length
    let res = []
    for (let i = 0; i < colunm; i++) {
        let temp = []
        for (let j = 0; j < row; j++) {
            temp.push(matrix[j][i])
        }
        res.push(temp) 
    }
    return res
}

let a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// a = [[6,7],[8,9]]
// alert(a)
console.log(a)
b = printMatrix(a)
console.log(b)