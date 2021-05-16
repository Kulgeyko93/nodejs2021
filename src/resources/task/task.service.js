const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getById = (boardId, id) => tasksRepo.getById(boardId, id);

const create = (payload) => tasksRepo.create(payload);

const update = (boardId, id, body) => tasksRepo.update(boardId, id, body);

const remove = (boardId, id) => tasksRepo.remove(id);

const removeTasksInBoard = (boardId) => tasksRepo.removeAll(boardId);

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeTasksInBoard,
};
