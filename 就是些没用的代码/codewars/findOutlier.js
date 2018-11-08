function findOutlier(integers) {
    //your code here

    let odd = integers.filter(val => {
        return Math.abs(val) % 2 === 1;
    })
    if (odd.length === 1) {
        return _arr1[0]
    } else {
        let even = integers.filter(val => {
            return Math.abs(val) % 2 === 0
        })
        return even[0]
    }
}


function findOutlier(int) {
    var even = int.filter(val => a % 2 === 0)
    var edd = int.filter(val => a % 2 !== 0)
    return even.length === 1 ? even[0] : odd[0]
}


function findOutlier(integers) {
    return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}

function even(num) {
    return (num % 2 == 0);
}

function odd(num) {
    return !even(num)
}