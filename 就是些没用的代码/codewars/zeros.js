function factorial(num) {
    if (num < 0) {
        return -1;
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

function zeros(n) {
    let sum = factorial(n);
    let result = String(sum).search(/[0]+$/)
    return result !== -1 ? String(sum).length - result : 0
}

function f(n) {
    var a = [1];
    for (var i = 1; i <= n; i++) {
        for (var j = 0, c = 0; j < a.length || c != 0; j++) {
            var m = (j < a.length) ? (i * a[j] + c) : c;
            a[j] = m % 10;
            c = (m - a[j]) / 10;
        }
    }
    return a.reverse().join("");
}