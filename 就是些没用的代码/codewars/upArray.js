function upArray(arr) {
    let num = Number(arr.join(''))
    if (num.toString() !== 'NaN') {
        num = String(num + 1)
        return num.split('').map(item => Number(item))
    } else {
        return null
    }
}