export default function formateDate(locale, dateICO) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateICO);

  const localeDate = date.toLocaleString(locale, options);
  const dateArray = localeDate.split(' ');
  const formatedDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;

  return formatedDate
}

