function narcissistic(value) {
    // Code me to return true or false
    let arr = String(value).split('')
    let power = arr.length
    let number = arr.reduce((accumulator, currentValue) => {
        return accumulator + Math.pow(currentValue, power)
    }, 0)
    return number === value
}