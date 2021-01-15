import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import SavedNewsPage from '../../pages/SavedNewsPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { userData } from "../../utils/userData";

/** Основной компонент */
function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(userData);
  }, [])

  /** Разметка */
  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
};

export default App;
