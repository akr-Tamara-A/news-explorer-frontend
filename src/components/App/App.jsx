import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/Main/Main';
import SavedNewsPage from '../../pages/SavedNews/SavedNews';
import NotFoundPage from '../../pages/NotFound/NotFound';
import './App.css';

/** Основной компонент */
function App() {

  /** Основная разметка */
  return (
    <>
      <div className="page__container">
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/saved-news'>
            <SavedNewsPage />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
