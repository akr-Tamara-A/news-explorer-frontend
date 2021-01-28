import './NewsCard.css';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import BookmarkIcon from '../Icons/BookmarkIcon';
import TrashIcon from '../Icons/TrashIcon';
import { formateDate, toUpperCase } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/** Компонент */
function NewsCard({ cardData, index, openLogin, addArticle, deleteArticle }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation ();
  
  function handleCheck() {
    !cardData._id 
      ? handleAddArticle()
      : handleDeleteArticle()
  }

  function handleAddArticle() {
    addArticle(cardData, index);
  }

  function handleDeleteArticle() {
    deleteArticle(cardData, index);
  }

  function handleOpenLogin() {
    openLogin();
  }

  /** Разметка */
  return (
    <div className="card">
      <a href={cardData.link} target="_blank" rel="noreferrer" className="card__link">
        <div className="card__header">
          <img src={cardData.image} alt={cardData.title} className="card__image"></img>
        </div>
        <div className="card__body">
          <p className="card__date">
            {formateDate('ru-RU', cardData.date)}
          </p>
          <div className="card__info" >
            <h3 className="card__title">
              {cardData.title}
            </h3>
            <p className="card__tagline">
              {cardData.text}
            </p>
          </div>
          <p className="card__source">
            {cardData.source}
          </p>
        </div>
      </a>
        {(location.pathname === '/') && !currentUser && (
          <Button 
            type="text" 
            mainStyle="card" 
            title="Войти" 
            onClick={handleOpenLogin} 
          >
            <BookmarkIcon />
            <div className="button__tooltip">Войдите, чтобы сохранять статьи</div>
          </Button>
        )}

        {(location.pathname === '/') && currentUser && (
          <Button 
            type="text" 
            mainStyle="card" 
            subSubstyle={cardData._id && "checked"} 
            title="Войти" 
            onClick={handleCheck}
          >
            <BookmarkIcon isChecked={!!cardData._id} />
          </Button>
        )}

        {(location.pathname === '/saved-news') && (
          <>
            <Button 
              type="text" 
              mainStyle="card" 
              title="Удалить" 
              onClick={handleDeleteArticle} 
            >
              <TrashIcon />
              <div className="button__tooltip">Убрать из сохранённых</div>
            </Button>

            <span className="card__keyword">
              {toUpperCase(cardData.keyword)}
            </span>
          </>
        )}
    </div>
  );
};

export default NewsCard;