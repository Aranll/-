function reverse(str) {
    let arr = str.split(' ')
    arr = arr.map((val, index) => {
        if(index%2===0) {
            return val
        }else {
            return val.split('').reverse().join('')
        }
    })
    return arr.join(' ')
}