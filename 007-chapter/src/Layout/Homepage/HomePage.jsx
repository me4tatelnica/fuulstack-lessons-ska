import React from 'react';

import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';
import HeaderItem from './components/Headeritem';

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