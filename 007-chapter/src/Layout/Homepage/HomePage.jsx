import React from 'react';
import HeaderItem from './components/Headeritem';
import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';

const HomePage = () => {
  return (
    <div  className="container col-3">
      <HeaderItem />
      <ContentItem />
      <FooterItem />
    </div>
  )
}
export default HomePage;