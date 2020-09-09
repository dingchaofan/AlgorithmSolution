// ES6单例模式，含有一个生成自增不重复的id函数

class Singelen{
    constructor(){
        this.id = 0
        this.instance = null
    }
    static genInstance(){
        if(!this.instance){
            this.instance = new Singelen()
        }
        return this.instance
    }
    getId(){
        return this.id++
    }
}
let a = Singelen.genInstance()