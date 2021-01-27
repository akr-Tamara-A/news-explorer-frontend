import React from 'react';
import NotFoundIcon from '../Icons/NotFoundIcon';

/** Компонент */
function NotFoundData() {

  /** Разметка */
  return (
    <>
    <NotFoundIcon />
      <div className="searchResults__result" >
        <p className="searchResults__answer">
          Ничего не найдено
        </p>
        <p className="searchResults__clarification">
          К сожалению по вашему запросу ничего не найдено.
        </p>
    </div>
    </>
  );
};

export default NotFoundData;