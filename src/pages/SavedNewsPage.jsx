import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import SavedNewsHeader from '../components/SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../components/NewsCardList/NewsCardList';
import SearchResults from '../components/SearchResults/SearchResults';
import { api } from '../utils/MainApi';

/** Основной компонент */
function SavedNewsPage({ onSignOut }) {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    getSavedArticles();
  }, []);

  /** */
  const getSavedArticles = () => {
    api
      .getCards()
      .then((res) => {
        if(res.message) {
          return Promise.reject(res);
        } else {
          setSavedArticles(res.reverse());
        }
      })
      .catch((err) => {
        let errorMessage = err.message;

        if (err.validation) {
          errorMessage = err.validation.body.message;
        }
        console.log(errorMessage);
      })
  };
  
  /** */
  const handleDeleteArticle = (article, index) => {
    api
      .deleteCard(article._id)
      .then((res) => {
        if(res.message) {
          return Promise.reject(res);
        } else {
          getSavedArticles();
          uncheckArticleInSearch(article);
        }
      })
      .catch((err) => {
        let errorMessage = err.message;

        if (err.validation) {
          errorMessage = err.validation.body.message;
        }
        console.log(err);
      })
  };

  /** */
  const uncheckArticleInSearch = (article) => {
    const articles = JSON.parse(localStorage.getItem('articles'));

    let index = -1;
    for (let item of articles) {
      if (item._id && (item._id === article._id)) {
        index = articles.indexOf(item);
      }
    }

    if (index !== -1) {
      delete articles[index]._id;
      localStorage.setItem('articles', JSON.stringify(articles));
    }
  }

  /** Основная разметка */
  return (
    <>
      <Header theme="light">
        <Navbar theme="light" onSignOutClick={onSignOut}  />
        <SavedNewsHeader articles={savedArticles} />
      </Header>

      <Main>
      <SearchResults>
        <NewsCardList articles={savedArticles} deleteArticle={handleDeleteArticle} />
      </SearchResults>
      </Main>

      <Footer />
    </>
  );
};

export default SavedNewsPage;