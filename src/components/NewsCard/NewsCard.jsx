import './NewsCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import TrashIcon from '../Icons/TrashIcon';
import formateDate from '../../utils/formateDate';

/** Компонент */
function NewsCard({ cardData }) {
  const location = useLocation ();

  function handleOnClick() {
    console.log('Card was deleted');
  }

  /** Разметка */
  return (
    <a href={cardData.url} target="_blank" rel="noreferrer" className="card">
      <div className="card__header">
        <img src={cardData.urlToImage} alt={cardData.title} className="card__image"></img>
      </div>
      <div className="card__body">
        <p className="card__date">
          {formateDate('ru-RU', cardData.publishedAt)}
        </p>
        <div className="card__info" >
          <h3 className="card__title">
            {cardData.title}
          </h3>
          <p className="card__tagline">
            {cardData.description}
          </p>
        </div>
        <p className="card__source">
          {cardData.source.name}
        </p>
      </div>
      {
        (location.pathname === '/') 
          && <Checkbox className="card__button" />
      }
      {
        (location.pathname === '/saved-news') 
          && <Button type="text" mainStyle="card" title="Удалить" onClick={handleOnClick} >
              <TrashIcon />
              <div className="button__tooltip">Убрать из сохранённых</div>
            </Button>
      }
    </a>
  );
};

export default NewsCard;