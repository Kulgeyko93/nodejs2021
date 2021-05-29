// const uuid = require('uuid');

class User {
  constructor({
    /**
     * Create a user
     * @param {object} - user
     * @param {string} - user.id
     * @param {string} - user.name
     * @param {string} - user.password
     */
    id = Date.now().toString(),
    /**
     * @property {string} - an ID.
     */
    name = 'test',
    /**
     * @property {string} - an name.
     */
    login = 'test@mail.ru',
    /**
     * @property {string} - an login.
     */
    password = '1q2er23r',
    /**
     * @property {string} - an password.
     */
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
