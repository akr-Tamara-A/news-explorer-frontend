import './SavedNewsHeader.css';
import React, { useEffect, useState, useContext } from 'react';
import { savedCardsData } from '../../utils/savedData';
import { toUpperCase } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/** Компонент */
function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);

  const data = savedCardsData;
  const newsAmount = data.length;

  const [usedKeywords, setUsedKeywords] = useState([]);
  const [isKeywords, setIsKeywords] = useState(false);
  
  useEffect(() => {
      createTemplate();
  }, [data]);

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

    if (keywordsAmount > 0) {
      setIsKeywords(true);
    } else {
      setIsKeywords(false);
    }

    if (keywordsAmount > 0 && keywordsAmount <= 3) {
      sortedKeywordsArr.forEach((keyword) => {
        keywordsArr.push(keyword[0]);
      })
    }

    if (keywordsAmount > 3) {
      sortedKeywordsArr.slice(0, 2).forEach((keyword) => {
        keywordsArr.push(keyword[0]);
      });
      keywordsArr.push(`${keywordsAmount - 2}-м другим`);
    }
    return keywordsArr;
  };

  /** Подсчет количества уникальных слов-ключей */
  const calcKeywords = () => {
    const keywordsArr = [];

    data.forEach((card) => {
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

  /** Разметка */
  return (
    <section className="savedNewsHeader page__section">
      <p className="savedNewsHeader__title">
        Сохранённые статьи
      </p>
      <p className="savedNewsHeader__message">
        {`${currentUser.name}, у вас ${newsAmount} сохранённых статей`}
      </p>
    </section>
  );
};

export default SavedNewsHeader;
