const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const validate = require('../middleware/validate.middleware');
const { createUserSchema, updateUserSchema } = require('../validators/user.validator');

router.post('/', validate(createUserSchema), controller.create);
router.get('/', controller.list);
router.get('/:id', controller.getOne);
router.put('/:id', validate(updateUserSchema), controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
