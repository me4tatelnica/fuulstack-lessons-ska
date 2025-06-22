let quantity = 4;
let tips = 10;
let foodBill = 1000;

let tipsProcent = (foodBill * tips) / 100;
let totalBill = foodBill + (foodBill * tips) / 100;
let res = totalBill / quantity;

alert(`Чаевые - ${tipsProcent} рублей`);
alert(`Общий счет - ${totalBill} рублей`);
alert(`Каждый заплатит по ${res} рублей`);

