const boardsData = [];

/**
 * Get all boards from the Database.
 * @returns {Board[]}
 */
const getAll = async () => boardsData;

/**
 * Get board by id from the Database.
 * @param {string} - a board id.
 * @returns {Board}
 */
const getById = async (id) => {
  const board = boardsData.find((item) => id === item.id);
  return board;
};

/**
 * Save the new board to the Database.
 * @param {Board} - A new board.
 * @returns {Board}
 */
const create = async (board) => {
  boardsData.push(board);
  return board;
};

/**
 * Update the board by ID.
 * @param {string} - a board ID.
 * @param {Board} - a update board.
 * @returns {Board}
 */
const update = async (id, board) => {
  boardsData.forEach((item, index) => {
    if (item.id === id) {
      boardsData[index].title = board.title;
      boardsData[index].columns = board.columns;
    }
  });
  return getById(id);
};

/**
 * Remove a board by ID.
 * @param {string} - a board ID.
 * @returns {Board} - deleted board
 */
const remove = async (id) => {
  const board = boardsData.findIndex((item) => item.id === id);
  boardsData.splice(board, 1);
  return board;
};

module.exports = { getAll, getById, create, remove, update };
