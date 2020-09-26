/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回Interval类，start代表汪仔最少做对了多少道题，end代表汪仔最多做对了多少道题。
 * @param n int整型 选择题总数
 * @param k int整型 朋友做对的题数
 * @param str1 string字符串 长度为n只包含ABCD的字符串，其中第i个代表汪仔第i题做出的选择
 * @param str2 string字符串 长度为n只包含ABCD的字符串，其中第i个代表朋友第i题做出的选择
 * @return Interval类
 */
function solve( n ,  k ,  str1 ,  str2 ) {
    // write code here
    if(str1 == str2){
        return new Interval(k, k)
    }
}
module.exports = {
    solve : solve
};



/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回一行字符串，表示原文。
 * @param s1 string字符串一维数组 N*N的01矩阵，表示解密纸，0表示透明，1表示涂黑
 * @param s2 string字符串一维数组 字符矩阵，表示密文
 * @return string字符串
 */
function rotatePassword( s1 ,  s2 ) {
    // write code here
    let resStr = ''
    resStr += readstring(s1,s2)
    for (let index = 1; index < 4; index++) {
        s1 = rotateMatrix(s1)
        resStr += readstring(s1,s2)
    }
    return resStr
}
function rotateMatrix(arr){
    // 顺时针90度，先按负对角线对称，再按行对称
    // 一维数组变二维矩阵
    let Matrix = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index].split('')
        Matrix.push(element)
    }
    // 按负对角线对称
    for (let i = 0; i < Matrix.length; i++) {
        for (let j = 0; j < Matrix[0].length-1-i; j++) {
            let temp = Matrix[i][j] 
            Matrix[i][j] = Matrix[Matrix.length-1-j][Matrix.length-1-i]
            Matrix[Matrix.length-1-j][Matrix.length-1-i] = temp
        }
    }
    // 按行对称
    for (let index = 0; index < Math.floor(Matrix.length/2); index++) {
        let temp = Matrix[index]
        Matrix[index] = Matrix[Matrix.length-1-index]
        Matrix[Matrix.length-1-index] = temp
    }
    // 二维矩阵转一维数组
    for (let index = 0; index < Matrix.length; index++) {
        Matrix[index] = Matrix[index].join('')
    }
    return Matrix
}
function readstring(s1,s2){
    let strList = ''
    let str1 = s1.join('').split('')
    let str2 = s2.join('').split('')
    for (let index = 0; index < str1.length; index++) {
        let cell = str1[index]
        let str = str2[index]
        if(cell == 0){
            strList += str
        }
    }
    return strList
}
module.exports = {
    rotatePassword : rotatePassword
};

// let s1 = ["1101","1010","1111","1110"]
// let s2 = ["ABCD","EFGH","IJKL","MNPQ"]
// console.log(rotatePassword(s1,s2))
// console.log(rotateMatrix(s2))
// "CFHQGLMPAIKNBDEJ"



// 单选组件

function RadioGroup(container, items, value) {
    this.items = items;
    this.value = value;
    this.html = html;
    this.val = val;
    this.index = index;
    this.el = null; //TODO: 创建组件根节点
    
    this.el = document.createElement('div')

    if (!this.el) return;

    this.el.className = 'radio-group';
    this.el.innerHTML = this.html();
    container.appendChild(this.el);

    this.el.addEventListener('click', event => {
        var el = event.target;
        if (el.tagName !== 'LABEL') return;
        var index = 0; //TODO: 获取当前点击项的序号

        if(el.tagName == 'LABEL'){
            index = index(el.value)
        }

        this.val(this.items[index].value);
    });

    function html() {
        //TODO: 生成组件的内部html字符串
        if(this.items.length>0){
            let resHtml = this.items.map((item,index)=>{
                if(item.disabled){
                    return `<label class="radio disabled">${item.label}</label></label>`
                }
                return `<label class="radio ">${item.label}</label></label>`
            })
            return resHtml.join('')
        }
        return '';
    }

    function val(value) {
        if (arguments.length === 0) return this.value;
        if (value === this.value) return;

        // TODO: 
        // 1、判断设定的值是否存在选项
        // 2、判断选项是否disabled
        // 3、切换选中的class
        let ifHas = false
        for (let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(item.value == value){
                ifHas = true
                if(item.disabled){
                    return
                }
            }
        }
        if(!ifHas){
            return;
        }
        
        // 更新值
        this.value = value;
    }

    function index(value) {
        for (var i = 0, l = this.items.length; i < l; i++) {
            if (items[i].value === value) return i;
        }
        return -1;
    }
}