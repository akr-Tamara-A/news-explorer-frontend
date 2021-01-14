import './Header.css';
import React from 'react';

/** Компонент шапка */
function Header({ theme, children }) {

  /** Разметка */
  return (
    <header className={`header page__header header_theme_${theme}`}>
      {children}
    </header>
  );
};

export default Header;