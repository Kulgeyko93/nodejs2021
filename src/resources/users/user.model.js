// const uuid = require('uuid');

class User {
  constructor({
    id = Date.now().toString(),
    name = 'test',
    login = 'test@mail.ru',
    password = '1q2er23r',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
