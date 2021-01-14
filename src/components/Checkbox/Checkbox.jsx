import './Checkbox.css';
import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import BookmarkIcon from '../Icons/BookmarkIcon';

/** Компонент чекбокс */
function Checkbox({ className, title }) {
  const currentUser = useContext(CurrentUserContext);

  const [isChecked, setIsChecked] = useState(false);

  const isLoggedIn = Object.keys(currentUser).length !== 0;

  function handleClick(evt) {
    const label = evt.currentTarget;
    const checkbox = label.querySelector('.checkbox__input');
    if(isLoggedIn) {
      checkbox.checked = !checkbox.checked;
      setIsChecked(checkbox.checked);
    }
    evt.preventDefault();
  }

  /** Разметка */
  return (
    <label
      className={`checkbox ${className}`}
      title={title}
      onClick={handleClick}
    >
      <input type="checkbox" className="checkbox__input" />
      <span className="checkbox__styled checkbox__styled_type_bookmark">
        <BookmarkIcon isChecked={isChecked} />
      </span>
      {!isLoggedIn 
        ? ( <div className="checkbox__tooltip">Войдите, чтобы сохранять статьи</div> ) 
        : null}
    </label>
  );
};

export default Checkbox;