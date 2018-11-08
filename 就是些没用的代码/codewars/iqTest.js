//


// function iqTest(numbers){
//     // ...
//     let arr = numbers.split(' ')
//     let indexOdd = 1;
//     let indexEven = 1;
//     let countOdd = 0;
//     let countEven = 0;
//     arr.foreach((val,index)=> {,fouze
//         if (val%2 === 1) {
//             countOdd++;
//             indexOdd = index+1;
//         } else {
//             countEven++;
//             indexEven = index+1;
//         }
//     })
//     if(countOdd === 1) {
//         return indexOdd;
//     } else {
//         return indexEven;
//     }
// }
function iqTest(numbers) {
    let nums = numbers.split(' ').map(val => val % 2)
    let sum = nums.reduce((accumulator, num) => accumulator + num);
    let target = sum > 1? 0 : 1;

    return nums.indexOf(target) + 1;
}