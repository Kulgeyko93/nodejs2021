const usersData = [];

/**
 * Get all users from the Database.
 * @returns {User[]}
 */
const getAll = async () => usersData;

/**
 * Get user from the Database.
 * @param {string} - a user id.
 * @returns {User}
 */
const getById = async (id) => {
  const user = usersData.find((item) => id === item.id);
  return user;
};

/**
 * Create new user from the Database.
 * @param {User} - a new user.
 * @returns {User}
 */
const create = async (user) => {
  usersData.push(user);
  return user;
};

/**
 * Update user from the Database.
 * @param {string} - a user id.
 * @param {User} - a update user.
 * @returns {User}
 */
const update = async (id, body) => {
  usersData.forEach((item, index) => {
    if (item.id === id) {
      usersData[index].name = body.name;
      usersData[index].login = body.login;
      usersData[index].password = body.password;
    }
  });
  return getById(id);
};

/**
 * Remove user from the Database.
 * @param {string} - a user id.
 * @returns {string} - removed user
 */
const remove = async (id) => {
  const userIndex = usersData.findIndex((item) => item.id === id);
  usersData.splice(userIndex, 1);
  return 'removed user';
};

module.exports = { getAll, getById, create, update, remove };
