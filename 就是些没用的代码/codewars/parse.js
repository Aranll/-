// const executeCommand = {
//     i: (comm) => {
//         return ++comm
//     },
//     d: (comm) => {
//         return --comm
//     },
//     s: (comm) => {
//         return comm * comm
//     }
// }

const exeComm = (comm, val) => {
    switch (comm) {
        case 'i':
            return ++val
        case 'd':
            return --val
        case 's':
            return val * val
        default:
            break;
    }
}

function parse(data) {
    let arr = data.split('')
    let init = 0
    let result = []
    arr.forEach(item => {
        if (item === 'o') {
            result.push(init)
        } else {
            // init = exeComm(item, init)
            // init = executeCommand[item](init)
            if (item === 'i') {
                init += 1
            } else if (item === 'd') {
                init -= 1
            } else if (item === 's') {
                init *= init
            }
        }
    })
    return result
}