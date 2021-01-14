import './Navbar.css';
import React, { useState } from 'react';
import Button from '../Button/Button';
import CloseIcon from '../Icons/CloseIcon';
import MenuIcon from '../Icons/MenuIcon';
import Navigation from '../Navigation/Navigation';
import NavbarLink from '../Links/NavLink';

/** Компонент  */
function Navbar({ theme, onLoginClick, onSignOutClick }) {

  const [isOpened, setIsOpened] = useState(false);

  function handleCloseNavbar() {
    setIsOpened(false);
  }

  function handleOpenNavbar() {
    setIsOpened(true);
  }

  /** Разметка */
  return (
    <div className={`navbar page__section navbar__theme_${theme} ${isOpened && 'navbar_bg'}`}>
      <div className="navbar__wrapper">
        <NavbarLink to="/" className="link__place_brand">
          NewsExplorer
        </NavbarLink>
        <div className="header__navbar">
          {isOpened 
            ? <Button 
              type="icon" 
              mainStyle="ux" 
              subSubstyle="nav"
              title="Закрыть меню" 
              id="closeNav"
              onClick={handleCloseNavbar}
              >            
                <CloseIcon />
              </Button>
            :  <Button 
                type="icon" 
                mainStyle="ux" 
                subSubstyle="nav"
                title="Открыть меню" 
                id="openNav"
                onClick={handleOpenNavbar}
              >
                <MenuIcon />
              </Button>
          }
          <Navigation 
            onLoginClick={onLoginClick} 
            onSignOutClick={onSignOutClick} 
            isOpened={isOpened} 
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;