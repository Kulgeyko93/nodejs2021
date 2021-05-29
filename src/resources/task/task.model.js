// const uuid = require('uuid');

class Task {
  /**
   * Create a task.
   * @param {object} - task
   * @param {string} - task.id
   * @param {string} - task.title
   * @param {string} - task.order
   * @param {string} - description
   * @param {string} - userId
   * @param {string} - boardId
   * @param {string} - columnId
   */
  constructor({
    id = Date.now().toString(),
    /**
     * @property {string} - an ID.
     */
    title,
    /**
     * @property {string} - an title.
     */
    order,
    /**
     * @property {string} - an order.
     */
    description,
    /**
     * @property {string} - an description.
     */
    userId,
    /**
     * @property {string} - an userId.
     */
    boardId,
    /**
     * @property {string} - an boardId.
     */
    columnId,
    /**
     * @property {string} - an columnId.
     */
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
