import './NewsCardList.css';
import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

/** Компонент */
function NewsCardList({ articles, ...rest }) {
  const [articlesAmount, setArticlesAmount] = useState(3);

  function showMoreArticles() {
    setArticlesAmount(articlesAmount + 3);
  }

  /** Разметка */
  return (
    <>
      <ul className="cardsist">
        { articles ? 
          articles.slice(0, articlesAmount).map((article, index) => {
            return (
              <NewsCard cardData={article} key={index} index={index} {...rest} />
            )
          })
          : null
        }
      </ul>
      {
        (articlesAmount < articles.length) 
        ? <Button 
            type="text" 
            mainStyle="more"
            onClick={() => showMoreArticles()}
          >
            Показать еще
          </Button>
        : null
      }
    </>
  );
};

export default NewsCardList;
