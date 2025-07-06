import React from 'react';

const ContentItem = () => {
  return (
    <div>
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
    </div>
  )
}
export default ContentItem;