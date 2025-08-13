function newNameBtnClick() {
  // В переменную tb кладем элемент, полученный из html документа
  const tb = document.getElementById("textBox");
    tb.value = `Привет, ${tb.value}!`;
}
// В переменную btn кладем элемент, полученный из html документа
const btn = document.getElementById("btnAction");

btn.addEventListener("click", newNameBtnClick);