const compareProp = (arr, property, sortord) => {
    if (sortord === 'asc' || sortord === undefined) {
	    // 升序
    	_arr = arr.sort((obj1, obj2) => obj1[property] - obj2[property])
    } else {
	    // 降序
    	_arr = arr.sort((obj1, obj2) => obj2[property] - obj1[property])
    }
    return _arr
}

function high(x){
   let _arr = x.split(' ');
   let arr = _arr.map((val, index) => {
        let sum = val.split('').reduce((acc, val)=>{
            return acc + val.charCodeAt() - 'a'.charCodeAt() + 1;
        },0)
        return {
            sum: sum,
            val: val
        }
   })
   arr = compareProp(arr, 'sum','des')
   return arr[0].val;
}