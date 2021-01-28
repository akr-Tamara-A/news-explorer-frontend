import './Link.css';
import React from 'react';
import { classNamesJoin } from '../../utils/utils';

/** Компонент ссылка на внешний ресурс */
function ExternalLink({ href, children, classNames }) {
  const resultClassName = classNamesJoin('link', classNames)

  /** Разметка */
  return (
    <a href={href} className={resultClassName}>
      {children}
    </a>
  );
};

export default ExternalLink;