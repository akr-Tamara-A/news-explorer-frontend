/** */
export const toUpperCase = (string) => {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
};

/** Форматирование даты */
export function formateDate(locale, dateICO) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateICO);

  const localeDate = date.toLocaleString(locale, options);
  const dateArray = localeDate.split(' ');
  const formatedDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;

  return formatedDate;
};

/** */
export function classNamesJoin(basicClass, addedClasses) {
  let resultClass = basicClass;

  if (addedClasses.length !== 0) {
      resultClass += ' ' + addedClasses;
  }

  return resultClass;
};

/** */
export function checkFormValidity(validityData) {
  let result = 0;

  for(let item in validityData) {
    result += Number(!validityData[item]);
  }

  if (result === 0) {
    return true;
  } else {
    return false;
  }
};
