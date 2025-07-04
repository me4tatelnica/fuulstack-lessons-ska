import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const value = "Мои увлечения";
const firstName = "Марина";
const lastName = "В.";
// const items = ["Музыка", "Кино", "Книги", "Диван"]

const getRandom = () => {
  return Math.floor(Math.random() * 10);
}
const date = new Date().getFullYear();

root.render(
  <div>
    <h1 className="h1-style">{value}</h1>
    <h2 className="h2-style">
      {firstName} {lastName}
    </h2>
    <ul>
      {
        // Если есть массив, то:
        // items.map(item => (<li>{item}</li>))

        // Если нет массива:
        Array.from({ length: 5 }, (_, index) => (
          <li key={index}>{`Элемент ${
            getRandom() % 2 === 0 ? "EVEN" : "ODD"
          }`}</li>
        ))
      }
    </ul>
    <p>
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Фабрики - рабочим,
      земля - крестьянам, пиво - мне!
    </p>
    <p>{date} год</p>
  </div>
);


// // Создать h1
// const h1Element = document.createElement("h1");
// // В h1 добавить текст
// h1Element.innerText="Hello world";
// // Взять элемент root
// const root = document.getElementById("root");
// root.appendChild(h1Element);





