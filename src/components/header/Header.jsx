import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <h5>{t('Hello, I am')}</h5>
        <h1>Herberth Andrade</h1>
        <h5 className="text-light">{t('Full Stack Developer')}</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="srcoll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
