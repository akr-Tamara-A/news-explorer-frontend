import './Button.css';
import React from 'react';

/** Компонент кнопка */
function Button(props) {
  let className = 'button';

  if (props.className) {
    className = `${className} ${props.className}`;
  }

  if (props.mainStyle) {
    className = `${className} button_style_${props.mainStyle}`;
  }

  if (props.subSubstyle) {
    className = `${className} button_style_${props.subSubstyle}`;
  }

  function handleClick() {
    props.onClick();
  }

  /** Разметка */
  return (
    <button 
      type={props.type} 
      className={className} 
      title={props.title} 
      disabled={props.disabled} 
      id={props.id ? props.id : null}
      onClick={(props.type !== 'submit') ? handleClick : null}
    >
      {props.children}
    </button>
  );
};

export default Button;