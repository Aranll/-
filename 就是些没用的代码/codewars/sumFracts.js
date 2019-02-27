function getGreatestCommonDivisor(a, b) {
    if (a <= 0 || b <= 0) return false

    let c = a % b
    while (c !== 0) {
        a = b
        b = c
        c = a % b
    }
    return b
}

function simplification(a, b) {
    let c = getGreatestCommonDivisor(a, b)

    while (c !== 1) {
        a = a / c
        b = b / c
        c = getGreatestCommonDivisor(a, b)
    }

    return [a, b]
}

function add(arr1, arr2) {
    let a = arr1[0] * arr2[1] + arr1[1] * arr2[0]
    let b = arr1[1] * arr2[1]
    return simplification(a, b)
}

function sumFracts(l) {
    // your code
    if (l && l.length === 0) return null
    let ele = l[0]

    l.forEach((item, index) => {
        if (index > 0) {
            ele = add(ele, item)
        }
    })
    if (ele[1] === 1) return ele[0]

    return ele
}