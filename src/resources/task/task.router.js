const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId);

  if (!tasks) {
    return res.status(404).send('Not Found');
  }
  // res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(tasks);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  const { boardId, id } = req.params;

  const task = await tasksService.getById(boardId, id);

  if (!task) {
    return res.status(404).end('Not Found');
  }

  return res.status(200).send(task);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const { boardId } = req.params;
  const { title, order, description, userId, columnId } = await req.body;

  const task = await tasksService.create(
    new Task({
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    })
  );
  res.setHeader('Content-Type', 'application/json');
  return res.status(201).json(task);
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const { boardId, id } = req.params;
  const { body } = req;

  const task = await tasksService.update(boardId, id, body);
  res.setHeader('Content-Type', 'application/json');
  if (!task) {
    return res.status(404).send('User not found');
  }
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(task);
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  const { boardId, id } = req.params;

  const removeStatus = await tasksService.remove(boardId, id);

  if (!removeStatus) {
    return res.status(404).send('User not found');
  }
  return res.status(204).send(`Remove task`);
});

module.exports = router;
