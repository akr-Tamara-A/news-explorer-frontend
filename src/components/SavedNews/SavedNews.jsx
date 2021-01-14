import './SavedNews.css';
import React from 'react';

/** Компонент */
function SavedNews(props) {

  /** Разметка */
  return (
    <section className="savedNews page__section">
      {props.children}
    </section>
  );
};

export default SavedNews;