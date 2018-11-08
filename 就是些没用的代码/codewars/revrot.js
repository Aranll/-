// function revrot(str, sz) {
//     if (sz <= 0 || sz > str.length) {
//         return "";
//     }
//     let regExp = new RegExp('\\B(?<=^(\\d{' + sz + '})+)', 'g')
//     let arr = str.replace(regExp, ',').split(',')
//     arr = arr.map(val => {
//         let cubes = val.split('').reduce((a, val) => {
//             return a + Math.pow(Number(val), 3);
//         }, 0);
//         if (sz > val.length) {
//             return ""
//         } else if (cubes % 2 === 0) {
//             return val.split('').reverse().join('')
//         } else {
//             let _arr = val.split('')
//             _arr.push(_arr.shift())
//             return _arr.join('')
//         }
//     })
//     return arr.join('')
// }


function revrot(str, sz) {
    if (sz < 1 || sz > str.length) 
      return '';
  
    let reverse = s => s.split('').reverse().join('');
    let rotate  = s => s.slice(1) + s.slice(0, 1);
    let sum_cubes = c => c.split('').reduce((a, b) => a + (+b) ** 3, 0); 
  
    return str
      .match(new RegExp('.{' + sz + '}', 'g'))
      .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
      .join('');
  }