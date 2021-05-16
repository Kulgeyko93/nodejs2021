const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = (payload) => usersRepo.create(payload);

const update = (id, body) => usersRepo.update(id, body);

const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };
