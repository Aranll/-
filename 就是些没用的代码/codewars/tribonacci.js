function tribonacci(signature, n) {
    //your code here
    if (n <= 3) {
        signature.length = n
        return signature
    } else {
        for (let i = 3; i < n; i++) {
            signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1])
        }
    }
    return signature
}