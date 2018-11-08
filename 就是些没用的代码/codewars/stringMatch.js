function solve(strA, strB) {
  let arrA = strA.split('*')
  let regExpStr = ''
  let result = false
  arrA.forEach((val,index) => {
      if((index===0 || arrA.length===index) && val==='') {
        regExpStr += '[\\w]*';
      } else if(val!=null && val.length!=0){
        regExpStr===''? regExpStr = val : regExpStr += ('[\\w]*' + val);
      }    
  })
    let regExp = new RegExp(regExpStr)
    if(arrA.length===1) {
       strA===strB && (result=true);
    } else {
      result = regExp.test(strB)
    }
  return result
}