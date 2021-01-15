import './SearchResults.css';
import React from 'react';
import Preloader from '../Preloader/Preloader';

/** Компонент */
function SearchResults({ isLoading, children }) {

  /** Разметка */
  return (
    <section className="searchResults page__section">
      {
        isLoading 
          ? <Preloader />
          : children
      }
    </section>
  );
};

export default SearchResults;