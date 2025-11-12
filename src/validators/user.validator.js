const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().max(150).required(),
  email: Joi.string().email().max(255).required()
});

const updateUserSchema = Joi.object({
  name: Joi.string().max(150).required(),
  email: Joi.string().email().max(255).required()
});

module.exports = { createUserSchema, updateUserSchema };
