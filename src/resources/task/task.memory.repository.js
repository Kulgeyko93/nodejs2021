let taskData = [];

const getAll = async (boardId) =>
  taskData.filter((item) => boardId === item.boardId);

const getById = async (boardId, id) => {
  const task = taskData.find(
    (item) => id === item.id && boardId === item.boardId
  );
  return task;
};

const create = async (task) => {
  taskData.push(task);
  return task;
};

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

const remove = async (boardId, id) => {
  const taskIndex = taskData.findIndex(
    (item) => item.id === id && boardId === item.boardId
  );
  taskData.splice(taskIndex, 1);
  return taskIndex;
};

const removeAll = async (boardId) => {
  taskData = taskData.filter((item) => boardId !== item.boardId);
  return taskData;
};

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
