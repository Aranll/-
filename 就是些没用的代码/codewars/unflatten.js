// function unflatten (flatArray)
// {
//   let arr = []
//   let splitLen = 0
//   let subArr = []
//   for(let i=0; i<flatArray.length; i++) {
//     if(flatArray[i]<3) {
//       arr.push(flatArray[i])
//     } else {
//       (flatArray[i]+i>flatArray.length)?(splitLen = flatArray.length-i):(splitLen = flatArray[i]);
//       subArr = []
//       for(let y=i; y<splitLen+i; y++) {
//         subArr.push(flatArray[y])
//       }
//       arr.push(subArr)
//       i += (splitLen-1)
//     }
//   }
//   return arr
// }
const unflatten = arr => {
  let newArr = []
  while(arr.length) {
    newArr.push(arr[0]<3 ? arr.shift() : arr.splice(0, arr[0]))
  }
  return newArr
}