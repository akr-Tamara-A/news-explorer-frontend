import './SearchForm.css';
import React, { useState } from 'react';
import Button from '../Button/Button';

/** Компонент поиска новостей */
function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  }

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  /** Разметка */
  return (
    <section className="search page__section">
      <h1 className="search__title">
        Что творится в мире?
      </h1>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </p>
      <form className="search__field" onSubmit={handleSubmit}>
        <label className="search__label">
          <input 
            type="text" 
            className="search__input" 
            placeholder="Введите тему новости" 
            required 
            onChange={handleChange} 
          />
        </label>
        <Button type="submit" mainStyle="submit" subSubstyle="search" className="search__submit">
          Искать
        </Button>
      </form>
    </section>
  );
};

export default SearchForm;