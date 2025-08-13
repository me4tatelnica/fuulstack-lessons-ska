function calculateTip() {
  // Сохраним входные данные
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  // Проверка на адекватность
  if (billAmount === "") {
    window.alert("Пожалуйста, введите несколько значений, чтобы запустить это приложение!"
    );
    return; // это предотвратит продолжение работы функции
  }

  // Проверка не является ли этот ввод пустым или меньшим или равным 1
  if (numPeople === "" || numPeople < 1) {
    alert("Обманывать нехорошо!")
  }


  // Считаем
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  // Отображаем итог
  document.getElementById("each").style.display = "block";
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total; // новое значение в виде строки
}



// Скрыть сумму чаевых при загрузке
document.getElementById("totalTip"). style.display ="none";
document.getElementById("each"). style.display = "none";

// Нажатие на кнопку вызывает функцию рассчета
document.getElementById("calculate").onclick= function(){calculateTip();};

