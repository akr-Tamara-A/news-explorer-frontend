import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import SearchResults from '../components/SearchResults/SearchResults';
import NewsCardList from '../components/NewsCardList/NewsCardList';
import Navbar from '../components/Navbar/Navbar';
import SearchForm from '../components/SearchForm/SearchForm';
import Popup from '../components/Popup/Popup';
import LoginForm from '../components/Forms/LoginForm';
import RegisterForm from '../components/Forms/RegisterForm';
import Button from '../components/Button/Button';
import Preloader from '../components/Preloader/Preloader';
import NotFoundIcon from '../components/Icons/NotFoundIcon';

import { api } from '../utils/MainApi';
import { newsApi } from '../utils/NewsApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

/** Основной компонент */
function MainPage({ onLogin, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popupOpened, setPopupOpened] = useState({
    login: false,
    register: false,
    message: false,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [loginSubmitError, setLoginSubmitError] = useState('');
  const [registerSubmitError, setRegisterSubmitError] = useState('');

  const [state, setState] = useState({
    data: null,
    isFetching: false,
    error: null,
  });

  useEffect(() => {
    if (currentUser) {
      const articles = localStorage.getItem('articles');
      if (articles) {
        setArticles(JSON.parse(articles));
      }
    }
  }, [currentUser]);

  /** Закрытие попапа */
  function handleOnClose() {
    setIsPopupOpened(false);
    setPopupOpened({
      login: false,
      register: false,
      message: false,
    })
  };

  /** Открытие попапа  */
  function handlePopupOpen() {
    setIsPopupOpened(true);
    handleOpenLogin();
  };

  /** Открытие попапа регистрации */
  function handleOpenRegister() {
    setPopupOpened({
      login: false,
      register: true,
      message: false,
    })
  }
  
  /** Открытие попапа логина */
  function handleOpenLogin() {
    setPopupOpened({
      login: true,
      register: false,
      message: false,
    })
  }

  /** Обработка логина */
  function handleOnLogin({ email, password }) {
    setIsFetching(true);
    api
      .authorize(email, password)
      .then((res) => {
        if(res.token) {
          localStorage.setItem('jwt', res.token);
          handleOnClose();
          onLogin();
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        let errorMessage = err.message;

        if (err.validation) {
          errorMessage = err.validation.body.message;
        }

        setLoginSubmitError(errorMessage);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }

  /** Обработка регистрации */
  function handleOnRegister({ email, password, name }) {
    setIsFetching(true);
    api
      .register(email, password, name)
      .then((res) => {
        if(res.message) {
          return Promise.reject(res);
        } else {
          setPopupOpened({
            login: false,
            register: false,
            message: true,
          })
        }
      })
      .catch((err) => {
        let errorMessage = err.message;

        if (err.validation) {
          errorMessage = err.validation.body.message;
        }

        setRegisterSubmitError(errorMessage);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }

  /** */
  const handleSearchSubmit = (keyword) => {
    setState({
      data: [],
      isFetching: true,
      error: null,
    })
    newsApi
      .getArticles(keyword)
      .then((res) => {
        const articles = res.articles.map((article) => {
          return {
            title: article.title,
            text: article.description,
            date: article.publishedAt,
            source: article.source.name,
            image: article.urlToImage,
            link: article.url,
            keyword: keyword,
          }
        });
        setArticles(articles);
        localStorage.setItem('articles', JSON.stringify(articles));
      })
      .catch((err) => {
        setState({
          data: [],
          isFetching: false,
          error: err.validation.body.message,
        })
      })
  };

  /** */
  const setArticles = (articles) => {
    setState({
      data: articles,
      isFetching: false,
      error: null,
    });
  }

  /** */
  const handleSaveArticle = (article, index) => {
    api
      .postNewCard(article)
      .then((res) => {
        if(res.message) {
          return Promise.reject(res);
        } else {
          const articles = state.data;
          articles[index]._id = res._id;

          setArticles(articles);
          localStorage.setItem('articles', JSON.stringify(articles));
        }
      })
      .catch((err) => {
        let errorMessage = err.message;

        if (err.validation) {
          errorMessage = err.validation.body.message;
        }
        console.log(errorMessage);
      })
  };

  /** */
  const handleDeleteArticle = (article, index) => {
    api
      .deleteCard(article._id)
      .then((res) => {
        if(res.message) {
          return Promise.reject(res);
        } else {
          const articles = state.data;
          delete articles[index]._id;

          setArticles(articles);
          localStorage.setItem('articles', JSON.stringify(articles));
        }
      })
      .catch((err) => {
        let errorMessage = err.message;

        if (err.validation) {
          errorMessage = err.validation.body.message;
        }
        console.log(errorMessage);
      })
  };

  /** Основная разметка */
  return (
    <>
      <Header theme="dark">
        <Navbar
          theme="dark"
          onLoginClick={handlePopupOpen}
          onSignOutClick={onSignOut}
        />
        <SearchForm onSubmit={handleSearchSubmit} />

        <Popup isPopupOpened={isPopupOpened} onClose={handleOnClose}>
          {popupOpened.login ? (
            <>
              <h3 className="popup__title">Вход</h3>
              <LoginForm
                openRegister={handleOpenRegister}
                onSubmit={handleOnLogin}
                isFetching={isFetching}
                submitError={loginSubmitError}
              />
            </>
          ) : null}

          {popupOpened.register ? (
            <>
              <h3 className="popup__title">Регистрация</h3>
              <RegisterForm
                openLogin={handleOpenLogin}
                onSubmit={handleOnRegister}
                isFetching={isFetching}
                submitError={registerSubmitError}
              />
            </>
          ) : null}

          {popupOpened.message ? (
            <>
              <h3 className="popup__title">
                Пользователь успешно зарегистрирован!
              </h3>
              <Button type="text" mainStyle="link" onClick={handleOpenLogin} autoFocus='autoFocus' >
                Войти
              </Button>
            </>
          ) : null}
        </Popup>
      </Header>

      <Main>
        {state.data && (
          <SearchResults>

            {/** Пока идет запрос */}
            {state.isFetching && (
              <Preloader />
            )}

            {/** По запросу ничего не найдено */}
            {!state.isFetching && !state.error && (state.data.length === 0) && (
              <>
                <NotFoundIcon />
                <div className="searchResults__result">
                  <p className="searchResults__answer">Ничего не найдено</p>
                  <p className="searchResults__clarification">
                    К сожалению по вашему запросу ничего не найдено.
                  </p>
                </div>
              </>
            )}

            {/** Вывод статей */}
            {!state.isFetching && !state.error && state.data.length !== 0 && (
              <>
                <p className="searchResults__text">Результаты поиска</p>
                <NewsCardList 
                  articles={state.data} 
                  openLogin={handlePopupOpen} 
                  addArticle={handleSaveArticle}
                  deleteArticle={handleDeleteArticle}
                />
              </>
            )}

            {/** При ошибке */}
            { state.error && (
              <>
                <NotFoundIcon />
                <div className="searchResults__result">
                  <p className="searchResults__answer">
                    Во время запроса произошла ошибка
                  </p>
                  <p className="searchResults__clarification">
                    Возможно, проблема с соединением или сервер недоступен.
                    Подождите немного и попробуйте ещё раз.
                  </p>
                </div>
              </>
            )}
          </SearchResults>
        )}
        <About />
      </Main>

      <Footer />
    </>
  );
};

export default MainPage;
