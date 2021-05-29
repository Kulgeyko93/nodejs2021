const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  if (!boards) {
    return res.status(404).send('Boards not found');
  }
  return res.status(200).send(boards);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).end('Bad request');
  }
  const board = await boardsService.getById(id);

  if (!board) {
    res.status(404).end('Bad request, user not created');
  }
  return res.status(200).send(board);
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const board = await boardsService.create(
    new Board({
      title,
      columns,
    })
  );
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const board = await boardsService.update(id, body);

  if (!board) {
    return res.status(404).send('User not found');
  }
  return res.status(200).send(board);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const removeStatus = await boardsService.remove(id);

  if (!removeStatus) {
    return res.status(404).send('User not found');
  }
  return res.status(204).send(`Remove board`);
});

module.exports = router;
