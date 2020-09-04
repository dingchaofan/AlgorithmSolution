// 1. 分页 js部分 ac=0.1

function Pagination(container, total, current) {
    this.total = total;
    this.current = current;
    this.html = html;
    this.val = val;
    this.el = null; //TODO: 创建分页组件根节点
    this.el = document.createElement("ul")
    if (!this.el) return;

    this.el.innerHTML = this.html();
    container.appendChild(this.el);
    this.el.className = ''; //TODO: 判断是否需要隐藏当前元素
    if(this.total <= 1){
        this.el.className = "pagination hide"
    }
    else{
        this.el.className = "pagination"
    }

    function html() {
        if (this.total <= 1) return '';

        //TODO: 生成组件的内部html字符串
        if (this.total <= 5) {
            let list = []
            for (let index = 1; index <= this.total; index++) {
                if (index === this.current) {
                    list.push("<li class='current'>"+ index +"</li>")
                }
                list.push("<li>"+ index +"</li>")
            }
            return (
                list.join("\n")
            )
        }
        if (this.total > 5) {
            if (this.current <= 5) {
                let list = [].push("<li>首页</li>")
                for (let index = 1; index <= 5; index++) {
                    if (index === this.current) {
                        list.push("<li class='current'>"+ index +"</li>")
                    }
                    list.push("<li>"+ index +"</li>")
                }
                return (
                    list.join("\n")
                )
            }
            if (this.current >= this.total - 5) {
                let list = []
                for (let index = this.total - 5; index <= this.total; index++) {
                    if (index === this.current) {
                        list.push("<li class='current'>"+ index +"</li>")
                    }
                    list.push("<li>"+ index +"</li>")
                }
                list.push("<li>末页</li>")
                return (
                    list.join("\n")
                )
            }
        }
        return '';
    }

    function val(current) {
        if (arguments.length === 0) return this.current;
        if (current < 1 || current > this.total || current === this.current) return;
        this.current = current;
        this.el.innerHTML = this.html();
    };
}