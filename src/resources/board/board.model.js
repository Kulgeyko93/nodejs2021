// const uuid = require('uuid');

class Board {
  /**
   * Create a board.
   * @param {object} - board
   * @param {string} - board.id
   * @param {string} - board.title
   * @param {Column[]} - board.columns
   */
  constructor({
    id = Date.now().toString(),
    /**
     * @property {string} - an ID.
     */
    title = 'default',
    /**
     * @property {string} - an title.
     */
    columns = ['default'],
    /**
     * @property {Array[string]} - columns.
     */
  } = {}) {
    this.id = id;
    this.title = title;
    if (columns.length > 0) {
      this.columns = columns.map((column) => ({
        id: (Date.now() + 2).toString(),
        ...column,
      }));
    } else {
      this.columns = [];
    }
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
