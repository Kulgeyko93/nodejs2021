const usersData = [];

const getAll = async () => usersData;

const getById = async (id) => {
  const user = usersData.find((item) => id === item.id);
  return user;
};

const create = async (user) => {
  usersData.push(user);
  return user;
};

const update = async (id, body) => {
  usersData.forEach((item, index) => {
    if (item.id === id) {
      usersData[index].name = body.name;
      usersData[index].login = body.login;
      usersData[index].password = body.password;
    }
  });
  return getById(id);
};

const remove = async (id) => {
  const userIndex = usersData.findIndex((item) => item.id === id);
  usersData.splice(userIndex, 1);
  return null;
};

module.exports = { getAll, getById, create, update, remove };
