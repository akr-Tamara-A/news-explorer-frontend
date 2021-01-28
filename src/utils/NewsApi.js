const BASE_URL = 'https://newsapi.org/v2';
// const BASE_URL = 'https://nomoreparties.co/news/v2';

const apiKey = '6a315e19ec514924b6d7e53224140884';

class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._endpoint = options.endpoint;
    this._interval = options.interval;
    this._pageSize = options.pageSize;
    this._apiKey = options.apiKey;
    this._today = new Date();
    this._formatedToday = this._getTodayDate();
    this._formatedPrev = this._getPrevDate();
  }

  /** */
  getArticles(keyword) {
    return fetch(`${this._baseUrl}/${this._endpoint}?q=${keyword}&from=${this._formatedPrev}&to=${this._formatedToday}&pageSize=${this._pageSize}&apiKey=${this._apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }

  /** */
  _getTodayDate() {
    const date = this._today;
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  /** */
  _getPrevDate() {
    const date = this._today;
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - +(this._interval)}`
  }

};

export const newsApi = new NewsApi({
  baseUrl: BASE_URL,
  endpoint: 'everything',
  interval: 7,
  pageSize: 100,
  apiKey: apiKey,
});
