import React from 'react';

const NewsDetail = ({ article, onBackClick }) => {
  //after clicking bews card
  return (
    <div className="news-detail">
      <button className="back-button" onClick={onBackClick}>Back</button>
      <h2 className="news-detail-title">{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} className="news-detail-image" />
      <p className="news-detail-author">By {article.author}</p>
      <p className="news-detail-description">{article.description}</p>
      <p className="news-detail-content">{article.content}</p>
      <a href={article.url} className="news-detail-link" target="_blank" rel="noopener noreferrer">Read more on the original site</a>
    </div>
  );
};

export default NewsDetail;
