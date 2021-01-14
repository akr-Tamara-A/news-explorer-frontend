import './Input.css';
import React from 'react';

/** Компонент инпут */
function Input({ 
  title, 
  message,
  isRequired,
  ...rest
}) {

  function handleOnChange(e) {
    // console.log(e.target.value);
  }

  /** Разметка */
  return (
    <label className="label">
      <p className="label__title">
        {title}
      </p>
      <input 
        className="label__input"
        {...rest}
        required="isRequired"
        onChange={handleOnChange}
      />
      <p className="label__message">
        {message}
      </p>
    </label>
  );
};

export default Input;