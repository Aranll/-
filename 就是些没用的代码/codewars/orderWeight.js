const compose = (...funcs) => {
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
const stringToArray = (str) => {
    return str.join(' ')
}
const accumulator = (str) => {
    if (!str || str.length === 0) return false

    return String(str).split('').reduce((acc, currentValue) => {
        return Number(acc) + Number(currentValue)
    }, 0)
}
const sort = (arr) => {
    arr.sort((a, b) => {
        let num1 = accumulator(a)
        let num2 = accumulator(b)

        if (num1 === num2) {
            return String(a) > String(b) ? 1 : -1
        } else {
            return num1 - num2
        }
    })
    return arr
}
const arrayToString = (arr) => {
    return arr.split(' ')
}

const orderWeight = compose(stringToArray, sort, arrayToString)