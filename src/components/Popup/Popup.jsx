import './Popup.css';
import React from 'react';
import Button from '../Button/Button';
import CloseIcon from '../Icons/CloseIcon';

/** Компонент */
function Popup({ children, isPopupOpened, onClose, title }) {
  
  const handleClosePopup = () => {
    onClose();
  };

  /** Разметка */
  return (
    <div className={`popup ${isPopupOpened && "popup_opened"}`}>
      <div className="popup__container" >
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