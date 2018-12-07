function primeFactors(n) {
    //your code here
    let arr = []
    let result = isPrime(n)
    while (result !== true) {
        arr.push(result)
        n = n / result
        result = isPrime(n)
    }
    arr.push(n)
    return arr
}

const isPrime = (n) => {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return i
        }
    }
    return true
}

const transform = (arr) => {
    let _arr = []
    let count = 1
    arr.forEach((val, index) => {
        if (val === arr[index + 1]) {
            count++
        } else {
            let obj = {}
            _arr.push(obj[val] = count)
            count = 1
        }
    });
    return _arr
}

console.log(primeFactors(86240))