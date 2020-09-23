function sum(value){
    function sumOf(interValue){
        return sum(value+interValue)
    }
    sumOf.value = value
    return sumOf
}

function sum(a){
	return function(b){
		return function(c){return a+b+c};
	}
}
console.log(sum(1)(2)(3).valueOf())
