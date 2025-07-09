import React from 'react';

const ContentItem =(props) => {
  return (
    <div>
    {props.setOfLabels.map((item, index) => (
      <div key={item.id} className="card">
        <img
          src={`https://placebear.com/${200 + index}/100`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.title.slice(0, 30)}</h5>
          <p className="card-text">{item.body.slice(0, 70)}</p>
        </div>
      </div>
    ))}
    </div>
  )
}
export default ContentItem;