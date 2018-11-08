function isPrime(num) {
    if (num === 0 || num === 1 || num < 0) {
        return false
    } else {
        let _num = Math.ceil(Math.sqrt(num))
        for (let i = 2; i <= _num; i++) {
            if (num % i === 0 && num !== 2) {
                return false
            } 
        }
        return true
    }
}