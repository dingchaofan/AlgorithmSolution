// 46. 孩子们的游戏（圆圈中最后剩下的数）

// 每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。
// HF作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,
// 让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。
// 每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且
// 不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....这样下去....直到
// 剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额
// 有限哦!!^_^)。请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号
// 是从0到n-1)

// 如果没有小朋友，请返回-1

// 数学公式法
// f[1]=0; 
// f[i]=(f[i-1]+m)%i; (i>1)
function LastRemaining_Solution(n, m) {
    // write code here
    if (n < 1 || m < 1) {
        return -1
    }
    let last = 0
    for (let index = 1; index <= n; index++) {
        last = (last + m) % index
    }
    return last
}

// 数组模拟
function LastRemaining_Solution(n, m) {
    if (n < 1 || m < 1) {
        return -1
    }
    let kid = []
    for (let i = 0; i < n; i++) {
        kid.push(i)
    }
    while (kid.length > 1) {
        // 计算出列的index
        let count = (m-1)%kid.length
        kid = kid.slice(count+1).concat(kid.slice(0,count))
    }
    return kid[0]
}