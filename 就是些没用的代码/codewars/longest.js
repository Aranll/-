function longest(s1, s2) {
    let arr = (s1+s2).split('').sort((a,b)=>a.charCodeAt()-b.charCodeAt())
    arr = arr.map((val, index) => {
        if(val !== arr[index+1]){
            return val
        } else {
            return ''
        }
    })
    return arr.join('')
}


const longest = (s1, s2) => [...new Set(s1+s2)].sort().join()
const longest = (s1,s2)=> Array.from(new Set(s1+s2)).sort().join()