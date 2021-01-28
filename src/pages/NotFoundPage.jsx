import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import NotFound from '../components/NotFound/NotFound';

/** Основной компонент */
function NotFoundPage({ onSignOut }) {
  /** Основная разметка */
  return (
    <>
      <Header theme="light">
        <Navbar theme="light" onSignOutClick={onSignOut}  />
      </Header>

      <Main>
        <NotFound />
      </Main>

      <Footer />
    </>
  );
};

export default NotFoundPage;