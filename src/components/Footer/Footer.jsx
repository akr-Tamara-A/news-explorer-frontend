import './Footer.css';
import React from 'react';
import GithubIcon from '../Icons/GithubIcon';
import FbIcon from '../Icons/FbIcon';
import NavLink from '../Links/NavLink';
import ExternalLink from '../Links/ExternalLink';

/** Компонент футер */
function Footer() {

  /** Разметка */
  return (
    <footer className="footer page__footer page__section">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__list footer__list_type_links">
          <li className="footer__item">
            <NavLink to="/" className="link__place_footer">
              Главная
            </NavLink>
          </li>
          <li className="footer__item">
            <ExternalLink href="https://praktikum.yandex.ru/" classNames="link__place_footer">
              Яндекс.Практикум
            </ExternalLink>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">
            <ExternalLink href="https://github.com/akr-Tamara-A" classNames="link__place_footer">
              <GithubIcon />
            </ExternalLink>
          </li>
          <li className="footer__item">
            <ExternalLink href="https://www.facebook.com/" classNames="link__place_footer">
              <FbIcon />
            </ExternalLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;