import './Form.css';
import React from 'react';
import Form from './Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

/** Компонент формы логина */
function LoginForm({ openRegister, onSubmit }) {
  function handleOnClick() {
    openRegister();
  }

  function handleOnSubmit(e) {
    onSubmit();
  }

  /** Разметка */
  return (
    <>
      <Form 
        submitText="Войти"
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
      </Form>
      <p className="popup__text">или&nbsp;
        <Button
          type="text"
          mainStyle="link"
          onClick={handleOnClick}
        >
          Зарегистрироваться
        </Button>
      </p>
    </>
  );
};

export default LoginForm;