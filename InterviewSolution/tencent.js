// 1. 数组合并
let arr1 = readline().split(',')
let arr2 = readline().split(',')
for (let index = 0; index < arr1.length; index++) {
    arr1[index] = parseInt(arr1[index])
}
for (let index = 0; index < arr2.length; index++) {
    arr2[index] = parseInt(arr2[index])
}
function mergeArr(arr1, arr2) {
    let index1 = 0
    let index2 = 0
    let res = []
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] <= arr2[index2]) {
            res.push(arr1[index1])
            index1+=1
        }
        else {
            res.push(arr2[index2])
            index2+=1
        }
    }
    if (index1 < arr1.length) {
        return res.concat(arr1.slice(index1))
    }
    return res.concat(arr2.slice(index2))
}

let res = mergeArr(arr1, arr2)
console.log(res.join(','))


// 2. 监控对象扁平化

let input = readline()
input = JSON.parse(input)

let keys = Object.keys(input)
for (let index = 0; index < keys.length; index++) {
    keys[index] = parseInt(keys[index])
}
let max = Math.max(...keys)
let res = []
for (let index = 0; index < max; index++) {
    res[index] = 0
}
for(let key in input){
    let keynum = parseInt(key)
    let valuenum = parseInt(input[key])
    res[keynum-1] = valuenum
}

res = JSON.stringify(res)
console.log(res)

// 3. 单独删除后中位数
// ac = 0.55 超时溢出 
let num = parseInt(readline())
let arr = readline().split(' ')
for (let index = 0; index < arr.length; index++) {
    arr[index] = parseInt(arr[index])
}
function bubblesort(array){
    let res = []
    for (let index = 0; index < array.length; index++) {
        res.push(array[index])
    }
    let len = res.length
    for (let index = 0; index < len; index++) {
        for (let j = 0; j < len-1-index; j++) {
            if(res[j] > res[j+1]){
                [res[j], res[j+1]] = [res[j+1], res[j]]
            }
        }
    }
    return res
}
let sortedArr = bubblesort(arr)
res = []
for (let index = 0; index < arr.length; index++) {
    let indexInSorted = sortedArr.indexOf(arr[index])
    if(indexInSorted < num/2){
        console.log(sortedArr[num/2])
        continue
    }
    console.log(sortedArr[num/2-1])
}


// 4. 日历组件

function Calendar(container, year, month) {
    this.year = year;
    this.month = month;
    this.html = html;
    this.el = null; //TODO: 创建分页组件根节点
    this,el = document.createElement("table")
    if (!el) return;
    this.el.className = 'calendar';
    this.el.innerHTML = this.html();
    container.appendChild(this.el);

    this.el.addEventListener('click', event => {
        var el = event.target;
        var isPre = el.classList.contains('pre');
        var isNext = el.classList.contains('next');
        if (!isPre && !isNext) return;
        if (isPre) {
            //TODO: 更新this.month和this.year
            if(this.month - 1 < 1){
                this.month = 12 
                this.year = this.year - 1
            }
            else{
                this.month = this.month - 1
            }
        } else {
            //TODO: 更新this.month和this.year
            if(this.month + 1 > 12){
                this.month = 1
                this.year = this.year + 1
            }
            else{
                this.month = this.month + 1
            }
        }
        this.el.innerHTML = this.html();
    });

    function html() {
        var date = new Date();
        var year = +this.year || 0;
        var month = (+this.month || 0) - 1;
        var day = date.getDate();
        //TODO: 生成组件的内部html字符串
        return '';
    }
}

// 5. 数字消除
let num = parseInt(readline())

for (let index = 0; index < num; index++) {
    let arr = readline()

    let time = 0
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        let tempNum = arr[i];
        stack.push(tempNum)
        if(stack.length>=2){
            if(stack[stack.length-1] == stack[stack.length-2]){
                time += 1
                stack.splice(stack.length-2,2)
            }
        }
    }
    console.log(time)
}