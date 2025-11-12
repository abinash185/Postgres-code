const userRepo = require('../repositories/user.repository');

const createUser = async (payload) => {
  // any additional business checks can go here (e.g., duplicate checks; repo handles unique violation)
  return userRepo.createUser(payload);
};

const listUsers = async () => {
  return userRepo.getAllUsers();
};

const getUser = async (id) => {
  return userRepo.getUserById(id);
};

const updateUser = async (id, payload) => {
  return userRepo.updateUser(id, payload);
};

const removeUser = async (id) => {
  return userRepo.deleteUser(id);
};

module.exports = {
  createUser,
  listUsers,
  getUser,
  updateUser,
  removeUser
};
