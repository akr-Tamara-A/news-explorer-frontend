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
  onSubmit
}) {
  
  /** Разметка */
  return (
    <form className="form" action="#" onSubmit={onSubmit}>
      {children}

      <p className="form__message">
        Sefa fesbe bsese
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