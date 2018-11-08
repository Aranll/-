function rgb(r, g, b) {
    let rgbArr = [r, g, b]
    rgbArr = rgbArr.map((val) => {
        val = val > 255 ?  255 : val < 0 ? 0 : val
        return val.toString(16).toUpperCase().replace('0','00')
    })
    return rgbArr.join('')
}
console.log(rgb(255, 255, 255),rgb(255, 255, 300),rgb(0,0,0),rgb(148, 0, 211))