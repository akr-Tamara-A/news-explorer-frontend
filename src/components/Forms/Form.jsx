import './Form.css';
import React from 'react';
import Button from '../Button/Button';

/** Компонент формы */
function Form({
  subSubstyle,
  className,
  submitText,
  children,
  disabled,
  onSubmit,
  submitError
}) {
  
  /** Разметка */
  return (
    <form className="form" action="#" onSubmit={onSubmit} noValidate>
      {children}

      <p className="form__message">
        {submitError && submitError}
      </p>
      <Button
        type="submit"
        mainStyle="submit"
        subSubstyle={subSubstyle}
        className={className}
        disabled={disabled}
      >
        {submitText}
      </Button>
    </form>
  );
};

export default Form;