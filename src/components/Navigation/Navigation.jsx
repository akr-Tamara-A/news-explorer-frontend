import React, { useContext } from 'react';
import './Navigation.css';
import Button from '../Button/Button';
import NavbarLink from '../Links/NavLink';
import LogoutIcon from '../Icons/LogoutIcon';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/** Компонент */
function Navigation({ onLoginClick, isOpened, onSignOutClick }) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    currentUser 
      ? onSignOutClick()
      : onLoginClick();
  }

  /** Разметка */
  return (
    <nav className={`header__nav nav ${!isOpened && "nav_hidden"}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavbarLink to="/" className="link__place_header">
            Главная
          </NavbarLink>
        </li>
        {currentUser && (
          <li className="nav_item">
            <NavbarLink to="/saved-news" className="link__place_header">
              Сохраненные статьи
            </NavbarLink>
          </li>
        )}
      </ul>
      
      <Button 
        className="header__button" 
        mainStyle="header"
        onClick={handleClick}
      >
        {currentUser ? (
          <>
            {currentUser.name}
            <LogoutIcon />
          </>
          ) : "Авторизоваться"}
      </Button>  
    </nav>
  );
};

export default Navigation;