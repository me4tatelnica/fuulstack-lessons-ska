import React, {useState, useEffect} from 'react';
import axios from "axios";
import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';
import HeaderItem from './components/Headeritem';

// 1. Нашли сервис, который отдает данные
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const HomePage = () => {
  const value = "Карточки с мишками";
  const [labels, setLabels] = useState (
    [
      // {id: 1, cardTitle: "Медведь 1", cardText: "Описание бурого, а может и не бурого"},
      // {id: 1, cardTitle: "Медведь 2", cardText: "Описание бурого, а может и не бурого"},
      // {id: 1, cardTitle: "Медведь 3", cardText: "Описание бурого, а может и не бурого"},
      // {id: 1, cardTitle: "Медведь 4", cardText: "Описание бурого, а может и не бурого"},
      // {id: 1, cardTitle: "Медведь 5", cardText: "Описание бурого, а может и не бурого"},
      // {id: 1, cardTitle: "Медведь 6", cardText: "Описание бурого, а может и не бурого"},
    ]
  )


  useEffect(() => {
    // 2. Сделали запрос к этому сервису на получение данных
    axios.get(baseUrl)
      // 3. Обработали полученные данные
      .then(res => {
        const temp = [];
        // 3.1 Обратились к data, где содержатся все элементы
        //     выдернули 5 элементов, прошлись по ним,
        //     создали новый массив const temp = [],
        //     в который будут складываться эти элементы
        res.data.slice(0, 5).forEach(
          // У данных, которые мы получили есть свойства:
          //    userId
          //    id
          //    title
          //    body
          // Мы взяли то, что нам нужно
          item => {
            temp.push(
              {
                id: item.id,
                cardTitle: item.title.slice(0, 30),
                cardText: item.body.slice(0, 70)
              }
            )
          }
        );
        setLabels(temp);
      })
  })

  return (
    <div  className="container col-3">

      <HeaderItem headerText = {value}/>
      <ContentItem
        setOfLabels = {labels}
      />
      <FooterItem />
    </div>
  )
}
export default HomePage;