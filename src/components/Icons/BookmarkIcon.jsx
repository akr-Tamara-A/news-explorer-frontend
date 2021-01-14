import React from 'react';

/** Компонент иконка "Отметка" */
function BookmarkIcon ({ isChecked }) {

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="white" />
      <path
        d="M19.3822 23.7137L14 27.9425V12L26 12V27.9425L20.6178 23.7137L20 23.2283L19.3822 23.7137Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19.3822 23.7137L14 27.9425V12L26 12V27.9425L20.6178 23.7137L20 23.2283L19.3822 23.7137Z"
        fill={isChecked ? "currentColor" : "transparent"}
      />
    </svg>
  );
}

export default BookmarkIcon;