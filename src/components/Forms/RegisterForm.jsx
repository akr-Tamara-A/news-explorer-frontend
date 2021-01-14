import './Form.css';
import React from 'react';
import Form from './Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

/** Компонент формы регистрации */
function RegisterForm({ openLogin, onSubmit }) {
  
  function handleOnClick() {
    openLogin();
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  /** Разметка */
  return (
    <>
      <Form 
        submitText="Зарегистрироваться"
        // disabled={true}
        className="form__submit"
        onSubmit={handleOnSubmit}
      >
        <Input
            title="Email"
            message="message"
            isRequired={true}
            placeholder="Введите почту"
            type="email"
        />
        <Input
            title="Пароль"
            message=""
            isRequired={true}
            placeholder="Введите пароль"
            type="password"
        />
        <Input
            title="Имя"
            message="Faaa afaf"
            isRequired={true}
            placeholder="Введите своё имя"
            type="text"
            minLength="2"
            maxLength="30"
        />
      </Form>
      <p className="popup__text">или&nbsp;
        <Button
          type="text"
          mainStyle="link"
          onClick={handleOnClick}
        >
          Войти
        </Button>
      </p>
    </>
  );
};

export default RegisterForm;