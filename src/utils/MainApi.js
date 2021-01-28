const BASE_URL = 'https://api.news-akr.students.nomoredomains.work';
// const BASE_URL = 'http://localhost:3000';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  /** Запрос регистрации пользователя */
  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => res.json())
  };

  /** Запрос авторизации пользователя */
  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
  };

  /** Проверка токена */
  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => res.json())
  };  
  
  /** получить данные пользователя (GET) */
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this.getHeaders() })
      .then((res) => res.json())
  }

  /** получить список всех карточек в виде массива (GET) */
  getCards() {
    return fetch(`${this._baseUrl}/articles`, { headers: this.getHeaders() })
      .then((res) => res.json())
  }

  /** добавить карточку (POST) */
  postNewCard(articleData) {
    return fetch(`${this._baseUrl}/articles`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(articleData),
    })
      .then((res) => res.json())
  }

  /** удалить карточку (DELETE) */
  deleteCard(articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    })
      .then((res) => res.json())
  }

  getHeaders () {
    const token = getToken();

    return {
      ...this.headers,
      'Authorization': `Bearer ${token}`,
    }
  }
}

/** Связь с сервером */
export const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});


const getToken = () => {
  return localStorage.getItem('jwt');
}