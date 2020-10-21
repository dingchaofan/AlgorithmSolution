var lengthOfLongestSubstring = function(s) {
    let resArr = ''
    let tempArr = ''
    let max = 0
    for(let i = 0; i < s.length; i++){
        let cur = s[i]
        if(tempArr.includes(cur)){
            if(tempArr.length > resArr.length){
                resArr = tempArr
            }
            tempArr = tempArr.slice(tempArr.indexOf(cur)+1)
        }
        tempArr = tempArr + cur
        max = Math.max(tempArr.length,max)
    }
    return resArr.length
};
let input = "abcabccb"
console.log(lengthOfLongestSubstring(input))