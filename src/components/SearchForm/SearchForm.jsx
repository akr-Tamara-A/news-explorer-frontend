import './SearchForm.css';
import React from 'react';
import Button from '../Button/Button';

/** Компонент поиска новостей */
function SearchForm() {

  /** Разметка */
  return (
    <section className="search page__section">
      <h1 className="search__title">
        Что творится в мире?
      </h1>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </p>
      <form className="search__field">
        <label className="search__label">
          <input type="text" className="search__input" placeholder="Введите тему новости"></input>
        </label>
        <Button type="text" mainStyle="submit" subSubstyle="search" className="search__submit">
          Искать
        </Button>
      </form>
    </section>
  );
};

export default SearchForm;