import './SavedNewsHeader.css';
import React, { useEffect, useContext } from 'react';
import { toUpperCase } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/** Компонент */
function SavedNewsHeader({ articles }) {
  const currentUser = useContext(CurrentUserContext);
  const newsAmount = articles.length;
  
  useEffect(() => {
      createTemplate();
  }, [articles]);

  /** Создание шаблона/ов для вставки в вёрстку */
  const createTemplate = () => {
    const usedKeywords = createKeywordsArr();
    const savedNewsHeader = document.querySelector('.savedNewsHeader');

    if (usedKeywords.length > 0) {
      savedNewsHeader.insertAdjacentHTML('beforeend', `<p class="savedNewsHeader__keywords"></p>`);
      const p = savedNewsHeader.querySelector('.savedNewsHeader__keywords');

      if (usedKeywords.length === 1) {
        p.innerHTML = `По ключевым словам: <b>${toUpperCase(usedKeywords[0])}</b>`;
      }
      if (usedKeywords.length === 2) {
        p.innerHTML = `По ключевым словам: <b>${toUpperCase(usedKeywords[0])} и <b>${toUpperCase(usedKeywords[1])}</b>`
      }
      if (usedKeywords.length >= 3) {
        p.innerHTML = `По ключевым словам: <b>${toUpperCase(usedKeywords[0])}</b>, 
                      <b>${toUpperCase(usedKeywords[1])}</b> и <b>${toUpperCase(usedKeywords[2])}</b>`;
      }
    }  
  };

  /** Создание вспомогательного массива слов-ключей для вставки в вёрстку */
  const createKeywordsArr = () => {
    const notSortedKeywordsArr = calcKeywords();
    const sortedKeywordsArr = sortKeywords(notSortedKeywordsArr);
    const keywordsAmount = sortedKeywordsArr.length;
    const keywordsArr = [];

    if (keywordsAmount > 0 && keywordsAmount <= 3) {
      sortedKeywordsArr.forEach((keyword) => {
        keywordsArr.push(keyword[0]);
      })
    }

    if (keywordsAmount === 4) {
      sortedKeywordsArr.slice(0, 2).forEach((keyword) => {
        keywordsArr.push(keyword[0]);
      });
      keywordsArr.push(`${keywordsAmount - 3}-м другом`);
    }

    if (keywordsAmount > 4) {
      sortedKeywordsArr.slice(0, 2).forEach((keyword) => {
        keywordsArr.push(keyword[0]);
      });
      keywordsArr.push(`${keywordsAmount - 3}-м другим`);
    }
    return keywordsArr;
  };

  /** Подсчет количества уникальных слов-ключей */
  const calcKeywords = () => {
    const keywordsArr = [];

    articles.forEach((card) => {
      if (keywordsArr.length === 0) {
        keywordsArr[0] = [];
        keywordsArr[0][0] = card.keyword.toLowerCase();
        keywordsArr[0][1] = 1;
      } else {
        const itemIndex = keywordsArr.findIndex((item) => {
          return item[0] === card.keyword.toLowerCase();
        });

        if (itemIndex >= 0 ) {
          keywordsArr[itemIndex][1]++;
        } else {
          keywordsArr.push([card.keyword.toLowerCase(), 1]);
        }
      }
    });
    return keywordsArr;
  };

  /** Сортировка слов-ключей по убыванию */
  const sortKeywords = (arr) => {
    return arr.sort((arrA, arrB) => arrB[1] - arrA[1]);
  };

  /**  */
  const declination = (number) => {
    number = String(number);
    const lastDigit = +number[number.length - 1];

    let string = "сохраненных статей"

    if ((lastDigit === 1) && (lastDigit !== 11)) {
      string = "сохраненная статья"
    }

    if (((lastDigit === 2) && (lastDigit !== 12)) ||
        ((lastDigit === 3) && (lastDigit !== 13)) ||
        ((lastDigit === 4) && (lastDigit !== 14))) {
      string = "сохраненные статьи"
    }
    return string;
  }

  /** Разметка */
  return (
    <section className="savedNewsHeader page__section">
      <p className="savedNewsHeader__title">
        Сохранённые статьи
      </p>
      <p className="savedNewsHeader__message">
        {`${currentUser.name}, у вас ${newsAmount} ${declination(newsAmount)}`}
      </p>
    </section>
  );
};

export default SavedNewsHeader;
