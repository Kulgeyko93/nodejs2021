const tasksRepo = require('./task.memory.repository');

/**
 * Call the getAll task method.
 * @param {string} - a board ID.
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * Call the get task method.
 * @param {string} - a board ID.
 * @param {string} - a task ID.
 */
const getById = (boardId, id) => tasksRepo.getById(boardId, id);

/**
 * Call the create task method.
 * @param {Task}  - a new task.
 */
const create = (payload) => tasksRepo.create(payload);

/**
 * Call the create task method.
 * @param {string} - a board id.
 * @param {string} - a task id.
 * @param {Task} - a update task.
 */
const update = (boardId, id, body) => tasksRepo.update(boardId, id, body);

/**
 * Call the remove task method.
 * @param {string} - a board id.
 * @param {string} - a task id..
 */
const remove = (boardId, id) => tasksRepo.remove(id);

/**
 * Call the removeTasksInBoard task method.
 * @param {string} - a board ID.
 */
const removeTasksInBoard = (boardId) => tasksRepo.removeAll(boardId);

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeTasksInBoard,
};
