import React from 'react';
import NavbarLink from '../Links/NavLink';
import './NotFound.css';

/** Компонент */
function NotFound() {

  /** Разметка */
  return (
    <div className="notFound page__section">
      <p className="searchResults__answer">
        404. Страница не найдена
      </p>
      <p className="searchResults__clarification">
        Возможно, она была перемещена, или вы неверно указали адрес страницы.
      </p>
      <NavbarLink to="/" className="link__place_notFound">
        Перейти на главную
      </NavbarLink>
    </div>
  );
};

export default NotFound;