import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const value = "Мои увлечения";
const firstName = "Марина";
const lastName = "В.";
const items = ["Музыка", "Кино", "Книги"]

const date = new Date().getFullYear();

root.render(
  <div>
    <h1>{value}</h1>
    <h2>
      {firstName} {lastName}
    </h2>
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
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





