function  fibs(n) {

    let num = 0
    let arr = [0, 1]
    for (let i = 0; i < n-2; i++) 
    {
        num = arr[i] + arr[i + 1]
        arr.push(num)
    }
    return arr.slice(0, n)
}
console.log("FIBONACCI ITERATIVE")
console.log(fibs(8))
console.log("\n\n")


function fibsRec(n, fibSequence = [0, 1]) {
    console.log("This was printed recursively");
    if (fibSequence.length === n) return fibSequence.slice(0, n);
    fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    return fibsRec(n, fibSequence);
}
console.log("FIBONACCI RECURSIVE")
console.log(fibsRec(8))
console.log("\n\n")

let input = [3, 2, 1, 13, 8, 5, 0, 1]
let input2 = [105, 79, 100, 110]

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   function merge(left, right) {
//     const result = [];
//     while (left.length > 0 && right.length > 0) {
//       if (left[0] <= right[0]) {
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }
//     }
//     return result.concat(left).concat(right);
//   }

//   return merge(mergeSort(left), mergeSort(right));
// }

function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	function merge(left, right) {
		let subArr = [];
		while (left.length > 0 && right.length > 0) {
			if (left[0] <= right[0]) 
			{
				subArr.push(left.shift());
			} 
			else
			{
				subArr.push(right.shift());
			}
		}
		return subArr.concat(left).concat(right);
	}

	return merge(mergeSort(left), mergeSort(right));
}

console.log("MERGE SORT")
console.log(mergeSort(input))
console.log(mergeSort(input2))