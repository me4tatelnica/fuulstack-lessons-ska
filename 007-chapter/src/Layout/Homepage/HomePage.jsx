import React, {useState, useEffect} from 'react';
import axios from "axios";
import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';
import HeaderItem from './components/Headeritem';

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const HomePage = () => {
  const value = "Карточки с мишками";
  const labels = [
    {id: 1, cardTitle: "Медведь 1", cardText: "Описание бурого, а может и не бурого"},
    {id: 1, cardTitle: "Медведь 2", cardText: "Описание бурого, а может и не бурого"},
    {id: 1, cardTitle: "Медведь 3", cardText: "Описание бурого, а может и не бурого"},
    {id: 1, cardTitle: "Медведь 4", cardText: "Описание бурого, а может и не бурого"},
    {id: 1, cardTitle: "Медведь 5", cardText: "Описание бурого, а может и не бурого"},
    {id: 1, cardTitle: "Медведь 6", cardText: "Описание бурого, а может и не бурого"},
  ]

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        console.log(res);
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