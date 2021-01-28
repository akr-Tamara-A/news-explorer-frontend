import './Form.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { checkFormValidity } from '../../utils/utils';

/** Компонент формы логина */
function LoginForm({ openRegister, onSubmit, isFetching, submitError }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [validityData, setValidityData] = useState({
    email: false,
    password: false,
  });

  const [formValidity, setFormValidity] = useState(false);

  useEffect(() => {
    const validity = checkFormValidity(validityData);
    setFormValidity(validity);
  }, [validityData]);
  

  function handleOnClick() {
    openRegister();
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit(loginData);
  }

  /** Получение данных из инпутов */
    const getInputData = (name, value, validity) => {
      setLoginData({
        ...loginData,
        [name]: value,
      });

      setValidityData({
        ...validityData,
        [name]: validity,
      });
    };

  /** Разметка */
  return (
    <>
      <Form 
        submitText="Войти"
        disabled={!formValidity}
        className="form__submit"
        onSubmit={handleOnSubmit}
        submitError={submitError}
      >
        <Input
            title="Email"
            name="email"
            message="message"
            isRequired={true}
            placeholder="Введите почту"
            type="email"
            inputData={getInputData}
            disabled={isFetching}
        />
        <Input
            title="Пароль"
            name="password"
            message=""
            isRequired={true}
            placeholder="Введите пароль"
            type="password"
            inputData={getInputData}
            disabled={isFetching}
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