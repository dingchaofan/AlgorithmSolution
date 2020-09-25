function sum1(value){
    function sumOf(interValue){
        return sum(value+interValue)
    }
    sumOf.value = value
    return sumOf
}

function add() {
    let x = Array.from(arguments)
    var sum = x.reduce((a,b)=>{
        return a+b
    },0);
    var tmp = function (y) {
      sum = sum + y;
      return tmp;
    };
    tmp.sumOf = function () {
      return sum;
    };
    return tmp;
}
console.log(add(1)(2)(3)(5,6).sumOf()
