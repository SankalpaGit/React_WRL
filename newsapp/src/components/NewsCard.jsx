import React from 'react';

const NewsCard = ({ title, author, description, image, url, onClick }) => {
  //ui of the card
  return (
    <div className="news-card" onClick={onClick}>
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h2 className="news-card-title">{title}</h2>
        <p className="news-card-author">{author}</p>
        <p className="news-card-description">{description}</p>
        <a href={url} className="news-card-link" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
