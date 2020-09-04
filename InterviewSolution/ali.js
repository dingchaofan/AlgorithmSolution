/*
 * 重排数组
 * 说明：给定一个长度为N的数组，N > 0，实现一个方法，将原数组头尾交替重排序，
 *   如：[a1, a2, a3, ..., aN-1, aN]重排成[a1, aN, a2, aN-1, a3, aN-2, ...]
 * 示例：
 *   resort([1, 2, 3, 4]);   // 输出 [1, 4, 2, 3]
 *   resort([1, 2, 3, 4, 5]);// 输出 [1, 5, 2, 4, 3]
 *   resort([1, 2]);         // 输出 [1, 2]
 *   resort(['a', 'b', 'x', 'e', 'g']); 输出 ['a', 'g', 'b', 'e', 'x']  
 */

function resort(arr) {
    // write code here
    let res = []
    while(arr.length > 0){
        res.push(arr[0])
      arr.shift()
      if(arr.length>0){
          res.push(arr[arr.length-1])
          arr.pop()
      }
    }
    return res
  }
  
  /**
   * 判断括号匹配
   * 说明：给定一个只包含 '() {} []' 6种字符的字符串，
   *   实现一个方法来检测该字符串是否合法，其规则为'()'、'{}'、'[]'必须互相匹配，可嵌套。
   * 示例：
   *   isValid('(');          // false
   *   isValid('()');         // true
   *   isValid('()[]{}');     // true
   *   isValid('{()[]}');     // true
   *   isValid('(]');         // false
   *   isValid('([)]');       // false
   *   isValid('({}[]([]))'); // true
   */
  function isValid(str) {
    // write code here
    let stack = []
    for(let i = 0; i<str.length; i++){
      let tempStr = str[i]
      stack.push(tempStr)
      if(stack.length>=2){
          let subStr = stack[stack.length-2]+stack[stack.length-1]
          if(subStr == '()' || subStr == '{}' || subStr == '[]'){
              stack.splice(stack.length-2,2)
          }
      }
    }
    if(stack.length > 0){
        return false
    }
    return true
  }
  
  /*
   * 扁平化对象
   * 传入 input 对象（Object 或者 Array）进行扁平化处理并返回结果。
   * 具体效果如下：
   * const input = {
   *    a: 1,
   *    b: [ 1, 2, { c: true }, [ 3 ] ],
   *    d: { e: 2, f: 3 },
   *    g: null, 
   * }
   * 
   * flatten(input);
   * 
   * 返回：
   * {
   *    "a": 1,
   *    "b[0]": 1,
   *    "b[1]": 2,
   *    "b[2].c": true,
   *    "b[3][0]": 3,
   *    "d.e": 2,
   *    "d.f": 3,
   *    // "g": null,  值为null或者undefined，丢弃
   * }
   */ 
  
  function flatten(input,inputName) {
      // write code here
      let resObj = {}
  
      // input是数组
      if(Array.isArray(input)){
        for(let i=0; i<input.length; i++){
            let nodeValue = input[i]
            let nodeKey = inputName +'['+ i +']'
            if(nodeValue && typeof nodeValue == 'object'){
                resObj[nodeKey] = flatten(nodeValue,nodeKey)
            }
            else{
                resObj[nodeKey] = nodeValue
            }
        }
      }
      // input是对象
      else{
        for(let [key,value] in Object.entires(input)){
            let nodeKey = inputName+'.'+key
            let nodeValue = value
            if(nodeValue && typeof nodeValue == 'object'){
                resObj[nodeKey] = flatten(nodeValue,nodeKey)
            }
            else{
                resObj[nodeKey] = nodeValue
            }
        }
      }
      return resObj
  }

  function flatten(input) {
      let resObj = {}

  }