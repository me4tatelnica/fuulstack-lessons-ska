import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const value = "Карточки с мишками";

const date = new Date().getFullYear();

root.render(
  <div className="container col-3">
    <h1 className="h1-style">{value}</h1>

    {Array.from({ length: 5 }, (_, index) => (
      <div className="card">
        <img
          src={`https://placebear.com/${200 + index}/100`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
        </div>
      </div>
    ))}

    <p>
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Фабрики - рабочим,
      земля - крестьянам, пиво - мне!
    </p>
    <p>{date} год</p>
  </div>
);







