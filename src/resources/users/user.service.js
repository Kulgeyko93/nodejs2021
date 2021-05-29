const usersRepo = require('./user.memory.repository');
const taskService = require('../task/task.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = (payload) => usersRepo.create(payload);

const update = (id, body) => usersRepo.update(id, body);

const remove = async (id) => {
  const status = usersRepo.remove(id);
  if (status) taskService.resetBoardAndUser(id);
  return status;
};

module.exports = { getAll, getById, create, update, remove };
