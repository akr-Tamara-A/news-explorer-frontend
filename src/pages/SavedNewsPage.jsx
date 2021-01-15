import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import SavedNewsHeader from '../components/SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../components/NewsCardList/NewsCardList';
import SearchResults from '../components/SearchResults/SearchResults';

import { savedCardsData } from '../utils/savedData';

/** Основной компонент */
function SavedNewsPage() {

  /** Основная разметка */
  return (
    <>
      <Header theme="light">
        <Navbar theme="light" />
        <SavedNewsHeader />
      </Header>

      <Main>
      <SearchResults>
        <NewsCardList cards={savedCardsData} />
      </SearchResults>
      </Main>

      <Footer />
    </>
  );
};

export default SavedNewsPage;