import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import NotFound from '../components/NotFound/NotFound';

/** Основной компонент */
function NotFoundPage() {

  /** Основная разметка */
  return (
    <>
      <Header theme="light">
        <Navbar theme="light" />
      </Header>

      <Main>
        <NotFound />
      </Main>

      <Footer />
    </>
  );
};

export default NotFoundPage;