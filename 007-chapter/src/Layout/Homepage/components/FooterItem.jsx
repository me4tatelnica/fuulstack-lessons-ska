import React from 'react';

const date = new Date().getFullYear();
const FooterItem = () => {
  return (
    <div>
      <p>
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Фабрики - рабочим,
      земля - крестьянам, пиво - мне!
      </p>
      <p>{date} год</p>
    </div>
  )
}
export default FooterItem;