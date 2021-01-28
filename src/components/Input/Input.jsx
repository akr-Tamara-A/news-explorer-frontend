import './Input.css';
import React, { useState } from 'react';

/** Компонент инпут */
function Input({ 
  title, 
  isRequired,
  inputData,
  ...rest
}) {

  const [validationMessage, setValidationMessage] = useState('');

  /** Получение данных из инпута */
  const handleChange = (e) => {
    const {name, value, validity, validationMessage} = e.target;

    inputData(name, value, validity.valid);
    setValidationMessage(validationMessage);
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
        required={isRequired}
        onChange={handleChange}
        autoComplete="on"
      />
      <p className="label__message">
        {validationMessage}
      </p>
    </label>
  );
};

export default Input;