const usersRepo = require('./user.memory.repository');
const taskService = require('../task/task.memory.repository');

/**
 * Call the getAll users method.
 */
const getAll = () => usersRepo.getAll();

/**
 * Call the get user method.
 * @param {string} - a user ID.
 */
const getById = (id) => usersRepo.getById(id);

/**
 * Call the get user method.
 * @param {User} - a create user.
 */
const create = (payload) => usersRepo.create(payload);

/**
 * Call the update user method.
 * @param {string} - a user ID.
 * @param {User} - a new user.
 */
const update = (id, body) => usersRepo.update(id, body);

/**
 * Call the remove user method.
 * @param {string} - a user ID.
 */
const remove = async (id) => {
  const status = usersRepo.remove(id);
  if (status) taskService.resetBoardAndUser(id);
  return status;
};

module.exports = { getAll, getById, create, update, remove };
