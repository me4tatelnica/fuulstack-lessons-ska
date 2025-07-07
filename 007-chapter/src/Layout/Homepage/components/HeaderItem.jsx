import React from 'react';

const HeaderItem = (props) => {
  return (
    <div>
      <h1 className="h1-style">{props.headerText}</h1>
    </div>
  )
}
export default HeaderItem;