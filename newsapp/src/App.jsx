import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NewsCard from './components/NewsCard';
import NewsDetail from './components/NewsDetail';
import Loader from './components/Loader';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [page, setPage] = useState(1); // State for page number
  const [hasMore, setHasMore] = useState(true); // State to check if more articles are available

  const find = async (pageNumber) => {
    setLoading(true);
    try {
      const pageSize = 6;
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-06-01&sortBy=publishedAt&pageSize=${pageSize}&page=${pageNumber}&apiKey=58f3c948d6064b4ebd9f81157145bbcc`;
      const response = await fetch(url);
      const value = await response.json();
      setArticles((prevArticles) => [...prevArticles, ...value.articles]);
      setHasMore(value.articles.length === pageSize); // Check if more articles are available
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    find(page);
  }, [page]);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={`app-container ${loading ? 'loading' : ''}`}>
      {loading && <Loader />}
      <NavBar />
      <div className="content">
        {selectedArticle ? (
          <NewsDetail article={selectedArticle} onBackClick={handleBackClick} />
        ) : (
          <>
            <div className="news-container">
              {error ? (
                <p>Error fetching data: {error.message}</p>
              ) : (
                articles.map((article, index) => (
                  <NewsCard
                    key={index}
                    title={article.title}
                    author={article.author}
                    description={article.description}
                    image={article.urlToImage}
                    url={article.url}
                    onClick={() => handleCardClick(article)}
                  />
                ))
              )}
            </div>
            <div className="load-more-container">
              {hasMore ? (
                <button
                  className="load-more-button"
                  onClick={handleLoadMore}
                  disabled={loading} // Disable button when loading
                >
                  Load More
                </button>
              ) : (
                <p>No more articles available.</p>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
