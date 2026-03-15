// function Sort(array) {
//     let n = array.length;
    
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//             }
//         }
//     }
//     return array;
// }

// let array = [4, 1, 3, 9,"12", 7];
// console.log(Sort(array)); 



let arr = [4, 1, 3,"2", "12","hello", 9, 7];

arr.sort((a, b) => a - b);

console.log(arr);