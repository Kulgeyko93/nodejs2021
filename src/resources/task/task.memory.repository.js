let taskData = [];

/**
 * Get all tasks from the Database.
 * @param {string} - a board id.
 * @returns {Task[]}
 */
const getAll = async (boardId) =>
  taskData.filter((item) => boardId === item.boardId);

/**
 * Get task by id from the Database.
 * @param {string} - a board id.
 * @param {string} - a task id.
 * @returns {Task}
 */
const getById = async (boardId, id) => {
  const task = taskData.find(
    (item) => id === item.id && boardId === item.boardId
  );
  return task;
};

/**
 * Get task by id from the Database.
 * @param {string} - a task id.
 * @returns {Task}
 */
const create = async (task) => {
  taskData.push(task);
  return task;
};

/**
 * Update the board by ID.
 * @param {string} - a board ID.
 * @param {string} - a task id.
 * @param {Task} - a update board.
 * @returns {Task}
 */
const update = async (boardId, id, body) => {
  taskData.forEach((item, index) => {
    if (item.id === id && boardId === item.boardId) {
      taskData[index].title = body.title;
      taskData[index].order = body.order;
      taskData[index].description = body.description;
      taskData[index].userId = body.userId;
      taskData[index].boardId = body.boardId;
      taskData[index].columnId = body.columnId;
    }
  });
  return getById(boardId, id);
};

/**
 * Remove a task by ID.
 * @param {string} - a board ID.
 * @param {string} - a task id.
 * @returns {Task} - deleted task
 */
const remove = async (boardId, id) => {
  const taskIndex = taskData.findIndex(
    (item) => item.id === id && boardId === item.boardId
  );
  taskData.splice(taskIndex, 1);
  return taskIndex;
};

/**
 * Remove a task by ID.
 * @param {string} - a board ID.
 * @returns {Task[]} -a deleted task
 */
const removeAll = async (boardId) => {
  taskData = taskData.filter((item) => boardId !== item.boardId);
  return taskData;
};

/**
 * Remove a task by ID.
 * @param {string} - a user id.
 * @returns {Task[]} -a deleted task
 */
const resetBoardAndUser = (userId) => {
  taskData.forEach((item) => {
    const theItem = item;
    if (item.userId === userId) {
      theItem.userId = null;
    }
  });
  return taskData;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeAll,
  resetBoardAndUser,
};
