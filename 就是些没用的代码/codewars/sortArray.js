// function sortArray(array) {
//     let oddArr = [];
//     let indexArr = [];
//     array.forEach((val, index) => {
//         if (val % 2 === 1) {
//             oddArr.push(val);
//             indexArr.push(index);
//         }
//     });
//     oddArr.sort((a, b) => a - b > 0)
//     indexArr.forEach((val, index) => {
//         array[val] = oddArr[index];
//     })
//     return array;
// }
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}