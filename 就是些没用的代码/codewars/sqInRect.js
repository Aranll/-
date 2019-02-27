function sqInRect(lng, wdth) {
    //your code here
    if (lng === wdth) {
        return null
    }
    let arr = []
    const callback = (l, w) => {
        if (l <= 0 || w <= 0) {
            return 0
        } else {
            if (l > w) {
                arr.push(w)
                callback(l - w, w)
            } else {
                arr.push(l)
                callback(l, w - l)
            }
        }
    }
    callback(lng, wdth)

    return arr
}