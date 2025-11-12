const userService = require('../services/user.service');

const create = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({ success: true, data: user });
  } catch (err) {
    // let error middleware format it
    next(err);
  }
};

const list = async (req, res, next) => {
  try {
    const users = await userService.listUsers();
    return res.json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.getUser(id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    return res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await userService.updateUser(id, req.body);
    if (!updated) return res.status(404).json({ success: false, message: 'User not found' });
    return res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await userService.removeUser(id);
    if (!deleted) return res.status(404).json({ success: false, message: 'User not found' });
    return res.json({ success: true, data: deleted });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, list, getOne, update, remove };
