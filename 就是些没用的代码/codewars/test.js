function solve(strA, strB) {
	let arrA = strA.split('*')
	let regExpStr = ''
  let result = false
	arrA.forEach((val,index) => {
      if(index===0) {
        val===''? (regExpStr = '[\\w]*'):(regExpStr = val);
      } else (val!=null && val.length!=0){
          regExpStr += ('[\\w]*' + val);
      }    
	})
    let regExp = new RegExp(regExpStr)
    if(arrA.length===1) {
      if(strA===strB) {
        (result=true)
      } 
    } else {
      result = regExp.test(strB)
    }
	return result
}