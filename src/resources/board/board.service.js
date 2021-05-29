const boardsRepo = require('./board.memory.repository');
const tasksService = require('../task/task.memory.repository');

const getAll = () => boardsRepo.getAll();

const getById = (id) => boardsRepo.getById(id);

const create = (board) => boardsRepo.create(board);

const update = (id, board) => boardsRepo.update(id, board);

const remove = async (id) => {
  const status = await boardsRepo.remove(id);
  if (status) tasksService.removeAll(id);
  return status;
};

module.exports = { getAll, getById, create, remove, update };
