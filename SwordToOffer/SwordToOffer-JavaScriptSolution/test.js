let a = ['a','b']
let b = ['c','d']
let c = 'e'
b[Symbol.isConcatSpreadable]=false
d = a.concat(b,c)
console.log(d)