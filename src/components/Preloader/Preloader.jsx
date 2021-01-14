import './Preloader.css';
import React from 'react';

/** Компонент */
function Preloader() {

  /** Разметка */
  return (
    <>
      <div className="circle-preloader" />
      <div className="searchResults__result" >
        <p className="searchResults__clarification">
          Идет поиск новостей...
        </p>
      </div>
    </>
  );
};

export default Preloader;