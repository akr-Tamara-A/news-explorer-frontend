import React from 'react';
import './Main.css';

/** Компонент */
function Main(props) {

  /** Основная разметка */
  return (
    <main className="main page__main">
      {props.children}
    </main>
  );
};

export default Main;