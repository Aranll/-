function computeDepth (x){
    let str = '0123456789';
    let depth = 1;
    while(str.length) {
        str = str.replace(RegExp(String(x * depth).replace(/\B(?=\d+)/g,'|'),'g'),'')
        depth++;
    }
    return depth-1;
}