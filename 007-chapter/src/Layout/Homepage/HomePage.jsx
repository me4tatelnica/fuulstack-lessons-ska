import React from 'react';

import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';
import HeaderItem from './components/Headeritem';

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