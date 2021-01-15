import './Link.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

/** Компонент ссылка навигации */
function NavbarLink({ to, className, children }) {

  /** Разметка */
  return (
      <NavLink exact to={to} className={`link ${className}`}  activeClassName="link_active">
        {children}
      </NavLink>
  );
};

export default NavbarLink;