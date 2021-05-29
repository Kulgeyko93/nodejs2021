const boardsData = [];

const getAll = async () => boardsData;

const getById = async (id) => {
  const board = boardsData.find((item) => id === item.id);
  return board;
};

const create = async (board) => {
  boardsData.push(board);
  return board;
};

const update = async (id, board) => {
  boardsData.forEach((item, index) => {
    if (item.id === id) {
      boardsData[index].title = board.title;
      boardsData[index].columns = board.columns;
    }
  });
  return getById(id);
};

const remove = async (id) => {
  const board = boardsData.findIndex((item) => item.id === id);
  boardsData.splice(board, 1);
  return board;
};

module.exports = { getAll, getById, create, remove, update };
