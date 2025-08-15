const express = require('express');
const UserController = require('../controllers/user.controller.js');

const userController = new UserController();
const router = express.Router();

router.post('/', userController.create);
router.get('/:id', userController.getById);
router.get('/', userController.getAll);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
