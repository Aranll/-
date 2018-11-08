function closest_sum(arr, tarSum) {
    let closest = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let g = i + 2; g < arr.length; g++) {
                let _sum = arr[i] + arr[j] + arr[g];
                if (Math.abs(_sum - tarSum) < Math.abs(closest - tarSum)) {
                    closest = _sum;
                }
            }
        }
    }
    return closest
}