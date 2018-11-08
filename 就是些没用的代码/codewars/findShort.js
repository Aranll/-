// function findShort(s) {
// 	let arr = s.split(' ');
// 	let shortestLen = arr[0];
// 	for(let i=0; i<arr.length; i++) {
// 		(arr[i].length < shortestLen) && shortestLen = arr[i].length;
// 	}
// 	return shortestLen;
// }

function findShort(s) {
	return Math.min(...s.split(' ').map(word => word.length));
}