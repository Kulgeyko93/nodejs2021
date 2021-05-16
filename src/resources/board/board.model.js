// const uuid = require('uuid');

class Board {
  constructor({ id = Date.now().toString(), title, columns = [] } = {}) {
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
