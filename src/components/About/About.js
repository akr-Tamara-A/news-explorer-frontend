import './About.css';
import React from 'react';
import AvatarUrl from '../../images/about__avatar.jpg'

/** Компонент про автора */
function About() {
  
  /** Разметка */
  return (
    <section className="about page__section">
      <img src={AvatarUrl} className="about__avatar" alt="Avatar" />
      <div className="about__wraper">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__paragraph">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__paragraph">
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
        <p className="about__paragraph">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__paragraph">
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
};

export default About;