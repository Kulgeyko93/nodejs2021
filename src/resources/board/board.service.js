const boardsRepo = require('./board.memory.repository');
const tasksService = require('../task/task.memory.repository');

/**
 * Call the getAll board method.
 */
const getAll = () => boardsRepo.getAll();

/**
 * Call the get board by ID method.
 * @param {string} - a board ID.
 */
const getById = (id) => boardsRepo.getById(id);

/**
 * Call the create board method.
 * @param {Board} - a new Board.
 */
const create = (board) => boardsRepo.create(board);

/**
 * Call the update board method.
 * @param {string} - a board ID.
 * @param {Board} - a new board.
 */
const update = (id, board) => boardsRepo.update(id, board);

/**
 * Call the remove board method.
 * @param {string} - a board ID.
 */
const remove = async (id) => {
  const status = await boardsRepo.remove(id);
  if (status) tasksService.removeAll(id);
  return status;
};

module.exports = { getAll, getById, create, remove, update };
