// function digital_root(n) {
//     // 1. num => string => arr 
//     // 2. arr =reduce> sum
//     // 3. 递归进行
//     if (String(n).length > 1) {
//         let arr = String(n).split('');
//         n = arr.reduce((a, val) => {
//             return a + (+val);
//         }, 0)
//         digital_root(n)
//     } else {
//         return n;
//     }
// }



function digital_root(n) {
    while (String(n).length > 1) {
        n = String(n).split('').reduce((a, val) => {
            return a + (+val);
        }, 0)
    }
    return n;
}

const digital_root = n => {
    while (String(n).length > 1) {
        n = String(n).split('').reduce((a, val) => {
            return a + (+val);
        }, 0)
    }
    return 0;
}

const digital_root = n => {
    return (n - 1) % 9 + 1;
}