function whoIsNext(names, r) {
    let man = ''
    for(let i = 0; i < r; i++) {
        man = names.shift()
        names.push(man, man)
    }
    return man
}