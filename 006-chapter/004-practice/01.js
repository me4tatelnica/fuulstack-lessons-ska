let score = 0;
let question = "Какая самая длинная река в мире? [Нил, Амазонка]";
let answer = prompt(question).toLowerCase;

if (answer === "Нил") {
  score = score + 10;
  alert("Умница!");
} else if (answer === "Амазонка") {
  alert("Бегом в школу");
} else {
  alert("Не балуйся");
}

question = "Кто нарисовал Мону Лизу? [Леонардо да Винчи, Леонардо да Каприо]";
answer = prompt(question).toLowerCase;

if (answer === "Леонардо да Винчи") {
  score = score + 10;
  alert("Умница!");
} else if (answer === "Леонардо да Каприо") {
  alert("Бегом в школу");
} else {
  alert("Не балуйся");
}

alert("Счёт: " + score)



