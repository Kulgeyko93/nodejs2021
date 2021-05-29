const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  if (!users) {
    return res.status(404).send('User not found');
  }
  return res.status(200).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).end('User not found');
  }
  const user = await usersService.getById(id);

  if (!user) {
    res.status(404).end('User not found');
  }
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { login, password, name } = await req.body;

  const user = await usersService.create(
    new User({
      login,
      password,
      name,
    })
  );
  return res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const user = await usersService.update(id, body);

  if (!user) {
    return res.status(404).send('User not found');
  }
  return res.status(200).send(user);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;

  const removeStatus = await usersService.remove(id);

  if (!removeStatus) {
    return res.status(404).send('User not found');
  }
  return res.status(200).send(`Remove user`);
});

module.exports = router;
