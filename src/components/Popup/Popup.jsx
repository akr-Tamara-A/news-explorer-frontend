import './Popup.css';
import React, { useEffect } from 'react';
import Button from '../Button/Button';
import CloseIcon from '../Icons/CloseIcon';

/** Компонент */
function Popup({ children, isPopupOpened, onClose }) {
  
  const handleClosePopup = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isPopupOpened]);

  const handleEsc = (e) => {
    if (e.key !== 'Escape') return;
    onClose();
  }

  /** Разметка */
  return (
    <div 
      className={`popup ${isPopupOpened && "popup_opened"}`}
      tabIndex={`${isPopupOpened ? '0' : '-1'}`}
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div 
        className="popup__container" 
      >
        <Button 
          mainStyle="ux" 
          subSubstyle="popup" 
          title="Закрыть" 
          id="closePopup" 
          onClick={handleClosePopup} 
        >
          <CloseIcon />
        </Button>

        {children}
        
      </div>
    </div>
  );
};

export default Popup;