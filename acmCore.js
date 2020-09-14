// 用nodeJs写算法题输入输出 https://www.cnblogs.com/soyxiaobi/p/9384585.html
// js-v8 https://blog.csdn.net/huzhenv5/article/details/104690919


// nodejs
// 1. 单行输入
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function(line){
    // line为输入的单行字符串
    // split函数通过空格将该行数据转换成数组
    var arr = line.split(' ');
    //数组arr的每一项都是字符串格式，若需要整型，则需要parseInt将其转换成数字
    console.log(parseInt(arr[0])+parseInt(arr[1]));
})
// 2.输入所有行
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputs = [];
rl.on('line',function(line){
    //trim()去除字符串两边的空白，line表示一行输入，最终得到的inputs数组的每一个元素表示一行输入。
    inputs.push(line.trim());
    //下面再对每一行输入进行处理
    ......
})
// 3.输入多行
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
var input_array = "";
process.stdin.on('line',function(line){
    input ++line;
});
process.stdin.on('end',function(){
    input_array = input.split("\n");
    //处理input
});
// 4. 规定读入num行
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var countLine = 1;//记录读取的行数
var tokens = [];
rl.on('line',function(line){
    tokens.push(line);
    if(countLine===num){
        //操作部分
    }else{
        countLine++;
    }
})

// 用nodeJs写算法题输入输出 https://www.cnblogs.com/soyxiaobi/p/9384585.html
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim().split(' ');
    // 处理
    var result = deal(inputs);
    // 输出结果
    console.log(result);
});
function deal(inputs) {
    var result = '';
    // dosomething
    return result;
}


var readline = require('readline');
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
var num = 0;
 
rl.on('line',function(input){
    if(num==0){
        num = input.trim();
    }
    else{
        var iptArr = input.split(' ');
        if(iptArr.length==num){
            var maxNum = Math.max.apply(null,iptArr);
            var minNum = Math.min.apply(null,iptArr);
            var result = maxNum + ' ' + minNum;
            console.log(result);
            return result;
        }
    }
})
//在终端输入
// node max_min        //文件名
// 5                    //输入N个数的数量
// 12 18 5 20 10        //N个数
// 20 5                //返回结果


// js-v8
// https://blog.csdn.net/huzhenv5/article/details/104690919

// 用readline()函数读取输入
// 1. 单行、固定行读取
// 12
// abc
let param1 = readline() // 读取 12
let param2 = readline() // 读取 abc

// 2. 可变多行输入
// 3 // 行数
// aa
// bb
// cc
while(count = readline()) {
	for (var i=0; i<count; i++) {
		// 这样就可以分别读取 aa bb cc，如有需要可以通过这个循环把它们放到数组中
		var word = readline()
	}
}

// 3. 获取的多行参数，但是并没有说明有多少行，可以判断读取的是否为undefined，如果读取的为undefined，说明已经读取了所有入参
while (1) {
    var arr = readline()
    if (arr == undefined) break // 通过break跳出循环
  
    var nums = arr.split(' ')
    var sum = 0
    for (var i=1; i<nums.length; i++) {
        sum += parseInt(nums[i])
    }
    console.log(sum)
}

// 输出 使用print()和console.log()均可
// 结束读取入参 使用break跳出循环

// 字符串处理
split() // 分割符为空字符串或被分割的字符串中没有指定的分割符，则返回这个字符串本身
// 大小写转换 toLowerCase() toUpperCase()
'aJs4'.toLowerCase() // 'ajs4'
'aJs4'.toUpperCase() // 'AJS4'
// 字符串遍历 for循环
// 字符串截取 slice(start, end)，substring(start, end)，substr(start,length)，
// 其中slice跟substring效果一样，包含start，但是不包含end，slice还可以用于数组
// 不改变原字符串
[1,2,3,4].slice(1, 3) // [2,3]
'abcd'.slice(0, 3) // 'abc'
'abcd'.substring(0, 3) // 'abc'
'abcdefgh'.substr(2, 3) // 'cde'

// 字符串中查找某个字符或者字符串，可以用indexOf函数，
// 该函数同样可以作用于数组，如果没有找到，则返回-1
'abcd'.indexOf('k') // -1
'abcd'.indexOf('bc') // 1 
[1,2,3,4].indexOf(3) // 2

// 数字转字符串 可以使用加上空字符串和toString()函数
// 用toString()函数的使用，一定要使用括号将数字括起来；
// 另外toString()还可以转进制，可将10进制的数字转成指定的进制的字符串
2.toString() // 报错
(2).toString() // '2'
(2.3).toString() // '2.3'

(20.3).toString(16) // '14.4ccccccccccd'
(31).toString(16) // '1f'
'w'.toString(16) // 'w'

'' + 2 // '2'
'' + 2.3 // '2.3'

// 字符串转数字  使用parseInt()和parseFloat()函数
// parseInt可以传两个参数，第二个参数可选，不传默认为10，代表进制
parseInt('we') // NaN
// 从第一个数字字符串开始识别
parseInt('2we') // 2
// 这个有点特殊，碰到'0x'开头的数字会默认当成16进制的数字转换
parseInt('0xa') // 10
parseInt('21', 8) // 17
parseInt('21', 9) // 19

parseFloat('kkm') // NaN
parseFloat('3.4') // 3.4
// parseFloat无法进行进制转换
parseFloat('12.4c', 16) // 12.4
parseFloat('12.44.33') // 12.44

// 字符和ASCII码的互相转换 charCodeAt() String.formCharCode()
// 几个常见的特殊ACSII码值：换行（10），回车（13），空格（32）
var str = "A";
str.charCodeAt();  // 65
var str1 = 'abc';
str1.charCodeAt(1);  // 98

String.formCharCode(97);  // 'a'
String.fromCharCode(100);  // 'd'

// 字符串排序 按照ASCII码按位排序

// 数字处理
// toFixed()保留小数位数，默认是整数，四舍五入，返回string
2.34.toFixed() // '2'
2.54.toFixed() // '3'
2.5455.toFixed(1) // '2.5'
// 控制精度向下取
Math.floor(15.7784514000 * 100)/100 //15.77
// 浮点数进行取整的方法
// 丢弃小数部分，取整数部分，相当于下取整Math.floor();
parseInt(2.34) // 2
// 向上取整，小数只要存在，就整数部分+1
Math.ceil(0.3) // 1
// 四舍五入取整
Math.round(2.53) // 3
// 向下取整，小数直接去掉，小数部分无论多大，整数部分都不+1
Math.floor(2.89)  // 2

// 对象遍历
var obj = {
	a: 1,
	b: 3,
	d: 5
}
for (let key in obj) {
	console.log(key + '---' + obj[key])
}

// 数组处理
// splice() 会修改原数组
// arrayObject.splice(index,howmany,item1,…,itemX)
[2,3,4,2].splice(1, 2) // 删除后数组变为[2,2]
[2,3,4,5].splice(2, 0, 'a') // 增加后的数组为 [2,3,'a',4,5]
// join() 数组元素合并，转字符串  不改变原数组
let a = [1,2,4,'a','d']
a.join('') // '124ad'
a.join(',') // '1,2,4,a,d'
// reverse() 数组元素转向 会改变原数组
let a = [1,2,4,'a','d']
a.reverse() // [ 'd', 'a', 4, 2, 1 ]
// 数组的累加或者累乘，reduce函数的使用
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// 求一个数组的和
var arr = [1,2,3,4]
var sum = arr.reduce(function(a,b){
	return a+b
})
console.log(sum) // 10
// 求一个数组的和
var arr = [1,2,3,4]
var sum = arr.reduce(function(totle,item,index,oriarr){
	return totle+item
},5)
console.log(sum) // 15
 
// 求所有质因子
function colZhizi(num) {
	let colNum = parseInt(num)
	let arr = []
	for (let i=2; i<=Math.sqrt(colNum); i++) {
		while (colNum%i === 0) {
			arr.push(i)
			colNum = colNum / i
		}
	}
	if (colNum > 1) arr.push(colNum) 
	return arr
}
// 去重函数
function delRe(arr) {
	let reArr = []
	for (let m=0; m<arr.length; m++) {
		if(reArr.indexOf(arr[m]) < 0) reArr.push(arr[m])
	}
	return reArr
}
// 去重加排序
function delReAndRange(arr) {
	let reArr = []
	bbq:
	for (let m=0; m<arr.length; m++) {
		for (let n=0; n<reArr.length; n++) {
			if (reArr[n] > arr[m]) {
				reArr.splice(n, 0, arr[m])
				continue bbq
			}else if (reArr[n] === arr[m]) {
				continue bbq
			}
			
		}
		reArr.push(arr[m])
	}
	return reArr
}
// 数组的妙用 —— 去重和排序：根据数组的特性，index值是从小到大的，并且唯一，
// 可以利用来进行去重和排序；不过这个方法有限制，处理的数据必须都是大于或等于0的数，
// 且处理的数据中最大的数不宜过大。见下面一个例子：
// 对下面一组数进行去重和排序（从小到大）
var nums = [3,4,6,7,4,3,6,7,9,9,0,5,4,2,1,11,2,45,29]

let ret = []
for (let i=0; i<nums.length; i++) {
	ret[nums[i]] = 1
}

let arr = []
for (let i=0; i<ret.length; i++) {
	if (ret[i] === 1) arr.push(i)
}
console.log(arr) // [ 0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 29, 45 ]

// 反转算法
function reverseStr(str) {
    str = str.split('').reverse().join('')
    return str;
}