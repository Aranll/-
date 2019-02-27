function rot13(message) {
    //your code here
    let zCode = 'z'.charCodeAt()
    let ZCode = 'Z'.charCodeAt()
    let ACode = 'A'.charCodeAt()
    let arr = message.split('')
    let targetArr = arr.map(item => {
        let _code = item.charCodeAt()

        if (_code < ACode || _code > zCode) return item
        if (_code <= ZCode) {
            if ((_code + 13) > ZCode) {
                return String.fromCharCode(item.charCodeAt() - 13)
            }
        } else {
            if ((_code + 13) > zCode) {
                return String.fromCharCode(item.charCodeAt() - 13)
            }
        }
        return String.fromCharCode(item.charCodeAt() + 13)
    })

    return targetArr.join('')
}