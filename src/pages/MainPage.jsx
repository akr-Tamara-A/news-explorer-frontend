import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import SearchResults from '../components/SearchResults/SearchResults';
import NewsCardList from '../components/NewsCardList/NewsCardList';
import NotFoundData from '../components/NotFoundData/NotFoundData';
import Navbar from '../components/Navbar/Navbar';
import SearchForm from '../components/SearchForm/SearchForm';
import Popup from '../components/Popup/Popup';
import LoginForm from '../components/Forms/LoginForm';
import RegisterForm from '../components/Forms/RegisterForm';
import Button from '../components/Button/Button';

import { cardsData } from '../utils/data';

/** Основной компонент */
function MainPage() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popup, setPopup] = useState({
    login: false,
    register: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  function handleOnClose() {
    setIsPopupOpened(false);
    setPopup({
      login: false,
      register: false,
      message: false,
    })
  };

  function handlePopupOpen() {
    setIsPopupOpened(true);
    setPopup({
      login: true,
      register: false,
      message: false,
    })
  };

  function handleSignOut() {
    console.log('a');
  };

  function handleOpenRegister() {
    setPopup({
      login: false,
      register: true,
      message: false,
    })
  }
  
  function handleOpenLogin() {
    setPopup({
      login: true,
      register: false,
      message: false,
    })
  }

  function handleOnLogin() {
    handleOnClose();
  }

  function handleOnRegister() {
    setPopup({
      login: false,
      register: false,
      message: true,
    })
  }

  /** Основная разметка */
  return (
    <>
      <Header theme="dark">
        <Navbar 
          theme="dark" 
          onLoginClick={handlePopupOpen} 
          onSignOutClick={handleSignOut} 
        />
        <SearchForm />

        {/* Памятка! Для открытия попапа - в App убрать currentUser */}

        <Popup isPopupOpened={isPopupOpened} onClose={handleOnClose}>
          {popup.login 
            ? (
              <>
                <h3 className="popup__title">Вход</h3>
                <LoginForm openRegister={handleOpenRegister} onSubmit={handleOnLogin} />
              </>
            ) 
            : null}

          {popup.register ? (
            <>
              <h3 className="popup__title">Регистрация</h3>
              <RegisterForm openLogin={handleOpenLogin} onSubmit={handleOnRegister}/>
            </>
          ) : null}

          {popup.message ? (
            <>
              <h3 className="popup__title">
                Пользователь успешно зарегистрирован!
              </h3>
              <Button type="text" mainStyle="link" onClick={handleOpenLogin} >
                Войти
              </Button>
            </>
          ) : null}
        </Popup>
      </Header>

      <Main>
        <SearchResults isLoading={isLoading} >
          {cards.length === 0 
            ? <NotFoundData /> 
            : (
              <>
                <p className="searchResults__text">Результаты поиска</p>
                <NewsCardList cards={cards} />
              </>
            )
          }
        </SearchResults>
        <About />
      </Main>

      <Footer />

    </>
  );
};

export default MainPage;