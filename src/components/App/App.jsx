import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import SavedNewsPage from '../../pages/SavedNewsPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { api } from '../../utils/MainApi';
import ProtectedRoute from "../../hocs/ProtectedRoute";

/** Основной компонент */
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  /** Проверка токена при монтировании */
  useEffect(() => {
    tokenCheck();
  }, []);

  /** */
  const onLogin = () => {
    tokenCheck();
  }

    /** Проверка токена */
    const tokenCheck = () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        api
        .checkToken(jwt)
        .then((res) => {
          if (res.message) {
            setCurrentUser(null);
          } else {
            setCurrentUser(res);
          }
        })
        .catch((err) => {
          setCurrentUser(null);
        });
      } else {
        setCurrentUser(null);
      }
    };

    /** */
    const onSignOut = () => {
      localStorage.removeItem('jwt');
      localStorage.removeItem('articles');
      tokenCheck();
    };

  /** Разметка */
  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route exact path='/'>
              <MainPage onLogin={onLogin} onSignOut={onSignOut} />
            </Route>
            <ProtectedRoute currentUser={currentUser} path='/saved-news' to="/">
              <SavedNewsPage onSignOut={onSignOut} />
            </ProtectedRoute>
            <Route path='*'>
              <NotFoundPage onSignOut={onSignOut} />
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
};

export default App;
