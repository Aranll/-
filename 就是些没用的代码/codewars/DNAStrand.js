let DNA = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
}

function DNAStrand(dna) {
    //your code here
    let dnaArr = dna.split('')
    dnaArr = dnaArr.map(val => {
        return DNA[val]
    })
    return dnaArr.join('')
}

// function DNAStrand(dna) {
//     return dna.replace(/./g, function(val){
//         return DNA(val)
//     })
// }

// const DNAStrand = (dna) => dna.replace(/.g/, (val) => DNA(val))