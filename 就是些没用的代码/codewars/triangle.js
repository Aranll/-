function triangle(row) {
    let arr = row.split('');
    
    while (arr.length > 1) {
        arr = arr.map((val, index) => {
            if (index < arr.length - 1) {
                if (val === arr[index + 1]) {
                    return val
                } else {
                    val = val + arr[index + 1]
                    if (/GB|BG/.test(val)) {
                        return 'R'
                    } else if (/GR|RG/.test(val)) {
                        return 'B'
                    } else {
                        return 'G'
                    }
                }
            }
        })
        arr.splice(-1)
    }
    return arr[0]
}