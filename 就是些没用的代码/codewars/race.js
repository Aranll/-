function race(v1, v2, g) {
    if (v2 - v1 <= 0) {
        return null;
    }

    let timer = [];
    timer[0] = Math.floor(g / (v2 - v1));
    timer[1] = Math.floor((g / (v2 - v1) - Math.floor(g / (v2 - v1))).toFixed(2) * 60);
    timer[2] = Math.floor((((g / (v2 - v1) - Math.floor(g / (v2 - v1))) * 60) - Math.floor((g / (v2 - v1) - Math.floor(g / (v2 - v1))) * 60)).toFixed(2) * 60);
    return timer;
}


function race(v1, v2, g) {
    if (v2 - v1 <= 0) {
        return null;
    }

    let timer = [];
    timer[0] = Math.floor(g / (v2 - v1));
    timer[1] = Math.floor(Math.round((g / (v2 - v1) - timer[0]) * 60 * 60) / 60)
    timer[2] = Math.abs(Math.floor(Math.round(((g / (v2 - v1) - timer[0]) * 60 - timer[1]) * 60 * 60) / 60))

    return timer;
}