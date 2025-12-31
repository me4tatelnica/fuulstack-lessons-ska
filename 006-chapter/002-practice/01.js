let billAmount = Number.parseFloat(prompt("Введите сумму счета: "));
let tips = parseFloat(prompt("Введите процент чаевых: "));
let quantity = Number.parseInt(prompt("Введите количество человек: "));

// Если не число или некорректное число
if (
  isNaN(billAmount) ||
  isNaN(tips) ||
  isNaN(quantity) ||
  billAmount <= 0 ||
  tips < 0 ||
  quantity <= 0
) {
  alert("Ошибка ввода данных");
} else {
  let tipAmount = (1000 * tips) / 100;
  let totalAmount = billAmount + tipAmount;
  let perPersonAmount = totalAmount / quantity;

  alert("Общий счёт: " + totalAmount);
  alert("Процент чаевых: " + String(tips) + "%");
  alert(`С каждого: ${perPersonAmount}`);
}