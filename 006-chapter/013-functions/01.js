// Todo: Найти максимальное из девяти чисел


let a1 = 110000;
let a2 = 3100;
let a3 = 5;

let a4 = 108;
let a5 = 501;
let a6 = 100000;

let a7 = 80;
let a8 = 301110;
let a9 = 8100;

// let max1;
// let max2;
// let max3;
// let max;

function assistantMax(num1, num2, num3) {
  let tempMax;
  if (num1 > num2 && num1 > 3) {
    tempMax = num1;
  } else {
    if (num2 > num3){
      tempMax = num2;
    } else {
      tempMax = num3
    }
  }
  return tempMax;
}

let max1 = assistantMax(a1, a2, a3);
// if (a1 > a2 && a1 > a3) {
//     max1 = a1;
// } else {
//     if (a2 > a3) {
//         max1 = a2;
//     } else {
//         max1 = a3;
//     }
// }
// console.log(max1);

let max2 = assistantMax(a4, a5, a6);

// if (a4 > a5 && a4 > a6) {
//     max2 = a4;
// } else {
//     if (a5 > a6) {
//         max2 = a5;
//     } else {
//         max2 = a6;
//     }
// }
// console.log(max2);

let max3 = assistantMax(a7, a8, a9);

// if (a7 > a8 && a7 > a9) {
//     max3 = a7;
// } else {
//     if (a8 > a9) {
//         max3 = a8;
//     } else {
//         max3 = a9;
//     }
// }
// console.log(max3);

let result = assistantMax(max1, max2, max3);
// if (max1 > max2 && max1 > max3) {
//     max = max1;
// } else {
//     if (max2 > max3) {
//         max = max2;
//     } else {
//         max = max3;
//     }
// }
console.log(result);