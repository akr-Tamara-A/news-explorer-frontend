import './Button.css';
import React from 'react';

/** Компонент кнопка */
function Button({ 
  className, 
  mainStyle, 
  subSubstyle, 
  type, 
  id, 
  children, 
  onClick, 
  ...rest 
}) {
  let buttonClassName = 'button';

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  if (mainStyle) {
    buttonClassName = `${buttonClassName} button_style_${mainStyle}`;
  }

  if (subSubstyle) {
    buttonClassName = `${buttonClassName} button_style_${subSubstyle}`;
  }

  function handleClick() {
    onClick();
  }

  /** Разметка */
  return (
    <button 
      className={buttonClassName} 
      type={type} 
      id={id ? id : null}
      onClick={(type !== 'submit') ? handleClick : null}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;