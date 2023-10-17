import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = ({ selectedDate }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'a', 
            from: selectedDate,
            to: selectedDate,
            apiKey: '3c8026e83a16421dbf606ed8e0c797cf',
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [selectedDate]);

  return (
    <div className="main-info">
      <h2 >Новини за {selectedDate}</h2>
      <ul>
        {news.map((article) => (
          <li key={article.title} className='list-item'>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;