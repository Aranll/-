// function firstDup(s) {
//     while (s.length) {
//         let val = s.substr(0, 1);
//         s = s.substr(1);
//         if (s.includes(val)) {
//             return val;
//         }
//     }
//     return undefined;
// }


function firstDup(s) {
    return s[s.search(/(.).*\1/)]
}