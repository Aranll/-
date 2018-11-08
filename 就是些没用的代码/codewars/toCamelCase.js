// function toCamelCase(str) {
//     let arr = str.replace(/-|_/g, '-').split('-')
//     arr[0] === '' && (arr.splice(0, 1))
//     arr = arr.map((val, index) => {
//         if (index === 0) {
//             return val;
//         } else {
//             let arr = val.split('')
//             arr[0] = arr[0].toString().toUpperCase()
//             return arr.join('')
//         }
//     })
//     return arr.join('')
// }


// let str = '-the_stealth_warrior'
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

// console.log(toCamelCase(str))
