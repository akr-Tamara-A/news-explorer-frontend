import './NewsCardList.css';
import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

/** Компонент */
function NewsCardList({ cards }) {
  const [cardsAmount, setCardsAmount] = useState(3);

  function showMoreCards() {
    setCardsAmount(cardsAmount + 3);
  }

  /** Разметка */
  return (
    <>
      <ul className="cardsist">
        { cards ? 
          cards.slice(0, cardsAmount).map(card => {
            return (
              <NewsCard cardData={card} key={`${card.source.name}${card.title}`} />
            )
          })
          : null
        }
      </ul>
      {
        (cardsAmount < cards.length) 
        ? <Button 
            type="text" 
            mainStyle="more"
            onClick={() => showMoreCards()}
          >
            Показать еще
          </Button>
        : null
      }
    </>
  );
};

export default NewsCardList;
