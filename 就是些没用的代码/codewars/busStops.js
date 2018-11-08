// var number = function(busStops){
//     // Good Luck!
//     const theLastStop = busStops.reduce((accumulator, val) => {
//         if(accumulator[0] >= accumulator[1]) {
//             accumulator[0] += val[0];
//             accumulator[1] += val[1];
//             return accumulator;
//         } 
//     })
//     return theLastStop[0] - theLastStop[1]
// }



const number = (busStops) => busStops.reduce((sum, [on, off]) => sum + on - off, 0)