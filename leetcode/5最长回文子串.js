// 最长回文子串
let input = "babad"


// 暴力解法
var longestPalindrome1 = function(s) {
    if(s.length < 2){
        return s
    }
    let res = s[0]
    for (let index = 0; index < s.length-1; index++) {
        for (let endindex = index+1; endindex < s.length; endindex++) {
            let substring = s.substring(index,endindex+1)
            if(substring.split('').reverse().join('') == substring){
                if(res.length<substring.length){
                    res = substring
                }
            }
        }
    }
    return res
};


// 中心扩展法
var longestPalindrome = function(s) {
    if(s.length < 2){
        return s
    }
    let res = s[0]
    
    for (let index = 0; index < s.length; index++) {
        let oddString = extendString(index,index,s)
        let evenString = extendString(index,index+1,s)
        let resString = oddString.length > evenString.length ? oddString : evenString
        if(resString.length>res.length){
            res = resString
        }
    }
    return res
};
let extendString =function(left,right,s){
    while(left>=0 && right< s.length && s[left] == s[right]){
        left--
        right++
    }
    return s.substring(left+1,right)
}
console.log(longestPalindrome(input))