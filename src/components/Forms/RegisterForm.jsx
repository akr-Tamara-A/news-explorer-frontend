import './Form.css';
import React, { useEffect, useState } from 'react';
import Form from './Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { checkFormValidity } from '../../utils/utils';

/** Компонент формы регистрации */
function RegisterForm({ openLogin, onSubmit, isFetching, submitError }) {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [validityData, setValidityData] = useState({
    email: false,
    password: false,
    name: false,
  });

  const [formValidity, setFormValidity] = useState(false);

  useEffect(() => {
    const validity = checkFormValidity(validityData);
    setFormValidity(validity);
  }, [validityData]);
  
  function handleOnClick() {
    openLogin();
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit(registerData);
  }

    /** Получение данных из инпутов */
    const getInputData = (name, value, validity) => {
      setRegisterData({
        ...registerData,
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
        submitText="Зарегистрироваться"
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
        <Input
            title="Имя"
            name="name"
            message="Faaa afaf"
            isRequired={true}
            placeholder="Введите своё имя"
            type="text"
            minLength="2"
            maxLength="30"
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
          Войти
        </Button>
      </p>
    </>
  );
};

export default RegisterForm;